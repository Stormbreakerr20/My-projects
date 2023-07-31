import { easing } from "maath";
import { useSnapshot } from "valtio";
import { useFrame } from "@react-three/fiber";
import { state } from "../store";
import { useRef } from "react";

const Camerarig = ({ children }) => {
  const group = useRef();
  const snap = useSnapshot(state);

  useFrame((state, delta) => {
    const isBreakpoint = window.innerWidth <= 1280;
    const isMobile = window.innerWidth <= 600;

    //set initial position of model
    let targtPosition = [-0.3, 0, 2];
    if (snap.intro) {
      if (isBreakpoint) targtPosition = [0, 0, 2];
      if (isMobile) targtPosition = [0, 0.2, 2.5];
    } else {
      if (isMobile) targtPosition = [0, 0, 2.5];
      else targtPosition = [0, 0, 2];
    }

    //set camera position
    easing.damp3(state.camera.position, targtPosition, 0.25, delta);

    //set the rotation smoothly
    easing.dampE(
      group.current.rotation,
      [state.pointer.y / 10, -state.pointer.x / 5, 0],
      0.25,
      delta
    );
  });

  return (
    <>
      <group ref={group}>{children}</group>
    </>
  );
};

export default Camerarig;
