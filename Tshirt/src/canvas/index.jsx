import { Canvas } from "@react-three/fiber";
import { Environment, Center, OrbitControls } from "@react-three/drei";
import Shirt from "./Shirt";
import CameraRig from "./CameraRig";
import BackDrop from "./Backdrop";
import { useAsset } from "use-asset";
import { Suspense, useMemo } from "react";
import { useEffect } from "react";


const CanvasModel = () => {

  useEffect(() => () => useAsset.clear(), [])
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 0], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      className="w-full max-w-full h-full transition-all ease-in "
    >
      <ambientLight intensity={0.5} />

        <Environment preset="sunset" />


      <CameraRig>
        <BackDrop />
        <Center>
          {/* to center in page */}
          <Shirt />
        </Center>
      </CameraRig>
    </Canvas>
  );
};

export default CanvasModel;
