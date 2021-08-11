import React, {FC, useEffect} from "react";
import * as Three from 'three'
import {Canvas, events, render, RootState, useThree} from "@react-three/fiber";


const Chapter1: FC = () => {

  return (
    <Canvas
      /* 아래 세팅은 전부 Default 값이다. */
      gl={undefined}
      camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 5] }}
      shadows={false} //  gl.shadowMap에 들어가는 props도 PCFsoft의 경우 true로 설정할 수 있다.
      vr={false} // Renderer 를 VR 모드로 전환한 다음 gl.setAnimation 을 사용
      mode="blocking" //  React mode: legacy, blocking, concurrent
      frameloop="always" //  Render mode: always, demand, never
      resize={{ scroll: true, debounce: { scroll: 50, resize: 0 }}} // react-use-measure options 참조
      orthographic={false} // 맞춤형 카메라를 생성
      dpr={undefined} // 픽셀 비율, 창을 사용합니다.devicePixelRatio 또는 auto: [min, max]
      linear={false} // 자동 sRGB 인코딩 및 감마 보정 OFF false = ON!
      onCreated={(state => {})} // Canvas가 렌더링된 후 callback (아직 커밋되지 않음)
      onPointerMissed={(event => {})} // 대상을 놓친 포인터 클릭에 대한 응답
    >
      <perspectiveCamera
        fov={45}
      />
    </Canvas>
  )
}

export default Chapter1