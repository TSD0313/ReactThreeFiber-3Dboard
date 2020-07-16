import React, { useRef, useEffect, JSXElementConstructor } from 'react'
import * as THREE from 'three'

const Plane = () => {
    return (
      <mesh rotation={new THREE.Euler(-Math.PI/2, 0, 0)} >
        <planeBufferGeometry attach="geometry" args={[20, 16]} />
        <meshNormalMaterial attach="material" color="#FFFFE0" opacity={0.8} transparent />
      </mesh>
    );
};

const ZoneFrame = () => {
    const points = [
        new THREE.Vector3( -0.75, 0, -1 ),
        new THREE.Vector3( 0.75, 0, -1 ),
        new THREE.Vector3( 0.75, 0, 1 ),
        new THREE.Vector3( -0.75, 0, 1 ),
        new THREE.Vector3( -0.75, 0, -1 )
    ];
    return (
        <line >
            <geometry attach="geometry" vertices={points} />
            <lineBasicMaterial attach="material" color="red" />
        </line>
    );
};

const ZoneMaterial = () =>  {
    return (
      <mesh rotation={new THREE.Euler(-Math.PI/2, 0, 0)} >
        <planeBufferGeometry attach="geometry" args={[1.5, 2]} />
        <meshBasicMaterial attach="material" color="pink" opacity={0.8} transparent />
      </mesh>
    );
};

interface props {
    x:number
};
const Zone = {
    monster:({x} :props) => {return (
        <group position={new THREE.Vector3(x, 0, 0)}>
            <group >
                <ZoneMaterial />
                <ZoneFrame />
            </group>
            <group rotation={new THREE.Euler(0, -Math.PI/2, 0)}>
                <ZoneMaterial />
                <ZoneFrame />
            </group>
        </group>
        
    )},
    other: ({x} :props) => {return (
        <group position={new THREE.Vector3(x, 0, 0)}>
            <ZoneMaterial />
            <ZoneFrame />
        </group>
    )}
};

const ZoneGroup = ()=>{
    
    interface props {
        vertical:"front" | "back"
    };
    const ZoneHorizon = ({vertical}:props) : JSX.Element => {
        const zoneHorizonLine :JSX.Element[] = [];
        if(vertical=="back"){
            for (let H = 0; H < 7; H++) {
                zoneHorizonLine.push(
                    Zone.other({ x:-7.5 + H*2.5 })
                );
            };
        }else if(vertical=="front"){
            for (let H = 0; H < 7; H++) {
                if( 1<=H && H<=5){
                    zoneHorizonLine.push(
                        Zone.monster({ x:-7.5 + H*2.5 })
                    );
                }else{
                    zoneHorizonLine.push(
                        Zone.other({ x:-7.5 + H*2.5 })
                    );
                };
            };
        };
        const posi = (()=>{
            if(vertical=="front"){
                return new THREE.Vector3(0, 0, 1.25)
            }else if(vertical=="back"){
                return new THREE.Vector3(0, 0, -1.25)
            }
        })();
        return (
            <group position={posi}>
                {zoneHorizonLine}
            </group>
        )
    };

    return (
        <group position={new THREE.Vector3(0, 0.001, 0)}>
            <group position={new THREE.Vector3(0, 0, -3.75)}>
                <ZoneHorizon vertical={"front"} />
                <ZoneHorizon vertical={"back"} />
            </group>
            <group position={new THREE.Vector3(0, 0, 3.75)} rotation={new THREE.Euler(0, Math.PI, 0)}>
                <ZoneHorizon vertical={"front"} />
                <ZoneHorizon vertical={"back"} />
            </group>
        </group>
    );
};


const Board = () => {
    return (
        <group position={new THREE.Vector3(0, 0, 0)} receiveShadow>
            <Plane />
            <ZoneGroup />
        </group>
    )
};

export default Board;