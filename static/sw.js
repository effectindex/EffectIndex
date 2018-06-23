importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "effectindex",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.241f45a83f0da87da927.js",
    "revision": "c7aefc57508c3472423fc7b146a43bec"
  },
  {
    "url": "/_nuxt/layouts_default.df92517598116ed44556.js",
    "revision": "331ee3034247077372a6185cc0d0cb78"
  },
  {
    "url": "/_nuxt/manifest.2aefead9a9ce6fa906b7.js",
    "revision": "f8894c3c1be46c807fa7b873d9d1f539"
  },
  {
    "url": "/_nuxt/pages_index_about.3046a19d63db68d3adea.js",
    "revision": "7caca488adc074bbe06c7fe29aca7d4f"
  },
  {
    "url": "/_nuxt/pages_index_admin_index_login.0a3b252239bdb3a88ffd.js",
    "revision": "8c449bc15cced8fdaf4eca168d494c3c"
  },
  {
    "url": "/_nuxt/pages_index_admin_index_logout.e042b394c3d214e922a0.js",
    "revision": "3607eb31b2914cb51344b6fd6be34e1b"
  },
  {
    "url": "/_nuxt/pages_index_admin_index.49114f30db2dc75a9d45.js",
    "revision": "d28b72cc91070482a0907ca527f9d80e"
  },
  {
    "url": "/_nuxt/pages_index_admin_users_index_add.0410fc66f135167f3f1d.js",
    "revision": "7ec42177be6234dbe567622c1d897a53"
  },
  {
    "url": "/_nuxt/pages_index_admin_users_index_list.b361f3e3c1bfff0bb150.js",
    "revision": "b4b2dc218a5fc6163e43c5866fdad6f5"
  },
  {
    "url": "/_nuxt/pages_index_admin_users_index.7ecfeaacfd5aa140194d.js",
    "revision": "18cc06e131561db0e4f22208cf6df3fd"
  },
  {
    "url": "/_nuxt/pages_index_blog__slug_edit.0c5fcf16291d6645e6bc.js",
    "revision": "10c44f6437e6de559dc75aff2fcc8bbf"
  },
  {
    "url": "/_nuxt/pages_index_blog__slug_index.0d25f8f689e42b319e88.js",
    "revision": "9ab079506b252bd4a3f7d911e8531651"
  },
  {
    "url": "/_nuxt/pages_index_blog_index.3f389ea45c785b38ee43.js",
    "revision": "a63a30924e54a035d6340b216c622506"
  },
  {
    "url": "/_nuxt/pages_index_blog_new.73c7e918788b628ed1ab.js",
    "revision": "1549106dd87db09147333dde7988ca2a"
  },
  {
    "url": "/_nuxt/pages_index_contact.27a022110f50f4c84747.js",
    "revision": "406abaa4f8fc5799dcee2daa47fa2c65"
  },
  {
    "url": "/_nuxt/pages_index_discord-chat.e4683d0ba3b28e178711.js",
    "revision": "0948a9b10382060a3ab15bbaf84a88d7"
  },
  {
    "url": "/_nuxt/pages_index_dosebot.d89f4c04e180a5d1c133.js",
    "revision": "7ecfa1e5a54f7abb62abf043283254be"
  },
  {
    "url": "/_nuxt/pages_index_effects__name_edit.eea6f25ea306dc7e4524.js",
    "revision": "fd0944200163ebd38cb8e87148dfbed2"
  },
  {
    "url": "/_nuxt/pages_index_effects__name_index.455d54b7e6c55c6df507.js",
    "revision": "103d4b3c1173157e4651e8a23f2a685f"
  },
  {
    "url": "/_nuxt/pages_index_effects_acuity-enhancement-old.17abb020a08e1869af94.js",
    "revision": "e0925d13afc02eec7b5f7e26aa09ce6e"
  },
  {
    "url": "/_nuxt/pages_index_effects_add.888101d174bd7d726277.js",
    "revision": "08eac646fda18736708986a531464ae2"
  },
  {
    "url": "/_nuxt/pages_index_effects_index_cognitive_index.4e630e473cdc623f35af.js",
    "revision": "d6824dd9cd7b0e0ebdb7d7bb167274f2"
  },
  {
    "url": "/_nuxt/pages_index_effects_index_deliriants_index.57448629bc3a41ca634b.js",
    "revision": "f971454317815bc7977ed23b8c3b93f0"
  },
  {
    "url": "/_nuxt/pages_index_effects_index_dissociatives_index.efe1b564abce3930c3e5.js",
    "revision": "10cac88a1dbf30c8f246be2780964f5b"
  },
  {
    "url": "/_nuxt/pages_index_effects_index_index.0bb350b34ff43f3ec56a.js",
    "revision": "611c88244fe0d525c371008f6d5b5017"
  },
  {
    "url": "/_nuxt/pages_index_effects_index_physical_index.6429c251a5c05460f838.js",
    "revision": "f5fad3b9ca8a5eae79d935124347f515"
  },
  {
    "url": "/_nuxt/pages_index_effects_index_psychedelics_index.6ce0d82bcead7aeb16ea.js",
    "revision": "be777b7824632b4458fb3555fa34cb17"
  },
  {
    "url": "/_nuxt/pages_index_effects_index_sensory_index.82e64a564ad76c4ecd99.js",
    "revision": "f390dd30d2ca9dc81f99c0bdf6df08e5"
  },
  {
    "url": "/_nuxt/pages_index_effects_index.96a1c6bef06096f8f102.js",
    "revision": "42230db693dd4b398e7a9776418b5b7e"
  },
  {
    "url": "/_nuxt/pages_index_effects_list.6d67f79f8a50f1aa9c04.js",
    "revision": "5389e98033d76249a23fab216621b3fb"
  },
  {
    "url": "/_nuxt/pages_index_index.6feb5f42b3e638a2ac6f.js",
    "revision": "582b62d1f17d932fff35183c59126fe3"
  },
  {
    "url": "/_nuxt/pages_index_replications__name_edit.df3ec69a45c857a01aa0.js",
    "revision": "e7888b131f855616d379db68831e0009"
  },
  {
    "url": "/_nuxt/pages_index_replications_add.04bdf3af79f23d62719d.js",
    "revision": "9592f2f2db579fa78be51a3c287a6a2e"
  },
  {
    "url": "/_nuxt/pages_index_replications_audio.37229c844a19733d25c6.js",
    "revision": "57f6ab4f4dc3b61d0c678aa4536fb85e"
  },
  {
    "url": "/_nuxt/pages_index_replications_gallery.5e5839117e1ac15e1413.js",
    "revision": "2eb951ac0807847c2584f38a84ded461"
  },
  {
    "url": "/_nuxt/pages_index_replications_index.a73ab518ff4ade57894a.js",
    "revision": "219d751d05529635a5a48c3224c01fd7"
  },
  {
    "url": "/_nuxt/pages_index_replications_list.f29f79973172a8c33d0c.js",
    "revision": "22a30633a0910cb3102f527a2e0fa9ed"
  },
  {
    "url": "/_nuxt/pages_index_replications_tutorials.d214107c9140fa4e108c.js",
    "revision": "dcd18da6014770cf35646ee56fe150ba"
  },
  {
    "url": "/_nuxt/pages_index_take-action.cd5ef1aca2919b2c5726.js",
    "revision": "9ba315e4dff3a16af4bbb8d52f3cfcf2"
  },
  {
    "url": "/_nuxt/pages_index.3e8000003079d35aa6e6.js",
    "revision": "08916a28e3cee069e2068516594cfa5f"
  },
  {
    "url": "/_nuxt/vendor.1aa26a190049470ddff6.js",
    "revision": "263b844224377f44628f3cb9b92d4c79"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

