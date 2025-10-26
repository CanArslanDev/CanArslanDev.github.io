'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "b20a191e22ef5d5f729e2a84cb277e77",
"version.json": "5e38f9504c5b96cc447d95b8ec60c7ad",
"icon.png": "3799685226ee63c94990b50ecdacb99e",
"index.html": "3cb8456b4ef5142b67bca2ba4e0837ec",
"/": "3cb8456b4ef5142b67bca2ba4e0837ec",
"main.dart.js": "1513cf35d4babf5ad883bde455d83500",
"404.html": "456ff9c5ea1642c867d8fb3dc7e3b8bb",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"icons/Icon-192.png": "cd8bf18808eab30b0750cb0516951709",
"icons/Icon-maskable-192.png": "cd8bf18808eab30b0750cb0516951709",
"icons/Icon-maskable-512.png": "294775ddb50b58cae641aa84f459a968",
"icons/Icon-512.png": "294775ddb50b58cae641aa84f459a968",
"manifest.json": "171aa0939f700cae852dadfc86e4bbd4",
"assets/AssetManifest.json": "16609af9169758a956d9a7bdf2f7959c",
"assets/NOTICES": "b3aea45946be6e6161ba41166024f3f8",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "737b748d3576e04f839f3a79a45efd0c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "20c5001f4294d750d59c42f932538793",
"assets/fonts/MaterialIcons-Regular.otf": "1c5811b051d6ded29ba15f454b7af488",
"assets/assets/images/dock%2520template.png": "bfb72a35a7315b4e399b29e936388543",
"assets/assets/images/delta_cells_project_logo.png": "eead68d1b70073e67b30b26637c821c5",
"assets/assets/images/wallpaper.png": "1444349eeb1e86dc5ac2a79ad703647d",
"assets/assets/images/notes%2520template%2520top.png": "38874cc48638d53413c4ce3b704549aa",
"assets/assets/images/black_hole.png": "8ff3bbadcae312ea10aeeb3ba64c7845",
"assets/assets/images/alaz_project_logo.png": "b23bea4125f4d41866d5d3d8b5421bc7",
"assets/assets/images/main_wallpaper.png": "4891a34a71b8e881e1dd0b9529a0ba29",
"assets/assets/images/avatar.png": "d1992e9cb20aac0e5ad0611092e79c54",
"assets/assets/images/vscode%2520template.png": "6fcc9e0a24bada4ae0d98612a7b46443",
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
"assets/assets/web/js/video-processor.js": "6897cbae11e10fdade321f6a70272958",
"assets/assets/icons/liquid_glass.svg": "085cc42bdf0fe70289e265e3d5310b5d",
"assets/assets/icons/offline_sync_kit.svg": "47d71eb05f190d3ded6f58b129959c16",
"assets/assets/icons/contributions_chart.svg": "e9884d87d97c90afea05ccd95cf2b166",
"assets/assets/icons/x.svg": "1553344a2e32a33ae0c2d75949393eb9",
"assets/assets/icons/instagram.svg": "3c120fbc9053d432bc4a257eb8f6ec4a",
"assets/assets/icons/email.svg": "11610210690aa735a1138347a54dc8de",
"assets/assets/icons/notes/notes_edit.svg": "9761bdfc282ad85bb97b8ce96e801729",
"assets/assets/icons/notes/notes_location.svg": "c04a15d101284276a945fc8e32c646da",
"assets/assets/icons/notes/notes_more.svg": "94f08ac780f4a99ab73d5ed3e7704030",
"assets/assets/icons/notes/notes_camera.svg": "c5478cfe49ce24fca6449ea6f3cc926b",
"assets/assets/icons/notes/notes_done.svg": "db49317791bea65ea06c2e93e3fd19f9",
"assets/assets/icons/star.svg": "d4dcdcb4f20079be4e7a18e54664bc6a",
"assets/assets/icons/clock.svg": "a835b9b1dd395794bbf09934abd3cb99",
"assets/assets/icons/location.svg": "2b273794d40ceb17112ba49498343f54",
"assets/assets/icons/linkedin.svg": "45d1ad285ead9c01b3a9e224121c931b",
"assets/assets/icons/painter.svg": "092a020d9485c659a70d04b89d3fec01",
"assets/assets/icons/open_url.svg": "114ace45395cc43eb6c35c90cd1dc231",
"assets/assets/icons/progress_bar.svg": "ac1ffed7f316228f356802417a80b54a",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b"};
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
