'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "ae50b981f8907cf2ac5af91472adc866",
"assets/AssetManifest.json": "625a18926319f62d8e826ba14c8931fa",
"assets/assets/images/2150761098.png": "800d4230230375497a5b3e698859df84",
"assets/assets/images/2150761206.png": "362806d38d92badfc86bff5c7f166457",
"assets/assets/images/2150799723.png": "b7b016007509649f9d5a32436e712b86",
"assets/assets/images/2150799783.png": "3cdc4bb0bac0e53617a20fbc9d7cf3d7",
"assets/assets/images/account-outline.svg": "f024b49e2f1d705aa0ebbb1e378cf2ba",
"assets/assets/images/cube.svg": "2c927720489a5a293c34e5781d9810e8",
"assets/assets/images/Email.png": "5a599d72ff1de3fc65d4e20e529d6de2",
"assets/assets/images/freepik--cloud--inject-4.svg": "ea250ceac18dd3c554e19a7d8616fd42",
"assets/assets/images/Group%25201000005846.svg": "8a3608c242c331d75446fabe348496b4",
"assets/assets/images/Group%2520497.svg": "742ecd81cc0a73638b815a04ffefd81a",
"assets/assets/images/Group%2520525.svg": "5f715e19e9a454e94179dd43df14edfa",
"assets/assets/images/Group.png": "d6ff3ef2bb89da623b302109234822f5",
"assets/assets/images/heart-angle_svgrepo.com.svg": "89608368a97ce55c8c6689ae5ffb1625",
"assets/assets/images/house.fill.svg": "198375f2f58afd483a64f492150f88a9",
"assets/assets/images/IconButton.png": "c6dade17bbfeb35deaa5cf73cf2d7f5f",
"assets/assets/images/img.png": "4919ff813ee0d1dfe074e6fc789e9017",
"assets/assets/images/Location.svg": "95023f2454f5da7a9953a44d67c55c11",
"assets/assets/images/Lock.png": "5cd58b980aed730de5c36f5725c36c59",
"assets/assets/images/mappin.and.ellipse.svg": "4a2fdefbf5470049fd9ad40a6e8e2427",
"assets/assets/images/Profile.png": "fcca313dbb38b002b03f35f18d1e5d89",
"assets/assets/images/Proxima-09%25202.png": "25fb5a0223923a70a8934b58b7258119",
"assets/assets/images/Proxima-09%25202.svg": "585c02ff4058954703b1bf77bbbb7762",
"assets/assets/images/Proxima-12%25201.png": "d1b5d54b2f879668d1c0782fb18ef5a9",
"assets/assets/images/Proxima-12%25201.svg": "9f79f010067ad27bb0ddb61f52d77863",
"assets/assets/images/Rectangle%25206%2520(1).png": "c8a24644ad1bb4724d075c9acc2e2e08",
"assets/assets/images/Rectangle%25206%2520(2).png": "2606c139bc143c8183d7002f1b68a857",
"assets/assets/images/Rectangle%25206.png": "7b9b0d64f7154c293e08c5b282b2ff57",
"assets/assets/images/Rent%2520Home%2520And%2520Apartments%2520Nearby..svg": "db9f62542c2aa060e63ac207f953ac2a",
"assets/assets/images/Search.svg": "172c0d0735a3f12f740f3baf10127998",
"assets/assets/images/start.svg": "0d0af2a89b025ca1e3645f12a06a00a5",
"assets/assets/images/undraw_city_life_gnpr%25201.png": "05346546e7f451eac66f0de5fc2395bd",
"assets/assets/images/undraw_city_life_gnpr%25201.svg": "4ca2ef6ebdd2fcacf5946e3cf6966674",
"assets/assets/images/young%2520man%2520with%2520tablet%2520celebrating%2520success.png": "43ba4c2d58ee3685d97b4204e12d1589",
"assets/assets/images/young-couple-love-happy-summer-beach-together-having-fun.jpg": "e1e7510414d61c1d8c0ef924be45e7cd",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "5afc9de078352bb38ef1db72d7f839f5",
"assets/NOTICES": "617c875ded823fd053230ff178c63b00",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "f15e61c29b7150ee022446aa4156f92e",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "955fdd6997579f9961fa596bde381342",
"/": "955fdd6997579f9961fa596bde381342",
"main.dart.js": "03c535889b1f0f0f0496d7057eaebdda",
"manifest.json": "b8aa8ab2204b73c85eabcbb5a3b0cc19",
"version.json": "93c286684038534709b91f1fbca40f2f"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
