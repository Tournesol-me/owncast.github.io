if(!self.define){let e,i={};const c=(c,s)=>(c=new URL(c+".js",s).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(s,n)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(i[a])return;let t={};const r=e=>c(e,a),f={module:{uri:a},exports:t,require:r};i[a]=Promise.all(s.map((e=>f[e]||r(e)))).then((e=>(n(...e),t)))}}define(["./workbox-b3600c15"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/3XGp9_T7JE5r8cszrlEse/_buildManifest.js",revision:"13e9ed6cf761a3d670b9648a2f72e25c"},{url:"/_next/static/3XGp9_T7JE5r8cszrlEse/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/1008.34cc20ecda8c2f89.js",revision:"34cc20ecda8c2f89"},{url:"/_next/static/chunks/1010.a223916b6c5495db.js",revision:"a223916b6c5495db"},{url:"/_next/static/chunks/1053.adb29a47c34b267a.js",revision:"adb29a47c34b267a"},{url:"/_next/static/chunks/1084.8bd09a422bf924f1.js",revision:"8bd09a422bf924f1"},{url:"/_next/static/chunks/1227-69dcfe3ead738cb5.js",revision:"69dcfe3ead738cb5"},{url:"/_next/static/chunks/1264.22793a8dff64e254.js",revision:"22793a8dff64e254"},{url:"/_next/static/chunks/1382-63106ce5e3b9ce8f.js",revision:"63106ce5e3b9ce8f"},{url:"/_next/static/chunks/1390.a992b1e50c139c03.js",revision:"a992b1e50c139c03"},{url:"/_next/static/chunks/1398.0fdbeaf1acb3c693.js",revision:"0fdbeaf1acb3c693"},{url:"/_next/static/chunks/1446.729b459281b981b9.js",revision:"729b459281b981b9"},{url:"/_next/static/chunks/1538.2848904912316694.js",revision:"2848904912316694"},{url:"/_next/static/chunks/1560.a6c217b84b0e171f.js",revision:"a6c217b84b0e171f"},{url:"/_next/static/chunks/1650.06a77268379b94b2.js",revision:"06a77268379b94b2"},{url:"/_next/static/chunks/1660.76cc05d00e5034ad.js",revision:"76cc05d00e5034ad"},{url:"/_next/static/chunks/1664-336bd3a673b89d12.js",revision:"336bd3a673b89d12"},{url:"/_next/static/chunks/1668.ff75e5f9dfbd04d7.js",revision:"ff75e5f9dfbd04d7"},{url:"/_next/static/chunks/1700-39e301fee9bb9aad.js",revision:"39e301fee9bb9aad"},{url:"/_next/static/chunks/1706.b0e0bc2cf5432470.js",revision:"b0e0bc2cf5432470"},{url:"/_next/static/chunks/173-42223851280a22f6.js",revision:"42223851280a22f6"},{url:"/_next/static/chunks/177.3359462c66b636ba.js",revision:"3359462c66b636ba"},{url:"/_next/static/chunks/1770.ffd38031b937c10a.js",revision:"ffd38031b937c10a"},{url:"/_next/static/chunks/1873.30ce0683d4517167.js",revision:"30ce0683d4517167"},{url:"/_next/static/chunks/1920.e6bf04b81039b68b.js",revision:"e6bf04b81039b68b"},{url:"/_next/static/chunks/1965.ba57e21b0f93c404.js",revision:"ba57e21b0f93c404"},{url:"/_next/static/chunks/2040.2b48b43e5c9bbd94.js",revision:"2b48b43e5c9bbd94"},{url:"/_next/static/chunks/2063-c85faac63c285e99.js",revision:"c85faac63c285e99"},{url:"/_next/static/chunks/2074-ea9b2053ba783a17.js",revision:"ea9b2053ba783a17"},{url:"/_next/static/chunks/2118-ec3488beaffe7813.js",revision:"ec3488beaffe7813"},{url:"/_next/static/chunks/2119.0cb64fe9bc609787.js",revision:"0cb64fe9bc609787"},{url:"/_next/static/chunks/2136.3c7248e1cb33b0f2.js",revision:"3c7248e1cb33b0f2"},{url:"/_next/static/chunks/228.bcd421992bab4a0b.js",revision:"bcd421992bab4a0b"},{url:"/_next/static/chunks/2314.ce3a0e1828ad2d06.js",revision:"ce3a0e1828ad2d06"},{url:"/_next/static/chunks/2348.d2980e6aeef90dfd.js",revision:"d2980e6aeef90dfd"},{url:"/_next/static/chunks/2386.d1eeedc6355d2049.js",revision:"d1eeedc6355d2049"},{url:"/_next/static/chunks/2406.04743ed8b26fbb4f.js",revision:"04743ed8b26fbb4f"},{url:"/_next/static/chunks/2414-bb7303a5f242751f.js",revision:"bb7303a5f242751f"},{url:"/_next/static/chunks/2424.2c2da0886b66b3b1.js",revision:"2c2da0886b66b3b1"},{url:"/_next/static/chunks/2461.7f78678f7ae282ce.js",revision:"7f78678f7ae282ce"},{url:"/_next/static/chunks/2542.82fcb9f7206aadce.js",revision:"82fcb9f7206aadce"},{url:"/_next/static/chunks/2602.b42aa7598d8adcd0.js",revision:"b42aa7598d8adcd0"},{url:"/_next/static/chunks/2659.a1e56ddc5d75db3d.js",revision:"a1e56ddc5d75db3d"},{url:"/_next/static/chunks/2675.3af9b237ab623dbf.js",revision:"3af9b237ab623dbf"},{url:"/_next/static/chunks/2700-37c0c5dc02995b82.js",revision:"37c0c5dc02995b82"},{url:"/_next/static/chunks/271-340423503b9c3629.js",revision:"340423503b9c3629"},{url:"/_next/static/chunks/2711.f2c889ed7a6bd648.js",revision:"f2c889ed7a6bd648"},{url:"/_next/static/chunks/2750.8797475277eda6ef.js",revision:"8797475277eda6ef"},{url:"/_next/static/chunks/2757.5b86886c74373216.js",revision:"5b86886c74373216"},{url:"/_next/static/chunks/2802.a6d5e53d81d005ed.js",revision:"a6d5e53d81d005ed"},{url:"/_next/static/chunks/2877.4a5ca5df09892683.js",revision:"4a5ca5df09892683"},{url:"/_next/static/chunks/29107295-bf659380bc4115de.js",revision:"bf659380bc4115de"},{url:"/_next/static/chunks/2979.5027f38a67658b38.js",revision:"5027f38a67658b38"},{url:"/_next/static/chunks/3013-1ba17ac9d4a12b8b.js",revision:"1ba17ac9d4a12b8b"},{url:"/_next/static/chunks/305.89841c282a61cef8.js",revision:"89841c282a61cef8"},{url:"/_next/static/chunks/3203.4b4ad54c6039f230.js",revision:"4b4ad54c6039f230"},{url:"/_next/static/chunks/3283.4aa4cab7aec29491.js",revision:"4aa4cab7aec29491"},{url:"/_next/static/chunks/3314.141e2dca41748fac.js",revision:"141e2dca41748fac"},{url:"/_next/static/chunks/3341-6b19293d930442cb.js",revision:"6b19293d930442cb"},{url:"/_next/static/chunks/3354.c3ea041d8dd4e06e.js",revision:"c3ea041d8dd4e06e"},{url:"/_next/static/chunks/3366.7480878174578140.js",revision:"7480878174578140"},{url:"/_next/static/chunks/3371.c142b630db4a63c0.js",revision:"c142b630db4a63c0"},{url:"/_next/static/chunks/3412-7cf4e82a7816532e.js",revision:"7cf4e82a7816532e"},{url:"/_next/static/chunks/3427.f3f254d59e323d9c.js",revision:"f3f254d59e323d9c"},{url:"/_next/static/chunks/3436.eac11d10cde485d3.js",revision:"eac11d10cde485d3"},{url:"/_next/static/chunks/344.e39f52ee5981e34d.js",revision:"e39f52ee5981e34d"},{url:"/_next/static/chunks/3465.77dee7ec6cc7e947.js",revision:"77dee7ec6cc7e947"},{url:"/_next/static/chunks/3482.f8558073446e8bd9.js",revision:"f8558073446e8bd9"},{url:"/_next/static/chunks/3509.b3d99b2815ff8ca5.js",revision:"b3d99b2815ff8ca5"},{url:"/_next/static/chunks/3519.2a44d25a006ebc05.js",revision:"2a44d25a006ebc05"},{url:"/_next/static/chunks/3594.073040c30703eb50.js",revision:"073040c30703eb50"},{url:"/_next/static/chunks/3698-135dcfb425d6eea7.js",revision:"135dcfb425d6eea7"},{url:"/_next/static/chunks/370.d28d8b4dda7a28fa.js",revision:"d28d8b4dda7a28fa"},{url:"/_next/static/chunks/3731-1cabc382f364663d.js",revision:"1cabc382f364663d"},{url:"/_next/static/chunks/3747.8e119c6b5e11432a.js",revision:"8e119c6b5e11432a"},{url:"/_next/static/chunks/3840.d4c83009cb224273.js",revision:"d4c83009cb224273"},{url:"/_next/static/chunks/3859-74e7768c240079eb.js",revision:"74e7768c240079eb"},{url:"/_next/static/chunks/3883.5e03e3a398cf3720.js",revision:"5e03e3a398cf3720"},{url:"/_next/static/chunks/3993.45bba5349434ad56.js",revision:"45bba5349434ad56"},{url:"/_next/static/chunks/402.3f3e56dcc798bafe.js",revision:"3f3e56dcc798bafe"},{url:"/_next/static/chunks/4041-1c4201f0d7166e43.js",revision:"1c4201f0d7166e43"},{url:"/_next/static/chunks/4103.094b3a128123225c.js",revision:"094b3a128123225c"},{url:"/_next/static/chunks/4143.d2329527ce98a835.js",revision:"d2329527ce98a835"},{url:"/_next/static/chunks/4144.d7264e550bf9aa39.js",revision:"d7264e550bf9aa39"},{url:"/_next/static/chunks/4163.d52adce0c4cb89c5.js",revision:"d52adce0c4cb89c5"},{url:"/_next/static/chunks/4212.15885059e8078ec8.js",revision:"15885059e8078ec8"},{url:"/_next/static/chunks/4261-c22e30d9ec29c5ad.js",revision:"c22e30d9ec29c5ad"},{url:"/_next/static/chunks/428-9ce4fd32aa70f633.js",revision:"9ce4fd32aa70f633"},{url:"/_next/static/chunks/4293.9de2fa8f5848563f.js",revision:"9de2fa8f5848563f"},{url:"/_next/static/chunks/4323.a71ccfb6a77dd78e.js",revision:"a71ccfb6a77dd78e"},{url:"/_next/static/chunks/4337.4a59e102e82882c3.js",revision:"4a59e102e82882c3"},{url:"/_next/static/chunks/437.91d64c190eb4c1fc.js",revision:"91d64c190eb4c1fc"},{url:"/_next/static/chunks/4398-ae03aa98bd106921.js",revision:"ae03aa98bd106921"},{url:"/_next/static/chunks/4439.7f32805042ce478e.js",revision:"7f32805042ce478e"},{url:"/_next/static/chunks/4504.205ff17922909b08.js",revision:"205ff17922909b08"},{url:"/_next/static/chunks/4511.3c4a3649659326a0.js",revision:"3c4a3649659326a0"},{url:"/_next/static/chunks/4526-240683369366a3af.js",revision:"240683369366a3af"},{url:"/_next/static/chunks/4537-b6c251fee6cdd4ff.js",revision:"b6c251fee6cdd4ff"},{url:"/_next/static/chunks/4612.5377afe0026f9d3f.js",revision:"5377afe0026f9d3f"},{url:"/_next/static/chunks/4645.804ae1b8a216ef0e.js",revision:"804ae1b8a216ef0e"},{url:"/_next/static/chunks/4732.fbcbca870e2812a4.js",revision:"fbcbca870e2812a4"},{url:"/_next/static/chunks/4778.28eb8509a085a653.js",revision:"28eb8509a085a653"},{url:"/_next/static/chunks/4796.c545e50f2ff935e7.js",revision:"c545e50f2ff935e7"},{url:"/_next/static/chunks/4812.8df1cf6b1556ba3d.js",revision:"8df1cf6b1556ba3d"},{url:"/_next/static/chunks/4829.0d9e628c7bcdb7fc.js",revision:"0d9e628c7bcdb7fc"},{url:"/_next/static/chunks/4879.862b5a386c6b86a0.js",revision:"862b5a386c6b86a0"},{url:"/_next/static/chunks/4920.de9b149d5b43b1cf.js",revision:"de9b149d5b43b1cf"},{url:"/_next/static/chunks/4927.6ae2f05612488ca4.js",revision:"6ae2f05612488ca4"},{url:"/_next/static/chunks/4931-9ff6a1a400711eb8.js",revision:"9ff6a1a400711eb8"},{url:"/_next/static/chunks/4ad82c5e-bbac0aa9adf91047.js",revision:"bbac0aa9adf91047"},{url:"/_next/static/chunks/500.b7a16032bbe75bbf.js",revision:"b7a16032bbe75bbf"},{url:"/_next/static/chunks/5085.1249b77b8d6aec0f.js",revision:"1249b77b8d6aec0f"},{url:"/_next/static/chunks/5111.a217b7b0778e1d3b.js",revision:"a217b7b0778e1d3b"},{url:"/_next/static/chunks/5122.8964bdfb44ce724e.js",revision:"8964bdfb44ce724e"},{url:"/_next/static/chunks/5134.a121d8d21d1c9247.js",revision:"a121d8d21d1c9247"},{url:"/_next/static/chunks/520.476590ca4cbd7a75.js",revision:"476590ca4cbd7a75"},{url:"/_next/static/chunks/5258.d215d30394bde5c4.js",revision:"d215d30394bde5c4"},{url:"/_next/static/chunks/5308.f53c4452aec96df5.js",revision:"f53c4452aec96df5"},{url:"/_next/static/chunks/531.1e10d692768cad5c.js",revision:"1e10d692768cad5c"},{url:"/_next/static/chunks/5348-28b7978f83252c37.js",revision:"28b7978f83252c37"},{url:"/_next/static/chunks/5372.156686248b75341d.js",revision:"156686248b75341d"},{url:"/_next/static/chunks/54.16f204694d4dbe62.js",revision:"16f204694d4dbe62"},{url:"/_next/static/chunks/5402-31fa65c3c84da2cc.js",revision:"31fa65c3c84da2cc"},{url:"/_next/static/chunks/5412.62183ead243c981f.js",revision:"62183ead243c981f"},{url:"/_next/static/chunks/5584.8842f8a926db3df8.js",revision:"8842f8a926db3df8"},{url:"/_next/static/chunks/5648.267f082c55c2b106.js",revision:"267f082c55c2b106"},{url:"/_next/static/chunks/5672.06f229f291417a1b.js",revision:"06f229f291417a1b"},{url:"/_next/static/chunks/5753.b7dbc47d5bb85861.js",revision:"b7dbc47d5bb85861"},{url:"/_next/static/chunks/5815.a2728b3992c996c3.js",revision:"a2728b3992c996c3"},{url:"/_next/static/chunks/5818-b2a34b1cb357774f.js",revision:"b2a34b1cb357774f"},{url:"/_next/static/chunks/5819.a59443e62006c745.js",revision:"a59443e62006c745"},{url:"/_next/static/chunks/5874-92fbd9bb5129dd11.js",revision:"92fbd9bb5129dd11"},{url:"/_next/static/chunks/5879.01cab74f0917f36d.js",revision:"01cab74f0917f36d"},{url:"/_next/static/chunks/5888-1bc8318a305596b9.js",revision:"1bc8318a305596b9"},{url:"/_next/static/chunks/5903.9c56140d4c41dbc9.js",revision:"9c56140d4c41dbc9"},{url:"/_next/static/chunks/5938-9a5939a149ee43c8.js",revision:"9a5939a149ee43c8"},{url:"/_next/static/chunks/6062.831fce20a86c4ab8.js",revision:"831fce20a86c4ab8"},{url:"/_next/static/chunks/6092.d604d5262c942c63.js",revision:"d604d5262c942c63"},{url:"/_next/static/chunks/6121.07bf76517bbc2dd2.js",revision:"07bf76517bbc2dd2"},{url:"/_next/static/chunks/6133.e4a9891655c2884d.js",revision:"e4a9891655c2884d"},{url:"/_next/static/chunks/6139.01da1918e0d4e877.js",revision:"01da1918e0d4e877"},{url:"/_next/static/chunks/617.359b421db498d43e.js",revision:"359b421db498d43e"},{url:"/_next/static/chunks/62.c891b4788440a30a.js",revision:"c891b4788440a30a"},{url:"/_next/static/chunks/6275.6c93e6d5f16c78f2.js",revision:"6c93e6d5f16c78f2"},{url:"/_next/static/chunks/628.57ac8aed39100bd4.js",revision:"57ac8aed39100bd4"},{url:"/_next/static/chunks/6356-a15c3f8b525f2fe2.js",revision:"a15c3f8b525f2fe2"},{url:"/_next/static/chunks/6395.6e51d035839ff4ba.js",revision:"6e51d035839ff4ba"},{url:"/_next/static/chunks/6443.a1c9257ad6c47d80.js",revision:"a1c9257ad6c47d80"},{url:"/_next/static/chunks/6460.cc1ba385daf50463.js",revision:"cc1ba385daf50463"},{url:"/_next/static/chunks/6471.cb795f11f73576f4.js",revision:"cb795f11f73576f4"},{url:"/_next/static/chunks/6524-ce960eca7eac0261.js",revision:"ce960eca7eac0261"},{url:"/_next/static/chunks/660-9e6248be30d267e1.js",revision:"9e6248be30d267e1"},{url:"/_next/static/chunks/6665.8350b94f2a309c5f.js",revision:"8350b94f2a309c5f"},{url:"/_next/static/chunks/6692.dd74b5f83817cb40.js",revision:"dd74b5f83817cb40"},{url:"/_next/static/chunks/673.5310afdb2da5faad.js",revision:"5310afdb2da5faad"},{url:"/_next/static/chunks/6732.d813e460e261d8ef.js",revision:"d813e460e261d8ef"},{url:"/_next/static/chunks/6766-2103964c136fa1be.js",revision:"2103964c136fa1be"},{url:"/_next/static/chunks/6773.4773329377a39fc3.js",revision:"4773329377a39fc3"},{url:"/_next/static/chunks/6802.1810013b67c52cd5.js",revision:"1810013b67c52cd5"},{url:"/_next/static/chunks/6820.2d137fa098b7a738.js",revision:"2d137fa098b7a738"},{url:"/_next/static/chunks/6910.6cb9899827cdfac5.js",revision:"6cb9899827cdfac5"},{url:"/_next/static/chunks/6937.06b2cbd5d20d2174.js",revision:"06b2cbd5d20d2174"},{url:"/_next/static/chunks/6991.be0212d2d320173c.js",revision:"be0212d2d320173c"},{url:"/_next/static/chunks/7001.c72447cd49593124.js",revision:"c72447cd49593124"},{url:"/_next/static/chunks/7039.54c298450f6f3215.js",revision:"54c298450f6f3215"},{url:"/_next/static/chunks/7061.608a4e9d4bf3dcce.js",revision:"608a4e9d4bf3dcce"},{url:"/_next/static/chunks/7090.eac3a71d663c7b2c.js",revision:"eac3a71d663c7b2c"},{url:"/_next/static/chunks/710.a870f068ffd11edf.js",revision:"a870f068ffd11edf"},{url:"/_next/static/chunks/7118.41fdb3818f10ce06.js",revision:"41fdb3818f10ce06"},{url:"/_next/static/chunks/7213.d8a3150d04a604bc.js",revision:"d8a3150d04a604bc"},{url:"/_next/static/chunks/7268.c03c1a6ee47a8f88.js",revision:"c03c1a6ee47a8f88"},{url:"/_next/static/chunks/7282.39753d05c9bd9bd2.js",revision:"39753d05c9bd9bd2"},{url:"/_next/static/chunks/7311-97a4041a644f0423.js",revision:"97a4041a644f0423"},{url:"/_next/static/chunks/7315.3ca5dd95b74450ea.js",revision:"3ca5dd95b74450ea"},{url:"/_next/static/chunks/7365.72718ce4ca51b05b.js",revision:"72718ce4ca51b05b"},{url:"/_next/static/chunks/7370.ab056e5d030e94cf.js",revision:"ab056e5d030e94cf"},{url:"/_next/static/chunks/7421.6e55431a3f7b261d.js",revision:"6e55431a3f7b261d"},{url:"/_next/static/chunks/7431.eb1688d7a102d470.js",revision:"eb1688d7a102d470"},{url:"/_next/static/chunks/7434.24f89358a84d896c.js",revision:"24f89358a84d896c"},{url:"/_next/static/chunks/7475.0017763814cf5003.js",revision:"0017763814cf5003"},{url:"/_next/static/chunks/7525.f7c93eb403c6c9c0.js",revision:"f7c93eb403c6c9c0"},{url:"/_next/static/chunks/758.b8b4c9d9c7352c21.js",revision:"b8b4c9d9c7352c21"},{url:"/_next/static/chunks/7590.5339f77c17d3d934.js",revision:"5339f77c17d3d934"},{url:"/_next/static/chunks/75fc9c18.0061c64dcc709f97.js",revision:"0061c64dcc709f97"},{url:"/_next/static/chunks/7601.1bdb63794564ce90.js",revision:"1bdb63794564ce90"},{url:"/_next/static/chunks/7663.be47fb66e04e4efc.js",revision:"be47fb66e04e4efc"},{url:"/_next/static/chunks/7719.adfc31635f91aab7.js",revision:"adfc31635f91aab7"},{url:"/_next/static/chunks/7741.109724b88fd949a6.js",revision:"109724b88fd949a6"},{url:"/_next/static/chunks/775.454fff4e71f3ddfe.js",revision:"454fff4e71f3ddfe"},{url:"/_next/static/chunks/7762.b997013a52e9b865.js",revision:"b997013a52e9b865"},{url:"/_next/static/chunks/7809-f79779a263ef0128.js",revision:"f79779a263ef0128"},{url:"/_next/static/chunks/781-82bd3d64e9a43297.js",revision:"82bd3d64e9a43297"},{url:"/_next/static/chunks/7917.d0a43af9dcac157e.js",revision:"d0a43af9dcac157e"},{url:"/_next/static/chunks/7949.1f07c0453b41cf4b.js",revision:"1f07c0453b41cf4b"},{url:"/_next/static/chunks/7988.264688b19c03433e.js",revision:"264688b19c03433e"},{url:"/_next/static/chunks/7996.43db5d206bbc5b63.js",revision:"43db5d206bbc5b63"},{url:"/_next/static/chunks/8007.6958f6f4c9375211.js",revision:"6958f6f4c9375211"},{url:"/_next/static/chunks/8014-630c10636585724e.js",revision:"630c10636585724e"},{url:"/_next/static/chunks/8029.aa6c08cba91dd332.js",revision:"aa6c08cba91dd332"},{url:"/_next/static/chunks/8088.375aba82a2be19d7.js",revision:"375aba82a2be19d7"},{url:"/_next/static/chunks/8091-39a514101b9fc0cb.js",revision:"39a514101b9fc0cb"},{url:"/_next/static/chunks/8142.d8e6c66ac26970a0.js",revision:"d8e6c66ac26970a0"},{url:"/_next/static/chunks/8171.da41f4d3690366fc.js",revision:"da41f4d3690366fc"},{url:"/_next/static/chunks/8244.fd62cfe367b02a39.js",revision:"fd62cfe367b02a39"},{url:"/_next/static/chunks/8283.f41216fedc310fb2.js",revision:"f41216fedc310fb2"},{url:"/_next/static/chunks/8290-37d6d69ce5816e83.js",revision:"37d6d69ce5816e83"},{url:"/_next/static/chunks/8393.4276c63baa000f93.js",revision:"4276c63baa000f93"},{url:"/_next/static/chunks/8513.532bf7a6fabe4d46.js",revision:"532bf7a6fabe4d46"},{url:"/_next/static/chunks/856.71a64ab75d0063ca.js",revision:"71a64ab75d0063ca"},{url:"/_next/static/chunks/8561.e0ae2c126e26850c.js",revision:"e0ae2c126e26850c"},{url:"/_next/static/chunks/863.aad01f55a552c779.js",revision:"aad01f55a552c779"},{url:"/_next/static/chunks/8695.be180477a1376288.js",revision:"be180477a1376288"},{url:"/_next/static/chunks/870.c1277ad0599a1203.js",revision:"c1277ad0599a1203"},{url:"/_next/static/chunks/8714.2f7cc96d5ef43187.js",revision:"2f7cc96d5ef43187"},{url:"/_next/static/chunks/8725.c744c0f0e95729c6.js",revision:"c744c0f0e95729c6"},{url:"/_next/static/chunks/8731-f87a6199cd99d247.js",revision:"f87a6199cd99d247"},{url:"/_next/static/chunks/8770.44d2f8c73be18acf.js",revision:"44d2f8c73be18acf"},{url:"/_next/static/chunks/8864.8a83e20879cd9f99.js",revision:"8a83e20879cd9f99"},{url:"/_next/static/chunks/889.64194b207c6ed4a5.js",revision:"64194b207c6ed4a5"},{url:"/_next/static/chunks/8910.ec6846732bff95bc.js",revision:"ec6846732bff95bc"},{url:"/_next/static/chunks/8915.056c1402f901ae7d.js",revision:"056c1402f901ae7d"},{url:"/_next/static/chunks/9069.7c82d20fa1ae29ef.js",revision:"7c82d20fa1ae29ef"},{url:"/_next/static/chunks/9071.8c9b70f05e2417d6.js",revision:"8c9b70f05e2417d6"},{url:"/_next/static/chunks/9073.582749f939386870.js",revision:"582749f939386870"},{url:"/_next/static/chunks/9095.5905ace8942e6b3c.js",revision:"5905ace8942e6b3c"},{url:"/_next/static/chunks/9121.b49c2c698eb6b977.js",revision:"b49c2c698eb6b977"},{url:"/_next/static/chunks/9153.85a8e643b4f49298.js",revision:"85a8e643b4f49298"},{url:"/_next/static/chunks/9208.dd6f3636e941c1c1.js",revision:"dd6f3636e941c1c1"},{url:"/_next/static/chunks/9232.61d440e4c3b2b427.js",revision:"61d440e4c3b2b427"},{url:"/_next/static/chunks/925-d7c244cb862e85a2.js",revision:"d7c244cb862e85a2"},{url:"/_next/static/chunks/9266.372e5db7719adfb3.js",revision:"372e5db7719adfb3"},{url:"/_next/static/chunks/9296.4f23080e808bc92e.js",revision:"4f23080e808bc92e"},{url:"/_next/static/chunks/9558.9bf5494ebdf03040.js",revision:"9bf5494ebdf03040"},{url:"/_next/static/chunks/9607.366af86ac9696739.js",revision:"366af86ac9696739"},{url:"/_next/static/chunks/9614.c1650e4453881056.js",revision:"c1650e4453881056"},{url:"/_next/static/chunks/9713.f1d5b41171c6487d.js",revision:"f1d5b41171c6487d"},{url:"/_next/static/chunks/9781.7a6517b3f4614b45.js",revision:"7a6517b3f4614b45"},{url:"/_next/static/chunks/9790.2efbb6c5a33cf2b9.js",revision:"2efbb6c5a33cf2b9"},{url:"/_next/static/chunks/9816-145e77cd22dd8dc2.js",revision:"145e77cd22dd8dc2"},{url:"/_next/static/chunks/9831.296c1ea16c1953c3.js",revision:"296c1ea16c1953c3"},{url:"/_next/static/chunks/9876.db0e8d517d997296.js",revision:"db0e8d517d997296"},{url:"/_next/static/chunks/9915-e77ea0669963af6c.js",revision:"e77ea0669963af6c"},{url:"/_next/static/chunks/9918.d512051a993f713f.js",revision:"d512051a993f713f"},{url:"/_next/static/chunks/9963-86005becdfd637bf.js",revision:"86005becdfd637bf"},{url:"/_next/static/chunks/9972.fd259588474eb11b.js",revision:"fd259588474eb11b"},{url:"/_next/static/chunks/9991.5a7ce6126828d349.js",revision:"5a7ce6126828d349"},{url:"/_next/static/chunks/d6e1aeb5-1dedc2fa9ee4bfad.js",revision:"1dedc2fa9ee4bfad"},{url:"/_next/static/chunks/ee8b1517-f443ed7cc020dd3d.js",revision:"f443ed7cc020dd3d"},{url:"/_next/static/chunks/framework-aec4381329cec0e4.js",revision:"aec4381329cec0e4"},{url:"/_next/static/chunks/main-9b0eb83493b504df.js",revision:"9b0eb83493b504df"},{url:"/_next/static/chunks/pages/_app-4c539d5d37f6697a.js",revision:"4c539d5d37f6697a"},{url:"/_next/static/chunks/pages/_error-82b79221b9ed784b.js",revision:"82b79221b9ed784b"},{url:"/_next/static/chunks/pages/embed/chat/readonly-dcdbed43fd008a83.js",revision:"dcdbed43fd008a83"},{url:"/_next/static/chunks/pages/embed/chat/readwrite-c70a0abcdad88e48.js",revision:"c70a0abcdad88e48"},{url:"/_next/static/chunks/pages/embed/video-03d95a275b93f5d7.js",revision:"03d95a275b93f5d7"},{url:"/_next/static/chunks/pages/index-e0d764bd1d913b03.js",revision:"e0d764bd1d913b03"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-0565ff707673a3ef.js",revision:"0565ff707673a3ef"},{url:"/_next/static/css/076a92644bd4ab4a.css",revision:"076a92644bd4ab4a"},{url:"/_next/static/css/34443d0a6bf8e45a.css",revision:"34443d0a6bf8e45a"},{url:"/_next/static/css/3961db53f244475a.css",revision:"3961db53f244475a"},{url:"/_next/static/css/45f2f9266bd5d167.css",revision:"45f2f9266bd5d167"},{url:"/_next/static/css/4d949a8f962451f2.css",revision:"4d949a8f962451f2"},{url:"/_next/static/css/69833ed6d30660d6.css",revision:"69833ed6d30660d6"},{url:"/_next/static/css/7ec061ff9f11cfdc.css",revision:"7ec061ff9f11cfdc"},{url:"/_next/static/css/8d82b4860dc81657.css",revision:"8d82b4860dc81657"},{url:"/_next/static/css/99af5bf0efde9280.css",revision:"99af5bf0efde9280"},{url:"/_next/static/css/9baa17a5919ecd88.css",revision:"9baa17a5919ecd88"},{url:"/_next/static/css/a045bc5aba93d2f4.css",revision:"a045bc5aba93d2f4"},{url:"/_next/static/css/a71270b2ce3479b2.css",revision:"a71270b2ce3479b2"},{url:"/_next/static/css/a8ea465af00e6ed7.css",revision:"a8ea465af00e6ed7"},{url:"/_next/static/css/bddc166194a7335d.css",revision:"bddc166194a7335d"},{url:"/_next/static/css/c83ba9df1f412b95.css",revision:"c83ba9df1f412b95"},{url:"/_next/static/css/cecfd0bd0892d605.css",revision:"cecfd0bd0892d605"},{url:"/_next/static/css/dddf64363cad8e27.css",revision:"dddf64363cad8e27"},{url:"/_next/static/css/ed28f196ebbc4ea9.css",revision:"ed28f196ebbc4ea9"},{url:"/_next/static/media/airplay.c25573d0.svg",revision:"c25573d0"},{url:"/_next/static/media/inter-cyrillic-300-normal.298e718b.woff",revision:"298e718b"},{url:"/_next/static/media/inter-cyrillic-300-normal.2d6195a9.woff2",revision:"2d6195a9"},{url:"/_next/static/media/inter-cyrillic-400-normal.5122dff0.woff2",revision:"5122dff0"},{url:"/_next/static/media/inter-cyrillic-400-normal.8cbf7092.woff",revision:"8cbf7092"},{url:"/_next/static/media/inter-cyrillic-600-normal.20cfdfd2.woff",revision:"20cfdfd2"},{url:"/_next/static/media/inter-cyrillic-600-normal.9f2082d5.woff2",revision:"9f2082d5"},{url:"/_next/static/media/inter-cyrillic-800-normal.c9f7c98d.woff",revision:"c9f7c98d"},{url:"/_next/static/media/inter-cyrillic-800-normal.f0070c7d.woff2",revision:"f0070c7d"},{url:"/_next/static/media/inter-cyrillic-ext-300-normal.65fcfcbf.woff2",revision:"65fcfcbf"},{url:"/_next/static/media/inter-cyrillic-ext-300-normal.6e17c5ce.woff",revision:"6e17c5ce"},{url:"/_next/static/media/inter-cyrillic-ext-400-normal.06b6faa3.woff2",revision:"06b6faa3"},{url:"/_next/static/media/inter-cyrillic-ext-400-normal.0c785d16.woff",revision:"0c785d16"},{url:"/_next/static/media/inter-cyrillic-ext-600-normal.4eb7a897.woff2",revision:"4eb7a897"},{url:"/_next/static/media/inter-cyrillic-ext-600-normal.d0ef086c.woff",revision:"d0ef086c"},{url:"/_next/static/media/inter-cyrillic-ext-800-normal.4dbf28ad.woff",revision:"4dbf28ad"},{url:"/_next/static/media/inter-cyrillic-ext-800-normal.f40e584a.woff2",revision:"f40e584a"},{url:"/_next/static/media/inter-greek-300-normal.162ae994.woff",revision:"162ae994"},{url:"/_next/static/media/inter-greek-300-normal.2bd8943a.woff2",revision:"2bd8943a"},{url:"/_next/static/media/inter-greek-400-normal.21a04137.woff",revision:"21a04137"},{url:"/_next/static/media/inter-greek-400-normal.d1deb2fe.woff2",revision:"d1deb2fe"},{url:"/_next/static/media/inter-greek-600-normal.11cc40f0.woff",revision:"11cc40f0"},{url:"/_next/static/media/inter-greek-600-normal.eff3b663.woff2",revision:"eff3b663"},{url:"/_next/static/media/inter-greek-800-normal.c17e275b.woff",revision:"c17e275b"},{url:"/_next/static/media/inter-greek-800-normal.fd6e481c.woff2",revision:"fd6e481c"},{url:"/_next/static/media/inter-greek-ext-300-normal.1040b196.woff2",revision:"1040b196"},{url:"/_next/static/media/inter-greek-ext-300-normal.e76c0ea8.woff",revision:"e76c0ea8"},{url:"/_next/static/media/inter-greek-ext-400-normal.2271c2a1.woff2",revision:"2271c2a1"},{url:"/_next/static/media/inter-greek-ext-400-normal.9ad92a78.woff",revision:"9ad92a78"},{url:"/_next/static/media/inter-greek-ext-600-normal.04ef07b9.woff2",revision:"04ef07b9"},{url:"/_next/static/media/inter-greek-ext-600-normal.249a715f.woff",revision:"249a715f"},{url:"/_next/static/media/inter-greek-ext-800-normal.0344056d.woff",revision:"0344056d"},{url:"/_next/static/media/inter-greek-ext-800-normal.c7813f38.woff2",revision:"c7813f38"},{url:"/_next/static/media/inter-latin-300-normal.7886bf65.woff",revision:"7886bf65"},{url:"/_next/static/media/inter-latin-300-normal.9c0edf75.woff2",revision:"9c0edf75"},{url:"/_next/static/media/inter-latin-400-normal.493934f7.woff2",revision:"493934f7"},{url:"/_next/static/media/inter-latin-400-normal.5a243e9a.woff",revision:"5a243e9a"},{url:"/_next/static/media/inter-latin-600-normal.4a896454.woff",revision:"4a896454"},{url:"/_next/static/media/inter-latin-600-normal.a3e93aa0.woff2",revision:"a3e93aa0"},{url:"/_next/static/media/inter-latin-800-normal.1c3ff413.woff2",revision:"1c3ff413"},{url:"/_next/static/media/inter-latin-800-normal.4ec1c074.woff",revision:"4ec1c074"},{url:"/_next/static/media/inter-latin-ext-300-normal.72d8b28f.woff",revision:"72d8b28f"},{url:"/_next/static/media/inter-latin-ext-300-normal.e5c2b506.woff2",revision:"e5c2b506"},{url:"/_next/static/media/inter-latin-ext-400-normal.261aa6d4.woff2",revision:"261aa6d4"},{url:"/_next/static/media/inter-latin-ext-400-normal.97c153a0.woff",revision:"97c153a0"},{url:"/_next/static/media/inter-latin-ext-600-normal.0a04c3cd.woff2",revision:"0a04c3cd"},{url:"/_next/static/media/inter-latin-ext-600-normal.fd851100.woff",revision:"fd851100"},{url:"/_next/static/media/inter-latin-ext-800-normal.8bb395b7.woff2",revision:"8bb395b7"},{url:"/_next/static/media/inter-latin-ext-800-normal.94943489.woff",revision:"94943489"},{url:"/_next/static/media/inter-vietnamese-300-normal.67c85413.woff",revision:"67c85413"},{url:"/_next/static/media/inter-vietnamese-300-normal.e33128e3.woff2",revision:"e33128e3"},{url:"/_next/static/media/inter-vietnamese-400-normal.668d9df6.woff",revision:"668d9df6"},{url:"/_next/static/media/inter-vietnamese-400-normal.ebde713a.woff2",revision:"ebde713a"},{url:"/_next/static/media/inter-vietnamese-600-normal.df39f196.woff",revision:"df39f196"},{url:"/_next/static/media/inter-vietnamese-600-normal.eb82de1d.woff2",revision:"eb82de1d"},{url:"/_next/static/media/inter-vietnamese-800-normal.1925759d.woff2",revision:"1925759d"},{url:"/_next/static/media/inter-vietnamese-800-normal.f2b1a298.woff",revision:"f2b1a298"},{url:"/_next/static/media/poppins-devanagari-400-normal.87c72f23.woff2",revision:"87c72f23"},{url:"/_next/static/media/poppins-devanagari-400-normal.f2c29400.woff",revision:"f2c29400"},{url:"/_next/static/media/poppins-devanagari-600-normal.3828f203.woff2",revision:"3828f203"},{url:"/_next/static/media/poppins-devanagari-600-normal.6def6ad7.woff",revision:"6def6ad7"},{url:"/_next/static/media/poppins-latin-400-normal.74033fb9.woff",revision:"74033fb9"},{url:"/_next/static/media/poppins-latin-400-normal.916d3686.woff2",revision:"916d3686"},{url:"/_next/static/media/poppins-latin-600-normal.94625d71.woff",revision:"94625d71"},{url:"/_next/static/media/poppins-latin-600-normal.d8692086.woff2",revision:"d8692086"},{url:"/_next/static/media/poppins-latin-ext-400-normal.591327bf.woff2",revision:"591327bf"},{url:"/_next/static/media/poppins-latin-ext-400-normal.687cae43.woff",revision:"687cae43"},{url:"/_next/static/media/poppins-latin-ext-600-normal.10939fee.woff2",revision:"10939fee"},{url:"/_next/static/media/poppins-latin-ext-600-normal.22fff013.woff",revision:"22fff013"},{url:"/favicon.ico",revision:"2f3f8d056ba7cca2dafbdeb51b2d793c"},{url:"/fediverse-white.png",revision:"203a177d28810e5d9e35dd3478bd5d17"},{url:"/fonts/inter/Inter-Black.woff",revision:"d0b121f3a9d3d88afdfd6902d31ee9a0"},{url:"/fonts/inter/Inter-Black.woff2",revision:"661569afe57a38e1529a775a465da20b"},{url:"/fonts/inter/Inter-BlackItalic.woff",revision:"e3329b2b90e1f9bcafd4a36604215dc1"},{url:"/fonts/inter/Inter-BlackItalic.woff2",revision:"a3cc36c89047d530522fc999a22cce54"},{url:"/fonts/inter/Inter-Bold.woff",revision:"99a0d9a7e4c99c17bfdd94a22a5cf94e"},{url:"/fonts/inter/Inter-Bold.woff2",revision:"444a7284663a3bc886683eb81450b294"},{url:"/fonts/inter/Inter-BoldItalic.woff",revision:"3aa31f7356ea9db132b3b2bd8a65df44"},{url:"/fonts/inter/Inter-BoldItalic.woff2",revision:"96284e2a02af46d9ffa2d189eaad5483"},{url:"/fonts/inter/Inter-ExtraBold.woff",revision:"ab70688a1c9d6525584b123575f6c0a5"},{url:"/fonts/inter/Inter-ExtraBold.woff2",revision:"37da9eecf61ebced804b266b14eef98e"},{url:"/fonts/inter/Inter-ExtraBoldItalic.woff",revision:"728a4c7df3ed1b2bc077010063f9ef1c"},{url:"/fonts/inter/Inter-ExtraBoldItalic.woff2",revision:"fcc7d60ef790b43eb520fdc5c7348799"},{url:"/fonts/inter/Inter-ExtraLight.woff",revision:"dd19efda9c6e88ad83a5b052915899f7"},{url:"/fonts/inter/Inter-ExtraLight.woff2",revision:"b3b2ed6a20c538e9c809f4df5c04ac2a"},{url:"/fonts/inter/Inter-ExtraLightItalic.woff",revision:"a6566ae6fa3c58b48f888d7c9c234d52"},{url:"/fonts/inter/Inter-ExtraLightItalic.woff2",revision:"079cd1e71cd4f73bef86f72deced6d03"},{url:"/fonts/inter/Inter-Italic.woff",revision:"f137a90d649b6ab032563856df323f40"},{url:"/fonts/inter/Inter-Italic.woff2",revision:"fd26ff23f831db9ae85a805386529385"},{url:"/fonts/inter/Inter-Light.woff",revision:"5d3776eb78374b0ebbce639adadf73d1"},{url:"/fonts/inter/Inter-Light.woff2",revision:"780dd2adb71f18d7a357ab7f65e881d6"},{url:"/fonts/inter/Inter-LightItalic.woff",revision:"d0fa7cbcf9ca5edb6ebe41fd8d49e1fb"},{url:"/fonts/inter/Inter-LightItalic.woff2",revision:"df29c53403b2e13dc56df3e291c32f09"},{url:"/fonts/inter/Inter-Medium.woff",revision:"c0638bea87a05fdfa2bb3bba2efe54e4"},{url:"/fonts/inter/Inter-Medium.woff2",revision:"75db5319e7e87c587019a5df08d7272c"},{url:"/fonts/inter/Inter-MediumItalic.woff",revision:"a1b588627dd12c556a7e3cd81e400ecf"},{url:"/fonts/inter/Inter-MediumItalic.woff2",revision:"f1e11535e56c67698e263673f625103e"},{url:"/fonts/inter/Inter-Regular.woff",revision:"3ac83020fe53b617b79b5e2ad66764af"},{url:"/fonts/inter/Inter-Regular.woff2",revision:"dc131113894217b5031000575d9de002"},{url:"/fonts/inter/Inter-SemiBold.woff",revision:"66a68ffab2bf40553e847e8f025f75be"},{url:"/fonts/inter/Inter-SemiBold.woff2",revision:"007ad31a53f4ab3f58ee74f2308482ce"},{url:"/fonts/inter/Inter-SemiBoldItalic.woff",revision:"6cd13dbd150ac0c7f337a2939a3d50a8"},{url:"/fonts/inter/Inter-SemiBoldItalic.woff2",revision:"3031b683bafcd9ded070c00d784f4626"},{url:"/fonts/inter/Inter-Thin.woff",revision:"b068b7189120a6626e3cfe2a8b917d0f"},{url:"/fonts/inter/Inter-Thin.woff2",revision:"d52e5e38715502616522eb3e9963b69b"},{url:"/fonts/inter/Inter-ThinItalic.woff",revision:"97bec98832c92f799aeebf670b83ff6c"},{url:"/fonts/inter/Inter-ThinItalic.woff2",revision:"a9780071b7f498c1523602910a5ef242"},{url:"/fonts/inter/Inter-italic.var.woff2",revision:"1f7ca6383ea7c74a7f5ddd76c3d3cef2"},{url:"/fonts/inter/Inter-roman.var.woff2",revision:"66c6e40883646a7ad993108b2ce2da32"},{url:"/fonts/inter/Inter.var.woff2",revision:"8dd26c3dd0125fb16ce19b8f5e8273fb"},{url:"/fonts/inter/inter.css",revision:"178297900cc42c19e1e47fbc2487abe5"},{url:"/img/favicon/android-icon-144x144.png",revision:"3de56fea2ea05c5cb8e42a21d63de48e"},{url:"/img/favicon/android-icon-192x192.png",revision:"dd8a4c74ec2be516a57d40df25540ab8"},{url:"/img/favicon/android-icon-36x36.png",revision:"77887a8a93baed7eaeb316be4b31a7f9"},{url:"/img/favicon/android-icon-48x48.png",revision:"d1ff9fb0528cb9100ad5ee5fd7ece71f"},{url:"/img/favicon/android-icon-72x72.png",revision:"9505e8ef62d1b2d0783adb8d958e8007"},{url:"/img/favicon/android-icon-96x96.png",revision:"8f17da2436060c779c27f3ffb5eac999"},{url:"/img/favicon/apple-icon-114x114.png",revision:"efd8a26a33f16975715ce8c56169d730"},{url:"/img/favicon/apple-icon-120x120.png",revision:"56dcc09f7674f293595117b3181dcf88"},{url:"/img/favicon/apple-icon-144x144.png",revision:"3de56fea2ea05c5cb8e42a21d63de48e"},{url:"/img/favicon/apple-icon-152x152.png",revision:"368ae8346bc9bb8d3f89ef48acb094f9"},{url:"/img/favicon/apple-icon-180x180.png",revision:"c691e02bc0b7df6cb31da017b420cba5"},{url:"/img/favicon/apple-icon-57x57.png",revision:"90555efc26d3a34a3979c133868f9d34"},{url:"/img/favicon/apple-icon-60x60.png",revision:"06dda52763aee5612d79999966488f79"},{url:"/img/favicon/apple-icon-72x72.png",revision:"9505e8ef62d1b2d0783adb8d958e8007"},{url:"/img/favicon/apple-icon-76x76.png",revision:"fedee38a4cf4d5918f8dbd1657c709c9"},{url:"/img/favicon/apple-icon-precomposed.png",revision:"8ad8bbee4eb631f76e89807878622aed"},{url:"/img/favicon/apple-icon.png",revision:"fb7eaf4e8ef1e852bd28b08f46ae6309"},{url:"/img/favicon/browserconfig.xml",revision:"653d077300a12f09a69caeea7a8947f8"},{url:"/img/favicon/favicon-16x16.png",revision:"3dba5d08ad8a2a4de265448afa2fd03c"},{url:"/img/favicon/favicon-32x32.png",revision:"0ae932cc803789d645a2409cb67db049"},{url:"/img/favicon/favicon-96x96.png",revision:"8f17da2436060c779c27f3ffb5eac999"},{url:"/img/favicon/ms-icon-144x144.png",revision:"3de56fea2ea05c5cb8e42a21d63de48e"},{url:"/img/favicon/ms-icon-150x150.png",revision:"6224c535c86d618e36a97da48e52056b"},{url:"/img/favicon/ms-icon-310x310.png",revision:"c391dc97d4c01177bd07291c1f694063"},{url:"/img/favicon/ms-icon-70x70.png",revision:"4cb3f77034cab3de7b60cd7d954042d1"},{url:"/img/fediverse-black.png",revision:"b5ede08246f4a691dff8dcefe39c984d"},{url:"/img/fediverse-color.png",revision:"6264c2ac70632db6e3447581da838d1b"},{url:"/img/follow.svg",revision:"8f185615cd7242792c8bd73b359b2498"},{url:"/img/indieauth.png",revision:"7fbf89da18a721dc25a16393b8a62e82"},{url:"/img/like.svg",revision:"2af8fcf2ffc5a028b9b300538a5e766e"},{url:"/img/repost.svg",revision:"12830cd3f1099b40670e8a69b40efa27"},{url:"/manifest.json",revision:"3ebf89ccef77c69bcd65ed8757086c99"},{url:"/serviceWorker.js",revision:"0fefbecf45aefe5354045cbf926e6a25"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:i,event:c,state:s})=>i&&"opaqueredirect"===i.type?new Response(i.body,{status:200,statusText:"OK",headers:i.headers}):i}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const i=e.pathname;return!i.startsWith("/api/auth/")&&!!i.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET"),e.registerRoute(/\.(?:ts|m3u8)$/i,new e.NetworkOnly,"GET"),self.__WB_DISABLE_DEV_LOGS=!0}));
