importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "effectindex",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.b32d56058e0bad7eb4b5.js",
    "revision": "526025b385c08b94f63cbbb41c8bea11"
  },
  {
    "url": "/_nuxt/layouts/default.098e0fcb03efdfc7d99b.js",
    "revision": "40bf04f9f801f9bb80a6d6da5ca747fa"
  },
  {
    "url": "/_nuxt/manifest.09ccd9006551875d869d.js",
    "revision": "438dc548f817af1f7ad4dbfdf7db1209"
  },
  {
    "url": "/_nuxt/pages/index.606d6bee46b58c258a06.js",
    "revision": "a76f120fd615998ec0086a8e81c26c8c"
  },
  {
    "url": "/_nuxt/pages/index/about.2f45cc6249d5249febdd.js",
    "revision": "7da76f3a3d1c205959de2ed446431005"
  },
  {
    "url": "/_nuxt/pages/index/admin/index.bffab4047981ff0741ee.js",
    "revision": "6e6d350140df52b559e38802bbe76930"
  },
  {
    "url": "/_nuxt/pages/index/admin/users/index.4de34de6e0d1a7f8ccb8.js",
    "revision": "36728133ce5a57940da214ce5c4ab014"
  },
  {
    "url": "/_nuxt/pages/index/admin/users/index/invitations.73f78786af25a01fd912.js",
    "revision": "7024ec97a813f7f83721b47c277a244a"
  },
  {
    "url": "/_nuxt/pages/index/admin/users/index/invite.7f343ce342504742d8fd.js",
    "revision": "491b3cdf4bf3fd3b482e0e9faae08ae9"
  },
  {
    "url": "/_nuxt/pages/index/admin/users/index/list.d128762ebd9625d5a72c.js",
    "revision": "13fcaac137b48dc97221a04fab1c24de"
  },
  {
    "url": "/_nuxt/pages/index/admin/users/index/modify/_id.b38405fb2e73e81eae14.js",
    "revision": "66a2ba4ebf5e7f7c795ca78437906b20"
  },
  {
    "url": "/_nuxt/pages/index/admin/users/index/profiles/add.0ccb18ac8943949ad130.js",
    "revision": "22947d0a804629f38d0d9443da42ee29"
  },
  {
    "url": "/_nuxt/pages/index/admin/users/index/profiles/edit/_id.02f9cde4070e249197ef.js",
    "revision": "bd6b29d2ca32ac83f3c3ca2ab3c36884"
  },
  {
    "url": "/_nuxt/pages/index/admin/users/index/profiles/index.609f28f364f51733f9f2.js",
    "revision": "e26853c6da58e1372ae7767cbc44cc4e"
  },
  {
    "url": "/_nuxt/pages/index/blog/_slug/edit.3eb2d73b43908d2406f6.js",
    "revision": "d42e478387f8d1c4e75274d5b6e9bea0"
  },
  {
    "url": "/_nuxt/pages/index/blog/_slug/index.066acecee89613e111b0.js",
    "revision": "b2bb008b7052a771af2cd6adf35fef6d"
  },
  {
    "url": "/_nuxt/pages/index/blog/index.4f3a3e79d89538e41173.js",
    "revision": "9fca072ab5c157da1965dbe19e29ef81"
  },
  {
    "url": "/_nuxt/pages/index/blog/new.9010c472213dc84f5c93.js",
    "revision": "985504848663a7779be1bf4c428f6325"
  },
  {
    "url": "/_nuxt/pages/index/contact.6afc8546cd151f339156.js",
    "revision": "510747161e2d1cf8a3f2ce25331ff970"
  },
  {
    "url": "/_nuxt/pages/index/discord-chat.7a93bc694079184b388e.js",
    "revision": "c7aa517d08465511967feaf8691d578c"
  },
  {
    "url": "/_nuxt/pages/index/dosebot.648a4bd9734512b66a90.js",
    "revision": "5ad104f98136c36e17fb95f68f5445ce"
  },
  {
    "url": "/_nuxt/pages/index/effects/_name/edit.a376f53ae2c73641cdb8.js",
    "revision": "d1b1351f65d3c4751e8399fae86b3dff"
  },
  {
    "url": "/_nuxt/pages/index/effects/_name/index.6a070d804efc623efede.js",
    "revision": "3107e6269e867889e0c657220ce10bce"
  },
  {
    "url": "/_nuxt/pages/index/effects/acuity-enhancement-old.39635800146ec6538d70.js",
    "revision": "1a7f2f788d76db8141610f3e773bc96b"
  },
  {
    "url": "/_nuxt/pages/index/effects/add.83e725e3fe0d9afcbd17.js",
    "revision": "870a98f9c0c4be718418e757c921bc60"
  },
  {
    "url": "/_nuxt/pages/index/effects/index.193efd67d9bc84098f85.js",
    "revision": "a8e93540a1e3f90d537ffb317e57082e"
  },
  {
    "url": "/_nuxt/pages/index/effects/index/cognitive/index.fe28002409dc8864eede.js",
    "revision": "f81d960ef97ee7eba6d5388340bba386"
  },
  {
    "url": "/_nuxt/pages/index/effects/index/deliriants/index.3243fa99066611664640.js",
    "revision": "83056b234939ec0ba3f8e42e205b19f1"
  },
  {
    "url": "/_nuxt/pages/index/effects/index/dissociatives/index.8927131e638475a1256b.js",
    "revision": "2627cd4a582dd2a866a1d6a9956ea587"
  },
  {
    "url": "/_nuxt/pages/index/effects/index/index.da66c1f0d7cb36f51fd0.js",
    "revision": "ac99d304ac1857e4eb45f5284f000230"
  },
  {
    "url": "/_nuxt/pages/index/effects/index/physical/index.9dd172fa6ae5ff839175.js",
    "revision": "281cc7ecfb2ba31f9ebbaff84a6f099b"
  },
  {
    "url": "/_nuxt/pages/index/effects/index/psychedelics/index.5098bab8135cd2dbb5e4.js",
    "revision": "8d680aa5ddb5ad649ac000f5a4d995bd"
  },
  {
    "url": "/_nuxt/pages/index/effects/index/sensory/index.913b119c4bf7912407d3.js",
    "revision": "e089c54b54b218e5c3395ea631ef4fc6"
  },
  {
    "url": "/_nuxt/pages/index/effects/list.81e1c0895dbf995ca72c.js",
    "revision": "dbac4dae8bb65ad64679dbed918ef99f"
  },
  {
    "url": "/_nuxt/pages/index/index.a343520e1fb5babf631e.js",
    "revision": "d831dbd0f418f5b2222445708a114b7c"
  },
  {
    "url": "/_nuxt/pages/index/profiles/_username.674b33a28f7b7e3a569f.js",
    "revision": "0185dbaba353ba1a8bcc67b3b57518c9"
  },
  {
    "url": "/_nuxt/pages/index/profiles/index.c43fad973dda4783d02a.js",
    "revision": "c64cc52c929c1bc1f323ff59a3f98f52"
  },
  {
    "url": "/_nuxt/pages/index/replications/_name/edit.ec74f92e65b32fd97af7.js",
    "revision": "af08aca27dd43716e43bf63cb5b0ff63"
  },
  {
    "url": "/_nuxt/pages/index/replications/add.f8606374581f2e420ae0.js",
    "revision": "7508ce5395fa22a5f3b1efcf9e5adbfc"
  },
  {
    "url": "/_nuxt/pages/index/replications/audio.ad2de82a4278af89fc99.js",
    "revision": "29a97322afad01ef5ee9a2ba9d1cc758"
  },
  {
    "url": "/_nuxt/pages/index/replications/index.7381d0c301389fffd65d.js",
    "revision": "5bc3ae10f086f19d5e4d703d3d0f0c6f"
  },
  {
    "url": "/_nuxt/pages/index/replications/list.b89932251c3430c86190.js",
    "revision": "3579479587a03e04adb018f117a595ec"
  },
  {
    "url": "/_nuxt/pages/index/replications/tutorials.6892dcafd80d8717a395.js",
    "revision": "0bcc43c7a2028bb4500a46d50c7c9b03"
  },
  {
    "url": "/_nuxt/pages/index/take-action.95c90c73079cca7a80d5.js",
    "revision": "9f2b67dd151d6e8feb03d8a0a34f4b02"
  },
  {
    "url": "/_nuxt/pages/index/user/index.2d72e6120d2ed7b85e5a.js",
    "revision": "b53b6fef67b4333ac5e31d9567b4a52e"
  },
  {
    "url": "/_nuxt/pages/index/user/index/login.f00a2230eecc0a3ae854.js",
    "revision": "d1d3a878077ed052fe62da9e1884a440"
  },
  {
    "url": "/_nuxt/pages/index/user/index/logout.ac3d880776c9397b5e0d.js",
    "revision": "22fd34b8e9f350d3a03f186fdf49087c"
  },
  {
    "url": "/_nuxt/pages/index/user/index/register/_inviteCode.d00796022eb577febded.js",
    "revision": "7c6798ecfe266cffeee41d13f18f35f7"
  },
  {
    "url": "/_nuxt/vendor.b7d3e8ce7f69e62459ab.js",
    "revision": "4bc0483d49686ee7ce658fb5fdd2b9ff"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('https://fonts.googleapis.com/.*'), workboxSW.strategies.cacheFirst({"cacheableResponse":{"statuses":[0,200]}}), 'GET')

workboxSW.router.registerRoute(new RegExp('https://fonts.gstatic.com/.*'), workboxSW.strategies.cacheFirst({"cacheableResponse":{"statuses":[0,200]}}), 'GET')

