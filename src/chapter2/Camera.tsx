import React from "react";
import { OrbitControls } from "@react-three/drei";

interface CameraProps {

}

const Camera = (
  {  }: CameraProps
): JSX.Element => {

  return (
    <>
      <perspectiveCamera
        position={[-30, 40, 30]}
        fov={45}
        aspect={window.innerWidth / window.innerHeight}
        near={.1}
        far={1000}
      />
      <OrbitControls />
    </>
  )
}

export default Camera;
