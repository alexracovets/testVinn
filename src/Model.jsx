import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes } = useGLTF("model/scene.gltf");
  const { materials } = useGLTF("model/scene.gltf");

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.tex_u1_v1} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.tex_u1_v1} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.tex_u1_v1} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.tex_u1_v1} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.tex_u1_v1} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.tex_u1_v1} />
      </group>
    </group>
  );
}

useGLTF.preload("model/scene.gltf");
