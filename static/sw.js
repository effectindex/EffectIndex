importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "effectindex",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.a323c82091dbde3bc4b6.js",
    "revision": "a88bf3f5ed34c1e8c1752ee71aaa6a2d"
  },
  {
    "url": "/_nuxt/layouts_default.00de29802cad73f06087.js",
    "revision": "ee375dbface296f66d1e8074934f17d3"
  },
  {
    "url": "/_nuxt/manifest.bdc5f36c460146ef1310.js",
    "revision": "bf4a750034d6b20f1c6e8abfbee4c0b8"
  },
  {
    "url": "/_nuxt/pages_index_about.e88ccac8d86b6754f63c.js",
    "revision": "cc413e05eddf6d5b7e15bea2eb88b17c"
  },
  {
    "url": "/_nuxt/pages_index_admin_index_login.f39a82497c99057bea5f.js",
    "revision": "562976f400cd554a15159cc4e847f516"
  },
  {
    "url": "/_nuxt/pages_index_admin_index_logout.bd07b0007638d1e1caef.js",
    "revision": "2f7eda08ac4e40dce4ac34d146a2c71b"
  },
  {
    "url": "/_nuxt/pages_index_admin_index.f37185c59d8cb0ea84b0.js",
    "revision": "cd10ed65d31750b208fa4ca14e696bba"
  },
  {
    "url": "/_nuxt/pages_index_admin_users_index_add.37bfff87b684f3806072.js",
    "revision": "2f7ee93f8ce033e0f31f4bb326d55ba5"
  },
  {
    "url": "/_nuxt/pages_index_admin_users_index_invite.98ef29af7ffe95fdc189.js",
    "revision": "0892f6b9be10353f8cf3eb7a533a9c06"
  },
  {
    "url": "/_nuxt/pages_index_admin_users_index_list.ec3612c0de2f8cef8c1d.js",
    "revision": "a82cf8029306fc2b5cd41f0fb3aa4e78"
  },
  {
    "url": "/_nuxt/pages_index_admin_users_index.24eedc589cd6f687348c.js",
    "revision": "ec91b8df6e7442634ea592f9a7659df5"
  },
  {
    "url": "/_nuxt/pages_index_blog__slug_edit.c5080863045e3fcef140.js",
    "revision": "3ddd92cc18acc4d25f3c3ea64e1bc426"
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
    "url": "/_nuxt/pages_index_blog_new.7acc880a07c8d01f7f74.js",
    "revision": "c54c01bf03182beaf9c860a2f466f2c1"
  },
  {
    "url": "/_nuxt/pages_index_contact.40180b872b68a32165fd.js",
    "revision": "11c7111c1b5ea2eca3cc0541e1d3f527"
  },
  {
    "url": "/_nuxt/pages_index_discord-chat.58bd2d24659c3141ac5c.js",
    "revision": "822c2ee9921f4f08d9176fe93b3a1132"
  },
  {
    "url": "/_nuxt/pages_index_dosebot.ad9eca97fbe7e2efadb7.js",
    "revision": "6e14f04449ab36181ced9a0ff85b85f0"
  },
  {
    "url": "/_nuxt/pages_index_effects__name_edit.1a5f576530b94874a554.js",
    "revision": "ab9894ed68ba2ea4a0ff6d870b9309c0"
  },
  {
    "url": "/_nuxt/pages_index_effects__name_index.0e683965ac07e513c38b.js",
    "revision": "f4dd0382d78c5ad2798bbe79e28d3136"
  },
  {
    "url": "/_nuxt/pages_index_effects_acuity-enhancement-old.b062624452448cb47159.js",
    "revision": "f6b4ab6195943ab077c35b3033b1d563"
  },
  {
    "url": "/_nuxt/pages_index_effects_add.113ce94ada50a3ad35bc.js",
    "revision": "cd24ba0505e4f8fd8a526281ca309310"
  },
  {
    "url": "/_nuxt/pages_index_effects_index_cognitive_index.4e630e473cdc623f35af.js",
    "revision": "d6824dd9cd7b0e0ebdb7d7bb167274f2"
  },
  {
    "url": "/_nuxt/pages_index_effects_index_deliriants_index.446129004400c1c404fa.js",
    "revision": "64b474fca5a73b35e9bb896a0b9fb32e"
  },
  {
    "url": "/_nuxt/pages_index_effects_index_dissociatives_index.657d502fd951c978313d.js",
    "revision": "c59a66c9eb9884d31e6bc80cfec734fb"
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
    "url": "/_nuxt/pages_index_effects_index.88c0b861acf838549d78.js",
    "revision": "2c83ad370b62a300695d3912d2ea9151"
  },
  {
    "url": "/_nuxt/pages_index_effects_list.513f8a5b77217b9b48b0.js",
    "revision": "9950551feb24d95d1fb690271e8168dd"
  },
  {
    "url": "/_nuxt/pages_index_index.6feb5f42b3e638a2ac6f.js",
    "revision": "582b62d1f17d932fff35183c59126fe3"
  },
  {
    "url": "/_nuxt/pages_index_replications__name_edit.1932ab85b6966aa3a414.js",
    "revision": "92d5bf86c0897c8958e1f9c6d2b2bdf7"
  },
  {
    "url": "/_nuxt/pages_index_replications_add.7fd6efe2b3e39f260757.js",
    "revision": "d64eba282176b4499a1eff976b3cf81f"
  },
  {
    "url": "/_nuxt/pages_index_replications_audio.23f81f9b485d0448d999.js",
    "revision": "9e8a6c2bef7ab310db3d70a6420cd04c"
  },
  {
    "url": "/_nuxt/pages_index_replications_gallery.424f1d181942c9c8827c.js",
    "revision": "410206c9d3ea0502f986186ebae1d79f"
  },
  {
    "url": "/_nuxt/pages_index_replications_index.a73ab518ff4ade57894a.js",
    "revision": "219d751d05529635a5a48c3224c01fd7"
  },
  {
    "url": "/_nuxt/pages_index_replications_list.8162623345fdab8edef1.js",
    "revision": "bd3a769fcf5a8ee82287cadc4fd3c2de"
  },
  {
    "url": "/_nuxt/pages_index_replications_tutorials.7a5a8d3b8aed869b644e.js",
    "revision": "cc14ae49b7bfa35f3fbee4d4635b7330"
  },
  {
    "url": "/_nuxt/pages_index_take-action.632522722074a660fca9.js",
    "revision": "ad8ef1a6c63cbf807bbe5fa2640cfb68"
  },
  {
    "url": "/_nuxt/pages_index.a37bad4509497f295575.js",
    "revision": "cb22dfbae9d850f1ca2470e4b7f83c7b"
  },
  {
    "url": "/_nuxt/vendor.26d70156bc01ceb31cd9.js",
    "revision": "4fde2ace35a7d2b1079c33f8a7a18ad2"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('https://fonts.googleapis.com/.*'), workboxSW.strategies.cacheFirst({"cacheableResponse":{"statuses":[0,200]}}), 'GET')

workboxSW.router.registerRoute(new RegExp('https://fonts.gstatic.com/.*'), workboxSW.strategies.cacheFirst({"cacheableResponse":{"statuses":[0,200]}}), 'GET')

