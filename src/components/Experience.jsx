import { Cylinder, OrbitControls } from "@react-three/drei";
import { CylinderCollider, RigidBody } from "@react-three/rapier";
import { Lap } from "./Lap";

export const Experience = () => {
  return (
    <>
      <OrbitControls />
      {/* LIGHTS */}
      <ambientLight intensity={1} />
      <directionalLight position={[5, 1, 5]} intensity={0.8} castShadow />
      
      {/* BACKGROUND */}
      <Lap scale={[60, 60, 60]}/>

      {/* STAGE */}
      <RigidBody type="fixed" position={-0.5} colliders={false}>
        <CylinderCollider args={[1/2, 5]} />
        <Cylinder scale={[5, 1, 5]} receiveShadow>
          <meshStandardMaterial color="white" />
        </Cylinder>
        </RigidBody>
    </>
  );
};
