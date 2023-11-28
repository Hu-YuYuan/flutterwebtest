'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "96541e9487fdf257175720fa2dbcaeaa",
"index.html": "cebb60c728ceb4600a32d492e8a5e5f7",
"/": "cebb60c728ceb4600a32d492e8a5e5f7",
"main.dart.js": "393095fda527cb98e214ea9ae76704f7",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "63db7af97b97c011ec87ac289e1c2a29",
"assets/images/im_work_application_ic_delete_pre@3x.png": "acc7abd9d6e4ae985647eef8cb69729f",
"assets/images/im_work_application_ic_add_pre@3x.png": "2a2c8ca61b907c447b2ae445139f979d",
"assets/images/im_work_application_ic_add_n@3x.png": "d5481012112fe5f8721e13d0f43759ee",
"assets/images/ydbg_work_schedule_list_next@3x.png": "f9a9f195930cf1490307ed724758a5c7",
"assets/images/im_work_application_empyt_01@3x.png": "46eb21b03d54ccff5baba7ea23b31cd9",
"assets/images/im_work_application_ic_delete_n@3x.png": "e0ed5015d06c5f15c4140bb1521b1b87",
"assets/images/im_work_application_ic_increase_n@3x.png": "11639adb6bc553296fb75457f7b98b8f",
"assets/images/im_work_application_ic_update_n@3x.png": "4a1ae47739a3a193618ceb4d9c63aab5",
"assets/images/ydbg_loading_16_iOS@3x.png": "30d04bf4b516ee64ade1fe597eed02d4",
"assets/AssetManifest.json": "14fffe56a1521573db6542d7568cab07",
"assets/NOTICES": "f13a09215842267c9b84d88d349e8f0a",
"assets/FontManifest.json": "d751713988987e9331980363e24189ce",
"assets/packages/cmfluttersdk/images/icon_navigation_arrow_down@2x.png": "2a073149f6d1f98c6e72153f4993a198",
"assets/packages/cmfluttersdk/images/date_picker/web_date_monthright_normal@2x.png": "005ed4f02290c9a8777f35964cf65c34",
"assets/packages/cmfluttersdk/images/date_picker/web_date_clock@2x.png": "8fcc6368a6e5b57607a7448aa4f10565",
"assets/packages/cmfluttersdk/images/date_picker/web_date_yearright_hover@2x.png": "25d3473206fc9f71b18c387ca0604cc2",
"assets/packages/cmfluttersdk/images/date_picker/web_date_yearright_click@2x.png": "fe8af793f993492be447f55214d085fb",
"assets/packages/cmfluttersdk/images/date_picker/web_date_yearleft_hover@2x.png": "54f06ec6b62e98fa183b143c8c9a8003",
"assets/packages/cmfluttersdk/images/date_picker/web_date_yearleft_click@2x.png": "c7ebfd4da16322133639455120be2f1e",
"assets/packages/cmfluttersdk/images/date_picker/web_date_monthleft_hover@2x.png": "a437f41f9ea12c980990e5cb525956ac",
"assets/packages/cmfluttersdk/images/date_picker/web_date_monthleft_click@2x.png": "1dbfb078d7ea29dbcc139a3a82bfbcea",
"assets/packages/cmfluttersdk/images/date_picker/web_date_monthright_hover@2x.png": "ed833b99435336d53842cada4e240562",
"assets/packages/cmfluttersdk/images/date_picker/web_date_monthright_click@2x.png": "21ddc34d0b5bd1fd4587ffcd4bfec65c",
"assets/packages/cmfluttersdk/images/date_picker/web_date_calendar@2x.png": "2ba1dacbc2ab347ba70f5f5095306d03",
"assets/packages/cmfluttersdk/images/date_picker/web_date_monthleft_normal@2x.png": "34ca4000aa461636851f146290f2036b",
"assets/packages/cmfluttersdk/images/date_picker/web_date_yearleft_normal@2x.png": "5b09712a5649962c8a2dfa6a5be0bfef",
"assets/packages/cmfluttersdk/images/date_picker/web_date_yearright_normal@2x.png": "e5d2744aa38927e8cb3f31f820e86b63",
"assets/packages/cmfluttersdk/images/page_selector/pc_pagination_left_disable@2x.png": "a865eb211494f9743651ef0ce746c69c",
"assets/packages/cmfluttersdk/images/page_selector/pc_pagination_right_normal@2x.png": "50e799e4e2849983e71b48442a0442e7",
"assets/packages/cmfluttersdk/images/page_selector/pc_pagination_left_normal@2x.png": "c0c516a770d77c44835205f926decf95",
"assets/packages/cmfluttersdk/images/page_selector/pc_pagination_left_hover@2x.png": "fdb6aa2403c075c42cd93da975ba2fb3",
"assets/packages/cmfluttersdk/images/page_selector/pc_pagination_left_click@2x.png": "33493cb7e06a3594819172133b93b866",
"assets/packages/cmfluttersdk/images/page_selector/pc_pagination_down_normal@2x.png": "fda84b11294b09b92e31d6af50d39d8f",
"assets/packages/cmfluttersdk/images/page_selector/pc_pagination_right_2_click@2x.png": "4ac1094a00cab64346ee00857436a9b9",
"assets/packages/cmfluttersdk/images/page_selector/pc_pagination_right_2_hover@2x.png": "4ac1094a00cab64346ee00857436a9b9",
"assets/packages/cmfluttersdk/images/page_selector/pc_pagination_left_2_click@2x.png": "593a650c334f35eb356fba542338ea57",
"assets/packages/cmfluttersdk/images/page_selector/pc_pagination_left_2_hover@2x.png": "4024de66c3364066ad3b8edb754743fe",
"assets/packages/cmfluttersdk/images/page_selector/pc_pagination_left_2_normal@2x.png": "67c1ab4980674c810ebc47825516c87a",
"assets/packages/cmfluttersdk/images/page_selector/pc_pagination_right_click@2x.png": "e3855db338fb25a8bf5477bb03926c99",
"assets/packages/cmfluttersdk/images/page_selector/pc_pagination_right_hover@2x.png": "cca01965479ab614f1bbd57b38174734",
"assets/packages/cmfluttersdk/images/page_selector/pc_systemmessages_right_disable@2x.png": "3bd4763aef6a004e0cd3159ce0e0eede",
"assets/packages/cmfluttersdk/images/icon_%2520select_arrow_down@2x.png": "9fe8c691eb8b356cb9aa32f0e04ae971",
"assets/packages/cmfluttersdk/images/web_icon_checkbox_select.png": "78b3e149c3ef559fdd6322d9fdb303d4",
"assets/packages/cmfluttersdk/images/pc_toast_notice@2x.png": "c40756374d2ab46b4ad1d5f3da4df482",
"assets/packages/cmfluttersdk/images/icon_%2520select_arrow_up@2x.png": "c04fc00b596a1aad9811fa989fbc0da9",
"assets/packages/cmfluttersdk/images/contact_selector/icon_list_close_click@2x.png": "93af8093cf1bd5b03a6c16ebf12afa89",
"assets/packages/cmfluttersdk/images/contact_selector/icon_search_close_click@2x.png": "76f9542b3c06d2cf33df5d5fbfbbd970",
"assets/packages/cmfluttersdk/images/contact_selector/icon_select_pic_organization@2x.png": "a9e086a121a088eb58e763e63feef5e0",
"assets/packages/cmfluttersdk/images/contact_selector/icon_%2520select_arrow_down@2x.png": "c80431404f0d695a7587f6880a91a9fe",
"assets/packages/cmfluttersdk/images/contact_selector/icon_checkbox_unchecked_normal@2x.png": "c15dd6514d30e4c28a386da326d8e5a7",
"assets/packages/cmfluttersdk/images/contact_selector/icon_checkbox_unchecked_disable@2x.png": "7c4226600c15f32dcb64f0b8e9658179",
"assets/packages/cmfluttersdk/images/contact_selector/icon_search_department@2x.png": "46e7d44a99cd27a2e21b7b930d9050b1",
"assets/packages/cmfluttersdk/images/contact_selector/icon_checkbox_checked_normal@2x.png": "0966285a88c03291c37d42db00bb540f",
"assets/packages/cmfluttersdk/images/contact_selector/icon_checkbox_checked_disable@2x.png": "0db5e1241732cc72ea496516fc02c297",
"assets/packages/cmfluttersdk/images/contact_selector/icon_%2520select_arrow_right@2x.png": "12417302a4de2f86aa4a3dee65d30b9a",
"assets/packages/cmfluttersdk/images/contact_selector/icon_search_member_disable@2x.png": "eda4137033a1e49d401bf5893a143013",
"assets/packages/cmfluttersdk/images/contact_selector/icon_search_magnifier@2x.png": "499674e228046d7a9b796891ebd5f92f",
"assets/packages/cmfluttersdk/images/contact_selector/icon_search_member@2x.png": "7eb37ab9b170c4997e4b209d877f943d",
"assets/packages/cmfluttersdk/images/contact_selector/icon_list_close_normal@2x.png": "586d20d4c729ec7734ce77702a104609",
"assets/packages/cmfluttersdk/images/contact_selector/icon_search_close_normal@2x.png": "96c8339762d4ab1e41670ed92330669c",
"assets/packages/cmfluttersdk/images/dialog/pc_dialog_notice@2x.png": "7fbf45963cb482350ff8c246e86fc65c",
"assets/packages/cmfluttersdk/images/dialog/pc_dialog_close_normal@2x.png": "5d0ca9d000b158757ab333a0888a5b7b",
"assets/packages/cmfluttersdk/images/dialog/icon_message_fail@2x.png": "9e2efcbcc028051b03396b63e5494a58",
"assets/packages/cmfluttersdk/images/dialog/icon_message_success@2x.png": "a9298dbfa5a39d31d07baf7002d68301",
"assets/packages/cmfluttersdk/images/dialog/pc_dialog_close_click@2x.png": "da497c678fe943d5db0785b8c98bdfc6",
"assets/packages/cmfluttersdk/images/dialog/pc_dialog_close_hover@2x.png": "e0286a5e8c94479cf4aa1c561996b11e",
"assets/packages/cmfluttersdk/images/dialog/icon_message_notice@2x.png": "a72b5ce23eef1f87a74ec77c50355ff5",
"assets/packages/cmfluttersdk/images/web_icon_checkbox_unselected.png": "ddc80c791627c364a2f40ca3d53a6b41",
"assets/packages/cmfluttersdk/images/workflow/icon_parking_branch@2x.png": "150e7338349eaa54706b89cdf8d5c10d",
"assets/packages/cmfluttersdk/images/workflow/icon_parking_rightarrow@2x.png": "337278e5e986ae62c38de8bc37af1898",
"assets/packages/cmfluttersdk/images/workflow/button_parking_add_hover@2x.png": "b0b9655a97003571e9647c60a9a17cc2",
"assets/packages/cmfluttersdk/images/workflow/icon_parking_infor@2x.png": "da8c8d2cf7b7a30d4da9054ad0a8d0c2",
"assets/packages/cmfluttersdk/images/workflow/icon_parking_close@2x.png": "cfa3b2269df2ddb702b58d8d13b75cd1",
"assets/packages/cmfluttersdk/images/workflow/icon_parking_explain_normal@2x.png": "14d38b1d2c4c1827a115b816f6cd1ff4",
"assets/packages/cmfluttersdk/images/workflow/icon_parking_add_hover@2x.png": "63ea6ae051259e31d00237879b6a2676",
"assets/packages/cmfluttersdk/images/workflow/icon_parking_edit@2x.png": "f3c8e0978a068242ea1808566d8fd77e",
"assets/packages/cmfluttersdk/images/workflow/icon_parking_add_normal@2x.png": "3641b724f7fd9300d92cbc16b7eea9d1",
"assets/packages/cmfluttersdk/images/workflow/icon_parking_approver@2x.png": "502bbd868dfb607508992ae568398e31",
"assets/packages/cmfluttersdk/images/workflow/icon_parking_flow_arrow@2x.png": "895f5c6115a532858d91ddb55ba25f3e",
"assets/packages/cmfluttersdk/images/workflow/button_parking_add_normal@2x.png": "36251dd8914f88aa20047e7ae3c8c7c0",
"assets/packages/cmfluttersdk/images/pc_message_link_picblank@2x.png": "b3d1f4e93afe538e6ed5a213c6257db1",
"assets/packages/cmfluttersdk/images/icon_navigation_arrow_up@2x.png": "a95cf0975fbabe0675e8fc48e1c11b9f",
"assets/packages/cmfluttersdk/images/pc_setting_loading.png": "c3160171c06d7d07b7c883fb8be8455d",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "1d2feafa6cc992cdc37f3ece8e69a253",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
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
