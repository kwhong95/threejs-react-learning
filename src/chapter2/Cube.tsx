import React from "react";
import { ICubeItems } from "./index";

interface CubeProps {
  data: ICubeItems
}

const Cube = (
  { data }: CubeProps
): JSX.Element => {
  let cubeSize = Math.ceil((Math.random()) * 3)

  return (
    <mesh castShadow >
      <boxGeometry attach="geometry" args={[cubeSize, cubeSize, cubeSize]} />
      <meshLambertMaterial attach="material" color={Math.random() * 0xffffff} />
    </mesh>
  )
}

export default Cube;
