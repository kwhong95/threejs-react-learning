import React from "react";
import { Canvas } from "@react-three/fiber";
import {Html, Stats} from "@react-three/drei";
import Interface from "./Interface";
import Plane from "./Plane";
import Camera from "./Camera";

export interface IData {
  rotationSpeed: number;
  addCube: any;
  removeCube: any;
  outputObjects: any;
  numberOfObject: number;
}

const Chapter2 = (): JSX.Element => {
  const [data, setData] = React.useState<IData>({} as IData)

  return  (
    <Canvas style={{ background: '#101010', width: '100vw', height: '100vh' }}>
      <axesHelper args={[100]}/>
      <Stats showPanel={0} />
      <Interface data={data} setData={setData}  />
      <Plane />
      <Camera />
    </Canvas>
  )
}

export default Chapter2
