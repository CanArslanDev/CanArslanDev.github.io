'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "4220e286b849066439deccc11cc6f2b7",
"version.json": "5e38f9504c5b96cc447d95b8ec60c7ad",
"icon.png": "3799685226ee63c94990b50ecdacb99e",
"index.html": "1b03c94359cdaa8877a280de8bbe024a",
"/": "1b03c94359cdaa8877a280de8bbe024a",
"main.dart.js": "d6744a4bb802d01222bfd6eb03728746",
"404.html": "456ff9c5ea1642c867d8fb3dc7e3b8bb",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "171aa0939f700cae852dadfc86e4bbd4",
"assets/AssetManifest.json": "aaef4030f5234253cd5fe90353e87c34",
"assets/NOTICES": "35d6ce1f43a61dcba6f9c77546d3fb7a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "44df67694d6c2b0ea7e2a568e3537c1a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "42548b68e0d60d371e38a4fd4c47a303",
"assets/fonts/MaterialIcons-Regular.otf": "8ad25218b0145a4ccd3642d50acdd270",
"assets/assets/images/dock%2520template.png": "bfb72a35a7315b4e399b29e936388543",
"assets/assets/images/delta_cells_project_logo.png": "eead68d1b70073e67b30b26637c821c5",
"assets/assets/images/wallpaper.png": "1444349eeb1e86dc5ac2a79ad703647d",
"assets/assets/images/notes%2520template%2520top.png": "38874cc48638d53413c4ce3b704549aa",
"assets/assets/images/black_hole.png": "8ff3bbadcae312ea10aeeb3ba64c7845",
"assets/assets/images/alaz_project_logo.png": "b23bea4125f4d41866d5d3d8b5421bc7",
"assets/assets/images/main_wallpaper.png": "4891a34a71b8e881e1dd0b9529a0ba29",
"assets/assets/images/avatar.png": "d1992e9cb20aac0e5ad0611092e79c54",
"assets/assets/images/vscode%2520template.png": "6fcc9e0a24bada4ae0d98612a7b46443",
"assets/assets/images/contributions.png": "b5c336c55702fcee49f9271398e68ae7",
"assets/assets/images/notes%2520template%2520bottom.png": "2af69d0880a02ee1f9c6733bebf2a3c1",
"assets/assets/images/akus_project_logo.png": "9ddb3b6a6fa0d599052bbf8f7304f740",
"assets/assets/images/work_icon.png": "39f8d466158cc022455830cd024db004",
"assets/assets/images/harvard_university_logo.png": "63ebce071d683c32029744ab1b2f0ab3",
"assets/assets/images/helsinki_university_logo.png": "562fbecdacac8159f59917307914411d",
"assets/assets/web/video/video.mp4": "de6e3ab59993d3a41393689f0058deb2",
"assets/assets/web/video/video_original.mp4": "ca48d4d575d226bd4551173c4a43c4b3",
"assets/assets/web/index.html": "85a057f0a7c3ef2cea1041b8681c875c",
"assets/assets/web/css/styles.css": "d5714f3acf9cd52243c1b633f7552712",
"assets/assets/web/js/ascii-converter.js": "f6ad56cb6729c2ac90b356e789c070c9",
"assets/assets/web/js/main.js": "be8386f0009a20f5576dbff107199729",
"assets/assets/web/js/video-processor.js": "1b588521b3754ccb9fb1c2a447b97a58",
"assets/assets/icons/x.svg": "1553344a2e32a33ae0c2d75949393eb9",
"assets/assets/icons/instagram.svg": "3c120fbc9053d432bc4a257eb8f6ec4a",
"assets/assets/icons/email.svg": "11610210690aa735a1138347a54dc8de",
"assets/assets/icons/notes/notes_edit.svg": "9761bdfc282ad85bb97b8ce96e801729",
"assets/assets/icons/notes/notes_location.svg": "c04a15d101284276a945fc8e32c646da",
"assets/assets/icons/notes/notes_more.svg": "94f08ac780f4a99ab73d5ed3e7704030",
"assets/assets/icons/notes/notes_camera.svg": "c5478cfe49ce24fca6449ea6f3cc926b",
"assets/assets/icons/notes/notes_done.svg": "db49317791bea65ea06c2e93e3fd19f9",
"assets/assets/icons/star.svg": "7dca2b19d4ba2a32e2b234433d9b93fa",
"assets/assets/icons/clock.svg": "a835b9b1dd395794bbf09934abd3cb99",
"assets/assets/icons/location.svg": "2b273794d40ceb17112ba49498343f54",
"assets/assets/icons/linkedin.svg": "45d1ad285ead9c01b3a9e224121c931b",
"assets/assets/icons/painter.svg": "092a020d9485c659a70d04b89d3fec01",
"assets/assets/icons/open_url.svg": "114ace45395cc43eb6c35c90cd1dc231",
"assets/assets/icons/progress_bar.svg": "ac1ffed7f316228f356802417a80b54a",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
