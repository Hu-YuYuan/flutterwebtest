'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "92eb28048c11ffd6c05fab0894169a2a",
"index.html": "be203aa1b7ba489b3d770253e74a772f",
"/": "be203aa1b7ba489b3d770253e74a772f",
"main.dart.js": "3457a431b8a7bff72e3e92045107b2c1",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "aef68fe85eb9e19bb91e716f4170a7dc",
"assets/images/ydbg_work_attendance_btn_yellow_normal@3x.png": "7376a89418d44f1bcaba251d7feddd0e",
"assets/images/ydbg_alerts_ic_cancel_pressed@3x.png": "3e0ceab82c7d3c3b5428bc1a3332ac8c",
"assets/images/pad_attendance_statistics_arrow@3x.png": "e834b8d954803796f01a3ccda16a39aa",
"assets/images/ydbg_work_attendance_img_norecord@3x.png": "cae22ba9422816558e4a0c273291b6a0",
"assets/images/ydbg_work_attendance_btn_green_pressed@3x.png": "6516d781a088dd0123c92804a6e1f055",
"assets/images/ydbg_work_attendance_QRcode_pressed@3x.png": "75079f5f6c076723b01350333bb747eb",
"assets/images/ydbg_work_attendance_tab_statistics_normal@3x.png": "88df7b41518134431738c017e99a59df",
"assets/images/ydbg_work_attendance_position_mappin@3x.png": "1ad0b2133847038640bdb6f69ef6ea74",
"assets/images/ydbg_work_attendance_img_contact@2x.png": "959573a4fb8367051ec4d27a5e74d2a8",
"assets/images/ydbg_work_attendance_photo_name@3x.png": "6faed1055cd783f0dc673b3d9985f0ff",
"assets/images/hfx_pic_b_12@3x.png": "599647650ab33fc89e28ff2037f8119c",
"assets/images/ydbg_work_attendance_img_noneed_clock@3x.png": "854ba3ef86567875ea303f0c2791fe55",
"assets/images/ydbg_work_attendance_img_contact@3x.png": "95d8bb96f43fb8cd1d2ebb9dfdb7f6be",
"assets/images/ydbg_work_schedule_up@3x.png": "4515bc79a6ca25a76ae56796b2ba181a",
"assets/images/ydbg_work_attendance_photo_position@3x.png": "aa122f05887aee0f55418e3e137b0c0e",
"assets/images/ydbg_work_attendance_tab_statistics_pressed@3x.png": "229245aae002c9be486844441aeb0e31",
"assets/images/ydbg_work_schedule_list_next@3x.png": "f9a9f195930cf1490307ed724758a5c7",
"assets/images/ydbg_work_attendance_administrators_statistics@3x.png": "8ec352ed7eb9793f3912cbf208c35087",
"assets/images/ydbg_work_schedule_ntc_up@3x.png": "8668f9cb3689a7fe377f40608ae1c7db",
"assets/images/hfx_pic_b_12.png": "23650c4c920d4fe3770f1e7396ce71aa",
"assets/images/common_actionsheet_close_pressed@3x.png": "53c65a0032154566a3b632630bc75836",
"assets/images/hfx_pic_b_14@3x.png": "cc4ec450d30b25175c854adac5ef8c05",
"assets/images/ydbg_work_attendance_card_warning@3x.png": "516f61d71407e33782937a1fd35ba766",
"assets/images/ydbg_work_attendance_tab_mappin_pressed@3x.png": "755467785dc273d71beb54fa53e3756d",
"assets/images/ydbg_work_attendance_tab_mappin_normal@3x.png": "ead7cdce0c2a08ce2499da7901dc05b2",
"assets/images/ydbg_work_attendance_card_mappin@3x.png": "836437a6e860a7682ec47432d41b1b51",
"assets/images/ydbg_work_attendance_btn_yellow_pressed@3x.png": "4f674e64c45e7bed39e00924d044b7a2",
"assets/images/ydbg_common_list_rb1_selected@3x.png": "cd514f6f6c9523e4ac54bcc821df3a33",
"assets/images/ydbg_work_schedule_down@3x.png": "b39773209ce0fa83bd309fc696aede09",
"assets/images/ydbg_wages_call_btn_wages_normal@3x.png": "607bc3a79363d90792e463baf01f4fb0",
"assets/images/ydbg_work_attendance_dlg_successfully@3x.png": "07b07ead19ade616fc73dcdf1338eb6b",
"assets/images/ydbg_work_attendance_photo_delete@3x.png": "53b61fc940b99b28992f857358396b97",
"assets/images/ydbg_work_attendance_QRcode_normal@3x.png": "29bfd43f57fb406185b5a6c2d7b9d0f3",
"assets/images/ydbg_work_attendance_tab_apply_normal@3x.png": "092fb2cd72db5098e51e5745f1271686",
"assets/images/ydbg_wages_call_btn_wages_pressed@3x.png": "61562956a22d6bfee1950321ce9e4fdb",
"assets/images/ydbg_work_attendance_btn_green_normal@3x.png": "306d215b9e7416c62d363660d8be1d1f",
"assets/images/ydbg_work_attendance_administrators_control@3x.png": "5ed964e2aa4d25ab8e7c69bd3d367708",
"assets/images/ydbg_work_attendance_photo_clock@3x.png": "08784b2c844e42770ff4e158ebde704c",
"assets/images/ydbg_work_schedule_triangle@3x.png": "9476648f05a21d022a2dc0ca77226ec7",
"assets/images/ydbg_work_schedule_ntc_down@3x.png": "1dd1070f61a9789d5dcafa6c78b27577",
"assets/images/ydbg_work_attendance_tab_apply_pressed@3x.png": "f504ecedeb62e2072190f42d82f65cd1",
"assets/images/ydbg_work_attendance_camera@3x.png": "b476d2923f2adddb1e53a6859e6b45be",
"assets/images/ydbg_work_attendance_img_noneed_participation@3x.png": "89f1b147e9dd1901554ef7c9580343b0",
"assets/images/common_actionsheet_close_normal@3x.png": "95c0b6692b13a082eac33d0ab0ac9603",
"assets/images/ydbg_work_attendance_card_check@3x.png": "ab37cce95c5e6541cb64185fd43743df",
"assets/images/ydbg_alerts_ic_cancel_normal@3x.png": "7b4842e5e0be6156dee2d7b2d17ad697",
"assets/images/ydbg_loading_16_iOS@3x.png": "30d04bf4b516ee64ade1fe597eed02d4",
"assets/AssetManifest.json": "a98b678434d53ce611fbca3ded2e08d9",
"assets/NOTICES": "b37cd31a58dffa92e2c032a9f61fa60c",
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
"assets/packages/cmfluttersdk/images/pc_selector_radio_button2x.png": "30663aee1caf7410299b00f747160011",
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
"assets/packages/cmfluttersdk/images/dialog/pc_toast_calendar@2x.png": "46a6590e13cc72a7d1294a02b380b260",
"assets/packages/cmfluttersdk/images/dialog/pc_toast_calendar@3x.png": "bb4c7f3b1c4b3de8edd4899a87fd0acc",
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
"assets/AssetManifest.bin": "5081e0c461063d3155da190d45ed3d4a",
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
