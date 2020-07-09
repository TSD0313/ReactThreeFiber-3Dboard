import * as THREE from 'three';
import { Tween } from 'createjs-module';
// ページの読み込みを待つ
window.onload = function() {
    // サイズを指定
    const width = 960;
    const height = 740;

    // レンダラーを作成
    const mainCanv = <HTMLCanvasElement>document.querySelector('#myCanvas');
    const renderer = new THREE.WebGLRenderer({
      canvas: mainCanv,
      antialias: true
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);
    // renderer.setClearColor("#FFFFFF");
    // レンダラー側で影を有効に
    renderer.shadowMap.enabled = true;

    // シーンを作成
    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#BBFFFF");

    // カメラを作成
    const camera = new THREE.PerspectiveCamera(70, width / height);
    camera.position.set( 0, 900, 900 );
    camera.lookAt(new THREE.Vector3(0, 0, 0));

    // 光源を作成
    const light = new THREE.DirectionalLight(0xFFFFFF, 1);
    light.castShadow = true;
    scene.add(light);
    light.position.set( 0, 450, 0 );
    light.lookAt(0,0,0)
    

    // ボードを作成
    {
        const boardBack =  new THREE.Mesh(                                      
            new THREE.PlaneGeometry(1600, 800),
            new THREE.MeshStandardMaterial({ 
            color: "palegreen"   
            })
        );
        boardBack.rotation.x = -Math.PI / 2;

        const boardLine =  new THREE.Mesh(                                      
            new THREE.PlaneGeometry(1600, 800, 8, 4),
            new THREE.MeshLambertMaterial({ 
            color: "red",
            wireframe: true    
        }));
        boardLine.rotation.x = -Math.PI / 2;

        const boardGroup = new THREE.Group()
        boardGroup.add(boardBack,boardLine);
        boardGroup.receiveShadow = true;
        scene.add(boardGroup);
    }

    const genCardImgObj = (openImg:string)=>{
        const planeCard = new THREE.PlaneGeometry(123, 180);
        const openTexture = new THREE.TextureLoader().load(openImg);
        const backTexture = new THREE.TextureLoader().load("cardback.jpg");

        const openMaterial = new THREE.MeshStandardMaterial({
            map: openTexture
        });
        const backMaterial = new THREE.MeshStandardMaterial({
            map: backTexture
        });

        const sampleCardOpen = new THREE.Mesh(planeCard, openMaterial);
        const sampleCareBack = new THREE.Mesh(planeCard, backMaterial);
        sampleCareBack.rotation.y = -Math.PI;
        const wrap = new THREE.Group(); 
        wrap.add(sampleCardOpen,sampleCareBack);
        wrap.rotation.x = -Math.PI/2;
        wrap.castShadow = true;
        wrap.receiveShadow = true;
        return wrap;
    };

    const alphaA = genCardImgObj("alpha.jpg");
    alphaA.position.set(100,2,100);
    scene.add(alphaA);

    const alphaB = genCardImgObj("alpha.jpg");
    alphaB.position.set(-300,2,100);
    scene.add(alphaB);

    const cards = [alphaA,alphaB]

    const mouse = new THREE.Vector2();
    mainCanv.addEventListener('mousemove', handleMouseMove);
    function handleMouseMove(event) {
        const element = event.currentTarget;
        // canvas要素上のXY座標
        const x = event.clientX - element.offsetLeft;
        const y = event.clientY - element.offsetTop;
        // canvas要素の幅・高さ
        const w = element.offsetWidth;
        const h = element.offsetHeight;
    
        // -1〜+1の範囲で現在のマウス座標を登録する
        mouse.x = ( x / w ) * 2 - 1;
        mouse.y = -( y / h ) * 2 + 1;
    };

    const raycaster = new THREE.Raycaster();

    const flipAnimation = (Obj:THREE.Object3D) => {
        createjs.Tween.get(Obj.position)
            .to({y:Obj.position.y+150},250)
            .to({y:Obj.position.y},250);
        Tween.get(Obj.rotation)
            .to({y:(-Math.PI-Obj.rotation.y),z:(-Math.PI/2-Obj.rotation.z)},500);
        return
    };

    // const floatupAnimation = (Obj:THREE.Object3D) => {
    //     createjs.Tween.get(Obj.position)
    //         .to({y:Obj.position.y+50},250)
    //     return
    // };

    renderer.domElement.addEventListener("click", onclick, true);
    function onclick(event) {
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(cards,true); 
        if (intersects.length > 0) {
            const selectedObject = intersects[0].object.parent;
            flipAnimation(selectedObject);
        };
    };

    tick();

    // 毎フレーム時に実行されるループイベント
    function tick() {
      // レンダリング
      renderer.render(scene, camera);
      requestAnimationFrame(tick);
    };
};