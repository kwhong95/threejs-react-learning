import React from "react";
import * as THREE from 'three';



const Plane = (): JSX.Element => {
  return (
    <mesh position={[0, 0, 0]}>
      <planeGeometry attach="geometry" args={[60, 40, 1, 1]}  />
      <meshBasicMaterial
        attach="material"
        color={0xffffff}
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}

export default Plane
