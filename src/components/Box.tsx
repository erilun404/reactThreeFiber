import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import React from 'react'

export function Box(props) {
  const ref = useRef()

  useFrame((_, delta) => {
    ref.current.rotation.x += 1 * delta
    ref.current.rotation.y += 0.5 * delta
  })

  return (
    <mesh
      {...props}
      ref={ref}
      onPointerDown={(e) => console.log(ref.current)}
      //onPointerUp={(e) => console.log('pointer up ' + e.object.name)}
      //onPointerOver={(e) => console.log('pointer over ' + e.object.name)}
      //onPointerOut={(e) => console.log('pointer out ' + e.object.name)}
      //onUpdate={(self) => console.log(self)}
    >
      <boxGeometry />
      <meshBasicMaterial color={0x00ff00} wireframe />
    </mesh>
  )
}