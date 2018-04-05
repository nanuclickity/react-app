/* eslint-disable no-restricted-globals */
/* globals importScripts, self, workbox */

function onInstallComplete(event) {
  const promises = [
    // Stuff to do when install completes
  ]
  event.waitUntil(Promise.all(promises))
}

// Asset Strategies
const fontAssetStrategy = workbox.strategies.staleWhileRevalidate({
  cacheName: 'fonts',
  plugins: [
    new workbox.expiration.Plugin({
      maxAgeSeconds: 30 * 24 * 60 * 60 // 30 days
    })
  ]
})

// Event Listeners
self.addEventListener('install', onInstallComplete)

// Runtime caching
workbox.routing.registerRoute(
  /https:\/\/fonts.googleapis.com/,
  fontAssetStrategy
)

workbox.routing.registerRoute(/https:\/\/fonts.gstatic.com/, fontAssetStrategy)

// workbox.routing.registerNavigationRoute(
//   '/app-shell.html',
//   workbox.strategies.staleWhileRevalidate({
//     cacheName: 'offline-pages'
//   })
// )

/******  DO NOT TOUCH *******
 * This is filled automatically by workbox-plugin
 */
workbox.precaching.precacheAndRoute(self.__precacheManifest || [])
