import React, { FC } from "react";
import { Canvas } from "@react-three/fiber";
import { Box, Plane, Sphere } from "@react-three/drei";

const Chapter1: FC = () => {
  return (
    <Canvas
      /* 아래 세팅은 전부 Default 값이다. */
      style={{ background: "#232323" }}
      gl={undefined}
      shadows //  gl.shadowMap에 들어가는 props도 PCFsoft의 경우 true로 설정할 수 있다.
      vr={false} // Renderer 를 VR 모드로 전환한 다음 gl.setAnimation 을 사용
      mode="blocking" //  React mode: legacy, blocking, concurrent
      frameloop="always" //  Render mode: always, demand, never
      resize={{ scroll: true, debounce: { scroll: 50, resize: 0 }}} // react-use-measure options 참조
      orthographic={false} // 맞춤형 카메라를 생성
      dpr={undefined} // 픽셀 비율, 창을 사용합니다.devicePixelRatio 또는 auto: [min, max]
      linear={false} // 자동 sRGB 인코딩 및 감마 보정 OFF false = ON!
      onCreated={(state => {})} // Canvas가 렌더링된 후 callback (아직 커밋되지 않음)
      onPointerMissed={(event => {})} // 대상을 놓친 포인터 클릭에 대한 응답
      camera={{ position: [-30, 40, 30], fov: 45 }}

    >
      <axesHelper scale={[20, 20, 20]} />
      <spotLight
        position={[-40, 60, -10]}
        color={0xffffff}
        castShadow
      />
        <Plane
          rotation={[-.5 * Math.PI, 0, 0]}
          scale={[60, 20, 1]}
          position={[15, 0, 0]}
          receiveShadow
        >
          <meshLambertMaterial attach="material" color={0xffffff} />
        </Plane>
      <mesh >
        <Box scale={[4, 4, 4]} position={[-4, 3, 0]} castShadow>
          <meshLambertMaterial attach="material" color={0xff0000} />
        </Box>
      </mesh>
      <mesh>
        <Sphere scale={[4, 4, 4]} position={[20, 4, 2]} castShadow>
          <meshLambertMaterial attach="material" color={0x7777ff} />
        </Sphere>
      </mesh>
    </Canvas>
  )
}

export default Chapter1
