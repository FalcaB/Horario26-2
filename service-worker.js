const CACHE_NAME = "horario-udea";

const APP_FILES = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icons/icon-192.png",
  "./icons/icon-512.png"
];

// Instalación
self.addEventListener("install", event => {
  self.skipWaiting();

  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(APP_FILES))
  );
});

// Activación
self.addEventListener("activate", event => {
  event.waitUntil(
    (async () => {
      await self.clients.claim();

      // Elimina cualquier caché vieja automáticamente
      const keys = await caches.keys();

      await Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })()
  );
});

// Peticiones
self.addEventListener("fetch", event => {

  if (event.request.method !== "GET") return;

  // Para el HTML siempre intenta ir primero a Internet
  if (
    event.request.mode === "navigate" ||
    event.request.destination === "document"
  ) {

    event.respondWith(
      fetch(event.request)
        .then(response => {

          const copy = response.clone();

          caches.open(CACHE_NAME)
            .then(cache => cache.put(event.request, copy));

          return response;

        })
        .catch(() => caches.match(event.request))
    );

    return;
  }

  // Para CSS, JS, iconos...
  event.respondWith(

    caches.match(event.request).then(cacheResponse => {

      const networkFetch = fetch(event.request)
        .then(networkResponse => {

          if (networkResponse.ok) {

            caches.open(CACHE_NAME)
              .then(cache =>
                cache.put(event.request, networkResponse.clone())
              );

          }

          return networkResponse;

        })
        .catch(() => cacheResponse);

      return cacheResponse || networkFetch;

    })

  );

});
