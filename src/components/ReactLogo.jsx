import { Float, useGLTF } from '@react-three/drei';
import React, { useRef } from 'react'

function ReactLogo(props) {

    const { nodes, materials } = useGLTF('/models/rLogo.glb')


  return (
    <Float floatIntensity={1} speed={5} floatingRange={1} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, -Math.PI / 2]} {...props}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['React-Logo_Material002_0'].geometry}
            material={materials['Material.002']}
            position={[0, 7.94, 0]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={[39.17, 39.17, 52.73]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Backdrop_Material001_0.geometry}
            material={materials['Material.001']}
            position={[-17.09, 7.94, 0]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={[247.85, 247.85, 52.73]}
          />
        </group>
      </group>
    </Float>
  )
}

useGLTF.preload('/models/rLogo.glb')


export default ReactLogo