# React - Three.js 정복하기

## Chapter01 Three.js로 첫 번째 3D 장면 그리기

### 사용한 라이브러리

* three
* @react-three-fiber
* @react-three/fiber/drei
* @emotion/react
* @emotion/styled

### 1. 3D 객체의 렌더링과 표시

| 객체 | 설명 |
| --- | --- |
| Plane | 배경으로 사용할 2차원 사각형|
| Cube | 빨간색으로 렌더링되는 3차원 정육면체 |
| Sphere | 파란색으로 렌더링되는 3차원 구체 |
| Camera | 결과물을 어떻게 보여질 것인지 결정 |
| Axes | x, y, z 축, 객체가 3차원 공간에서 렌더링되는 위치를 확인하는 유용한 디버깅 툴 |

### 2. Three.js 주요 3 객체 

1) **Scene** : 렌더링할 모든 객체와 사용할 모든 광원을 저장하는데 쓰이는 컨테이너, 이 객체가 없으면 Three.js는 아무것도 렌더링 할 수 없다.

2) **Camera** : 장면을 렌더링할 때  어떻게 보여질 것인지 정의

3) **Renderer** : **Scene** 객체가 **Camera** 객체의 각도에 따라 브라우저에서 어떻게 보이는지 산출하는 역할을 담당 ex) 그래픽 카드를 사용하도록 설정이 가능

### 3. 뜬금없는 React(선언식 프로그래밍) 장점 & 주요 3 객체 정의

**javascript(three)**
```js
let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
let renderer = new THREE.WebGLRenderer();
renderer.setClearColorHex();
renderer.setClearColor(new THREE.Color(0xEEEEEE));
renderer.setSize(window.innerWidth, window.innerHeight);
```

뭔가 복잡해보이고 난잡한 느낌이 난다..

**React(react-three/fiber)**
```js
// ...
<Canvas style={{ backgroundColor: "#EEEEEE", width: '100vw', hegiht: '100vh' }}>
	<perspectiveCamera fov={45} />
</Canvas>
// ...
```

정말 쉽고 편하게 직관적인 코드로 구현할 수 있다.

### 4. AxesHelper & Plane

```js
import React, { FC } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Plane } from "@react-three/drei";


const Chapter1: FC = () => {

	return (
		<Canvas>
			<perspectiveCamera
				fov={45}
			/>
			<axesHelper scale={[20, 20, 20]}/>
			<mesh>
				<Plane scale={[60, 20, 0]}>
					<meshBasicMaterial color={0xcccccc} />
				</Plane>
			</mesh>
		</Canvas>
	)
}

export default Chapter1
```

- AxesHelper: 보기 좋게 X,Y,Z 축을 보여줘 구현하는데 도움을 준다.
- Plane: 평면을 생성해준다(가로:60, 세로: 20, 높이(두께랄까?): 0)

<img width="830" alt="스크린샷 2021-08-12 오전 1 11 39" src="https://user-images.githubusercontent.com/70752848/129064943-183f328b-b9af-4672-a00a-b61e9f042376.png">


```js
<Plane
  rotation={[-.5 * Math.PI, 0, 0]}
  scale={[60, 20, 0]}
  position={[15, 0, 0]}
>
```

원하는 위치시키기 위해 rotation(회전) 및 position(이동) 을 조정한다.

<img width="830" alt="스크린샷 2021-08-12 오전 1 46 54" src="https://user-images.githubusercontent.com/70752848/129069797-b8e0ba7a-f0e4-4c8b-8cec-3eb1188fdac7.png">

### 5. Camera 

```js
<Canvas 
  // ...
  camera={{ position: [-30, 40, 30], fov: 45 }}
/>
```

간단하게 Canvas 의 기본 카메라의 위치를 바꿔보자.

<img width="830" alt="스크린샷 2021-08-12 오전 2 38 17" src="https://user-images.githubusercontent.com/70752848/129076925-d7e6a7dc-43c3-4884-ad6a-e9f82cd64292.png">

### 6. Add Material, Light, Shadow
