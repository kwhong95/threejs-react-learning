import React from "react";
import { Canvas } from "@react-three/fiber";
import { Stats } from "@react-three/drei";
import Interface from "./Interface";
import Plane from "./Plane";
import Camera from "./Camera";
import Cube from "./Cube";
import * as THREE from "three";

export interface ICubeItems {
  rotationSpeed: number;
  addCube: () => void;
  removeCube: () => void;
  outputObjects: any;
  numberOfObject: number;
}

export interface Cube {
  cubeSize: number;
  color: THREE.Color;
  args: [x: number, y: number, z: number];
  castShadow: boolean;
  name: string;
  position: [x: number, y: number, z: number]
}

const Chapter2 = (): JSX.Element => {
  const [cubes, setCubes] = React.useState()
  const [data, setData] = React.useState<ICubeItems>({} as ICubeItems)

  return  (
    <Canvas style={{ background: '#101010', width: '100vw', height: '100vh' }}>
      <axesHelper args={[100]}/>
      <Stats showPanel={0} />
      <Interface data={data} setData={setData} />
      <Plane position={[0, 0, 0]} args={[60, 40, 1, 1]} />
      <Camera />
      <Cube data={data} />
    </Canvas>
  )
}

export default Chapter2
