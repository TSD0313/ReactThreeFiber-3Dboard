/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/three/build/three.module.js":
/*!**************************************************!*\
  !*** ./node_modules/three/build/three.module.js ***!
  \**************************************************/
/*! exports provided: ACESFilmicToneMapping, AddEquation, AddOperation, AdditiveAnimationBlendMode, AdditiveBlending, AlphaFormat, AlwaysDepth, AlwaysStencilFunc, AmbientLight, AmbientLightProbe, AnimationClip, AnimationLoader, AnimationMixer, AnimationObjectGroup, AnimationUtils, ArcCurve, ArrayCamera, ArrowHelper, Audio, AudioAnalyser, AudioContext, AudioListener, AudioLoader, AxesHelper, AxisHelper, BackSide, BasicDepthPacking, BasicShadowMap, BinaryTextureLoader, Bone, BooleanKeyframeTrack, BoundingBoxHelper, Box2, Box3, Box3Helper, BoxBufferGeometry, BoxGeometry, BoxHelper, BufferAttribute, BufferGeometry, BufferGeometryLoader, ByteType, Cache, Camera, CameraHelper, CanvasRenderer, CanvasTexture, CatmullRomCurve3, CineonToneMapping, CircleBufferGeometry, CircleGeometry, ClampToEdgeWrapping, Clock, ClosedSplineCurve3, Color, ColorKeyframeTrack, CompressedTexture, CompressedTextureLoader, ConeBufferGeometry, ConeGeometry, CubeCamera, CubeGeometry, CubeReflectionMapping, CubeRefractionMapping, CubeTexture, CubeTextureLoader, CubeUVReflectionMapping, CubeUVRefractionMapping, CubicBezierCurve, CubicBezierCurve3, CubicInterpolant, CullFaceBack, CullFaceFront, CullFaceFrontBack, CullFaceNone, Curve, CurvePath, CustomBlending, CylinderBufferGeometry, CylinderGeometry, Cylindrical, DataTexture, DataTexture2DArray, DataTexture3D, DataTextureLoader, DecrementStencilOp, DecrementWrapStencilOp, DefaultLoadingManager, DepthFormat, DepthStencilFormat, DepthTexture, DirectionalLight, DirectionalLightHelper, DirectionalLightShadow, DiscreteInterpolant, DodecahedronBufferGeometry, DodecahedronGeometry, DoubleSide, DstAlphaFactor, DstColorFactor, DynamicBufferAttribute, DynamicCopyUsage, DynamicDrawUsage, DynamicReadUsage, EdgesGeometry, EdgesHelper, EllipseCurve, EqualDepth, EqualStencilFunc, EquirectangularReflectionMapping, EquirectangularRefractionMapping, Euler, EventDispatcher, ExtrudeBufferGeometry, ExtrudeGeometry, Face3, Face4, FaceColors, FileLoader, FlatShading, Float32Attribute, Float32BufferAttribute, Float64Attribute, Float64BufferAttribute, FloatType, Fog, FogExp2, Font, FontLoader, FrontFaceDirectionCCW, FrontFaceDirectionCW, FrontSide, Frustum, GammaEncoding, Geometry, GeometryUtils, GreaterDepth, GreaterEqualDepth, GreaterEqualStencilFunc, GreaterStencilFunc, GridHelper, Group, HalfFloatType, HemisphereLight, HemisphereLightHelper, HemisphereLightProbe, IcosahedronBufferGeometry, IcosahedronGeometry, ImageBitmapLoader, ImageLoader, ImageUtils, ImmediateRenderObject, IncrementStencilOp, IncrementWrapStencilOp, InstancedBufferAttribute, InstancedBufferGeometry, InstancedInterleavedBuffer, InstancedMesh, Int16Attribute, Int16BufferAttribute, Int32Attribute, Int32BufferAttribute, Int8Attribute, Int8BufferAttribute, IntType, InterleavedBuffer, InterleavedBufferAttribute, Interpolant, InterpolateDiscrete, InterpolateLinear, InterpolateSmooth, InvertStencilOp, JSONLoader, KeepStencilOp, KeyframeTrack, LOD, LatheBufferGeometry, LatheGeometry, Layers, LensFlare, LessDepth, LessEqualDepth, LessEqualStencilFunc, LessStencilFunc, Light, LightProbe, LightShadow, Line, Line3, LineBasicMaterial, LineCurve, LineCurve3, LineDashedMaterial, LineLoop, LinePieces, LineSegments, LineStrip, LinearEncoding, LinearFilter, LinearInterpolant, LinearMipMapLinearFilter, LinearMipMapNearestFilter, LinearMipmapLinearFilter, LinearMipmapNearestFilter, LinearToneMapping, Loader, LoaderUtils, LoadingManager, LogLuvEncoding, LoopOnce, LoopPingPong, LoopRepeat, LuminanceAlphaFormat, LuminanceFormat, MOUSE, Material, MaterialLoader, Math, MathUtils, Matrix3, Matrix4, MaxEquation, Mesh, MeshBasicMaterial, MeshDepthMaterial, MeshDistanceMaterial, MeshFaceMaterial, MeshLambertMaterial, MeshMatcapMaterial, MeshNormalMaterial, MeshPhongMaterial, MeshPhysicalMaterial, MeshStandardMaterial, MeshToonMaterial, MinEquation, MirroredRepeatWrapping, MixOperation, MultiMaterial, MultiplyBlending, MultiplyOperation, NearestFilter, NearestMipMapLinearFilter, NearestMipMapNearestFilter, NearestMipmapLinearFilter, NearestMipmapNearestFilter, NeverDepth, NeverStencilFunc, NoBlending, NoColors, NoToneMapping, NormalAnimationBlendMode, NormalBlending, NotEqualDepth, NotEqualStencilFunc, NumberKeyframeTrack, Object3D, ObjectLoader, ObjectSpaceNormalMap, OctahedronBufferGeometry, OctahedronGeometry, OneFactor, OneMinusDstAlphaFactor, OneMinusDstColorFactor, OneMinusSrcAlphaFactor, OneMinusSrcColorFactor, OrthographicCamera, PCFShadowMap, PCFSoftShadowMap, PMREMGenerator, ParametricBufferGeometry, ParametricGeometry, Particle, ParticleBasicMaterial, ParticleSystem, ParticleSystemMaterial, Path, PerspectiveCamera, Plane, PlaneBufferGeometry, PlaneGeometry, PlaneHelper, PointCloud, PointCloudMaterial, PointLight, PointLightHelper, Points, PointsMaterial, PolarGridHelper, PolyhedronBufferGeometry, PolyhedronGeometry, PositionalAudio, PropertyBinding, PropertyMixer, QuadraticBezierCurve, QuadraticBezierCurve3, Quaternion, QuaternionKeyframeTrack, QuaternionLinearInterpolant, REVISION, RGBADepthPacking, RGBAFormat, RGBAIntegerFormat, RGBA_ASTC_10x10_Format, RGBA_ASTC_10x5_Format, RGBA_ASTC_10x6_Format, RGBA_ASTC_10x8_Format, RGBA_ASTC_12x10_Format, RGBA_ASTC_12x12_Format, RGBA_ASTC_4x4_Format, RGBA_ASTC_5x4_Format, RGBA_ASTC_5x5_Format, RGBA_ASTC_6x5_Format, RGBA_ASTC_6x6_Format, RGBA_ASTC_8x5_Format, RGBA_ASTC_8x6_Format, RGBA_ASTC_8x8_Format, RGBA_BPTC_Format, RGBA_ETC2_EAC_Format, RGBA_PVRTC_2BPPV1_Format, RGBA_PVRTC_4BPPV1_Format, RGBA_S3TC_DXT1_Format, RGBA_S3TC_DXT3_Format, RGBA_S3TC_DXT5_Format, RGBDEncoding, RGBEEncoding, RGBEFormat, RGBFormat, RGBIntegerFormat, RGBM16Encoding, RGBM7Encoding, RGB_ETC1_Format, RGB_ETC2_Format, RGB_PVRTC_2BPPV1_Format, RGB_PVRTC_4BPPV1_Format, RGB_S3TC_DXT1_Format, RGFormat, RGIntegerFormat, RawShaderMaterial, Ray, Raycaster, RectAreaLight, RedFormat, RedIntegerFormat, ReinhardToneMapping, RepeatWrapping, ReplaceStencilOp, ReverseSubtractEquation, RingBufferGeometry, RingGeometry, SRGB8_ALPHA8_ASTC_10x10_Format, SRGB8_ALPHA8_ASTC_10x5_Format, SRGB8_ALPHA8_ASTC_10x6_Format, SRGB8_ALPHA8_ASTC_10x8_Format, SRGB8_ALPHA8_ASTC_12x10_Format, SRGB8_ALPHA8_ASTC_12x12_Format, SRGB8_ALPHA8_ASTC_4x4_Format, SRGB8_ALPHA8_ASTC_5x4_Format, SRGB8_ALPHA8_ASTC_5x5_Format, SRGB8_ALPHA8_ASTC_6x5_Format, SRGB8_ALPHA8_ASTC_6x6_Format, SRGB8_ALPHA8_ASTC_8x5_Format, SRGB8_ALPHA8_ASTC_8x6_Format, SRGB8_ALPHA8_ASTC_8x8_Format, Scene, SceneUtils, ShaderChunk, ShaderLib, ShaderMaterial, ShadowMaterial, Shape, ShapeBufferGeometry, ShapeGeometry, ShapePath, ShapeUtils, ShortType, Skeleton, SkeletonHelper, SkinnedMesh, SmoothShading, Sphere, SphereBufferGeometry, SphereGeometry, Spherical, SphericalHarmonics3, SphericalReflectionMapping, Spline, SplineCurve, SplineCurve3, SpotLight, SpotLightHelper, SpotLightShadow, Sprite, SpriteMaterial, SrcAlphaFactor, SrcAlphaSaturateFactor, SrcColorFactor, StaticCopyUsage, StaticDrawUsage, StaticReadUsage, StereoCamera, StreamCopyUsage, StreamDrawUsage, StreamReadUsage, StringKeyframeTrack, SubtractEquation, SubtractiveBlending, TOUCH, TangentSpaceNormalMap, TetrahedronBufferGeometry, TetrahedronGeometry, TextBufferGeometry, TextGeometry, Texture, TextureLoader, TorusBufferGeometry, TorusGeometry, TorusKnotBufferGeometry, TorusKnotGeometry, Triangle, TriangleFanDrawMode, TriangleStripDrawMode, TrianglesDrawMode, TubeBufferGeometry, TubeGeometry, UVMapping, Uint16Attribute, Uint16BufferAttribute, Uint32Attribute, Uint32BufferAttribute, Uint8Attribute, Uint8BufferAttribute, Uint8ClampedAttribute, Uint8ClampedBufferAttribute, Uncharted2ToneMapping, Uniform, UniformsLib, UniformsUtils, UnsignedByteType, UnsignedInt248Type, UnsignedIntType, UnsignedShort4444Type, UnsignedShort5551Type, UnsignedShort565Type, UnsignedShortType, VSMShadowMap, Vector2, Vector3, Vector4, VectorKeyframeTrack, Vertex, VertexColors, VideoTexture, WebGLCubeRenderTarget, WebGLMultisampleRenderTarget, WebGLRenderTarget, WebGLRenderTargetCube, WebGLRenderer, WebGLUtils, WireframeGeometry, WireframeHelper, WrapAroundEnding, XHRLoader, ZeroCurvatureEnding, ZeroFactor, ZeroSlopeEnding, ZeroStencilOp, sRGBEncoding */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\r\n// ページの読み込みを待つ\r\nwindow.onload = function () {\r\n    // サイズを指定\r\n    var width = 960;\r\n    var height = 740;\r\n    // レンダラーを作成\r\n    var mainCanv = document.querySelector('#myCanvas');\r\n    var renderer = new three__WEBPACK_IMPORTED_MODULE_0__[\"WebGLRenderer\"]({\r\n        canvas: mainCanv,\r\n        antialias: true\r\n    });\r\n    renderer.setPixelRatio(window.devicePixelRatio);\r\n    renderer.setSize(width, height);\r\n    // レンダラー側で影を有効に\r\n    renderer.shadowMap.enabled = true;\r\n    // シーンを作成\r\n    var scene = new three__WEBPACK_IMPORTED_MODULE_0__[\"Scene\"]();\r\n    // カメラを作成\r\n    var camera = new three__WEBPACK_IMPORTED_MODULE_0__[\"PerspectiveCamera\"](60, width / height);\r\n    camera.position.set(0, 800, 900);\r\n    camera.lookAt(new three__WEBPACK_IMPORTED_MODULE_0__[\"Vector3\"](0, 0, 0));\r\n    // 光源を作成\r\n    {\r\n        var light = new three__WEBPACK_IMPORTED_MODULE_0__[\"AmbientLight\"](0xFFFFFF, 1.0);\r\n        scene.add(light);\r\n    }\r\n    // ボードを作成\r\n    {\r\n        var board = new three__WEBPACK_IMPORTED_MODULE_0__[\"Mesh\"](new three__WEBPACK_IMPORTED_MODULE_0__[\"PlaneGeometry\"](1200, 800, 8, 4), new three__WEBPACK_IMPORTED_MODULE_0__[\"MeshLambertMaterial\"]({\r\n            color: \"white\",\r\n            wireframe: true\r\n        }));\r\n        board.rotation.x = -Math.PI / 2;\r\n        scene.add(board);\r\n    }\r\n    var genCardImgObj = function (openImg) {\r\n        var planeCard = new three__WEBPACK_IMPORTED_MODULE_0__[\"PlaneGeometry\"](123, 180);\r\n        var openTexture = new three__WEBPACK_IMPORTED_MODULE_0__[\"TextureLoader\"]().load(openImg);\r\n        var backTexture = new three__WEBPACK_IMPORTED_MODULE_0__[\"TextureLoader\"]().load('cardback.jpg');\r\n        var openMaterial = new three__WEBPACK_IMPORTED_MODULE_0__[\"MeshStandardMaterial\"]({\r\n            map: openTexture\r\n        });\r\n        var backMaterial = new three__WEBPACK_IMPORTED_MODULE_0__[\"MeshStandardMaterial\"]({\r\n            map: backTexture\r\n        });\r\n        var sumpleCardOpen = new three__WEBPACK_IMPORTED_MODULE_0__[\"Mesh\"](planeCard, openMaterial);\r\n        var sumpleCareBack = new three__WEBPACK_IMPORTED_MODULE_0__[\"Mesh\"](planeCard, backMaterial);\r\n        sumpleCareBack.rotation.y = -Math.PI;\r\n        var wrap = new three__WEBPACK_IMPORTED_MODULE_0__[\"Group\"]();\r\n        wrap.add(sumpleCardOpen, sumpleCareBack);\r\n        return wrap;\r\n    };\r\n    var alphaA = genCardImgObj(\"alpha.jpg\");\r\n    alphaA.rotation.z = -Math.PI / 4;\r\n    alphaA.position.set(0, 120, 0);\r\n    scene.add(alphaA);\r\n    var alphaB = genCardImgObj(\"alpha.jpg\");\r\n    alphaB.rotation.x = -Math.PI / 2;\r\n    alphaB.position.set(0, 0, 0);\r\n    scene.add(alphaB);\r\n    var alphaC = genCardImgObj(\"alpha.jpg\");\r\n    alphaC.rotation.x = -Math.PI / 2;\r\n    alphaC.position.set(-225, 0, 300);\r\n    scene.add(alphaC);\r\n    var mouse = new three__WEBPACK_IMPORTED_MODULE_0__[\"Vector2\"]();\r\n    mainCanv.addEventListener('mousemove', handleMouseMove);\r\n    // マウスを動かしたときのイベント\r\n    function handleMouseMove(event) {\r\n        var element = event.currentTarget;\r\n        // canvas要素上のXY座標\r\n        var x = event.clientX - element.offsetLeft;\r\n        var y = event.clientY - element.offsetTop;\r\n        // canvas要素の幅・高さ\r\n        var w = element.offsetWidth;\r\n        var h = element.offsetHeight;\r\n        // -1〜+1の範囲で現在のマウス座標を登録する\r\n        mouse.x = (x / w) * 2 - 1;\r\n        mouse.y = -(y / h) * 2 + 1;\r\n    }\r\n    ;\r\n    var raycaster = new three__WEBPACK_IMPORTED_MODULE_0__[\"Raycaster\"]();\r\n    renderer.domElement.addEventListener(\"click\", onclick, true);\r\n    function onclick(event) {\r\n        raycaster.setFromCamera(mouse, camera);\r\n        var intersects = raycaster.intersectObjects(scene.children); //array\r\n        if (intersects.length > 0) {\r\n            var selectedObject = intersects[0].object;\r\n            selectedObject.position.y = 100;\r\n        }\r\n    }\r\n    tick();\r\n    // 毎フレーム時に実行されるループイベント\r\n    function tick() {\r\n        // 角度に応じてカメラの位置を設定\r\n        camera.position.x = 800 * Math.sin(Date.now() / 1500);\r\n        camera.position.y = 500;\r\n        camera.position.z = 800 * Math.cos(Date.now() / 1500);\r\n        // 原点方向を見つめる\r\n        camera.lookAt(new three__WEBPACK_IMPORTED_MODULE_0__[\"Vector3\"](0, 0, 0));\r\n        // レンダリング\r\n        renderer.render(scene, camera);\r\n        requestAnimationFrame(tick);\r\n    }\r\n    ;\r\n};\r\n\n\n//# sourceURL=webpack:///./src/main.ts?");

/***/ })

/******/ });