import React, { useRef, FC }  from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";

interface BoxProps {
  position: number[];
  castShadow: boolean;
}

const Box: FC<BoxProps> = (
  props: any
) => {
  const mesh = useRef<Mesh>(null!);


  useFrame((state, delta) => {
    mesh.current.rotation.x += .02;
    mesh.current.rotation.y += .02;
    mesh.current.rotation.z += .02;
  })

  return (
    <mesh {...props} ref={mesh}>
      <boxBufferGeometry attach="geometry" args={[4, 4, 4]}  />
      <meshLambertMaterial attach="material" color={0xff0000} />
    </mesh>
  )
}

export default Box;
