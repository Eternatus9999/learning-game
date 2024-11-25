import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Suspense } from "react";
import { Physics } from "@react-three/rapier";

function App() {
  return (
    <Canvas shadows camera={{ position: [0, 6, 14], fov: 42 }}>
      <color attach="background" args={["#bdecfb"]} />
      <Suspense>
        <Physics debug>
          <Experience />
        </Physics>
      </Suspense>
    </Canvas>
  );
}

export default App;
