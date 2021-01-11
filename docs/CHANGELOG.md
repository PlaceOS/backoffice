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
* **general:** change delete hotkey from D to Delete ([#126](https://github.com/PlaceOS/backoffice/issues/126)) ([e96fbd6](https://github.com/PlaceOS/backoffice/commit/e96fbd6174b98df4e78a92ba70f9e4541f0c8c9b))
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
* **systems:** fix toggling debug checkbox for modules ([3864e85](https://github.com/PlaceOS/backoffice/commit/3864e853fb181605eacc273cc4c72f62b87f1796))
* **systems:** prevent active item ending up in an invalid state ([#120](https://github.com/PlaceOS/backoffice/issues/120)) ([49daedb](https://github.com/PlaceOS/backoffice/commit/49daedba4c80a801c071d2787143976bc10ef019))
* **terminal:** fix clearing terminal ([d4d9ef4](https://github.com/PlaceOS/backoffice/commit/d4d9ef4fcf2a44b4844f469d268fcba85afe8e48))
* **terminal:** fix rendering multiple new lines at once ([7f4bdbf](https://github.com/PlaceOS/backoffice/commit/7f4bdbf2123c4141192e1ede66156161488d6ebe))
* **terminal:** tweak output logic ([b07486b](https://github.com/PlaceOS/backoffice/commit/b07486b9d93ba126054e1d51fec131320dc990d3))
* **topbar:** link profile button to logged in user's page ([#127](https://github.com/PlaceOS/backoffice/issues/127)) ([b08b49b](https://github.com/PlaceOS/backoffice/commit/b08b49b411c63c262f585bfd06f0b406436854f3))
* **triggers:** fix module indexes for comparisons ([0926faf](https://github.com/PlaceOS/backoffice/commit/0926faf4d9196f6ab64d8c6830a1fbaf9c15688d))
* **triggers:** fix passing keys for status variable comparisons ([b560c42](https://github.com/PlaceOS/backoffice/commit/b560c422954e20e919b81d88fd4acc46dec311ed))
* **triggers:** fix updating local state after editing trigger ([8d80d84](https://github.com/PlaceOS/backoffice/commit/8d80d84478807513c715c77753ad402cb1bdad96))
* **uploads:** disable uploads when a modal is open ([#138](https://github.com/PlaceOS/backoffice/issues/138)) ([d7bad73](https://github.com/PlaceOS/backoffice/commit/d7bad73cc50eae99ccbf10e4509f393229a84d73))
* **uploads:** fix upload list template ([7c7ce91](https://github.com/PlaceOS/backoffice/commit/7c7ce91eefcf1bfe1301fc2facb8806cfa20c96c))
* **zones:** fix listing of child zones ([#147](https://github.com/PlaceOS/backoffice/issues/147)) ([66f8cbc](https://github.com/PlaceOS/backoffice/commit/66f8cbc7db82b4676db2fdb092a241d9b8035ce2))
* fix item display x overflow ([0cb620a](https://github.com/PlaceOS/backoffice/commit/0cb620af25c83ce389790e4f0c1353c2503417e8))
* fix type text in delete events ([d0bc9df](https://github.com/PlaceOS/backoffice/commit/d0bc9dfb4ba3e37322dcf02b57ded4687bcb7b57))
* **user:** prevent sending empty strings for user updates ([e4a9a08](https://github.com/PlaceOS/backoffice/commit/e4a9a088376f2e2759895fe5dd385360461dcfe8))
* fix breaking changes from ts-client ([a0b3cf4](https://github.com/PlaceOS/backoffice/commit/a0b3cf44d133fe659b72f1fc6f58a2e60f4a41bf))
* fix delete modal header ([6f8e823](https://github.com/PlaceOS/backoffice/commit/6f8e823f118fd97156c6080475104a0722a4f830))
* fix deleting items ([8169583](https://github.com/PlaceOS/backoffice/commit/8169583ca2ee4de1779a4beb2d327c06298d2953))
* fix editing items ([e8e5fb5](https://github.com/PlaceOS/backoffice/commit/e8e5fb5b2a3d116f68ee5d9bb9ec954f2baff493))
* fix errors raised in sentry ([0aaab5d](https://github.com/PlaceOS/backoffice/commit/0aaab5de26df4934d616d15002d7d0d5de335a11))
* fix sorting of listed items ([1c90f27](https://github.com/PlaceOS/backoffice/commit/1c90f272bdd8e92229b97da9f56e67f25d0b7ff8))
* send all fields when creating a new item ([be6b8b5](https://github.com/PlaceOS/backoffice/commit/be6b8b56e66c67c4d57334dddb3aa3b509594986))
* send empty strings on create and update of items ([a52ba9c](https://github.com/PlaceOS/backoffice/commit/a52ba9c621dd154f691e20095dce146b8e001a93))
* **systems:** fix start and stop modal not closing on success ([2f13139](https://github.com/PlaceOS/backoffice/commit/2f1313938b8e02b50b1a856df1ed73a5d26c1aad)), closes [#102](https://github.com/PlaceOS/backoffice/issues/102)
* **systems:** fix trigger select modal ([b3e74e5](https://github.com/PlaceOS/backoffice/commit/b3e74e59ec629f3d4fe422a103f0e9861dbc5c1f))
* **systems:** fix updating zone list on changes ([3afadfa](https://github.com/PlaceOS/backoffice/commit/3afadfae3fdfe7161ee9a220154fa159220b4c67))
* **trigger:** fix module bindings for system modules ([b6f715a](https://github.com/PlaceOS/backoffice/commit/b6f715a250b29aadbeac4d1ed13297ce8e019f46))
* **uploads:** add initialisation for hash worker ([cb04cd8](https://github.com/PlaceOS/backoffice/commit/cb04cd8f83c2496938be712316d020175b2476fa))
* fix item list loading on slower connections ([4ed6bb6](https://github.com/PlaceOS/backoffice/commit/4ed6bb6129efb79b08bc804beb1006ffb107a50a))
* grab latest version of item before editing ([f913585](https://github.com/PlaceOS/backoffice/commit/f91358580d8bea7e0edb562ca4cca3e5cc08e06d))


### Features

* **admin:** add tab for adding and managing extensions ([5e9dc7d](https://github.com/PlaceOS/backoffice/commit/5e9dc7d8135a670e74d7428e6114efc35251e9ee))
* **admin:** add tab for handling staff api tenants ([#116](https://github.com/PlaceOS/backoffice/issues/116)) ([794afc1](https://github.com/PlaceOS/backoffice/commit/794afc11dd6c167f9a0acfc7b45382c0e6d4939a))
* **edge:** add section to admin for managing edges ([03ce313](https://github.com/PlaceOS/backoffice/commit/03ce313536e27a05a2c789249257bc1d0e00e431))
* **extend:** add extensions to communicate with backoffice ([97d9c7f](https://github.com/PlaceOS/backoffice/commit/97d9c7f459030f720dac7874c8435340c4d1e56c))
* **extend:** allow retrieval of metadata by iFrame application ([4c5e933](https://github.com/PlaceOS/backoffice/commit/4c5e933dda5bf31c62ee2585bd05eab9f7bf2b1c))
* **metadata:** add editors field to metadata details form ([cf53650](https://github.com/PlaceOS/backoffice/commit/cf53650c67b243dda4bf609c7a80140b420e4111))
* **modules:** allow setting an edge on module creation ([896a66f](https://github.com/PlaceOS/backoffice/commit/896a66f0736a10089bfeba39c7a032c509b43e31))
* add ability to embed pages in to custom tabs ([bf06c70](https://github.com/PlaceOS/backoffice/commit/bf06c70004f014a2cd8d6cb6453b3276040e011b))
* add embedded tabs for all data types ([ced13f6](https://github.com/PlaceOS/backoffice/commit/ced13f6a73af16f8b9cf0869e54df6b4f9501eeb))
* add more complex conditions to showing extensions ([e690734](https://github.com/PlaceOS/backoffice/commit/e690734627ca3a0fb6e8ebe8d1147693bbbf1d3a))

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

* update display counters ([7dca779](https://github.com/PlaceOS/backoffice/commit/7dca7795badca09f2c5a4a5ab8cde1c1f9054e2a))
* **mock:** fix mocks ([98277fa](https://github.com/PlaceOS/backoffice/commit/98277fa76190d4982c81e1d3cd22088ee6e202be))

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
* more minor fixes ([5956480](https://github.com/PlaceOS/backoffice/commit/595648084eea1dcca941b2b9bc753ccd8c79495e))
* **users:** split name into first and last names ([1d1c3cf](https://github.com/PlaceOS/backoffice/commit/1d1c3cf86cbe6d476b4633775bfd18d9e6d744e4))
* **zones:** update API usage for zone triggers ([354f436](https://github.com/PlaceOS/backoffice/commit/354f436f8a13c1fa0b4684bbc6b6b6f489346f84)), closes [#91](https://github.com/PlaceOS/backoffice/issues/91)


### Features

* **access:** fix access control to the application ([24fdc2b](https://github.com/PlaceOS/backoffice/commit/24fdc2b37318845013eeeeea124b96b52b7e3759)), closes [#93](https://github.com/PlaceOS/backoffice/issues/93)
* **domains:** add about page for domains ([7f155d1](https://github.com/PlaceOS/backoffice/commit/7f155d18835c720a9b3803a6a8dc0e185d7652e0))
* **metadata:** update metadata api usage and add metadata logic to sys' ([5c5f140](https://github.com/PlaceOS/backoffice/commit/5c5f140d17472239d4463a6fde5a9b2807dbf433))
* **repos:** allow branch switching on interface repos ([07a7566](https://github.com/PlaceOS/backoffice/commit/07a7566afa66fa7ab3ec50f6c37fb5c6c8e43895))
* update logic to use new version of ts-client ([a1b720c](https://github.com/PlaceOS/backoffice/commit/a1b720c41df662c965171160c107dcdf09e794b4))
* **settings:** add colours and tooltips to merged settings ([b755d40](https://github.com/PlaceOS/backoffice/commit/b755d408a17e7384d98d1bb02582401eb625b6dc)), closes [#90](https://github.com/PlaceOS/backoffice/issues/90)
* **triggers:** add bindings for getting system trigger states ([ffed4e4](https://github.com/PlaceOS/backoffice/commit/ffed4e43d2f7f7eac9bdcb9289dfef6942716c9b))
* **uploads:** add component for managing file uploads ([be91c0a](https://github.com/PlaceOS/backoffice/commit/be91c0a6f68bfd408e1a0e7ed6510bf4a14c0056))
* **uploads:** add uploads library ([e5101be](https://github.com/PlaceOS/backoffice/commit/e5101be202404140e60e1e20916d2efdb11ea14f))

# [1.5.0](https://github.com/PlaceOS/backoffice/compare/v1.4.0...v1.5.0) (2020-06-30)


### Bug Fixes

* **device:** add not running and no connected value for state device [#61](https://github.com/PlaceOS/backoffice/issues/61) ([3c1b530](https://github.com/PlaceOS/backoffice/commit/3c1b5301c6df2674d6c38cd31fcb47111cc3c634))
* **device:** fix state comparison, string binding ([a419b8d](https://github.com/PlaceOS/backoffice/commit/a419b8db6f491714967ad922f3e87eb52945a07b))
* **domain:** minor fix to application id display ([15cdf39](https://github.com/PlaceOS/backoffice/commit/15cdf39b314883cbafc0e47f2bd8fb568795649c))
* **domains:** fix showing new applications now showing after creation ([f68222f](https://github.com/PlaceOS/backoffice/commit/f68222f162d2cae17838f0fbeb8add083aa4e602)), closes [#84](https://github.com/PlaceOS/backoffice/issues/84)
* **engine:** null state [#80](https://github.com/PlaceOS/backoffice/issues/80) ([1b6c68f](https://github.com/PlaceOS/backoffice/commit/1b6c68f12d8bf1cc5792149086117ac96d02937a))
* **module:** fix validator for uri ([729cfba](https://github.com/PlaceOS/backoffice/commit/729cfba451b2d3b69c41a86d760be4423fc053fc))
* **modules:** remove unnecessary code ([b7b2c38](https://github.com/PlaceOS/backoffice/commit/b7b2c38161050b1e62b2435f99898417cf1ee772))
* **repo:** add readonly commit hash input and fix loadCommits ([2b3e021](https://github.com/PlaceOS/backoffice/commit/2b3e02186bdec2ce7a4572d9b9c3af111f7a3551))
* domain issue fix [#65](https://github.com/PlaceOS/backoffice/issues/65) ([604e8d3](https://github.com/PlaceOS/backoffice/commit/604e8d3bf4261fbc9bc70a2cea624d2fb3a0bf01))
* modal headers - incorrect service refs [#67](https://github.com/PlaceOS/backoffice/issues/67) ([dc2b72d](https://github.com/PlaceOS/backoffice/commit/dc2b72dbd8ffa1750321d4c43c850df1bdaee367))
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

# 1.0.0 (2020-04-20)


### Bug Fixes

* **modules:** fix validation of ip addresses ([5976bb4](https://github.com/PlaceOS/backoffice/commit/5976bb4d11093e32a353f494e29f3e888b34a7c6)), closes [#26](https://github.com/PlaceOS/backoffice/issues/26)
* fix minor routing issues ([5850ff5](https://github.com/PlaceOS/backoffice/commit/5850ff5165bcfe467f279823f12b805123ac92fa))
* **build:** fix compilation issues ([2ed2227](https://github.com/PlaceOS/backoffice/commit/2ed22270f839ec81078abc694882b08bca354126))
* **debug-output:** scroll view to bottom when content updates ([c89d520](https://github.com/PlaceOS/backoffice/commit/c89d5201b9a222558c995398d75932ea651ded22)), closes [#13](https://github.com/PlaceOS/backoffice/issues/13)
* **drivers:** fix listing commits for edits ([3e85eac](https://github.com/PlaceOS/backoffice/commit/3e85eacd1e677ef010bbe2fd39421fbd38b7a499)), closes [#27](https://github.com/PlaceOS/backoffice/issues/27)
* **drivers:** fix logic of driver execs ([4120f09](https://github.com/PlaceOS/backoffice/commit/4120f09bab8b1ffe29b78425f6acdbbf595330a1))
* **drivers:** fix saving settings when creating drivers ([dcf8ccf](https://github.com/PlaceOS/backoffice/commit/dcf8ccf4ad4930b4e38b12c34cf7d7f8bdf61c42)), closes [#23](https://github.com/PlaceOS/backoffice/issues/23)
* **drivers:** fix updating driver and commit listing on changes ([426fa30](https://github.com/PlaceOS/backoffice/commit/426fa3014db155a65483416a20e5003d2c4bde2a)), closes [#20](https://github.com/PlaceOS/backoffice/issues/20)
* **drivers:** update about display values ([a4b35c5](https://github.com/PlaceOS/backoffice/commit/a4b35c58493739f7f193f0ce870196fc5440614f))
* **drivers:** update drivers to post repository details ([9a98f2f](https://github.com/PlaceOS/backoffice/commit/9a98f2fc7536e74aa68848ba51b3ea020d8018a0))
* **engine-admin:** fix spinners on database actions ([7c1275e](https://github.com/PlaceOS/backoffice/commit/7c1275e6aee3100ba0f1579b28a263171dd04df9))
* **modules:** fix propagating local changes when adding modules to sys ([22fe99f](https://github.com/PlaceOS/backoffice/commit/22fe99f6a2eb9764e7a6ba0ecc67e5c0597831f4)), closes [#24](https://github.com/PlaceOS/backoffice/issues/24)
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

## [1.0.3](https://gitlab.com/aca-engine/frontend-base/ngx-backoffice/compare/v1.0.2...v1.0.3) (2019-08-16)


### Bug Fixes

* **assets:** fix image assets to before the update to angular 8 ([4ce1324](https://gitlab.com/aca-engine/frontend-base/ngx-backoffice/commit/4ce1324))
* **logic:** fix circular dependencies in service classes ([0c9f687](https://gitlab.com/aca-engine/frontend-base/ngx-backoffice/commit/0c9f687))
* **settings:** fix default settings ([1193f41](https://gitlab.com/aca-engine/frontend-base/ngx-backoffice/commit/1193f41))

## [1.0.2](https://gitlab.com/aca-engine/frontend-base/ngx-backoffice/compare/v1.0.1...v1.0.2) (2019-08-09)


### Bug Fixes

* **spaces:** fix booking id management for spaces ([054d900](https://gitlab.com/aca-engine/frontend-base/ngx-backoffice/commit/054d900))

## [1.0.1](https://gitlab.com/aca-engine/frontend-base/ngx-backoffice/compare/v1.0.0...v1.0.1) (2019-07-03)


### Bug Fixes

* **versioning:** add build logic to set core application versioning ([5758efb](https://gitlab.com/aca-engine/frontend-base/ngx-backoffice/commit/5758efb))
