# [1.12.0](https://github.com/PlaceOS/backoffice/compare/v1.11.0...v1.12.0) (2022-10-20)


### Bug Fixes

* **admin:** fix to validator changes for tenant delegation ([b6487f8](https://github.com/PlaceOS/backoffice/commit/b6487f816898139c7baf551bccf46761323b4e30))
* **admin:** make scope required for api keys ([63b99a4](https://github.com/PlaceOS/backoffice/commit/63b99a4214f0035c905ffd1bf4b1190b4a4674fb))
* **admin:** remove conference type from request when empty ([943c4ec](https://github.com/PlaceOS/backoffice/commit/943c4ec2ae1a6ca1ce7e00b932be0bc06a764406))
* **admin:** tweak outlook tenant config ([91c9fd8](https://github.com/PlaceOS/backoffice/commit/91c9fd8f101c0ff237ce4a4eab12bd2cefe2f3a3))
* **admin:** tweak tenant form ([3fd1336](https://github.com/PlaceOS/backoffice/commit/3fd133627b81ae222cd0310ce3dd67b882d16bdc))
* **admin:** tweak tenant form ([ce76740](https://github.com/PlaceOS/backoffice/commit/ce76740dc251cbd3c8c8f875d5b4f465d624eb0c))
* **admin:** tweaks to tenant form ([fe7a270](https://github.com/PlaceOS/backoffice/commit/fe7a270776f254a761930c7ea8be4ad7610c4659))
* **systems:** truncate long emails ([6f97ba6](https://github.com/PlaceOS/backoffice/commit/6f97ba6bb736fc49e7bb1dc9739c701da55880e1))
* **uploads:** fix dropping files to upload ([#199](https://github.com/PlaceOS/backoffice/issues/199)) ([edfd8a6](https://github.com/PlaceOS/backoffice/commit/edfd8a63d4767830629ef55538f8d8d7e738159b))


### Features

* **admin:** add ability to select scopes from autocomplete for api keys ([#289](https://github.com/PlaceOS/backoffice/issues/289)) ([2f8eff9](https://github.com/PlaceOS/backoffice/commit/2f8eff91aa990d28887ee9e9ff2283e88c07dd0a))
* **admin:** add outlook config to tenant ([f8e770c](https://github.com/PlaceOS/backoffice/commit/f8e770cc2246bcd1f563707a28b2aa734e80de44))
* **admin:** add service account field to tenant form ([10a651d](https://github.com/PlaceOS/backoffice/commit/10a651d2d2e0f36499320540d3245aed83f2756e))



# [1.11.0](https://github.com/PlaceOS/backoffice/compare/v1.10.0...v1.11.0) (2022-09-29)


### Bug Fixes

* **admin:** fix adding new MQTT brokers ([#247](https://github.com/PlaceOS/backoffice/issues/247)) ([71e8919](https://github.com/PlaceOS/backoffice/commit/71e891962957743d02f79f2536763dbe1965ec04))
* **admin:** fix creating tenant with no booking limits ([87343c8](https://github.com/PlaceOS/backoffice/commit/87343c81d65398f584910c0383f1dec60fd729d6))
* **admin:** fix deleting staff api tenants ([f2ecd8e](https://github.com/PlaceOS/backoffice/commit/f2ecd8ec192afa56b9a822ee4a3ff2276dd3a5e2))
* **admin:** fix displaying selected user of new API key form ([#246](https://github.com/PlaceOS/backoffice/issues/246)) ([139e3a0](https://github.com/PlaceOS/backoffice/commit/139e3a0e93317c3f0d091499896795d270541907))
* **admin:** fix loading of cluster processes ([b476e3d](https://github.com/PlaceOS/backoffice/commit/b476e3d55d214b5bd482e2b9d17ba55c88306582))
* **admin:** fix required display for conference type on staff tenant form ([4a4e92e](https://github.com/PlaceOS/backoffice/commit/4a4e92e6a113c4f39a6ae984c6e596b77313a122))
* **admin:** fix table for brokers on smaller screens ([e8daa40](https://github.com/PlaceOS/backoffice/commit/e8daa40dbd1ab9b817b3863dd87f70411b0497b3))
* **admin:** fix to user name display ([171142c](https://github.com/PlaceOS/backoffice/commit/171142c91594b613e2f6664971f5ae35fcdd237f))
* **admin:** hide delegate checkbox for google platform ([e7b9ca4](https://github.com/PlaceOS/backoffice/commit/e7b9ca4b91d799ca53361b19352d4792cd3894f5))
* **admin:** minor tweak to previous edge logic ([d7855a5](https://github.com/PlaceOS/backoffice/commit/d7855a5908d2fcbb75ae867a47b1d0e7e1fa8c96))
* **admin:** tweak changelog modal styling ([7732218](https://github.com/PlaceOS/backoffice/commit/773221845a60b2928872a4d74883cf0ee6b899be))
* **admin:** tweak handling of fields for staff api tenants ([aa8d88a](https://github.com/PlaceOS/backoffice/commit/aa8d88a85b6038d607111a2e8cb051f548c4508d))
* **admin:** tweak handling of staff tenant fields ([b3c746f](https://github.com/PlaceOS/backoffice/commit/b3c746fa6c81792c22ba24f69a2cfbcf5e181c12))
* **admin:** tweak version details template ([be715f0](https://github.com/PlaceOS/backoffice/commit/be715f0dfc53513e6242007b08c4e4a8a5c5da17))
* **alert-dashboard:** fix requesting secure websocket for mqtt ([e7e16c5](https://github.com/PlaceOS/backoffice/commit/e7e16c5d3a959000888aba27744be85fdac78d93))
* **alert-dashboard:** tweak url path for mqtt websocket ([8c58591](https://github.com/PlaceOS/backoffice/commit/8c585911aa0e2b591835a27f6217175922b4fd42))
* **backoffice:** tweak url validation ([a1d8ede](https://github.com/PlaceOS/backoffice/commit/a1d8edec68a98349f1381aa3fddfde96249b6d0e))
* **common:** simplify URL validation ([7bb6330](https://github.com/PlaceOS/backoffice/commit/7bb633087438cf224a5401c94a7efcb272cc6ab1))
* **common:** update logic for parsing CSV into JSON ([e3beaa7](https://github.com/PlaceOS/backoffice/commit/e3beaa793eb8070808d3a0b328ac6ef36a360d43))
* **common:** update URI validators to be case insensitive ([#253](https://github.com/PlaceOS/backoffice/issues/253)) ([f07c96d](https://github.com/PlaceOS/backoffice/commit/f07c96d3433c93bbf6e0ee89409c8f486c08363c))
* **debug:** fix error when formatting date strings for debug messages ([#285](https://github.com/PlaceOS/backoffice/issues/285)) ([9b81a22](https://github.com/PlaceOS/backoffice/commit/9b81a22e7e8920482fe79be82f4c493e130849ba))
* **debug:** hide debug when all bindings removed ([5680746](https://github.com/PlaceOS/backoffice/commit/5680746db3e9b407f322bbca69c9c5f5a9185135))
* **domains:** add id field to auth sources page ([#248](https://github.com/PlaceOS/backoffice/issues/248)) ([64e2972](https://github.com/PlaceOS/backoffice/commit/64e2972402dc426d5d805233dcf91f382f226114))
* **domains:** fix getting domain auth sources ([#244](https://github.com/PlaceOS/backoffice/issues/244)) ([49011ba](https://github.com/PlaceOS/backoffice/commit/49011bac4145a27f898ad8ee4460c0d6db675716))
* **domains:** fix user role on dark mode ([7627514](https://github.com/PlaceOS/backoffice/commit/762751414abf309f6f21725729bf56694efec61a))
* **drivers:** fix device filter text ([40b0936](https://github.com/PlaceOS/backoffice/commit/40b0936950fc38a5a1623c69b448c2e4614955cc))
* **exec:** change default check to nullish coalescing ([#204](https://github.com/PlaceOS/backoffice/issues/204)) ([915e491](https://github.com/PlaceOS/backoffice/commit/915e49197f292fcfaad77285e197c0b650c5b087))
* **exec:** tweak loading overlay for dark mode ([9b3af93](https://github.com/PlaceOS/backoffice/commit/9b3af93452f4b03ef388147dd729c2196f117021))
* fix add item tooltips ([3e23764](https://github.com/PlaceOS/backoffice/commit/3e23764d0f281d5d5135c8022915bdc257741bca))
* fix count indicators for drivers and make state more clear all other uses ([bd36b32](https://github.com/PlaceOS/backoffice/commit/bd36b3255f374e4fd6880aeb7326d74f89224de4))
* fix item options text ([326220e](https://github.com/PlaceOS/backoffice/commit/326220e9a85547d45ecd545fe26697dc82ac53cc))
* fix mobile breakpoint to match tailwind breakpoint ([5387a3b](https://github.com/PlaceOS/backoffice/commit/5387a3b6bf54c365a09c00c0bb20c2b9508094f5))
* fix runtime errors from removing dayjs ([345141f](https://github.com/PlaceOS/backoffice/commit/345141f9b24ffa49a6ff9ef7e1c53bee09641c31))
* fix tab data post changes of domain items and staff tenants ([#52](https://github.com/PlaceOS/backoffice/issues/52)) ([5ae534a](https://github.com/PlaceOS/backoffice/commit/5ae534a1514c076cf9f5fc017bfd1e0df57896bc))
* fix the new button z-indexing ([f7eeb86](https://github.com/PlaceOS/backoffice/commit/f7eeb86f840a2bd6cca44df895bdc35e91448719))
* fix usage of marked package ([0255cc6](https://github.com/PlaceOS/backoffice/commit/0255cc693b0ed5d7907bdaf3afec48a7aaceca83))
* **forms:** handle errors from listing releases/branches ([71d65a0](https://github.com/PlaceOS/backoffice/commit/71d65a0def750b8e324d702ecf8c3964eb01db8c))
* **forms:** list invalid fields on save error ([5ff13bc](https://github.com/PlaceOS/backoffice/commit/5ff13bc62331282e456987ac2f00d088e9b3309b))
* **metadata:** simplify metadata UI into one component ([58b1e4d](https://github.com/PlaceOS/backoffice/commit/58b1e4d8ec2ff3ebeaa510dfe1d04f15105890d0))
* **module:** fix start/stopping a module ([a7cb12f](https://github.com/PlaceOS/backoffice/commit/a7cb12fa14cfe1f3fbcbe6eb4729efb9728fd7fd))
* **repos:** allow selecting branches if release are unavailable ([d770267](https://github.com/PlaceOS/backoffice/commit/d7702670a2a4b4aed5a51069547823e94d5cd78b))
* **repos:** allow settings branch for new repositories ([33ab7cf](https://github.com/PlaceOS/backoffice/commit/33ab7cf86704c0b7bc2fd7d4bc92feb201d8702a))
* **repos:** fix search for commits ([a8a4954](https://github.com/PlaceOS/backoffice/commit/a8a4954bbdad051cbbc7fff3cb5a008cd8777a43))
* **repos:** tweak branch handling for form ([11c1364](https://github.com/PlaceOS/backoffice/commit/11c1364f72b6e07eec30fb24db5a8db60478ac1b))
* **repos:** tweak handling of pulls to repos ([#265](https://github.com/PlaceOS/backoffice/issues/265)) ([e502d88](https://github.com/PlaceOS/backoffice/commit/e502d884a7d8674e75878c32b4913983b0b30e98))
* **repos:** tweak loading of repository branches ([a2c9377](https://github.com/PlaceOS/backoffice/commit/a2c937744c8ea8c0af62e3c18f700c5d7ffb4961))
* **repos:** tweak to commit handling of interface repos ([3c20ceb](https://github.com/PlaceOS/backoffice/commit/3c20cebccb35438d59fbca2cfb0809025cbba63f))
* **settings:** fix display of settings details and metadata details ([1e874c4](https://github.com/PlaceOS/backoffice/commit/1e874c49ff0ac14a8bd9c9a049b71f9217e57be7))
* **systems:** add driver type to module table ([d69ce2d](https://github.com/PlaceOS/backoffice/commit/d69ce2d4d470ad08198cbffb317feee93e0d8622))
* **systems:** add tooltip to debug checkbox ([403078e](https://github.com/PlaceOS/backoffice/commit/403078e716769d180bc13e37a494d1203a4c959c))
* **systems:** display loader when module connected state is undefined ([#283](https://github.com/PlaceOS/backoffice/issues/283)) ([f2fb38f](https://github.com/PlaceOS/backoffice/commit/f2fb38fb0eee2bc28f8e23dffefe5ea965a16721))
* **systems:** fix role display of modules ([#284](https://github.com/PlaceOS/backoffice/issues/284)) ([5d1b205](https://github.com/PlaceOS/backoffice/commit/5d1b20552b2f7fbafc2b59f5c55160eadbf6f34c))
* **systems:** hide modules that are already in a system ([d8cd854](https://github.com/PlaceOS/backoffice/commit/d8cd8548f06684ca32afd2668f76c7b4363695f8))
* **systems:** show module status a pending when loading initial state ([#283](https://github.com/PlaceOS/backoffice/issues/283)) ([563249e](https://github.com/PlaceOS/backoffice/commit/563249eeb420990a971b5f307019c05275777cf8))
* **systems:** tweak columns for module listing ([6701f1f](https://github.com/PlaceOS/backoffice/commit/6701f1fe0fbae5b1c51efa5906578f0beded1932))
* **ui:** add end of list element to item selection component ([cd67df8](https://github.com/PlaceOS/backoffice/commit/cd67df894284b45c7b132e3626bfe48cdca22636))
* **ui:** allow clear of input on selecting items from search component ([#274](https://github.com/PlaceOS/backoffice/issues/274)) ([bcaa5b0](https://github.com/PlaceOS/backoffice/commit/bcaa5b0e90d4e386f05671cbc175b29166884cc2))
* **ui:** fix filtering of item search list ([#272](https://github.com/PlaceOS/backoffice/issues/272)) ([38451c8](https://github.com/PlaceOS/backoffice/commit/38451c8638be10e00ddc0575f2028fa5c78cfa4a))
* **ui:** fix filtering of items in search field ([70c521c](https://github.com/PlaceOS/backoffice/commit/70c521ccedfc40919a926fccbf0330b8f48fc2a7))
* **ui:** fix font css for monaco editor ([2b4e6e5](https://github.com/PlaceOS/backoffice/commit/2b4e6e51d003e68d76f362aef1482d4d449058fd))
* **ui:** fix font issue with settings field ([#286](https://github.com/PlaceOS/backoffice/issues/286)) ([701f0b4](https://github.com/PlaceOS/backoffice/commit/701f0b465e7d522ec120533dd79e4017f0d09712))
* **ui:** fix selecting item from item search field ([9c452f9](https://github.com/PlaceOS/backoffice/commit/9c452f95c3192e8d32cd5e77ca90269c0870dfb5))
* **ui:** fix z-indexing of upload list ([#277](https://github.com/PlaceOS/backoffice/issues/277)) ([0f4dfbd](https://github.com/PlaceOS/backoffice/commit/0f4dfbd1a89e1faea569db25ff1324c6a8c3a388))
* **ui:** set max height for upload list component list ([#273](https://github.com/PlaceOS/backoffice/issues/273)) ([24e1819](https://github.com/PlaceOS/backoffice/commit/24e1819ee95dcc3a32a07c2fa50251ca9f8f6d5d))
* **ui:** show item name instead of display name in selection list ([5f5ea91](https://github.com/PlaceOS/backoffice/commit/5f5ea91c1b9ae42a51f4b41654b7b39091ac9313))
* **ui:** tweak information displayed on item sidebar ([01efbff](https://github.com/PlaceOS/backoffice/commit/01efbff1511dd0570258fbca9645742864157808))
* **ui:** use item name instead of display name for sidebar ([edcfc77](https://github.com/PlaceOS/backoffice/commit/edcfc77bbd3e46d813b0f763668c81869f8b91f1))
* **uploads:** consolidate uploads for system images to use global logic ([#277](https://github.com/PlaceOS/backoffice/issues/277)) ([51da123](https://github.com/PlaceOS/backoffice/commit/51da1235d537689d64c96ff254e9f30819ae8951))
* **validation:** standardise URL validation, fix path check in URL validation ([#253](https://github.com/PlaceOS/backoffice/issues/253)) ([2ff2ea2](https://github.com/PlaceOS/backoffice/commit/2ff2ea22d2d9c0fbb8dd05cbe4d220e9fe9535fd))
* **validation:** tweak validation for URLs ([faab029](https://github.com/PlaceOS/backoffice/commit/faab029a6a5051406d0a7a405cb83be44f723096))
* **zones:** fix typo in links for child zones ([5406832](https://github.com/PlaceOS/backoffice/commit/5406832f8fd611d68822a492f9e81cc3f04c8510))


### Features

* **admin:** add ability to edit staff api tenant's booking limits ([d742c5c](https://github.com/PlaceOS/backoffice/commit/d742c5cea8acba8fb40d7b8906eabf2376136f51))
* **admin:** add booking limits to tenant options ([#254](https://github.com/PlaceOS/backoffice/issues/254)) ([dba83da](https://github.com/PlaceOS/backoffice/commit/dba83dabd52d8fd933379f6adc25a6dcf70ee830))
* **admin:** show changelogs for platform ([d4fe449](https://github.com/PlaceOS/backoffice/commit/d4fe4492b1d81c213e3be71fddb4f664c42eb133))
* **admin:** tweak edge listing to show API instead of having to request it. ([224b556](https://github.com/PlaceOS/backoffice/commit/224b5566234169c61f93de3ab03841e359107f6a))
* **alert-dashboard:** update handling of mqtt data ([63a675d](https://github.com/PlaceOS/backoffice/commit/63a675d3ad15aec52dc2420033d63289d6aba85f))
* **overlays:** allow for more custom confirm messages ([04d978d](https://github.com/PlaceOS/backoffice/commit/04d978d977a97aa81e6fe08d11bc12fb85867b55))
* **repo:** change interfaces repos to select releases instead of branches ([#255](https://github.com/PlaceOS/backoffice/issues/255)) ([97f6ffe](https://github.com/PlaceOS/backoffice/commit/97f6ffe1b8a66732c4598420d3d5e058bdf2c6a4))
* **ui:** add item selection sidebar ([5cb54e0](https://github.com/PlaceOS/backoffice/commit/5cb54e06da4a4029130417becf4609903b8c08e2))
* update metadata to view modified details ([596a0dd](https://github.com/PlaceOS/backoffice/commit/596a0dd1d1e7f98a29ceb41915e9e9f7bd7b4a7f))



# [1.10.0](https://github.com/PlaceOS/backoffice/compare/v1.8.0...v1.10.0) (2022-01-10)


### Bug Fixes

* **admin:** add conference types for staff API tenants ([#233](https://github.com/PlaceOS/backoffice/issues/233)) ([c69fb59](https://github.com/PlaceOS/backoffice/commit/c69fb59d4fc4504224502a9faf729d8c3cd814cb))
* **admin:** add logic for selecting users for api keys ([93769ed](https://github.com/PlaceOS/backoffice/commit/93769edb94a979bc3d7844d33f63ba9bdcc7037f))
* **admin:** allow for editing of staff API tenants ([#170](https://github.com/PlaceOS/backoffice/issues/170)) ([edcfc63](https://github.com/PlaceOS/backoffice/commit/edcfc63f15990ebf017b0d87686078231e8c3061))
* **admin:** clean up display of last API key ([7c76d5a](https://github.com/PlaceOS/backoffice/commit/7c76d5a9b57af46e7aa0e1ff45168711be336548))
* **admin:** cleanup staff API form fields ([#169](https://github.com/PlaceOS/backoffice/issues/169)) ([67f6845](https://github.com/PlaceOS/backoffice/commit/67f6845ce3e740e96dc1e1e0d231a633f7dda440))
* **admin:** fix api key table ([b4bdeea](https://github.com/PlaceOS/backoffice/commit/b4bdeeab088d8cfc1f2cfed982ed82c54f9ca51c))
* **admin:** fix copying and removing keys ([#242](https://github.com/PlaceOS/backoffice/issues/242)) ([4379b92](https://github.com/PlaceOS/backoffice/commit/4379b92c1df418e3d6d58eaa7ff27265545edbf3))
* **admin:** fix dark mode background color ([c3073da](https://github.com/PlaceOS/backoffice/commit/c3073da2cf863e88dbb85aec1f421d99a358bae9))
* **admin:** fix display of scopes for api keys ([b465f5e](https://github.com/PlaceOS/backoffice/commit/b465f5e803cdb8bf1dd79ac65b7104e4e98cb9b1))
* **admin:** fix model for api keys ([3f4bcae](https://github.com/PlaceOS/backoffice/commit/3f4bcaeaad284d6c214fa0417bc8d87606f29f6d))
* **admin:** fix searching for users for api keys ([#229](https://github.com/PlaceOS/backoffice/issues/229)) ([2158ded](https://github.com/PlaceOS/backoffice/commit/2158ded090d274eff32bcc2578b3ca9ffcdd258a))
* **admin:** include api key id in copied string ([a510352](https://github.com/PlaceOS/backoffice/commit/a5103523314bf4bc1d8518dffca91855e8e81745))
* **admin:** minor fixes to some sections ([aa36188](https://github.com/PlaceOS/backoffice/commit/aa36188108c8931f0bc96a44192a525f9cf96e13))
* **admin:** more tweaks to google tenant fields ([#169](https://github.com/PlaceOS/backoffice/issues/169)) ([2200535](https://github.com/PlaceOS/backoffice/commit/22005358d218ff7f14145de7f583f718cc12dd1e))
* **admin:** only key last api key while in admin section ([d6f150f](https://github.com/PlaceOS/backoffice/commit/d6f150ff9ef9b1629be530e84e081a73cf95ccf3))
* **admin:** pass null when permissions not set ([02785b1](https://github.com/PlaceOS/backoffice/commit/02785b153beadb93e5246832ceea11559e8888f3))
* **admin:** show correct field for API key ([7935081](https://github.com/PlaceOS/backoffice/commit/793508148f23963d05076376b8aceb5dca268226))
* **admin:** tweak user searching for API keys ([28f113a](https://github.com/PlaceOS/backoffice/commit/28f113a933ea9fee91289730f555fa62fc526bd6))
* allow localhost in URLs ([#212](https://github.com/PlaceOS/backoffice/issues/212)) ([9f1a887](https://github.com/PlaceOS/backoffice/commit/9f1a887d3cd8f4110210ac1643e80d9a24af8223))
* ask before reloading application to get new version ([d7f97d5](https://github.com/PlaceOS/backoffice/commit/d7f97d561811eee60657b42026ad9c28b9058dd2))
* **auth-sources:** tweak required fields for saml auth source ([#168](https://github.com/PlaceOS/backoffice/issues/168)) ([cc1e25e](https://github.com/PlaceOS/backoffice/commit/cc1e25e7fd25bfb36f71b602063f1ea1d45b6f27))
* **auth:** remove some of the available UI elements for support users ([0b3445e](https://github.com/PlaceOS/backoffice/commit/0b3445e8f434ab1da7ec813065ed5cee8077169b))
* **auth:** wait for 30 seconds for user ([3b7b809](https://github.com/PlaceOS/backoffice/commit/3b7b8093362020b6f08a4de8e69f28ca81fcd33f))
* **backoffice:** fix handling of upload errors ([44b0c50](https://github.com/PlaceOS/backoffice/commit/44b0c50c6e32d2adf730052c6c78fbd510135c1b))
* **bulk-upload:** remove parsing of JSON from pre-upload logic ([2259745](https://github.com/PlaceOS/backoffice/commit/2259745562399ada080afdf713bf3b0ab64d4e9b))
* change hotkey indicators to look like keycaps ([9f31a35](https://github.com/PlaceOS/backoffice/commit/9f31a358a4b6b65adfac1a4c2d62be94e96a1b8e))
* **cluster:** minor fixes to graph ([9fc0e3a](https://github.com/PlaceOS/backoffice/commit/9fc0e3a163994ad7365578f26235208568791cbc))
* **cluster:** styling tweaks ([9d224b8](https://github.com/PlaceOS/backoffice/commit/9d224b83ce413e0cbdb43ba07e4e49f2492c4c2f))
* **common:** ignore hotkeys when text is selected ([#232](https://github.com/PlaceOS/backoffice/issues/232)) ([dc80f8c](https://github.com/PlaceOS/backoffice/commit/dc80f8c091b48a240939a13abdeb1efe903e7513))
* **debug:** change message limit and minor code tweak ([42696d7](https://github.com/PlaceOS/backoffice/commit/42696d71d470e8ca546e9a7ae8f75fdddd5d0668))
* **debug:** fix debug terminal display ([e620f5e](https://github.com/PlaceOS/backoffice/commit/e620f5e89448dad51211d82f18eb3cda1d98310c))
* **debug:** fix z-index of debug window toggle button ([#193](https://github.com/PlaceOS/backoffice/issues/193)) ([de1df82](https://github.com/PlaceOS/backoffice/commit/de1df82769478fd17e78c54631bc13557f60ad6b))
* **debug:** inverse line display and remove scroll to bottom ([9fecfbd](https://github.com/PlaceOS/backoffice/commit/9fecfbd12155e86165733a1af09f83335b334e5a))
* **debug:** minor fix to debug terminal ([b3ab4fc](https://github.com/PlaceOS/backoffice/commit/b3ab4fcbf6cfe29b9dc22ed0d3d4b8dd4f52d530))
* **debug:** simplify processing events ([65dfef6](https://github.com/PlaceOS/backoffice/commit/65dfef6e6799c8b22a8e24503b643059b361a2e8))
* **debug:** simplify removing debug messages ([b624cec](https://github.com/PlaceOS/backoffice/commit/b624cec4bf46ee8fbc742c39283da2df46f092ec))
* **domains:** add URL validation to application form ([#212](https://github.com/PlaceOS/backoffice/issues/212)) ([56e0767](https://github.com/PlaceOS/backoffice/commit/56e0767e2b0c3cf4e4e43955a91e7442b8ea4ae1))
* **domains:** allow custom protocols in URLs ([da47f38](https://github.com/PlaceOS/backoffice/commit/da47f38ce22ed9378f9aeabf09b129c2a721ecd2))
* **domains:** fix default for skip_authorisation ([#212](https://github.com/PlaceOS/backoffice/issues/212)) ([6d3e9fb](https://github.com/PlaceOS/backoffice/commit/6d3e9fb69a507fb3b89d9b106be54a42ba0e3e2d))
* **domains:** fix tab counts ([#101](https://github.com/PlaceOS/backoffice/issues/101)) ([e6bbcc6](https://github.com/PlaceOS/backoffice/commit/e6bbcc63067c4a2739e4f6497f0f204ee9578a48))
* **driver:** fix setting driver type to websocket from URI ([#199](https://github.com/PlaceOS/backoffice/issues/199)) ([4d04143](https://github.com/PlaceOS/backoffice/commit/4d04143f84aa9648e50722762babc254405c9b42))
* **drivers:** add link to repository in about ([#197](https://github.com/PlaceOS/backoffice/issues/197)) ([d824af7](https://github.com/PlaceOS/backoffice/commit/d824af75a0d74ef0cad31d3cbc11a86759e47f33))
* **drivers:** change systems listing for module list ([#124](https://github.com/PlaceOS/backoffice/issues/124)) ([7233782](https://github.com/PlaceOS/backoffice/commit/7233782f6c8d1cdd00c7ff81ea31957158b43d24))
* **drivers:** check for SSH drivers ([#237](https://github.com/PlaceOS/backoffice/issues/237)) ([160f5b9](https://github.com/PlaceOS/backoffice/commit/160f5b930b216dee7807c5d8d0cf0801902330eb))
* **drivers:** convert default settings to YAML ([#196](https://github.com/PlaceOS/backoffice/issues/196)) ([8648359](https://github.com/PlaceOS/backoffice/commit/8648359afae0c95d801b19d6f17eb78bbae1bb17))
* **drivers:** disable submit button while loading driver defaults ([78d4e49](https://github.com/PlaceOS/backoffice/commit/78d4e49169189405f6ea8e6bfb8572fe2cba08ec))
* **exec:** add handling for invalid JSON ([c1aff0d](https://github.com/PlaceOS/backoffice/commit/c1aff0dd7c1f7a23c5847bdd32c8b8faaa749d92))
* **exec:** change default check to nullish coalescing ([#204](https://github.com/PlaceOS/backoffice/issues/204)) ([bbda574](https://github.com/PlaceOS/backoffice/commit/bbda574b9763a14f2c9043c20c5795b173579432))
* **exec:** clear exec details when switching systems ([#189](https://github.com/PlaceOS/backoffice/issues/189)) ([9b52a1a](https://github.com/PlaceOS/backoffice/commit/9b52a1a0e434d59cd57dab66d03370a06333deff))
* **exec:** clear selected method when switching module ([#189](https://github.com/PlaceOS/backoffice/issues/189)) ([d61731b](https://github.com/PlaceOS/backoffice/commit/d61731b1b422e56ad45545799f859b299879a8dd))
* **exec:** emit method details when no parameters available ([27f0289](https://github.com/PlaceOS/backoffice/commit/27f0289574424001cf65cdd17b7f64754c0c05c2))
* **exec:** fix error after selecting a function ([4fef307](https://github.com/PlaceOS/backoffice/commit/4fef307e73605cc43c805b859d74b6363721e3f5))
* **exec:** fix execute call with no parameters ([6fba6b4](https://github.com/PlaceOS/backoffice/commit/6fba6b4063328e20ae31c58a4070bb8fc3026890))
* **exec:** fix handling of default and optional parameters ([#203](https://github.com/PlaceOS/backoffice/issues/203)) ([1914d31](https://github.com/PlaceOS/backoffice/commit/1914d3122e2d75b7eabdac48a9fcec31b3a5060b))
* **exec:** fix handling of empty strings ([69ea18c](https://github.com/PlaceOS/backoffice/commit/69ea18c8aa2895b4a83de3f4627dfdd287adaf3c))
* **exec:** fix handling of initial module loading ([cc73e69](https://github.com/PlaceOS/backoffice/commit/cc73e69ec17ef62c28a7681004e67b6b684bb40b))
* **exec:** fix handling of preselected module and method for exec params ([61bccef](https://github.com/PlaceOS/backoffice/commit/61bccef6334be171ecb255680bb46d628ade291b))
* **exec:** fix passing parameters to execute ([9e9afd8](https://github.com/PlaceOS/backoffice/commit/9e9afd8aef23c8e2e6bc72727df7773c10225737))
* **exec:** prevent exec with invalid params ([219f7ad](https://github.com/PlaceOS/backoffice/commit/219f7ade47442a1176bb94b58188dca525e958fd))
* **extensions:** add disclaimer for change application ([899ed0b](https://github.com/PlaceOS/backoffice/commit/899ed0b449512b7d0cf9d9c2172b228f323adccf))
* **extensions:** tweak to parsing embedded URL ([9ad91b8](https://github.com/PlaceOS/backoffice/commit/9ad91b85b740021be87ee18c0ae0868c33b4935d))
* fix angular config ([a5c1734](https://github.com/PlaceOS/backoffice/commit/a5c1734aedee3da1be841f4a0a8047d01b42abe1))
* fix build error ([de59625](https://github.com/PlaceOS/backoffice/commit/de59625bfc29c4aff8fa03551689f9c6b70532b3))
* fix condition for previous fix ([18b507a](https://github.com/PlaceOS/backoffice/commit/18b507a0f471aca47d5dbb019a4968927e56892d))
* fix first item being removed from item search listings ([1599b71](https://github.com/PlaceOS/backoffice/commit/1599b71a0330e7b40dd6d7b9665684502c6e730a))
* fix paginated requests for listing sidebar items ([e9f7af6](https://github.com/PlaceOS/backoffice/commit/e9f7af6b42746f18788e8c0563af36852c1da54f))
* fix tab data post changes of domain items and staff tenants ([#52](https://github.com/PlaceOS/backoffice/issues/52)) ([805e00c](https://github.com/PlaceOS/backoffice/commit/805e00c5995ef55d6c5cd81c7e1d8533559e6714))
* fix table styling for system modules ([6c6f6c9](https://github.com/PlaceOS/backoffice/commit/6c6f6c943929f0aac4d13b66a248bbfaf5bba93f))
* fix updating local copies of items ([ed01035](https://github.com/PlaceOS/backoffice/commit/ed0103579f0813d54d32621f42bb764876db25d1))
* **forms:** fix password fields for user and repo forms ([#161](https://github.com/PlaceOS/backoffice/issues/161)) ([99a62b7](https://github.com/PlaceOS/backoffice/commit/99a62b75a919d2c2a4af37202abb1a1ac0fc8fb3))
* ignore version.ts ([f257550](https://github.com/PlaceOS/backoffice/commit/f2575507d50cdbc89d76c54b3a8162a5682b00d9))
* **item-display:** fix displaying SSH drivers ([e9688e6](https://github.com/PlaceOS/backoffice/commit/e9688e6e641b79630f4fa58f0082b50c9c8af311))
* **item-display:** fix overflow on mobile ([#231](https://github.com/PlaceOS/backoffice/issues/231)) ([c809019](https://github.com/PlaceOS/backoffice/commit/c8090196c2db6c7a73fe64c6b0356e5ff5a9cabe))
* **menu:** fix name for metrics tab ([41aecd4](https://github.com/PlaceOS/backoffice/commit/41aecd49efa216d73504e63068b0d3d60352de19))
* **metadata:** clear up UX for editing metadata ([#166](https://github.com/PlaceOS/backoffice/issues/166)) ([933ef06](https://github.com/PlaceOS/backoffice/commit/933ef06c27c6efa7864cc3c40cab584c9092f9f4))
* **metadata:** fix metadata input overflow ([#211](https://github.com/PlaceOS/backoffice/issues/211)) ([ef5e2d9](https://github.com/PlaceOS/backoffice/commit/ef5e2d965d3c2fff30678511597b16b16ac9f3a0))
* **metadata:** fix parsing of metadata after saving ([#179](https://github.com/PlaceOS/backoffice/issues/179)) ([6cd8263](https://github.com/PlaceOS/backoffice/commit/6cd8263a07711b75dc0e3567f12ac533d7a144cc))
* **metadata:** fix setting metadata description ([25b0e14](https://github.com/PlaceOS/backoffice/commit/25b0e14b61d881c0e8d8f438bc94ba075622be62))
* **metrics:** fix layout of metrics page ([454717c](https://github.com/PlaceOS/backoffice/commit/454717c11d4c4204bf0fcc23ef4304cfd9a37b2c))
* **modules:** fix loading of module systems ([#171](https://github.com/PlaceOS/backoffice/issues/171)) ([d64a41e](https://github.com/PlaceOS/backoffice/commit/d64a41e1f033f7ccf0fba84a910f8e2127f81dac))
* **modules:** prevent spaces in custom name ([117e0b7](https://github.com/PlaceOS/backoffice/commit/117e0b7757cd548fb7182991baaa244944c36dd5))
* remove styles to prevent selecting text ([3c414bb](https://github.com/PlaceOS/backoffice/commit/3c414bba7dd6ed62dfbc83d72e0930bba27c7a68))
* **repo:** minor tweaks to allow for branch changing ([7c69f79](https://github.com/PlaceOS/backoffice/commit/7c69f79d75d4655544031dc0429c98eea80c1c64))
* **repos:** add catch all handling for repo pull errors ([#201](https://github.com/PlaceOS/backoffice/issues/201)) ([0f6bd4c](https://github.com/PlaceOS/backoffice/commit/0f6bd4c20f2cbd1263df033b15f75ded6710ede8))
* **repos:** allow for editing of driver repo branches ([#202](https://github.com/PlaceOS/backoffice/issues/202)) ([f1fa639](https://github.com/PlaceOS/backoffice/commit/f1fa639c212f6bf7a4cf39c6ff978cc11eb749ff))
* **repos:** fix display type on about page ([10a5420](https://github.com/PlaceOS/backoffice/commit/10a542053ef529a004eb81923afd8a8391247fdd))
* **repos:** fix driver listings for repositories ([1db72a7](https://github.com/PlaceOS/backoffice/commit/1db72a7a9d4e3091234801e4095cf087ed90cb55))
* **repos:** fix flickering of commit hashes ([7a0ba0b](https://github.com/PlaceOS/backoffice/commit/7a0ba0b7c8a2cf220b2498ac4eb5ab5510f000ec))
* **repos:** make about data selectable ([#188](https://github.com/PlaceOS/backoffice/issues/188)) ([0bb3cd7](https://github.com/PlaceOS/backoffice/commit/0bb3cd7921db78edc5aad106a7cd5794b3a151a7))
* **settings:** change merge settings to be a shallow merge ([#216](https://github.com/PlaceOS/backoffice/issues/216)) ([138cc11](https://github.com/PlaceOS/backoffice/commit/138cc114bc49c1b771a80c257ce0ccbf4e14857d))
* **settings:** fix monaco editor interactions on iOS ([#105](https://github.com/PlaceOS/backoffice/issues/105)) ([523e9cf](https://github.com/PlaceOS/backoffice/commit/523e9cf0706b4a2662dd0d3e0c2e4c5667a64401))
* **settings:** fix time display for settings history options ([d6ae8cf](https://github.com/PlaceOS/backoffice/commit/d6ae8cf75384d2fc4d54bdf4117bf25ae2f822db))
* **settings:** reload settings on item updates ([#226](https://github.com/PlaceOS/backoffice/issues/226)) ([785a3ed](https://github.com/PlaceOS/backoffice/commit/785a3ed814a0e9601fdbfe4259b9f04dab84fd09))
* **system:** fix exec module listing ([#173](https://github.com/PlaceOS/backoffice/issues/173)) ([100a5e9](https://github.com/PlaceOS/backoffice/commit/100a5e9e2d687beb192a1274e6ae6ab117c1b764))
* **systems:** add delay before reloading trigger list ([#240](https://github.com/PlaceOS/backoffice/issues/240)) ([b80d220](https://github.com/PlaceOS/backoffice/commit/b80d2206c722b8afcbe27c98c41b35901e5abfee))
* **systems:** add support url placeholders for location fields ([0fb4535](https://github.com/PlaceOS/backoffice/commit/0fb45350f8a71c770c795baed3ff15ed80f181d2))
* **systems:** allow for placeholders in support URLs ([#207](https://github.com/PlaceOS/backoffice/issues/207)) ([3835587](https://github.com/PlaceOS/backoffice/commit/3835587e8724c29855607a5a28a9c298b70415fb))
* **systems:** another fix to url validation ([d95fd18](https://github.com/PlaceOS/backoffice/commit/d95fd185e56e3d45b69e222b8d7769489b59aa39))
* **systems:** fix case sensitivity of url validation ([a1fff75](https://github.com/PlaceOS/backoffice/commit/a1fff75404696ef399d79b1732a86b1e4e7e878c))
* **systems:** fix reloading module list when updated ([#62](https://github.com/PlaceOS/backoffice/issues/62)) ([7a4ad9c](https://github.com/PlaceOS/backoffice/commit/7a4ad9c551b25b3ac338f777255374474e8eaa9f))
* **systems:** fix updating local state for triggers on change ([#240](https://github.com/PlaceOS/backoffice/issues/240)) ([f763a9a](https://github.com/PlaceOS/backoffice/commit/f763a9a023456aeba290d7766952696291b0e4e3))
* **systems:** fix URL pattern ([c23111f](https://github.com/PlaceOS/backoffice/commit/c23111f4d46c201200205d2f7940f9b172f48bd3))
* **systems:** fix URL validation for support url ([#206](https://github.com/PlaceOS/backoffice/issues/206)) ([72d5525](https://github.com/PlaceOS/backoffice/commit/72d552551335cf597be6900bc27756b9bd964d9c))
* **systems:** refresh exec list on module state change ([16db412](https://github.com/PlaceOS/backoffice/commit/16db4128e781edf0a358df99b621fca5fa6246ad))
* **systems:** tweak about page ([de08a2a](https://github.com/PlaceOS/backoffice/commit/de08a2aad561971df0fbd6b9d7de146bac8fd938))
* **systems:** update module URI/IP to open in new tab ([#187](https://github.com/PlaceOS/backoffice/issues/187)) ([fd20c27](https://github.com/PlaceOS/backoffice/commit/fd20c2759826031ab2bd0e1694ba3b2f544768bd))
* **systems:** update URL validation pattern ([0dec226](https://github.com/PlaceOS/backoffice/commit/0dec226df03a82fd768fae0da154cedfdec71a46))
* **triggers:** change system listing to instance listing ([a95808d](https://github.com/PlaceOS/backoffice/commit/a95808ddc0261d5d79441da16a603c0d5e09bf77))
* **triggers:** fix error on conditions form ([#184](https://github.com/PlaceOS/backoffice/issues/184)) ([3f5cf06](https://github.com/PlaceOS/backoffice/commit/3f5cf0653e35d0f72e62ac7f8308a1738dac4fb2))
* **triggers:** fix posting CRON conditions ([ece65ee](https://github.com/PlaceOS/backoffice/commit/ece65ee9706c805b476e6074da134a60849f4475))
* tweak styling for table overflows ([#200](https://github.com/PlaceOS/backoffice/issues/200)) ([e71adec](https://github.com/PlaceOS/backoffice/commit/e71adeca5adfcefdb8a6d38bbf70ae041b293cfa))
* update time field to latest from user-interfaces ([293cf70](https://github.com/PlaceOS/backoffice/commit/293cf702bfd9303bf3fd9cf5bc463838475e803b))
* **uploads:** check for files in dragenter event ([#230](https://github.com/PlaceOS/backoffice/issues/230)) ([8b59e0b](https://github.com/PlaceOS/backoffice/commit/8b59e0bee8b4ae765f80e679ec416f5b309d4c73))
* **uploads:** close drag drop overlay after 10 seconds ([d2bb775](https://github.com/PlaceOS/backoffice/commit/d2bb7757f5946655e677e148329b4da9cbb8df03))
* **user:** allow spaces in user groups ([702610a](https://github.com/PlaceOS/backoffice/commit/702610a5eeb0398dd61934defc429c2a44227386))
* **users:** display authority id ([4185f24](https://github.com/PlaceOS/backoffice/commit/4185f24a7463f81f824b650b63b7340225506b75))
* **users:** fix form fields ([#172](https://github.com/PlaceOS/backoffice/issues/172)) ([f3b8900](https://github.com/PlaceOS/backoffice/commit/f3b89001170e485bd41653c2d926841663d3f900))
* **users:** fix required field for last name ([6371759](https://github.com/PlaceOS/backoffice/commit/63717591f624e0e368bbbd4bb923a5494c924860))
* various minor style fixes ([016cb3d](https://github.com/PlaceOS/backoffice/commit/016cb3d17aa13d1ab238eb076822edc6d78008ee))
* **zones:** fix initialising form fields for zones ([#177](https://github.com/PlaceOS/backoffice/issues/177), [#178](https://github.com/PlaceOS/backoffice/issues/178)) ([b13e29c](https://github.com/PlaceOS/backoffice/commit/b13e29c4aa7f0875a6fb98df230ccf4d4511bc5c))


### Features

* add offline state ([#235](https://github.com/PlaceOS/backoffice/issues/235)) ([c8fc623](https://github.com/PlaceOS/backoffice/commit/c8fc62371037582149dc0ea2eeb440b015b17387))
* **admin:** add logic for handling editing staff API tenants ([17370ab](https://github.com/PlaceOS/backoffice/commit/17370abb8bc474a39d5b3570c019135834ed0ca9))
* **admin:** add page for adding managing custom schemas ([#165](https://github.com/PlaceOS/backoffice/issues/165)) ([a288dde](https://github.com/PlaceOS/backoffice/commit/a288dded395ba6000e07b698db68ff33d2393363))
* **admin:** add page for managing API keys ([#205](https://github.com/PlaceOS/backoffice/issues/205)) ([e128ca3](https://github.com/PlaceOS/backoffice/commit/e128ca3064986fd3d2889101edbb12007ceed75f))
* **admin:** update version view to show new data from API ([#238](https://github.com/PlaceOS/backoffice/issues/238)) ([9173a2f](https://github.com/PlaceOS/backoffice/commit/9173a2fccfe667964a42165a659f1f5b1dc251a8))
* **alerts:** add logic for alerts dashboard ([ffc1963](https://github.com/PlaceOS/backoffice/commit/ffc196326e5b7bf46fe2a899adf1573c236f2627))
* **clusters:** add simple graph replacement for chartjs ([88ac23d](https://github.com/PlaceOS/backoffice/commit/88ac23db2dd3dd8bf2a7454452f6067a58b1404b))
* **extensions:** allow grabbing metadata from zone parents ([ff01567](https://github.com/PlaceOS/backoffice/commit/ff0156778c87497b5efe7e6a5979a957280b8253))
* **metadata:** add logic to handle schemas for data input and validatn ([df3762b](https://github.com/PlaceOS/backoffice/commit/df3762ba218e83e963784be5176969f6aa545ccd))
* **package:** switch to using pure typescript implementation of uploader ([6e93e17](https://github.com/PlaceOS/backoffice/commit/6e93e176fcde729d8616a2047be81bb1ffeddfc9))
* **schema:** add handling of API endpoints for schema data ([#165](https://github.com/PlaceOS/backoffice/issues/165)) ([232a2db](https://github.com/PlaceOS/backoffice/commit/232a2db2959eb383a136cab9da4d03ecba4eb001))
* **settings:** add view for settings history ([#228](https://github.com/PlaceOS/backoffice/issues/228)) ([c6e3525](https://github.com/PlaceOS/backoffice/commit/c6e352589e234e7f0fe5be500b0f62dc86b17d28))
* **systems:** add form field for adding images to systems ([797fbd2](https://github.com/PlaceOS/backoffice/commit/797fbd267ece1871a841105bd5d2a082457ef691))
* **systems:** change handling for adding zones to systems ([#208](https://github.com/PlaceOS/backoffice/issues/208)) ([6535d42](https://github.com/PlaceOS/backoffice/commit/6535d426112bbbce81d46eb4951b036fb8523e11))
* **triggers:** add timezone option to trigger conditions ([#198](https://github.com/PlaceOS/backoffice/issues/198)) ([4ba34a6](https://github.com/PlaceOS/backoffice/commit/4ba34a602936df66107fd546624e39aaa797b79d))
* **user:** add ability to set user domains ([#158](https://github.com/PlaceOS/backoffice/issues/158)) ([a998ffb](https://github.com/PlaceOS/backoffice/commit/a998ffbae91ef194196787db6a8c4eec2218a00f))
* **users:** add ability to set metadata for users ([676bb55](https://github.com/PlaceOS/backoffice/commit/676bb557c108b8593f8787160e0e99d251283a8e))
* **users:** add card_number field to users ([170f96e](https://github.com/PlaceOS/backoffice/commit/170f96e18c91ebbf801bec5959a3b605fa5eeec1))



# [1.8.0](https://github.com/PlaceOS/backoffice/compare/v1.7.0...v1.8.0) (2021-01-11)


### Bug Fixes

* **admin:** fix fields for adding staff api tenants ([bc9198e](https://github.com/PlaceOS/backoffice/commit/bc9198ef0547d4389b8b5ce714d52634571cbc29))
* **admin:** form for office365/google were swapped ([f42fbb7](https://github.com/PlaceOS/backoffice/commit/f42fbb73d2aa34dfb4e98ae0af9ac58811e959d6))
* **admin:** remove % from cluster task instance count ([9d55099](https://github.com/PlaceOS/backoffice/commit/9d550997caac329f44962cd939f95d35eaa67ad2))
* **bulk-upload:** fix errors ([022df37](https://github.com/PlaceOS/backoffice/commit/022df37294ab835c14bf934abaf9b01793849178))
* **debug:** disable removing duplicate messages ([b14fb02](https://github.com/PlaceOS/backoffice/commit/b14fb029d132ed4dfb988bd0495c2de34f12b309))
* **debug:** limit the number of debug messages to 1000 and 32M chars ([84ed719](https://github.com/PlaceOS/backoffice/commit/84ed719d9cc86055883349f6c0ffe7a3ee65f819))
* **display:** fix item type displayed ([8a5b734](https://github.com/PlaceOS/backoffice/commit/8a5b7349618a7c62b9118b77e6810b29827ef0de))
* **domain:** auth source field mapping [#115](https://github.com/PlaceOS/backoffice/issues/115) ([5a33efc](https://github.com/PlaceOS/backoffice/commit/5a33efc5da836ae4faa64c53da7fbe2ac6fab9e6))
* **domains:** fix display of applications and auth sources ([#118](https://github.com/PlaceOS/backoffice/issues/118)) ([5c15b02](https://github.com/PlaceOS/backoffice/commit/5c15b02ab79b2af80ab4ec8d60a1d0c8e2e8e82d))
* **domains:** limit domain field to FQDNs and IP addresses ([#116](https://github.com/PlaceOS/backoffice/issues/116)) ([fd5672a](https://github.com/PlaceOS/backoffice/commit/fd5672a707e173a27afdf878895403240e7e3c01))
* **domains:** navigate to domains root on delete ([df84b4f](https://github.com/PlaceOS/backoffice/commit/df84b4f08ed4b106a0014e3670c9c5b2e324bd1c)), closes [#100](https://github.com/PlaceOS/backoffice/issues/100)
* **drivers:** fix display of compiled state ([#140](https://github.com/PlaceOS/backoffice/issues/140)) ([c1d3e7f](https://github.com/PlaceOS/backoffice/commit/c1d3e7f2e2958790288629762119503f6f33ca09))
* **drivers:** fix retry delay on compiled error ([79d207b](https://github.com/PlaceOS/backoffice/commit/79d207b52fa1dd45aa33b8bd7bfad32241885daa))
* **drivers:** fix viewing driver details ([3de3a6e](https://github.com/PlaceOS/backoffice/commit/3de3a6ede0a0b20613775858e6bc3d1317a26ed1))
* **dup:** fix item duplication modal ([3bfed52](https://github.com/PlaceOS/backoffice/commit/3bfed524904a676b609e8b70960fcd6a2ca8af22))
* **editor:** remove user interaction with tooltips ([aa1a817](https://github.com/PlaceOS/backoffice/commit/aa1a8177656b2a2922fd8248fad3598d0753be19))
* **exec:** fix handling error returned by exec requests ([2ad760b](https://github.com/PlaceOS/backoffice/commit/2ad760bd14d8113856999b98b3b3c86d62c89df7))
* fix breaking changes from ts-client ([a0b3cf4](https://github.com/PlaceOS/backoffice/commit/a0b3cf44d133fe659b72f1fc6f58a2e60f4a41bf))
* fix delete modal header ([6f8e823](https://github.com/PlaceOS/backoffice/commit/6f8e823f118fd97156c6080475104a0722a4f830))
* fix deleting items ([8169583](https://github.com/PlaceOS/backoffice/commit/8169583ca2ee4de1779a4beb2d327c06298d2953))
* fix editing items ([e8e5fb5](https://github.com/PlaceOS/backoffice/commit/e8e5fb5b2a3d116f68ee5d9bb9ec954f2baff493))
* fix errors raised in sentry ([0aaab5d](https://github.com/PlaceOS/backoffice/commit/0aaab5de26df4934d616d15002d7d0d5de335a11))
* fix item display x overflow ([0cb620a](https://github.com/PlaceOS/backoffice/commit/0cb620af25c83ce389790e4f0c1353c2503417e8))
* fix item list loading on slower connections ([4ed6bb6](https://github.com/PlaceOS/backoffice/commit/4ed6bb6129efb79b08bc804beb1006ffb107a50a))
* fix sorting of listed items ([1c90f27](https://github.com/PlaceOS/backoffice/commit/1c90f272bdd8e92229b97da9f56e67f25d0b7ff8))
* fix type text in delete events ([d0bc9df](https://github.com/PlaceOS/backoffice/commit/d0bc9dfb4ba3e37322dcf02b57ded4687bcb7b57))
* **general:** change delete hotkey from D to Delete ([#126](https://github.com/PlaceOS/backoffice/issues/126)) ([e96fbd6](https://github.com/PlaceOS/backoffice/commit/e96fbd6174b98df4e78a92ba70f9e4541f0c8c9b))
* grab latest version of item before editing ([f913585](https://github.com/PlaceOS/backoffice/commit/f91358580d8bea7e0edb562ca4cca3e5cc08e06d))
* **module:** fix form display for various module roles ([9e4f60f](https://github.com/PlaceOS/backoffice/commit/9e4f60fd0f0c5cfc2b1f4ec4fb0fcd7f8f2e7d2b))
* **module:** fix form validation ([e88e535](https://github.com/PlaceOS/backoffice/commit/e88e535e0d8c07bbcb8c71ea78ee567e4e9f2b4c))
* **module:** fix getting role from driver ([a5e6f3b](https://github.com/PlaceOS/backoffice/commit/a5e6f3ba0c0683ec49807e5a807cdb7953056d28))
* **module:** fix new module form ([c8f8c29](https://github.com/PlaceOS/backoffice/commit/c8f8c29ba29fbd54f7ef8515298e843449b7fdcb))
* **modules:** fix module role on edit ([0a35380](https://github.com/PlaceOS/backoffice/commit/0a3538079612936128163ca2692d6f92eaa9364c))
* **modules:** remove system_id if module is not of type logic ([#122](https://github.com/PlaceOS/backoffice/issues/122)) ([d01ccc6](https://github.com/PlaceOS/backoffice/commit/d01ccc699a90bc51e6136c1640268f570a03ed41))
* **repos:** add default value for driver count ([b31c2ae](https://github.com/PlaceOS/backoffice/commit/b31c2ae2e1707c7c90f516c410f105e0fadea3e1))
* **repos:** add username and password fields ([bbb1531](https://github.com/PlaceOS/backoffice/commit/bbb15319b5be0e1455accc1f0c21a949197b04b4)), closes [#104](https://github.com/PlaceOS/backoffice/issues/104)
* **repos:** fix driver tab count ([f911483](https://github.com/PlaceOS/backoffice/commit/f91148374fc394fd0fc2e6bf137bd0dbd140a3cd))
* **repos:** fix sidebar links ([c8a0c3d](https://github.com/PlaceOS/backoffice/commit/c8a0c3d8cffd1cfd1a4e79865e44e4e864d640f4))
* **repos:** fix sidebar links ([0e2c969](https://github.com/PlaceOS/backoffice/commit/0e2c96958a03ea5b1b1ce9fe7f5c9e59bd1c67f5))
* **repos:** limit allowed characters for folder names ([#121](https://github.com/PlaceOS/backoffice/issues/121)) ([edc70af](https://github.com/PlaceOS/backoffice/commit/edc70af4f6e73b23af8acc5b55552e8fa8970878))
* **routes:** prevent support access to domains, repos and users ([#155](https://github.com/PlaceOS/backoffice/issues/155)) ([5e68f6e](https://github.com/PlaceOS/backoffice/commit/5e68f6e495044aba8ebbf9a64ef946044246ea11))
* send all fields when creating a new item ([be6b8b5](https://github.com/PlaceOS/backoffice/commit/be6b8b56e66c67c4d57334dddb3aa3b509594986))
* send empty strings on create and update of items ([a52ba9c](https://github.com/PlaceOS/backoffice/commit/a52ba9c621dd154f691e20095dce146b8e001a93))
* **settings:** fix loading settings for items ([a85d7a6](https://github.com/PlaceOS/backoffice/commit/a85d7a6d6fbf838caba879f45817f0e05de77ef0))
* **sidebar:** fix updating item lists when no item selected ([f4a0e79](https://github.com/PlaceOS/backoffice/commit/f4a0e790e71400f2d983dd3dd6f728eb93bd51e9))
* **staff-api:** fix setting domain for tenants ([#116](https://github.com/PlaceOS/backoffice/issues/116)) ([95c20e2](https://github.com/PlaceOS/backoffice/commit/95c20e26e4b648aaa9efe014c19b83c2dffccf6d))
* **staff-api:** fix setting domain for tenants ([#116](https://github.com/PlaceOS/backoffice/issues/116)) ([ce990eb](https://github.com/PlaceOS/backoffice/commit/ce990eb467e3922c519adf2df70c88b23c1ef310))
* **system:** fix updating module list on changes ([dd906f1](https://github.com/PlaceOS/backoffice/commit/dd906f123f634feec390b4e1d10bab5c01227817))
* **systems:** display uri if no ip on module listing ([ac1ab27](https://github.com/PlaceOS/backoffice/commit/ac1ab271fae6168f06d3181b39ac39e84ac6c6b4))
* **systems:** fix adding new modules to systems ([#132](https://github.com/PlaceOS/backoffice/issues/132)) ([2d60679](https://github.com/PlaceOS/backoffice/commit/2d60679e3498718a897a1156e12c7fae111c73c0))
* **systems:** fix binding to module connected state ([#131](https://github.com/PlaceOS/backoffice/issues/131)) ([7ec06e8](https://github.com/PlaceOS/backoffice/commit/7ec06e86334f523bbb4eba004d28c6a684d95728))
* **systems:** fix binding to module connected state ([#131](https://github.com/PlaceOS/backoffice/issues/131)) ([fdacc04](https://github.com/PlaceOS/backoffice/commit/fdacc04d4a84c2efaec0eeefd112f323aa560ba0))
* **systems:** fix editing modules ([43c5f43](https://github.com/PlaceOS/backoffice/commit/43c5f43f102870cb8cedc776a732e2f5def83618))
* **systems:** fix editing modules ([c19a620](https://github.com/PlaceOS/backoffice/commit/c19a620318f04822b747eac92fa2e8cb778baa2c))
* **systems:** fix editing trigger instances ([e72a33f](https://github.com/PlaceOS/backoffice/commit/e72a33ffa15e8aea52ec26813559a7e56c06e445))
* **systems:** fix joining and removing modules not updating version ([df5fbfa](https://github.com/PlaceOS/backoffice/commit/df5fbfaf419bfe023eaff34cf348e5024f845191))
* **systems:** fix loading of counts ([9cfd70a](https://github.com/PlaceOS/backoffice/commit/9cfd70ae2d271b4c6e7452715de7df32bd914ea6))
* **systems:** fix module bindings ([#137](https://github.com/PlaceOS/backoffice/issues/137)) ([4c74eb8](https://github.com/PlaceOS/backoffice/commit/4c74eb8dbe15aa70dac97e2469c63478146b26e6))
* **systems:** fix module name when view state ([92f6dfb](https://github.com/PlaceOS/backoffice/commit/92f6dfb6efca0d275e09cec93b32f5c2eb48af79))
* **systems:** fix ordering of modules ([#135](https://github.com/PlaceOS/backoffice/issues/135)) ([6305910](https://github.com/PlaceOS/backoffice/commit/630591031e40805533b431a80abc707eb414c7db))
* **systems:** fix ordering of modules ([#135](https://github.com/PlaceOS/backoffice/issues/135)) ([75544cf](https://github.com/PlaceOS/backoffice/commit/75544cf608e26a65c00dbe01f4e9ef29fa5c0002))
* **systems:** fix ordering of zones ([#144](https://github.com/PlaceOS/backoffice/issues/144)) ([131fc93](https://github.com/PlaceOS/backoffice/commit/131fc936e8f561282f49212420509dd873933094))
* **systems:** fix setting system for new logic modules ([#139](https://github.com/PlaceOS/backoffice/issues/139)) ([c981acc](https://github.com/PlaceOS/backoffice/commit/c981acc14ba6d74afac99934b799cf4d0c49cdcc))
* **systems:** fix start and stop modal not closing on success ([2f13139](https://github.com/PlaceOS/backoffice/commit/2f1313938b8e02b50b1a856df1ed73a5d26c1aad)), closes [#102](https://github.com/PlaceOS/backoffice/issues/102)
* **systems:** fix toggling debug checkbox for modules ([3864e85](https://github.com/PlaceOS/backoffice/commit/3864e853fb181605eacc273cc4c72f62b87f1796))
* **systems:** fix trigger select modal ([b3e74e5](https://github.com/PlaceOS/backoffice/commit/b3e74e59ec629f3d4fe422a103f0e9861dbc5c1f))
* **systems:** fix updating zone list on changes ([3afadfa](https://github.com/PlaceOS/backoffice/commit/3afadfae3fdfe7161ee9a220154fa159220b4c67))
* **systems:** prevent active item ending up in an invalid state ([#120](https://github.com/PlaceOS/backoffice/issues/120)) ([49daedb](https://github.com/PlaceOS/backoffice/commit/49daedba4c80a801c071d2787143976bc10ef019))
* **terminal:** fix clearing terminal ([d4d9ef4](https://github.com/PlaceOS/backoffice/commit/d4d9ef4fcf2a44b4844f469d268fcba85afe8e48))
* **terminal:** fix rendering multiple new lines at once ([7f4bdbf](https://github.com/PlaceOS/backoffice/commit/7f4bdbf2123c4141192e1ede66156161488d6ebe))
* **terminal:** tweak output logic ([b07486b](https://github.com/PlaceOS/backoffice/commit/b07486b9d93ba126054e1d51fec131320dc990d3))
* **topbar:** link profile button to logged in user's page ([#127](https://github.com/PlaceOS/backoffice/issues/127)) ([b08b49b](https://github.com/PlaceOS/backoffice/commit/b08b49b411c63c262f585bfd06f0b406436854f3))
* **trigger:** fix module bindings for system modules ([b6f715a](https://github.com/PlaceOS/backoffice/commit/b6f715a250b29aadbeac4d1ed13297ce8e019f46))
* **triggers:** fix module indexes for comparisons ([0926faf](https://github.com/PlaceOS/backoffice/commit/0926faf4d9196f6ab64d8c6830a1fbaf9c15688d))
* **triggers:** fix passing keys for status variable comparisons ([b560c42](https://github.com/PlaceOS/backoffice/commit/b560c422954e20e919b81d88fd4acc46dec311ed))
* **triggers:** fix updating local state after editing trigger ([8d80d84](https://github.com/PlaceOS/backoffice/commit/8d80d84478807513c715c77753ad402cb1bdad96))
* **uploads:** add initialisation for hash worker ([cb04cd8](https://github.com/PlaceOS/backoffice/commit/cb04cd8f83c2496938be712316d020175b2476fa))
* **uploads:** disable uploads when a modal is open ([#138](https://github.com/PlaceOS/backoffice/issues/138)) ([d7bad73](https://github.com/PlaceOS/backoffice/commit/d7bad73cc50eae99ccbf10e4509f393229a84d73))
* **uploads:** fix upload list template ([7c7ce91](https://github.com/PlaceOS/backoffice/commit/7c7ce91eefcf1bfe1301fc2facb8806cfa20c96c))
* **user:** prevent sending empty strings for user updates ([e4a9a08](https://github.com/PlaceOS/backoffice/commit/e4a9a088376f2e2759895fe5dd385360461dcfe8))
* **zones:** fix listing of child zones ([#147](https://github.com/PlaceOS/backoffice/issues/147)) ([66f8cbc](https://github.com/PlaceOS/backoffice/commit/66f8cbc7db82b4676db2fdb092a241d9b8035ce2))


### Features

* add ability to embed pages in to custom tabs ([bf06c70](https://github.com/PlaceOS/backoffice/commit/bf06c70004f014a2cd8d6cb6453b3276040e011b))
* add embedded tabs for all data types ([ced13f6](https://github.com/PlaceOS/backoffice/commit/ced13f6a73af16f8b9cf0869e54df6b4f9501eeb))
* add more complex conditions to showing extensions ([e690734](https://github.com/PlaceOS/backoffice/commit/e690734627ca3a0fb6e8ebe8d1147693bbbf1d3a))
* **admin:** add tab for adding and managing extensions ([5e9dc7d](https://github.com/PlaceOS/backoffice/commit/5e9dc7d8135a670e74d7428e6114efc35251e9ee))
* **admin:** add tab for handling staff api tenants ([#116](https://github.com/PlaceOS/backoffice/issues/116)) ([794afc1](https://github.com/PlaceOS/backoffice/commit/794afc11dd6c167f9a0acfc7b45382c0e6d4939a))
* **edge:** add section to admin for managing edges ([03ce313](https://github.com/PlaceOS/backoffice/commit/03ce313536e27a05a2c789249257bc1d0e00e431))
* **extend:** add extensions to communicate with backoffice ([97d9c7f](https://github.com/PlaceOS/backoffice/commit/97d9c7f459030f720dac7874c8435340c4d1e56c))
* **extend:** allow retrieval of metadata by iFrame application ([4c5e933](https://github.com/PlaceOS/backoffice/commit/4c5e933dda5bf31c62ee2585bd05eab9f7bf2b1c))
* **metadata:** add editors field to metadata details form ([cf53650](https://github.com/PlaceOS/backoffice/commit/cf53650c67b243dda4bf609c7a80140b420e4111))
* **modules:** allow setting an edge on module creation ([896a66f](https://github.com/PlaceOS/backoffice/commit/896a66f0736a10089bfeba39c7a032c509b43e31))



# [1.7.0](https://github.com/PlaceOS/backoffice/compare/v1.6.2...v1.7.0) (2020-08-31)


### Bug Fixes

* **domain:** fix settings update ([a99edf2](https://github.com/PlaceOS/backoffice/commit/a99edf28f979041c2786d726dd4bcc262f3133e1))
* **domains:** fix adding and editing authentication sources ([4402e06](https://github.com/PlaceOS/backoffice/commit/4402e06ba8aca33b69117e8f2c7214af32a59e49))
* **modules:** allow fqdns in ip address field ([998df40](https://github.com/PlaceOS/backoffice/commit/998df40c1836649d011ab692d23723b49f7eee56))
* **system:** fix module search on system module listing ([6028109](https://github.com/PlaceOS/backoffice/commit/6028109ccedb87b371437a8e11dc131ec3cf58fb))


### Features

* **sentry:** add performance monitoring ([f1d1777](https://github.com/PlaceOS/backoffice/commit/f1d17777ffe3bc1240bf8b77e63dca15d5f339e6))



## [1.6.2](https://github.com/PlaceOS/backoffice/compare/v1.6.1...v1.6.2) (2020-08-26)


### Bug Fixes

* **admin:** catch 404 errors for cluster requests ([7dc09b6](https://github.com/PlaceOS/backoffice/commit/7dc09b67083087a86537cf4d707542e0636fdd0a))
* **auth:** update ts-client and fix handling user auth on errors ([dac052e](https://github.com/PlaceOS/backoffice/commit/dac052ea18e7adc91cc97508aaf78245b86d890c))
* **domain:** fix adding new applications ([b2810a5](https://github.com/PlaceOS/backoffice/commit/b2810a5a3ec36bcc814ecbdbcd3a197d82528266))
* **domain:** fix setting owner id for applications ([13bc6cd](https://github.com/PlaceOS/backoffice/commit/13bc6cdb070594ae87fe4e832ea891f9fdc59f3e))
* **settings:** ignore local changes that aren't different ([682d41f](https://github.com/PlaceOS/backoffice/commit/682d41faca1c1c1d452aa77954dfbf3dd5ad8a74))



## [1.6.1](https://github.com/PlaceOS/backoffice/compare/v1.6.0...v1.6.1) (2020-08-19)


### Bug Fixes

* **mock:** fix mocks ([98277fa](https://github.com/PlaceOS/backoffice/commit/98277fa76190d4982c81e1d3cd22088ee6e202be))
* update display counters ([7dca779](https://github.com/PlaceOS/backoffice/commit/7dca7795badca09f2c5a4a5ab8cde1c1f9054e2a))



# [1.6.0](https://github.com/PlaceOS/backoffice/compare/v1.5.0...v1.6.0) (2020-08-14)


### Bug Fixes

* **apps:** fix loading of application data ([aa7e6ca](https://github.com/PlaceOS/backoffice/commit/aa7e6ca454f6c8873608f1550437b0f44885786a))
* **build:** fix assets for uploads in prod and staging configs ([22bb5cf](https://github.com/PlaceOS/backoffice/commit/22bb5cf1cfa181e6131c9fb50a48f2917131c110))
* **debug:** fix filter comparison check ([66c157b](https://github.com/PlaceOS/backoffice/commit/66c157bf245be136d80ee3270bed23b21b44149b))
* **debug:** prevent duplicate messages showing ([b809d02](https://github.com/PlaceOS/backoffice/commit/b809d023c7bc0ffd0c21d7dce2caa602931b712e)), closes [#95](https://github.com/PlaceOS/backoffice/issues/95)
* **domains:** fix about tab on domain details ([588f96c](https://github.com/PlaceOS/backoffice/commit/588f96c8c584d6fd7b2545c3d6a74d5c2c9b4256))
* **driver:** exclude interface repositories when creating a new driver ([d37f48e](https://github.com/PlaceOS/backoffice/commit/d37f48ef8097587cfba10f696d7277cf5994e030)), closes [#88](https://github.com/PlaceOS/backoffice/issues/88)
* **driver:** fix clearing commit list on edit ([5e5354c](https://github.com/PlaceOS/backoffice/commit/5e5354c8d338a482bc43adb5b1652d118efea2de))
* **driver:** fix listing of commits on form ([e78d210](https://github.com/PlaceOS/backoffice/commit/e78d210db743451117b589d0141aec701365a1ca))
* **driver:** fix race condition when loading commits ([30853f1](https://github.com/PlaceOS/backoffice/commit/30853f1aee96312ab4e8614dffc47092d4307ba8))
* **exec:** fix parameters ([ad87427](https://github.com/PlaceOS/backoffice/commit/ad87427626cc76aad5cd409731e7764292955c1d))
* **exec:** use default params to check required fields ([53e1705](https://github.com/PlaceOS/backoffice/commit/53e1705c3fcde77b4b3535ebf922070ff0fd7763))
* **form:** fix creating new settings from creation form ([7641219](https://github.com/PlaceOS/backoffice/commit/764121953d82dd587c49d4929bb1cdf1be09df53))
* **metadata:** fix height of metadata field ([3ce107c](https://github.com/PlaceOS/backoffice/commit/3ce107cd4b3acfdb091fbf4268bcd164886992ed)), closes [#89](https://github.com/PlaceOS/backoffice/issues/89)
* **metadata:** update lib and fix minor issues ([b1deca6](https://github.com/PlaceOS/backoffice/commit/b1deca69defd551db89f2b634c61c3b95a32a524))
* **modules:** set online state to use running instead of connected ([d8e7cf4](https://github.com/PlaceOS/backoffice/commit/d8e7cf47661a672f2790b58037bbc3188675a558))
* more minor fixes ([5956480](https://github.com/PlaceOS/backoffice/commit/595648084eea1dcca941b2b9bc753ccd8c79495e))
* **oauth:** fix mapping of model data to form fields ([125382a](https://github.com/PlaceOS/backoffice/commit/125382adca0f958f580e38fc74f2c8845b197591)), closes [#97](https://github.com/PlaceOS/backoffice/issues/97)
* **oauth:** fix processing fields for oauth form ([9773a19](https://github.com/PlaceOS/backoffice/commit/9773a19d20c67a461c62c2d8e73be6c79c786168)), closes [#97](https://github.com/PlaceOS/backoffice/issues/97)
* **oauth:** fix updating of info mappings ([c68e56a](https://github.com/PlaceOS/backoffice/commit/c68e56a2b1edf315937300c5468aff569dbe94c9)), closes [#96](https://github.com/PlaceOS/backoffice/issues/96)
* **repo:** update local data after pull ([0ee325f](https://github.com/PlaceOS/backoffice/commit/0ee325f5920a08af769d385a6978bba19ffa0da1))
* **settings:** fix updating merged settings from associated components ([abcc659](https://github.com/PlaceOS/backoffice/commit/abcc6595d9d02b5dd0b72054059f2c9bd9fc69a0))
* **sidebar:** fix active item display ([bb242dd](https://github.com/PlaceOS/backoffice/commit/bb242dde196a407d90b17ef0b854a1b9b0e5084f))
* **sidebar:** keep track of active tab for items ([b907a2d](https://github.com/PlaceOS/backoffice/commit/b907a2d96f7d6216f11ca42ebdac528bf50f9215))
* **sys-exec:** fix adding comma in the middle of statements ([c657e1e](https://github.com/PlaceOS/backoffice/commit/c657e1e4eda9bf40cedc12aa0bdcd381008c45c4))
* **sys-exec:** fix getting params for execs when set trigger actions ([92b9a35](https://github.com/PlaceOS/backoffice/commit/92b9a35efa327a2c1d781dff3186b4c8fae0574c))
* **sys-modules:** fix debugging system modules ([81d7fcb](https://github.com/PlaceOS/backoffice/commit/81d7fcb973366207ea40dff8787c90076421a9e5))
* **sys-triggers:** fix updating of rendered triggers ([f95f5c2](https://github.com/PlaceOS/backoffice/commit/f95f5c2cabe6cec3f64d9061c531f1cfba417cf3))
* **systems:** add custom regex for email checking ([35c9d91](https://github.com/PlaceOS/backoffice/commit/35c9d913986bff53fea647e3f7e8950794e0ab47))
* **trigger:** parse json values for comparisons ([3a1c229](https://github.com/PlaceOS/backoffice/commit/3a1c229cdd6cbb203740cc70e2bac4fe345d2550))
* **triggers:** update support for websockets ([62964f8](https://github.com/PlaceOS/backoffice/commit/62964f8c260ac0ee9bbc2e90dc66160b9f648143)), closes [#92](https://github.com/PlaceOS/backoffice/issues/92)
* **uploads:** fix storing upload history ([c97e048](https://github.com/PlaceOS/backoffice/commit/c97e0481991df55f13c63cb41eaa0f2ec0cb2816))
* **uploads:** prevent dragging non-files locking the overlay in ([208b9c9](https://github.com/PlaceOS/backoffice/commit/208b9c93683e54e6f1e7b11a2e11cd45003b39b4))
* **users:** split name into first and last names ([1d1c3cf](https://github.com/PlaceOS/backoffice/commit/1d1c3cf86cbe6d476b4633775bfd18d9e6d744e4))
* **zones:** update API usage for zone triggers ([354f436](https://github.com/PlaceOS/backoffice/commit/354f436f8a13c1fa0b4684bbc6b6b6f489346f84)), closes [#91](https://github.com/PlaceOS/backoffice/issues/91)


### Features

* **access:** fix access control to the application ([24fdc2b](https://github.com/PlaceOS/backoffice/commit/24fdc2b37318845013eeeeea124b96b52b7e3759)), closes [#93](https://github.com/PlaceOS/backoffice/issues/93)
* **domains:** add about page for domains ([7f155d1](https://github.com/PlaceOS/backoffice/commit/7f155d18835c720a9b3803a6a8dc0e185d7652e0))
* **metadata:** update metadata api usage and add metadata logic to sys' ([5c5f140](https://github.com/PlaceOS/backoffice/commit/5c5f140d17472239d4463a6fde5a9b2807dbf433))
* **repos:** allow branch switching on interface repos ([07a7566](https://github.com/PlaceOS/backoffice/commit/07a7566afa66fa7ab3ec50f6c37fb5c6c8e43895))
* **settings:** add colours and tooltips to merged settings ([b755d40](https://github.com/PlaceOS/backoffice/commit/b755d408a17e7384d98d1bb02582401eb625b6dc)), closes [#90](https://github.com/PlaceOS/backoffice/issues/90)
* **triggers:** add bindings for getting system trigger states ([ffed4e4](https://github.com/PlaceOS/backoffice/commit/ffed4e43d2f7f7eac9bdcb9289dfef6942716c9b))
* update logic to use new version of ts-client ([a1b720c](https://github.com/PlaceOS/backoffice/commit/a1b720c41df662c965171160c107dcdf09e794b4))
* **uploads:** add component for managing file uploads ([be91c0a](https://github.com/PlaceOS/backoffice/commit/be91c0a6f68bfd408e1a0e7ed6510bf4a14c0056))
* **uploads:** add uploads library ([e5101be](https://github.com/PlaceOS/backoffice/commit/e5101be202404140e60e1e20916d2efdb11ea14f))



# [1.5.0](https://github.com/PlaceOS/backoffice/compare/v1.4.0...v1.5.0) (2020-06-30)


### Bug Fixes

* **device:** add not running and no connected value for state device [#61](https://github.com/PlaceOS/backoffice/issues/61) ([3c1b530](https://github.com/PlaceOS/backoffice/commit/3c1b5301c6df2674d6c38cd31fcb47111cc3c634))
* **device:** fix state comparison, string binding ([a419b8d](https://github.com/PlaceOS/backoffice/commit/a419b8db6f491714967ad922f3e87eb52945a07b))
* domain issue fix [#65](https://github.com/PlaceOS/backoffice/issues/65) ([604e8d3](https://github.com/PlaceOS/backoffice/commit/604e8d3bf4261fbc9bc70a2cea624d2fb3a0bf01))
* **domain:** minor fix to application id display ([15cdf39](https://github.com/PlaceOS/backoffice/commit/15cdf39b314883cbafc0e47f2bd8fb568795649c))
* **domains:** fix showing new applications now showing after creation ([f68222f](https://github.com/PlaceOS/backoffice/commit/f68222f162d2cae17838f0fbeb8add083aa4e602)), closes [#84](https://github.com/PlaceOS/backoffice/issues/84)
* **engine:** null state [#80](https://github.com/PlaceOS/backoffice/issues/80) ([1b6c68f](https://github.com/PlaceOS/backoffice/commit/1b6c68f12d8bf1cc5792149086117ac96d02937a))
* modal headers - incorrect service refs [#67](https://github.com/PlaceOS/backoffice/issues/67) ([dc2b72d](https://github.com/PlaceOS/backoffice/commit/dc2b72dbd8ffa1750321d4c43c850df1bdaee367))
* **module:** fix validator for uri ([729cfba](https://github.com/PlaceOS/backoffice/commit/729cfba451b2d3b69c41a86d760be4423fc053fc))
* **modules:** remove unnecessary code ([b7b2c38](https://github.com/PlaceOS/backoffice/commit/b7b2c38161050b1e62b2435f99898417cf1ee772))
* **repo:** add readonly commit hash input and fix loadCommits ([2b3e021](https://github.com/PlaceOS/backoffice/commit/2b3e02186bdec2ce7a4572d9b9c3af111f7a3551))
* **repo:** i18n commit hash label ([db04c0b](https://github.com/PlaceOS/backoffice/commit/db04c0bc53d81c053b70e3f7a23adb21b0dbca70))
* **repos:** disable editing the uri field ([c18be22](https://github.com/PlaceOS/backoffice/commit/c18be221a43c2dd9242e4a0954ed7918a7319edb)), closes [#81](https://github.com/PlaceOS/backoffice/issues/81)
* **repos:** uppercase default commit ([6dfc133](https://github.com/PlaceOS/backoffice/commit/6dfc1331b3801603b6b36930e275e4a2c4f007cd)), closes [#86](https://github.com/PlaceOS/backoffice/issues/86)
* **system:** allow edit of features [#69](https://github.com/PlaceOS/backoffice/issues/69) ([5f99c14](https://github.com/PlaceOS/backoffice/commit/5f99c1409bcabbe1d3f3890a3f4f1b985e0a67c8))
* **systems:** fix handling feature list that is a string not an array ([4db36ab](https://github.com/PlaceOS/backoffice/commit/4db36aba0f628152279526b2f6d209753add3174)), closes [#85](https://github.com/PlaceOS/backoffice/issues/85)
* **trigger:** map to correct fields of trigger [#77](https://github.com/PlaceOS/backoffice/issues/77) ([2592d64](https://github.com/PlaceOS/backoffice/commit/2592d642fc0dac9193faca65fe18314e0e887706))
* **websocket:** bumped ts-client composer version and removed extra logs ([de39ec5](https://github.com/PlaceOS/backoffice/commit/de39ec5e1bc21f0c032c60227d50559866d0804f))


### Features

* **modules:** add validators for service and device drivers ([19e7e0d](https://github.com/PlaceOS/backoffice/commit/19e7e0d68231d78d9f5a3a72121ee3617dea6da6))
* **repo:** display commit_hash in about tab ([abde21a](https://github.com/PlaceOS/backoffice/commit/abde21a762abce7ef108ff7d19372763171638cf)), closes [#75](https://github.com/PlaceOS/backoffice/issues/75)
* **zone:** add display_name field ([4d809fe](https://github.com/PlaceOS/backoffice/commit/4d809fe754be4135158862eaa932258862b05c39))



# [1.4.0](https://github.com/PlaceOS/backoffice/compare/v1.3.1...v1.4.0) (2020-06-15)


### Bug Fixes

* **domains:** allow viewing client id and secret on listing ([70f1256](https://github.com/PlaceOS/backoffice/commit/70f12566d0d2b4387027a892791ed04da59a8199)), closes [#64](https://github.com/PlaceOS/backoffice/issues/64)
* **module:** fix validator for uri ([b8630ff](https://github.com/PlaceOS/backoffice/commit/b8630ffb77e98720c04cfa1dcd44ccd073f84506))
* **repo:** fix editing commits for interface repos ([aee7dee](https://github.com/PlaceOS/backoffice/commit/aee7deebe566727767233b0ad6a6f42b1fc7a134))


### Features

* add logic to duplicate items ([103056d](https://github.com/PlaceOS/backoffice/commit/103056d065d41e208bfe59ec3849d0c343dfd423))
* allow downloading items as tsv template files ([093d61c](https://github.com/PlaceOS/backoffice/commit/093d61c4cb22cc9af10555b124f68b8f2a24d4c8))
* **bulk-upload:** finish basic logic for bulk upload ([2f8b243](https://github.com/PlaceOS/backoffice/commit/2f8b2434734b90f0cd9e6ce86abdf0a05ae7f11b))



## [1.3.1](https://github.com/PlaceOS/backoffice/compare/v1.3.0...v1.3.1) (2020-06-05)


### Bug Fixes

* **repo:** fix editing commits for interface repos ([455afdf](https://github.com/PlaceOS/backoffice/commit/455afdf7ee8a38525eb14ee40de0258bd537227f))



# [1.3.0](https://github.com/PlaceOS/backoffice/compare/v1.2.2...v1.3.0) (2020-06-05)


### Bug Fixes

* **admin:** add tab for displaying broker details ([0cd31ca](https://github.com/PlaceOS/backoffice/commit/0cd31cadf6ac48a858936a70d56217e086cd612b))
* **admin:** add tab for listing interfaces ([690d071](https://github.com/PlaceOS/backoffice/commit/690d071502338e622db3d6cba3fdb425a94300c4)), closes [#50](https://github.com/PlaceOS/backoffice/issues/50)
* **beta workflow:** use empty string ([d4cd646](https://github.com/PlaceOS/backoffice/commit/d4cd6464144c0cd7ce595f196784de92d8937f7f))
* **module-form:** fix names of fields and label references ([b44053e](https://github.com/PlaceOS/backoffice/commit/b44053e151114303661fba1e4fb3ed6a3bace4e1)), closes [#58](https://github.com/PlaceOS/backoffice/issues/58)
* **settings:** fix language settings ([c1230c6](https://github.com/PlaceOS/backoffice/commit/c1230c6ee146e65e1ebc6df6bc8b45683fea8756))
* **sidebar:** add sorting to listed items ([84feb62](https://github.com/PlaceOS/backoffice/commit/84feb62250fcb1b4f29b371cab1c8961539baf92))
* **sys-modules:** prevent custom context menu on module link ([e430175](https://github.com/PlaceOS/backoffice/commit/e430175ed7688f1b8e084412d7730c10712cc739)), closes [#57](https://github.com/PlaceOS/backoffice/issues/57)
* **version:** fix display of version details ([64830ca](https://github.com/PlaceOS/backoffice/commit/64830cad53d38c4666e29c80ee98179d4e684b5f))
* **zones:** update zone tags to be array instead of string ([ed0c281](https://github.com/PlaceOS/backoffice/commit/ed0c28187cc9524665cebc9dc47be4bfe0f890c3))


### Features

* **brokers:** add logic for CRUD operations on brokers ([bca2cc9](https://github.com/PlaceOS/backoffice/commit/bca2cc90ed290d7e734c51032a588c5601cd6c05)), closes [#62](https://github.com/PlaceOS/backoffice/issues/62)
* **bulk-add:** add components and start to hook them up ([f3042cc](https://github.com/PlaceOS/backoffice/commit/f3042ccb131428761c20991d8677d28ff0ec8b11))
* **header:** add button to report issues with the ui ([e3526b8](https://github.com/PlaceOS/backoffice/commit/e3526b8b61aa4c481a3c6f73eaab41b7e8c2378b))
* **i18n:** add option for changing languages to the topbar header ([2f879a9](https://github.com/PlaceOS/backoffice/commit/2f879a9cde7107d98c4fa24378ae0a72c3a4761b))
* **localize:** start adding i18n to application ([c36d2ed](https://github.com/PlaceOS/backoffice/commit/c36d2ed8d5503e8c2947eae9377371f9b29266bf))
* **workflows->beta:** new build repo ([3f58f31](https://github.com/PlaceOS/backoffice/commit/3f58f314017cdee8296ca7e225c490e8cd8bb558))



## [1.2.2](https://github.com/PlaceOS/backoffice/compare/v1.2.1...v1.2.2) (2020-06-03)


### Bug Fixes

* **prod workflow:** try empty string ([48e9f45](https://github.com/PlaceOS/backoffice/commit/48e9f45c0f3d9f454e0cc0e2f3461a2509602650))



## [1.2.1](https://github.com/PlaceOS/backoffice/compare/v1.2.0...v1.2.1) (2020-06-03)


### Bug Fixes

* **prod workflow:** change target folder ([9d55031](https://github.com/PlaceOS/backoffice/commit/9d5503121cd21b16e5e0049db628d38058ac33f3))



# [1.2.0](https://github.com/PlaceOS/backoffice/compare/v1.1.0...v1.2.0) (2020-06-03)


### Features

* **workflow->prod:** new release home ([1450e9a](https://github.com/PlaceOS/backoffice/commit/1450e9a6a51a55b4ea0a304d939152c715528c52))



# [1.1.0](https://github.com/PlaceOS/backoffice/compare/v1.0.2...v1.1.0) (2020-04-27)


### Features

* **workflows:** develop commits to alpha branch ([02dc0fd](https://github.com/PlaceOS/backoffice/commit/02dc0fd4179fcee033e7fe4802c09e834fb13514))



## [1.0.2](https://github.com/PlaceOS/backoffice/compare/v1.0.1...v1.0.2) (2020-04-22)


### Bug Fixes

* **error:** fix error messages to properly display service messages ([10bdd91](https://github.com/PlaceOS/backoffice/commit/10bdd9152c814aac9fae797a3b069866f85b46e4))



## [1.0.1](https://github.com/PlaceOS/backoffice/compare/v1.0.0...v1.0.1) (2020-04-20)


### Bug Fixes

* **systems:** fix displayed confirm modal zone to use name instead of id ([723298b](https://github.com/PlaceOS/backoffice/commit/723298be56accee19f0f62c26c23cce0dc3e4bd7)), closes [#40](https://github.com/PlaceOS/backoffice/issues/40)



# [1.0.0](https://github.com/PlaceOS/backoffice/compare/5850ff5165bcfe467f279823f12b805123ac92fa...v1.0.0) (2020-04-20)


### Bug Fixes

* **build:** fix compilation issues ([2ed2227](https://github.com/PlaceOS/backoffice/commit/2ed22270f839ec81078abc694882b08bca354126))
* **debug-output:** scroll view to bottom when content updates ([c89d520](https://github.com/PlaceOS/backoffice/commit/c89d5201b9a222558c995398d75932ea651ded22)), closes [#13](https://github.com/PlaceOS/backoffice/issues/13)
* **drivers:** fix listing commits for edits ([3e85eac](https://github.com/PlaceOS/backoffice/commit/3e85eacd1e677ef010bbe2fd39421fbd38b7a499)), closes [#27](https://github.com/PlaceOS/backoffice/issues/27)
* **drivers:** fix logic of driver execs ([4120f09](https://github.com/PlaceOS/backoffice/commit/4120f09bab8b1ffe29b78425f6acdbbf595330a1))
* **drivers:** fix saving settings when creating drivers ([dcf8ccf](https://github.com/PlaceOS/backoffice/commit/dcf8ccf4ad4930b4e38b12c34cf7d7f8bdf61c42)), closes [#23](https://github.com/PlaceOS/backoffice/issues/23)
* **drivers:** fix updating driver and commit listing on changes ([426fa30](https://github.com/PlaceOS/backoffice/commit/426fa3014db155a65483416a20e5003d2c4bde2a)), closes [#20](https://github.com/PlaceOS/backoffice/issues/20)
* **drivers:** update about display values ([a4b35c5](https://github.com/PlaceOS/backoffice/commit/a4b35c58493739f7f193f0ce870196fc5440614f))
* **drivers:** update drivers to post repository details ([9a98f2f](https://github.com/PlaceOS/backoffice/commit/9a98f2fc7536e74aa68848ba51b3ea020d8018a0))
* **engine-admin:** fix spinners on database actions ([7c1275e](https://github.com/PlaceOS/backoffice/commit/7c1275e6aee3100ba0f1579b28a263171dd04df9))
* fix minor routing issues ([5850ff5](https://github.com/PlaceOS/backoffice/commit/5850ff5165bcfe467f279823f12b805123ac92fa))
* **modules:** fix propagating local changes when adding modules to sys ([22fe99f](https://github.com/PlaceOS/backoffice/commit/22fe99f6a2eb9764e7a6ba0ecc67e5c0597831f4)), closes [#24](https://github.com/PlaceOS/backoffice/issues/24)
* **modules:** fix validation of ip addresses ([5976bb4](https://github.com/PlaceOS/backoffice/commit/5976bb4d11093e32a353f494e29f3e888b34a7c6)), closes [#26](https://github.com/PlaceOS/backoffice/issues/26)
* **settings:** fix making mocked builds ([d0305f5](https://github.com/PlaceOS/backoffice/commit/d0305f54f4b2f790502aa2038de4c1ff27df2282))
* **system-exec:** fix executing items with all optional params ([f7eb77d](https://github.com/PlaceOS/backoffice/commit/f7eb77d8682a78a7927caf9f929a2608666f70e4)), closes [#4](https://github.com/PlaceOS/backoffice/issues/4)
* **system-exec:** fix parsing parameters ([e125136](https://github.com/PlaceOS/backoffice/commit/e125136f59567a7d846f02532a2ed13677496fd2))
* **system-modules:** toggle running state with power actions ([3b25d63](https://github.com/PlaceOS/backoffice/commit/3b25d6399edd28af3434f36aa506e845f7e5ccec)), closes [#21](https://github.com/PlaceOS/backoffice/issues/21)
* **system-modules:** update local copy of system after adding a module ([9424637](https://github.com/PlaceOS/backoffice/commit/9424637cf9123c1cd3f49b8cb71b45a9a4017af7)), closes [#24](https://github.com/PlaceOS/backoffice/issues/24)
* **systems:** fix adding and removing zones ([7ccfbb7](https://github.com/PlaceOS/backoffice/commit/7ccfbb7002b0a215cd9f05292e2dc7d65a78a7f6))
* **systems:** fix listing of system zones ([ad6d7a2](https://github.com/PlaceOS/backoffice/commit/ad6d7a2831d7252f736cd610d4116973fc75d9bc))
* **users:** fix password logic for form ([3fea867](https://github.com/PlaceOS/backoffice/commit/3fea8677d92777c1526aa977fb16d4e8ba26d0c8)), closes [#35](https://github.com/PlaceOS/backoffice/issues/35)
* **view-state:** fix determining mod name ([6460a37](https://github.com/PlaceOS/backoffice/commit/6460a37f2f63112cf7a2ade0f3b68957861358e6))
* **zones:** fix listening to modal events ([8ed7bf0](https://github.com/PlaceOS/backoffice/commit/8ed7bf0482d57dcb3e48b769a71241570f850085))
* **zones:** fix spliting tags when editing ([2405cac](https://github.com/PlaceOS/backoffice/commit/2405cac0637f73fd89af63eedbba0c3ef81e051b)), closes [#36](https://github.com/PlaceOS/backoffice/issues/36)
* **zones:** fix tab counts ([6ff7da9](https://github.com/PlaceOS/backoffice/commit/6ff7da9292d3e8fde848454e043d7e6bd3cebc80)), closes [#34](https://github.com/PlaceOS/backoffice/issues/34)


### Features

* **build:** cleanup build process ([11bc5ef](https://github.com/PlaceOS/backoffice/commit/11bc5efde0c9beccd8cc4dfe16adf2c0064e5988))
* **engine-admin:** add admin section to engine ([21adbb3](https://github.com/PlaceOS/backoffice/commit/21adbb35690bc3e745e6279c46652af209f7611a))
* **metadata:** add logic for zone metadata ([0ee1c6c](https://github.com/PlaceOS/backoffice/commit/0ee1c6c1999877e65d24e0b191594f8fc27609fc)), closes [#19](https://github.com/PlaceOS/backoffice/issues/19)
* **settings:** allow viewing and editing settings from about pages ([f54ec76](https://github.com/PlaceOS/backoffice/commit/f54ec76fcf1ae9be28b92377b7e1d0c54a273719))
* **sys-exec:** add modal for viewing exec responses ([920251d](https://github.com/PlaceOS/backoffice/commit/920251d3501a9311e91ded91d854cecaf2f5b37b))
