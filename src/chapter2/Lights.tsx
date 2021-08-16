import React from "react";

const Lights = (): JSX.Element => {
  return (
    <>
      <ambientLight color={0x0c0c0c} />
      <spotLight color={0xfffff} />
    </>
  )
}

export default Lights;
