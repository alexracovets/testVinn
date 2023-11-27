import { Canvas } from "@react-three/fiber"
import { Model } from "./Model"
import { OrbitControls } from "@react-three/drei"

function App() {

  return (
    <Canvas
      gl={{ preserveDrawingBuffer: true }}
      eventSource={document.getElementById('root')}
      eventPrefix="client"
      camera={{ position: [5, 100, 5], fov: 75, near: 0.1, far: 1000,}}
      shadows
    >
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <Model />
    </Canvas>
  )
}

export default App
