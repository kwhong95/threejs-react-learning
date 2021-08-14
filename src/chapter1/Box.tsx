import React, { useRef, FC }  from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";
import {IData} from "./index";

interface BoxProps {
  position: number[];
  castShadow: boolean;
  data: IData
}

const Box: FC<BoxProps> = (
  props: any
) => {
  const mesh = useRef<Mesh>(null!);


  useFrame(() => {
    mesh.current.rotation.x += props.data.rotationSpeed;
    mesh.current.rotation.y += props.data.rotationSpeed;
    mesh.current.rotation.z += props.data.rotationSpeed;
  })


  return (
    <mesh {...props} ref={mesh}>
      <boxBufferGeometry attach="geometry" args={[4, 4, 4]}  />
      <meshLambertMaterial attach="material" color={0xff0000} />
    </mesh>
  )
}

export default Box;
