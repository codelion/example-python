
if (location.href.includes('howdz.xyz')) {
  importScripts('https://cdn.staticfile.org/workbox-sw/7.0.0/workbox-sw.js')
  workbox.setConfig({
    debug: false,
  });
  console.log('sw.js is load by CDN!')
} else {
  importScripts('./workbox/workbox-sw.js')
  workbox.setConfig({
    debug: false,
    modulePathPrefix: './workbox/'
  });
  console.log('sw.js is load by local!')
}

// Cache css/js/font.
workbox.routing.registerRoute(
  /**
   * Checks if the request destination is either 'style', 'script' or 'font'.
   * @param {{request: Object}}  object - An object containing a request property
   * @returns {Boolean} True if the request destination matches 'style', 'script', or 'font'. Otherwise, returns false.
   */
  ({ request }) => request.destination === 'style' || request.destination === 'script' || request.destination === 'font',
  new workbox.strategies.CacheFirst({
    cacheName: 'css-js-font',
    plugins: [
      new workbox.cacheableResponse.CacheableResponsePlugin({
        statuses: [200],
      }),
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 50,
        maxAgeSeconds: 60 * 60 * 24 * 7, // 7 Days
      }),
    ]
  })
);

// Cache image.
workbox.routing.registerRoute(
  /**
   * A method checking the destination property of the request object.
   * @param {Object}  request - An object containing request properties.
   * @returns {Boolean} Returns true if request destination is 'image', false otherwise.
   */
  ({ request }) => request.destination === 'image',
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'image',
    plugins: [
      new workbox.cacheableResponse.CacheableResponsePlugin({
        statuses: [200],
      }),
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 50,
        maxAgeSeconds: 60 * 60 * 24 * 7, // 7 Days
      })
    ]
  })
)

// Cache video
workbox.routing.registerRoute(
  /**
   * This method checks if the request's destination is a video.
   * @param {Object}  request - The object that contains a destination property.
   * @returns {Boolean} Returns true if the destination of the request is 'video', false otherwise.
   */
  ({ request }) => request.destination === 'video',
  new workbox.strategies.CacheFirst({
    cacheName: 'video',
    plugins: [
      new workbox.cacheableResponse.CacheableResponsePlugin({
        statuses: [200],
      }),
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 50,
        maxAgeSeconds: 60 * 60 * 24 * 7, // 7 Days
      }),
      new workbox.rangeRequests.RangeRequestsPlugin()
    ]
  })
)
