importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "effectindex",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.35d5a62e3d8fc4e1cff9.js",
    "revision": "34ceaac2cf92cf46733917e66de40de8"
  },
  {
    "url": "/_nuxt/layouts_default.89fb3ab0b93876c562c5.js",
    "revision": "bfef94293d659e618aa1406d2a2af4f2"
  },
  {
    "url": "/_nuxt/manifest.f4bfc4fba2aec2faba4d.js",
    "revision": "fc39e46106ceb2df321bf62c84f855df"
  },
  {
    "url": "/_nuxt/pages_index_about.bf240e6dbad90b9ba3a2.js",
    "revision": "c4a4ce57f721c14df6b9166e878c8500"
  },
  {
    "url": "/_nuxt/pages_index_admin_index_login.0f28bfaca8152d7c3f4b.js",
    "revision": "77d2b36f03abddca01c607424da75a60"
  },
  {
    "url": "/_nuxt/pages_index_admin_index_logout.b3f86c9babebd2594eb5.js",
    "revision": "337f2169c7994f4c6af139d9e5bffb86"
  },
  {
    "url": "/_nuxt/pages_index_admin_index.f2784a2957cf586356aa.js",
    "revision": "3e219ac64f83ed2eb790a0f0c00d8179"
  },
  {
    "url": "/_nuxt/pages_index_admin_users_index_add.940b6bf89e9570c14456.js",
    "revision": "7cd0724446b0b12fe163422f49e8fe82"
  },
  {
    "url": "/_nuxt/pages_index_admin_users_index_invitations.00eef4b1cd811333f622.js",
    "revision": "0d89c8a2ff7ef4f66f55f68d934d5163"
  },
  {
    "url": "/_nuxt/pages_index_admin_users_index_invite.cdccec9fc6b6ae9833c7.js",
    "revision": "6c6c19e3421195b70d18baca55ddf4b4"
  },
  {
    "url": "/_nuxt/pages_index_admin_users_index_list.28084ca33c8df02cd46f.js",
    "revision": "56eb3a1cab1742c3e4de16dc09092b15"
  },
  {
    "url": "/_nuxt/pages_index_admin_users_index.102650357e5fb297e6f1.js",
    "revision": "e9dfd9b3915c8440eb3b0ee3bf7ff22d"
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
    "url": "/_nuxt/pages_index_contact.c7471196f201dbc675e7.js",
    "revision": "691f24ca42f571bf50f95e21b1bdec41"
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
    "url": "/_nuxt/pages_index_effects__name_edit.b9b80c755e5b2bf81a94.js",
    "revision": "6e0975e91fcce01dacf5621c3f6e86cc"
  },
  {
    "url": "/_nuxt/pages_index_effects__name_index.011af04b5542c02a6b96.js",
    "revision": "0d86dbc1de271aec723d12f3a4314914"
  },
  {
    "url": "/_nuxt/pages_index_effects_acuity-enhancement-old.f75d6bdaa5e6a2adc564.js",
    "revision": "be07343e7272bcd1562bb949935defca"
  },
  {
    "url": "/_nuxt/pages_index_effects_add.31a84c3a60e74e2eac09.js",
    "revision": "fbf6904b728c394ac684f9b9aff1acfb"
  },
  {
    "url": "/_nuxt/pages_index_effects_index_cognitive_index.4e630e473cdc623f35af.js",
    "revision": "d6824dd9cd7b0e0ebdb7d7bb167274f2"
  },
  {
    "url": "/_nuxt/pages_index_effects_index_deliriants_index.74024c51048dc4abce53.js",
    "revision": "1d5e333a7aa2d0b75f7494232c8a18e2"
  },
  {
    "url": "/_nuxt/pages_index_effects_index_dissociatives_index.d5b8a410581abb0d65e2.js",
    "revision": "d755f6ce1b8d147853dff8054761557f"
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
    "url": "/_nuxt/pages_index_replications__name_edit.3c3222c70865671db03e.js",
    "revision": "a103542fb2556b34324983cb5f4baab6"
  },
  {
    "url": "/_nuxt/pages_index_replications_add.8569c8103b33b7f37011.js",
    "revision": "dbe61aea70fce778008de27898d17601"
  },
  {
    "url": "/_nuxt/pages_index_replications_audio.a309005d22dc7b6487c1.js",
    "revision": "9e8a6c2bef7ab310db3d70a6420cd04c"
  },
  {
    "url": "/_nuxt/pages_index_replications_gallery.f6f6bf05690d84776aab.js",
    "revision": "c471f2a037800f476765e32453b2c4bb"
  },
  {
    "url": "/_nuxt/pages_index_replications_index.0a5583343c007c450909.js",
    "revision": "a6f233dee513ea0248044958b055d78b"
  },
  {
    "url": "/_nuxt/pages_index_replications_list.8162623345fdab8edef1.js",
    "revision": "bd3a769fcf5a8ee82287cadc4fd3c2de"
  },
  {
    "url": "/_nuxt/pages_index_replications_tutorials.669f415478f4de23d97b.js",
    "revision": "da6760fbc10cc7d1ec6d047296452928"
  },
  {
    "url": "/_nuxt/pages_index_take-action.2dc601dc4dbd0695fb66.js",
    "revision": "e7c6437253887dce4d3dacc16fbf556e"
  },
  {
    "url": "/_nuxt/pages_index_user_index_index.230fab217204a51478f0.js",
    "revision": "af8102865500ef5d6d7a620af6c829a7"
  },
  {
    "url": "/_nuxt/pages_index_user_index_register__inviteCode.c01f6245cbabe3735cd0.js",
    "revision": "ead774f9851c7286920d5e8f3e576d81"
  },
  {
    "url": "/_nuxt/pages_index_user_index.0dc7edd74ae5251b692a.js",
    "revision": "6ab25e5b1f63a991f8e12348735d19ed"
  },
  {
    "url": "/_nuxt/pages_index.a37bad4509497f295575.js",
    "revision": "cb22dfbae9d850f1ca2470e4b7f83c7b"
  },
  {
    "url": "/_nuxt/vendor.37bd5794a69023861533.js",
    "revision": "d38cf2f4b8010940cd3ef1b12653f233"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('https://fonts.googleapis.com/.*'), workboxSW.strategies.cacheFirst({"cacheableResponse":{"statuses":[0,200]}}), 'GET')

workboxSW.router.registerRoute(new RegExp('https://fonts.gstatic.com/.*'), workboxSW.strategies.cacheFirst({"cacheableResponse":{"statuses":[0,200]}}), 'GET')

