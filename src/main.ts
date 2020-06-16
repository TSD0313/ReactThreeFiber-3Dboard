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
    // レンダラー側で影を有効に
    renderer.shadowMap.enabled = true;

    // シーンを作成
    const scene = new THREE.Scene();

    // カメラを作成
    const camera = new THREE.PerspectiveCamera(60, width / height);
    camera.position.set( 0, 800, 900 );
    camera.lookAt(new THREE.Vector3(0, 0, 0));

    // 光源を作成
    {
        const light = new THREE.AmbientLight(0xFFFFFF, 1.0);
        scene.add(light);
    }

    // ボードを作成
    {
    const board =  new THREE.Mesh(                                      
        new THREE.PlaneGeometry(1200, 800, 8, 4),
        new THREE.MeshLambertMaterial({ 
        color: "white",
        wireframe: true         
    }));
    board.rotation.x = -Math.PI / 2;
    scene.add(board);
    }
    

    const genCardImgObj = (openImg:string)=>{
        const planeCard = new THREE.PlaneGeometry(123, 180);
        const openTexture = new THREE.TextureLoader().load(openImg);
        const backTexture = new THREE.TextureLoader().load('cardback.jpg');
        const openMaterial = new THREE.MeshStandardMaterial({
            map: openTexture
        });
        const backMaterial = new THREE.MeshStandardMaterial({
            map: backTexture
        });
        const sumpleCardOpen = new THREE.Mesh(planeCard, openMaterial);
        const sumpleCareBack = new THREE.Mesh(planeCard, backMaterial);
        sumpleCareBack.rotation.y = -Math.PI;
        const wrap = new THREE.Group(); 
        wrap.add(sumpleCardOpen,sumpleCareBack);
        return wrap;
    };
    
    const alphaA = genCardImgObj("alpha.jpg");
    alphaA.rotation.z = -Math.PI/4;
    alphaA.position.set(0,120,0);
    scene.add(alphaA);

    const alphaB = genCardImgObj("alpha.jpg");
    alphaB.rotation.x = -Math.PI/2;
    alphaB.position.set(0,0,0);
    scene.add(alphaB);

    const alphaC = genCardImgObj("alpha.jpg");
    alphaC.rotation.x = -Math.PI/2;
    alphaC.position.set(-225,0,300);
    scene.add(alphaC);

    const mouse = new THREE.Vector2();
    mainCanv.addEventListener('mousemove', handleMouseMove);
    // マウスを動かしたときのイベント
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

    renderer.domElement.addEventListener("click", onclick, true);
    function onclick(event) {
        raycaster.setFromCamera(mouse, camera);
        var intersects = raycaster.intersectObjects(scene.children); //array
        if (intersects.length > 0) {
            const selectedObject = intersects[0].object;
            selectedObject.position.y = 100
        }
    }

    tick();

    // 毎フレーム時に実行されるループイベント
    function tick() {
      // 角度に応じてカメラの位置を設定
      camera.position.x = 800 * Math.sin(Date.now() / 1500);
      camera.position.y = 500;
      camera.position.z = 800 * Math.cos(Date.now() / 1500);
      // 原点方向を見つめる
      camera.lookAt(new THREE.Vector3(0, 0, 0));

      // レンダリング
      renderer.render(scene, camera);
      requestAnimationFrame(tick);
    };
};