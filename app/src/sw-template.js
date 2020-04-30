if (typeof importScripts === "function") {
  importScripts(
    "https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js"
  );
  /* global workbox */

  if (workbox) {
    console.log("Workbox is loaded");
    const { registerRoute, NavigationRoute } = workbox.routing;
    const { CacheFirst } = workbox.strategies;
    const { ExpirationPlugin } = workbox.expiration;
    const { CacheableResponsePlugin } = workbox.cacheableResponse;
    const { createHandlerBoundToURL, precacheAndRoute } = workbox.precaching;
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    precacheAndRoute(self.__WB_MANIFEST);
    const handler = createHandlerBoundToURL("/index.html");
    const navigationRoute = new NavigationRoute(handler);

    registerRoute(navigationRoute, new CacheFirst());
    registerRoute(
      /(http[s]?:\/\/)?([^\/\s]+\/)api/,
      new CacheFirst({
        cacheName: "data-cache",
        plugins: [
          new CacheableResponsePlugin({
            statuses: [0, 200]
          })
        ]
      })
    );
    registerRoute(
      /^https:\/\/fonts\.googleapis\.com/,
      new CacheFirst({
        cacheName: "google-fonts-stylesheets",
        plugins: [
          new CacheableResponsePlugin({
            statuses: [0, 200]
          })
        ]
      })
    );
    registerRoute(
      /\.(?:png|gif|jpg|jpeg|svg)$/,
      new CacheFirst({
        cacheName: "images",
        plugins: [
          new ExpirationPlugin({
            maxEntries: 60,
            maxAgeSeconds: 30 * 24 * 60 * 60 // 30 Days
          })
        ]
      })
    );
    self.addEventListener("push", event => {
      console.log("push received");
      const title = "New notification for you";
      const options = {
        body: event.data.text()
      };
      event.waitUntil(self.registration.showNotification(title, options));
    });
  } else {
    console.log("Workbox could not be loaded. No Offline support");
  }
}
