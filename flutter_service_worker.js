'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "135e098fddcf1ed08a7793157a328b37",
".git/config": "07eedcecf69ef513ebfdf0e5f798f2c8",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "7eba6824d6c01c1e5748b263a2c755b0",
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
".git/index": "c0c75ef2a430f74660d75a4a6ea78834",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "85a1bfcbc046e25df8c54b4297f3f9f6",
".git/logs/refs/heads/backend": "e63b9453415afabd092dda62088e5b62",
".git/logs/refs/heads/main": "93d36730143bb2ea29bca452a8db228a",
".git/logs/refs/remotes/origin/backend": "8f388041069539408637d8e66d50e392",
".git/logs/refs/remotes/origin/HEAD": "d35621667c4845fd87aad42eb6609893",
".git/logs/refs/remotes/origin/main": "352a1dd024d6d4a18f4040eb7751880d",
".git/objects/01/6965a6f5763c333a2617157d7f1d6c2555fccc": "4b86e2a042c1f605ac493e95471297c9",
".git/objects/02/ea8b602cd299e38cfa33ef958da319daa5e632": "ecef8e8046b55418362bdf686cfa64d9",
".git/objects/03/270903a593d6cff9e4ebe7e3f9bb8bc2e0ec03": "d714f96e52ceb3851abc067d256b8d48",
".git/objects/04/9a3d4b0c1303f85c39922cdd89113fe416211e": "4376ce12e5488e050729310abad1845f",
".git/objects/05/c2e81e1fbfa8ba2351774fee58ff5c475b2abe": "369ac35316f467fb464066e57ad6d997",
".git/objects/05/f0ae16bb6b02f23cfce95358ecf2c92cd87f99": "c6feb58953b470bebd94e44d6012d572",
".git/objects/0a/8b84a680ed8fc60f29dc8c050ba7ce15026998": "77f89dabf8916935fbdb366d20801a8e",
".git/objects/0a/af7cd2a52f42927414d22fd5c8895d334fb957": "d227da8df8f2fd6ea8cfc20da93f262a",
".git/objects/0b/60f2f02e193ac47134afacf53f2612e2516ae3": "89457c85b2c03f63f5aceb020179bdfd",
".git/objects/0b/9fcf3d6c6058acc662279d9d22099086a0c78a": "0f20d8b31472ed851f3506e98bb44282",
".git/objects/0d/f1592689b453addb56da7ab7dfa91e99597b24": "42542804d2e468345b5d8c6b0df90862",
".git/objects/0e/4a83f5055f2071e290dbee5eda58b8396683ff": "e883c2f1204475fcaf7b317dd5414300",
".git/objects/10/367df05ba8b07d70de897a283dc1ef6902c341": "03c37ebfebcf437b5d90c519011fb6c0",
".git/objects/10/e185d2961c07df53eba65439b13cb2ed5d9aef": "10f205e95743fd917383e5367e4975d3",
".git/objects/11/920f76872ce8af926cb7dfdcb4de8597fb0366": "c3ad44feceb8c22043e9807af9df5829",
".git/objects/11/d85b1323b8708537ab57bc2a3bd7efed325ed7": "07922b3906263c2bdc697fbdc6395b2a",
".git/objects/13/a1cc3118c37ed5194cd8101e28afd018d11a6d": "5b18231db8c91f12b90570cfb25bfa77",
".git/objects/13/cb55cc7f0860fe20e7c6f2558bae2dd68b04cb": "9f0293546b191b24dd9e0ebcbc32ebbc",
".git/objects/14/5c4b39fbb2ba4681c21e5c643b1dd8abc85c24": "bbf6adae5277fce9b27fafb55be17212",
".git/objects/17/f7621f518980cec71e6b8b659679340ff403c1": "db95d279940af4b7d6e3ba4ed5a79707",
".git/objects/1a/5e8b713758d9682c2e3874528b1da8f38066f3": "1d17fbeea042280f501b5ef43c33e67b",
".git/objects/1a/6bd55d36b319170fedfa7ddbd66b9ca0934d85": "d41b53be06db1c4f56e85ccb5ff92a0e",
".git/objects/1c/2c9e0f2acbed0949e08345faf3bace71385154": "64c589af67ad7ac477db820662446041",
".git/objects/1e/6be70f68db72ed0ff3cd99443f24acaf835e86": "6591ded1c0a2a4118e1a2ba8728c516f",
".git/objects/1f/126f568eb37868fa5a3b821313d4143c1178a3": "65a6a4fb18c2f22a3de19a17d8c34eb4",
".git/objects/1f/4a907e29217afd7faefd42b6435858c2396d63": "0361eb4fdd6ebe24020fcf17bf152fc3",
".git/objects/22/f8bedd1b11eba84996ecd87d1220b097e7f0c7": "3b35fbef2f1c0bf3d6784d6c9418f3e7",
".git/objects/28/b626134d912cafb25e88bb559a6ed34301661b": "50305a122315f9dbdca19f5eb09d75af",
".git/objects/28/bd57d1876c3e66e6224e791bdb001a22f4ba65": "ad7e7baf28134777d677a38373478d86",
".git/objects/29/008bb06bd13c2b78d40293d987d3566db90ebd": "93d2a753b2cbd5f2c593cdea0b050ddc",
".git/objects/2b/8021a3d7858fdbec7a92eb93c7218e7a4e5dcb": "890f1210290357196b8c253ed09cc3d1",
".git/objects/2d/85a29715a15c37d80e491160fe08df4abf9b8c": "7209764dbe4b6c6b7dbfaaf0b44de567",
".git/objects/2e/8b5080b5e510c09904d59781ca517cbd4a5fd2": "6e4ce3b9a09e83096c89b0da1df6e43d",
".git/objects/30/b04f8d480e753f9132b247ed54e1fd21cd72ca": "7b578e76dc5355940281f672a8ad46fe",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/36/8fe233c0262230c22fcd74f573d78344aca5e7": "43d46edf15648729450c4520ec82fd06",
".git/objects/38/222367f58b5f38e0b8b8b600ab273f21a29040": "b41e02231c7902e12ab37f3015881125",
".git/objects/38/372b9b4cb644cec9234d93344d296da5a74702": "51faf5a6e819bcd35200202017f27378",
".git/objects/38/4c33aafc96ae6796d36a017a5f9c0b902a986d": "9da86e92d47fe626b14efb38591e3815",
".git/objects/38/d56fb31a94ca358913c3705ba18fd4721ce856": "20aaf9c39ed5735443edc7203afca5e4",
".git/objects/3a/df9374825d9e3e776d1e1d7b09fe8544d5ab4a": "3717fb63fb0d19920d4859bec919e364",
".git/objects/3c/d474ab126d5855ff817824fa424e2e92fa8a0f": "d1be9364cbbc48b676a667ea55014730",
".git/objects/3e/9ad08b4a1b099647cea0b72a40a1cda181d561": "da887ddf61bdbad3172414b506711492",
".git/objects/40/50462f30513ba6a7fd97ea971188156cf8dc84": "804f324bb563518295705a1ea40efe84",
".git/objects/44/85d1fd67234b23db0019ab896f88f3204c476b": "6158ab405aa2b2137b9a96f214b6fe30",
".git/objects/45/af99a85f8fbedd404e6dfbe482f779477e6390": "c77311fa7f92cca46c26b094fd51db39",
".git/objects/45/d53fcea642ba0afa9161b2fd04fa2fa14257f4": "917561d5c843b2067222416fc8a8a092",
".git/objects/4a/258a2cee38a1fe35a5b8dc364b9052e0df2ad6": "efb535a8698903dde50e21c6874261c4",
".git/objects/4a/262abd8cbcdac8f648f1db433576688f92c7ce": "4f5c84631bbac08c7951f737a71c4b3d",
".git/objects/4b/0f70adbb53b18823af3d2a01071f677cf92967": "000e98bdeccd6feb1c2d7766eebaf589",
".git/objects/4c/1c9bc0def6dfeffce4d8adaaa44286796d2dad": "30609ab711c750070a33536aad445f77",
".git/objects/4e/e75f71c5a75dbf0c16635cbcdca9258940f608": "9d6370f0b62ffa38aed68c8693caf301",
".git/objects/53/6b2280237adc0170b81705b03b28422b40167f": "e71f821b81c27c51ec38abdeba8877bb",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/55/4b09f2a787e93456bc4909a5ff160b80c0a83e": "0fffdbf3b9d92f1cef7061ea0cb98032",
".git/objects/57/589089de5b9d58f4e491c17329b446b517f75e": "9e0c68a68a5ff3cc4bc867bad9487bfc",
".git/objects/5c/b6f3585c66168a385e002c10930cd62e0537d3": "10c1796796be5ae32199cef6e949e064",
".git/objects/60/912fa0f4a8e8cb20bb8837838249ad09862ca4": "2a90fbf040c729fb90b0d546c029f88a",
".git/objects/65/bb4412d763ae49c7d9fd39a962a73b2f28d979": "45bc9bdbffa97b52765b669e98beeb23",
".git/objects/67/faa3e6481a91c63eb8b73b59b6a6984c6f790c": "213013147ce0f6b178fcb024673b0f4a",
".git/objects/68/2066467aadf1e6cf874b697522ba7d03816b17": "11ed9959c0ba48751b8c8b5feef890a0",
".git/objects/68/e70730fdff5c9d7b2459b39cb219516d5f4334": "6762ac2cf819346e828130df60562bb0",
".git/objects/6d/4f3a736397dafe8c775dce69147bc37321175f": "a6a5733cd0ac23c850bd05a3e6fe449c",
".git/objects/70/1cebc19ec90137acab33b608f795ebfdf02a93": "18173e9d50e282e1fe2a8aaed50e47cc",
".git/objects/71/409597b36e09d46642e8fb319ada95ef383164": "d0e98c4985c46e45e046615bc89882fc",
".git/objects/71/5a82eed9288fa784f65e28d9b237b053eed0d7": "04c33a0aee8a26e2505b5e25888f2a8e",
".git/objects/72/b6b5b03a5d36465932ea697e931b66fd5031a0": "5b3b96e44c542aed2d1e228e440c9ece",
".git/objects/75/f999d94d0d804d0b11347261b98483a47096cf": "11ebb9060b5d5bc15a5acdf8dd77df53",
".git/objects/78/00d355e124e0730171bd84d78016c2cd79f76d": "95f7f9c742064e79e326e384bfa802e9",
".git/objects/78/42ccc429704556b0088f105115b705d38f2663": "28450f74e2938c7d8b87147ab659e640",
".git/objects/78/6d84004172bc04981ebab290f65d036594a12b": "4bc8e01416fb93cbca6ce3f81ada9e8a",
".git/objects/78/8642f1185288f10eea1760326e37472b42472c": "dd35f5881c64f9a934fbdc7e2e0c15a9",
".git/objects/7c/d972ff3849c1da99572d0b23b94b70f0ecf979": "20a3f63eaeb031da165fff024db7ea6d",
".git/objects/7c/e6dbd40882bf8576dbbabebfe93914ebd4092b": "b76a37274d3f25dda1c8be1c750157e6",
".git/objects/7e/034fcca7ab30227fc16dc0b8891a07bb46f0eb": "9a680aa1ac792ef58eb48f4239190911",
".git/objects/82/a05a70e7a6382e251057da78c9d5e72344fe1e": "12eaa433f33a200729ee523cbbdfc51f",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/83/33e4c73036ec071fda4d07fb033f448ac2e1cb": "d9943ba7bcbb8d0bc4af4063fe4650a1",
".git/objects/85/9c2ed7afc85edaf35bd573307af2c82f6c809c": "767d515a0e51fd7752a7d34d4fc27280",
".git/objects/86/03d0a3d2a91580f77171968c7d13e73fd1482a": "dc750bd17c929d834d260dd7dc0293e7",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/d6222e3c3c34186149c331be587e2271431645": "602b07378bdc7c84b0b138882e9a920c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/fbdc7f46fb0975557cf77311300bec731ee251": "51628d262c23bc780de3bc32a56123b0",
".git/objects/8c/28e7485029a134d348ac1a0c03ea7e43df1891": "a05854ed2105a5642bd58c87b6c0bdf8",
".git/objects/8d/909456e20e38ff88e895d841ffaee833728392": "010a1d23e503f4abcff2028dc6cad4b4",
".git/objects/8d/a4a58cd65eea7fc0f94fc686607de466afeb66": "0b46970813ff363188ffd9d9600fc9d4",
".git/objects/90/5731a670c3e95096b892f2b92579076577f70b": "144c2a4ad864bca6fd0bbd61045a4f3f",
".git/objects/92/018548fc3fd22e9af3cf8d059f9e0116cc4bdf": "1b487716439df8378148f97e4b85d82c",
".git/objects/92/2452ecebec5e9a5a4fd1c7969720fdc4ba5d21": "67697d34378b634e114804f68c53a4d6",
".git/objects/92/3e31dcc27bbb1a5b4e70c41b3fb90e8696b2e8": "72af29010041d9cf46f27793ba3f960a",
".git/objects/93/51e5e65f6368527b0e8fc2afd9fdf520e07e75": "8b6c601b05a4228e331a8ff098aab925",
".git/objects/94/0ff116f9cc8f8bdf39337cf1aed5282dad820f": "12a3781fd344bf9a6b3f449c8d3a8acf",
".git/objects/95/0f90a1da804776d2b0e3db8ad91642ede2cecc": "278fb1934ea2a57e21a2be499e35a273",
".git/objects/95/2b2431a91b68a06697f86860f9cf42fc2a4d27": "5802bb2be0c42656df3e6892c212ed7b",
".git/objects/95/6ee900f035263e7ff5f977a65321a1495d4a39": "59250da43bb38519402bd27ebf6ee556",
".git/objects/9a/a1e9472e2519e07225e4fe519ebbd3021ece43": "e6f0f328a7b489ce3d809b49293593d6",
".git/objects/9a/de86d132b1af96ef3a2ea02477e6adfc8e0434": "bd6c148023a1aca15578ce7eef0df547",
".git/objects/9c/f76099afcc20213ff672d25679823a0e6193ba": "5e76a553e4f1c56388410c468a379c48",
".git/objects/9d/ac3acad05540f314a580433e3f339a5e32073f": "1f6d68db0211e1d19d3b8ce184290526",
".git/objects/a0/c1edeae7b364e36476d4bd2cea09cf6f81e3e3": "4e303e1138adc9d070195fab55598ee5",
".git/objects/a0/e182f1ab61d54e1b59a8296c54786003e90341": "e9fe98ec0208b411f780b61d8422cbb2",
".git/objects/a2/44847ff163f0ae8f5f3cb345623210afc35225": "5acbbd8ae6dd5ce2fc8a75e4efe5f8a4",
".git/objects/a2/bc6ca20b7d00e7cbc0cb29cb931e7225ea6641": "ec39b5c4591570717a35ec27a7d39371",
".git/objects/a3/abc859368a1969a1505b663f6c3d2defd08493": "49313ea8928b4792c906ebf2e1c80bdc",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/a9/00c8afb657b4d3d57effdb74e470070f643615": "25859d3582ea573ecf2d82d00e37fb39",
".git/objects/a9/06631f479913a2f41237974707d039a8412733": "45de1021fba48a90f5b1e34a64e305ee",
".git/objects/a9/fb62a961e75d3b5402ed243b1a5e4e534a0aca": "625baed34e0dcea752b08affaeffdbf3",
".git/objects/ac/1ce5ce4ace7669f7b3539fd7502ff4ddcae1de": "42face20d0d475f82c4e9dd708fdd750",
".git/objects/ae/6109d293fa8e28e101de82417d3964b943de8d": "e7a9eeadd94bdc4d86570ffd942ad621",
".git/objects/af/6d3ede641843d8f3038da1d14da102a3a3dd86": "542551e59acde90afe9d039fbbc52ee7",
".git/objects/b1/417ff422467c8e3e197dceff89a46e892641a8": "1966a93d730ce740911423503d252d70",
".git/objects/b2/4b6dc7a91c5127c9d946a10f0b8dd30245e3f3": "e88c2fc06a1cdc73b45c6bd34e38f5d7",
".git/objects/b3/c8f7976e93cd96460f97898abb7898c64f44e1": "a1d2b026dff75575b6b552147dfb84c2",
".git/objects/b4/af6d3b5dcbc46023b564b4b3aa8d92ae47075f": "ce0e2edd336437a2d09e84d61b0ec1c9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/74ea85ac6722772596e5759de0151896441819": "8cef093bfbc114a6517ef7dad1fa51cb",
".git/objects/b8/109b08b72e7cec66882c82f8731216fda6998f": "951631361c6368bab62f02b26ff92653",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bc/1fa37d194f81b13b98881255edc75598a9d95d": "8a246adadd996733a7f6f4eb2ef3d19c",
".git/objects/bd/be770da26663a78914fe7eb995ca2ef5a33579": "41cc7117b50b917fdeb0345fec3d1d78",
".git/objects/bf/64657ef4f01c01817a3a1823f0a3be87d15110": "a71b636d618d7befea3ca5741db5f9da",
".git/objects/c1/877f2e794537568c2daf52e59015f1c555b5e5": "64ccbbd45b12ba2d84a312930555d7d8",
".git/objects/c2/8cb7cd6d385e421603ad4ef9837507f19e1149": "bfdf49c022c7a8298c85292177b71646",
".git/objects/c7/56604342064659d51cd71f85e89dbac3fa8f84": "a3b1cc8f6f304dfec04185cc3e0c5b8f",
".git/objects/c8/666058e14aa8c61feac6c1ca1bdfc95e8118a3": "d96cccc5899a81f2877cb369f14fa6c8",
".git/objects/c9/3821332670094dddbe9aa29715d6149ec42cd8": "36b6e4e98891a70e952c832c1ee65c8a",
".git/objects/ca/25f357fb2074ebb753780fd762b9ea78253652": "83bb7a73fbb691339e8069ce4463892a",
".git/objects/ce/70958f9996f39f0404b897a908e8fd8241617a": "f88526b4ba29753311c078f4eaa3b882",
".git/objects/d0/b0ddd8ceb2de38c5af7c46359ed90ede4d297c": "68f50671e5bafcf835eb5092405ffd81",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/0d1aa018a1c5e1e7796d44c3e010684a4e53a8": "871ea0a612e5bf874408bda60e9d7a77",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d7/7e562c3b1ab2ac78c3007006be6fd493ad4baa": "ffdbe5633ff15e7ef59b3460706e1695",
".git/objects/d9/8718b017b1eee223538674834f0c24ccb9a42c": "d7de5f83dc717a8fcc34a81e43b975f0",
".git/objects/da/0de00553181a63666b20bfb3ab188391250da6": "fd35a22731f4991366a5952923719828",
".git/objects/db/b38ed8bd014d6fa2b4e2b6a1e2f8adbae2274b": "5753ac358546a7c7c7846ddbce10bedb",
".git/objects/dd/7e941fe179f2fa344085fe0831114b9133f26a": "4b7fa888838f3946bfb42e0fc9ffef79",
".git/objects/dd/ef1ac85b468bf1508e7eb97b3ffd7ad03b610d": "01efedc6b9cf5cff8dd1bdb8da87c7a4",
".git/objects/de/73af7f451b78ed2a4d3fe779b06ed5dafd5899": "bc1e7bfdc951113b8bcd3bf251040b0c",
".git/objects/df/f93d9f9abdb7cad869d58d68416337bb42dad0": "6800db94982b6bdc68ce692eb110920d",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/e0/7797437d096064bd90c373800dcb0f335c14b0": "16f9b9defb16491f8c733b09b022688c",
".git/objects/e0/7e415f8a8ee478e309cda004b5904152af5372": "d54112bbb65c15b582c1c6ef78fa4228",
".git/objects/e3/4f0e8d56a2f30fac05c6df9112b17dc0092eea": "73075688f9db8a4466eca9828f4f5333",
".git/objects/e6/aa1acca69b8695f824c5160af0ac2d691d8b0e": "34001ad51b355f8aab0845ecea5cf44e",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e9/f8beac6c7ae0bb366cab80595a6fb3b4e598e2": "da095aa15cec04b09e0541b02af00c7a",
".git/objects/ea/c4c069b6299b481627a683fdb3496b91bfb7fc": "27279f51f5b086eba8b98a119673af64",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/f13bc679b9f0e63ed790c1336a241ee353a012": "5ef209c93bebea97f84a3d19aa0a5c33",
".git/objects/f0/104094e3e71cd88795d9018f7112d342fe4ea5": "d57bb360e842c648fd6df2bcb68f6c0b",
".git/objects/f0/151d57c9c889b070a847b556c60435d7806d54": "3d40a8835c9342b925def01f39e3de5b",
".git/objects/f3/6efe2c5859df5a82c0ac92ba87a1de8f782645": "fdad9dec3d89412c2a88a36ff3484734",
".git/objects/f4/7a67a70c6dd2c4032c8ab3ae1fe49b0943ebf6": "cadc74f5a933f053335393ae0634f3fb",
".git/objects/f4/e57bf06cf06afd3f6633ec80f94eecee878b18": "ae3c366b95c5909c87f59698c57c9469",
".git/objects/f8/602d9e3507517ea376e6690de44da28f87f500": "7f7a933b203dc5f9b39a85072996a33b",
".git/objects/f9/78e42c7725f553079c052835e8285831a1cdd6": "4eb753e1b780b1dbe3ff096d4838934f",
".git/objects/fa/1eb7bb6de3d0dd95475337a009000547d64152": "fee92ae398a74026676a56a0baa59248",
".git/objects/fa/987f062cf547e3a4af0ef0af05da79b33b3824": "22031e620afbe44b1b7c766a653d4564",
".git/objects/fb/0edf3ad18ff94a48547929c73398069e4438b2": "1d38ecfffb22d2dda55d1df992b37d04",
".git/objects/fb/f87c033802bccfbbfcfdb2ee339e96569dff2d": "e305abefdd2e9b2c13b3dd0ddf318546",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/ff/538b93f174ec060288ceed2332cf7cd072ba78": "3fc220348f17ee2c5c85b269f894b23c",
".git/ORIG_HEAD": "6c10ea8b242dd06d0096d90a36646c9c",
".git/refs/heads/backend": "15876318f92ae10a05be78abd0d52239",
".git/refs/heads/main": "a1e8bdfe0cff20bd7a366d73a387b07c",
".git/refs/remotes/origin/backend": "15876318f92ae10a05be78abd0d52239",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "a1e8bdfe0cff20bd7a366d73a387b07c",
"assets/AssetManifest.bin": "6e6fa7cea65b98393a2decc857d6eef3",
"assets/AssetManifest.json": "a447f4a2e693c4d820fcee767fef498b",
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
"assets/NOTICES": "9be61f2ef10f24c6137e9656d526ae2b",
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
"index.html": "97bb41b6d62c2247fd55da8affb35fb6",
"/": "97bb41b6d62c2247fd55da8affb35fb6",
"main.dart.js": "71643f755b9e260956d92d97a77565fa",
"manifest.json": "c9c6e178b1a37f4ddb356807fa7235ed",
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
