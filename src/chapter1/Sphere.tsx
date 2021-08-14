import React, { useRef } from "react";
import { Mesh } from "three";
import { useFrame } from "@react-three/fiber";
import { IData } from "./index";

interface SphereProps {
  position: number[]
  castShadow: boolean
  data: IData
}

const Sphere: React.FunctionComponent<SphereProps> = (
  props: any
) => {
  const mesh = useRef<Mesh>(null!)
  let step = 0

  const bouncingBall = () => {
    step += props.data.bouncingSpeed;
    mesh.current.position.x = 20 + ( 10 * (Math.cos(step)));
    mesh.current.position.y = 2 + ( 10 * Math.abs(Math.sin(step)))
  }

  useFrame(() => {
    bouncingBall();
  })

  return (
      <mesh { ...props } ref={mesh}>
        <sphereBufferGeometry attach="geometry" args={[4, 20, 20]} />
        <meshLambertMaterial attach="material" color={0x7777ff} />
      </mesh>
  )
}

export default Sphere;
