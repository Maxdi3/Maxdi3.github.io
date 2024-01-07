'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "f00d0b67f4d7671e39e634dce58c3a59",
".git/config": "94bc052c871ff774b4e91f6f0aba4e1c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "e85a1fbf2e9d3a44a2804ca264444ea3",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "7714d257de058f0f5f1012062e8f7ef3",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "92c934bcfb73c7a967027b18a44e2c2e",
".git/logs/refs/heads/main": "92c934bcfb73c7a967027b18a44e2c2e",
".git/logs/refs/remotes/origin/HEAD": "7186a25fb462a0c3d1d67b7e194c9fc7",
".git/logs/refs/remotes/origin/main": "4e2ad4f885ac15a849673e02f92e2029",
".git/objects/18/1699fc5be868159380d6233353070bd2c3dc6a": "0bff742fec82ab40c5051ce11e61b64e",
".git/objects/19/f87a265f75fc76f24f8875e82ddf457691ecf5": "f08c4823b20a524b5b6208baae933221",
".git/objects/2b/df7f883a6a6648d9cadda0adb47abe56fbd460": "ad97cf6220ab1a3d3e1343745f9274e8",
".git/objects/2d/d226245a6acfde22c6102655e4d959339b2f04": "91fb0bbd10758a0aee27a4d4b67796a5",
".git/objects/3b/823c8205ad09ae58a3af821b6de5c9356f7769": "0c0dddb887fdfb701fd8879d5da1df38",
".git/objects/40/a74fe35c67973b039027163d2356cc017c792a": "68cb27ed66d94e4f7ab27c5f21260e49",
".git/objects/64/89b7f3568f5f481bfa47575f40684281e3e07c": "ab76873f8664e913928db846d1c97a8d",
".git/objects/71/84b2bec6db1f6faa942710484f4ca7b26be257": "6db80bfbeaa416e7ad1636cf1dd58bd8",
".git/objects/84/6d0e715d688d41e7cb450a4c0d6758f774f1c9": "00c7ed31de7af7d3bc6d8a0ff1886d36",
".git/objects/96/d402276cd0605bdaebf6bf47d0cf96e2f6fbb4": "9cc85d1fbb35537c75e0b76c4a0b0583",
".git/objects/98/d931e1c49d6153fc33d0b68c916e1eacffc288": "1283c9b89caff7255ce9e16e0a3b53ca",
".git/objects/af/9ce64cf1b70d49e989d1fd1ecccc3cbda73e9c": "2a66bc8e5af1f6bfb3b495ae5d2266c7",
".git/objects/b1/19df749f59d6a8131163a85e0b54a253709ddf": "ad10d81aa11fbff3e6f1ebdf5fd00cd1",
".git/objects/dc/5c27d487ab22268c328d97976eda9f9a88ff1c": "3013cb744492c90f64b7db3f7c120fa1",
".git/objects/e5/668b65beab83988c89fa3e02f3e4a983586ba7": "26a41a237187ca494897fc718fe697d0",
".git/objects/ed/fc6144358951245e51f29c760ede61f0c9b9cc": "4046b457c22a829d169bc3128154c85f",
".git/objects/ef/ebce675559fc733510b791fc4d35682607c9e0": "64017f9ed157cafd3e52f31ba912da15",
".git/objects/fd/1c8ccdd6f59217774ad01de2df8c31fcd0e5a4": "5d1addc28a21c3b585dc35b4f119360c",
".git/objects/pack/pack-8cd8b19aa2a6dfd2a9b8db61c843ebbce9842293.idx": "cdbf178f355975297c95bb89f78c4ede",
".git/objects/pack/pack-8cd8b19aa2a6dfd2a9b8db61c843ebbce9842293.pack": "d0c211615f40b65124a24773b6e0330d",
".git/packed-refs": "3ea5d2f7d287cdd65f3e7a6938942fb2",
".git/refs/heads/main": "3bebb574093fd3094243c56e9ac29cce",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "3bebb574093fd3094243c56e9ac29cce",
"assets/AssetManifest.bin": "533cde0b11f3bdcab8861141fb413451",
"assets/AssetManifest.json": "83dee5af28246c4060f2222e0afeb9a3",
"assets/assets/fonts/koodak.ttf": "2be5d53bd9404008e505c403b2af6d9c",
"assets/assets/fonts/yekan.ttf": "52ce4de2efeeb8b18dcbd379711224f3",
"assets/assets/images/AppleLogo%2520copy.svg": "fa9b8d7207dbc85477adcb8648543b00",
"assets/assets/images/AppleLogo.svg": "fa9b8d7207dbc85477adcb8648543b00",
"assets/assets/images/avatar.jpg": "33701d384e6ba190ce6ed63127c170de",
"assets/assets/images/bg.jpg": "cf19f12f8784b47b21cb770d6b35794b",
"assets/assets/images/bro.svg": "e482caf9be5d50afc10db05d6d52d811",
"assets/assets/images/download.svg": "21f42a07fefed25ddfdcf4c1b2dd0e32",
"assets/assets/images/dumptruck.png": "b0fc146f8b5eec8b435ae3de6ded0bf8",
"assets/assets/images/f1.svg": "1a724d316987f945d1aa7d8911c80e53",
"assets/assets/images/f2.png": "c0c4585a3c1f319d68539c95a94c73ea",
"assets/assets/images/f2.svg": "ac0b43184bb93208059b4672c704c1d1",
"assets/assets/images/f3.svg": "80da512599243f6ea63ced597c6bfa0d",
"assets/assets/images/f4.svg": "a7193a0de682c2485a5d86d7c68b36b4",
"assets/assets/images/f5.svg": "fb7de22e5e5b0181ea506b3c566e3bbd",
"assets/assets/images/FacebookLogo%2520copy.svg": "e09c979561821af0196cb3e3a526b52d",
"assets/assets/images/FacebookLogo.svg": "e09c979561821af0196cb3e3a526b52d",
"assets/assets/images/filter%25201.svg": "143f55d593c57941eac64a524fabb3c4",
"assets/assets/images/folder.svg": "7c7a920670e42b17978a45f07c63f4ca",
"assets/assets/images/GoogleLogo%2520copy.svg": "60f6375ad419fb3399d812cbd25fa8a9",
"assets/assets/images/GoogleLogo.svg": "60f6375ad419fb3399d812cbd25fa8a9",
"assets/assets/images/home.svg": "f3f52e25ef0dc3af9819f158319e1541",
"assets/assets/images/logo.png": "5bd0a61e7a443f7f5e8c4b8a0495b3e1",
"assets/assets/images/map.svg": "81fd0e19da30271510f60305010bda80",
"assets/assets/images/more-circle.svg": "ad0417745d3cb23026ab24c9b347e4d7",
"assets/assets/images/notification%25201.svg": "65fecf7d1085557d33b1fedac7cd6c1c",
"assets/assets/images/p3.jpg": "579d658dc0258a6e783499c41d377bb7",
"assets/assets/images/p3.png": "f2c63ef04c483b8332f882823f0aad33",
"assets/assets/images/play.svg": "5662c69f26befada29fb2472bf313a48",
"assets/assets/images/podcast.svg": "c23460ef844d66e00fba318f5739fc8e",
"assets/assets/images/profile.svg": "a49841b28f9afeb7118bd11515c38a8a",
"assets/assets/images/proj.png": "785f03ff60e6e636c50525c52158bcae",
"assets/assets/images/sangan.png": "f5874606492607ebca2912019b5b4214",
"assets/assets/images/search.svg": "83b685602cab23708efeef8cbc494636",
"assets/FontManifest.json": "d9916892f085017aa84abe8cca6eebc4",
"assets/fonts/MaterialIcons-Regular.otf": "be65c9e7f7d05272c676ca3a37372128",
"assets/NOTICES": "3982e6cd2c25491e589bfba45918f7da",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "19d8b35640d13140fe4e6f3b8d450f04",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "1165572f59d51e963a5bf9bdda61e39b",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "388204209c9c5877ee8ba81abf7f93a5",
"/": "388204209c9c5877ee8ba81abf7f93a5",
"main.dart.js": "ebd0ce990554bc20415e552c6e7ef1ba",
"manifest.json": "c9c6e178b1a37f4ddb356807fa7235ed",
"splash/img/dark-1x.png": "d0718a463a37ad34cc003cf4b2d9cdaf",
"splash/img/dark-2x.png": "172bd4b83ca3c76625511a9a0bdc9a3f",
"splash/img/dark-3x.png": "b65ccf9aee41a6e53c9eae330d91d14a",
"splash/img/dark-4x.png": "3e6bde4d3df77cfd1ac62f23c64810e9",
"splash/img/light-1x.png": "d0718a463a37ad34cc003cf4b2d9cdaf",
"splash/img/light-2x.png": "172bd4b83ca3c76625511a9a0bdc9a3f",
"splash/img/light-3x.png": "b65ccf9aee41a6e53c9eae330d91d14a",
"splash/img/light-4x.png": "3e6bde4d3df77cfd1ac62f23c64810e9",
"version.json": "d9a38c0a1966b91f233828db582230cb"};
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
