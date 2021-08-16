import React from "react";
import * as THREE from 'three';

interface PlaneProps {
  position: [x: number, y: number, z: number];
  args: [
    width: number,
    height: number,
    widthSegment: number,
    heigthSegment: number
  ];
}


const Plane = (
  { position, args }: PlaneProps
): JSX.Element => {
  return (
    <mesh position={position}>
      <planeGeometry attach="geometry" args={args}  />
      <meshBasicMaterial
        attach="material"
        color={0xffffff}
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}

export default Plane
