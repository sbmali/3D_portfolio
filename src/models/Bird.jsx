import { useRef, useEffect } from 'react'

import birdScene from '../assets/3d/bird.glb'; 
import { useAnimations, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';


const Bird = () => {
  const birdRef = useRef();
  const { scene, animations } = useGLTF(birdScene);
  const { actions } = useAnimations(animations, birdRef);

  useEffect(() => {
    // Play the "Take 001" animation when the component mounts
  // Note: Animation names can be found on the Sketchfab website where the 3D model is hosted
    actions['Take 001'].play()
  }, [])

  useFrame(({clock, camera }) => {
    // Update the Y position to simulate bird-like motion using a sine wave
    birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0. + 2

    if(birdRef.current.x > camera.position.x + 10){
      birdRef.current.rotation.y = Math.PI;
    } else if(birdRef.current.position.x <camera.position.x - 10) {
      birdRef.current.rotation.y = 0;
    }
    if(birdRef.current.rotation.y === 0){
      birdRef.current.position.x += 0.01
      birdRef.current.position.z -= 0.01
    }else {
      birdRef.current.position.x -= 0.01
      birdRef.current.position.z += 0.01
    }
  })

  return (
    <mesh ref={birdRef} position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]}>
    // use the primitive element when you want to directly embed a complex 3D
    model or scene
    <primitive object={scene} />
  </mesh>
  )
}

export default Bird
