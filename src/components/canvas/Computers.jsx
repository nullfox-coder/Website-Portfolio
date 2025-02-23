import {Suspense, useEffect, useState} from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';
import PropTypes from 'prop-types';
/*import { mesh } from 'three';*/
const Computers = ({isMobile}) => {
    const computer = useGLTF ('./desktop_pc/sci-fi_neon_model/scene.gltf')
  return (
    <mesh>
      <hemisphereLight intensity={3.15} groundColor='violet'/>
      <spotLight
        position={[20,50,20]}
        angle={0.4}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}/>
        <ambientLight intensity={0.5} />
      <primitive 
      object={computer.scene} 
      scale={isMobile ? 0.20 : 0.25}
      position={isMobile ? [0,-5,0]:[0,-5.75,0]}
      rotation={[0.0,0.0,0]}/>
    </mesh>
  )
}

const ComputersCanvas = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const mediaQuery = window.matchMedia('(max-width:500px)');

      setIsMobile(mediaQuery.matches);

      const handleMediaQueryChange = (event) => {
        setIsMobile(event.matches);
      }
        mediaQuery.addEventListener('change',
        handleMediaQueryChange);

      return () => {
        mediaQuery.removeEventListener('change',
        handleMediaQueryChange);
      }
    }, [])

  return(
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1,2]}
      camera={{position:[20,3,5], fov:25}}
      gl={{preserveDrawingBuffer:true}}
    >
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI/2}
        minPolarAngle={Math.PI/2}
         />
         <Computers isMobile={isMobile}/>
      </Suspense>
      <Preload all/>
    </Canvas>
  )
}
Computers.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

export default ComputersCanvas;