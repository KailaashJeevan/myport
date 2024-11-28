import { useGLTF } from '@react-three/drei'
import{ useRef } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';

const Target=(props)=> {

    const tarRef=useRef();
    const {scene} = useGLTF("https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf")
  
  useGSAP(()=>{

    gsap.to(tarRef.current.position,{
        y:tarRef.current.position.y+2,
        duration:1.5,
        repeat:-1,
        yoyo:true,
        
    })
  })

    return (
    <mesh {...props} ref={tarRef}>
        <primitive object={scene} />
    </mesh>
  )
}

export default Target