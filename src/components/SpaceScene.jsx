import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Line, Stars, Text } from '@react-three/drei'

function Planet() {
  const group = useRef()
  const planet = useRef()

  useFrame((state, delta) => {
    planet.current.rotation.y += delta * 0.25
    group.current.rotation.y += (state.pointer.x * 0.5 - group.current.rotation.y) * 0.05
    group.current.rotation.x += (-state.pointer.y * 0.3 - group.current.rotation.x) * 0.05

    const max = document.body.scrollHeight - window.innerHeight
    const scroll = max > 0 ? window.scrollY / max : 0
    group.current.position.y += (scroll * 3 - group.current.position.y) * 0.05
  })

  return (
    <group ref={group} position={[2.5, 0, 0]}>
      <mesh ref={planet}>
        <icosahedronGeometry args={[1.6, 3]} />
        <meshStandardMaterial color="#6d28d9" flatShading roughness={0.6} metalness={0.3} />
      </mesh>

      <mesh rotation={[Math.PI / 2.5, 0, 0]}>
        <torusGeometry args={[2.5, 0.03, 16, 120]} />
        <meshStandardMaterial color="#38bdf8" emissive="#38bdf8" emissiveIntensity={1.5} />
      </mesh>
    </group>
  )
}

const symbols = ['0', '1', '{', '}', '</>', '();', '=>', '[]', '01', 'AI', '#', ';']

function Glyph({ char, x, y, z, speed, size, color }) {
  const ref = useRef()

  useFrame((_, delta) => {
    ref.current.position.y -= delta * speed
    if (ref.current.position.y < -6) ref.current.position.y = 6
  })

  return (
    <Text
      ref={ref}
      position={[x, y, z]}
      fontSize={size}
      color={color}
      fillOpacity={0.55}
      anchorX="center"
      anchorY="middle"
    >
      {char}
    </Text>
  )
}

const defaultCodeColors = ['#34d399']
const hackathonCodeColors = ['#67e8f9', '#a78bfa', '#e879f9']

function CodeRain({ count = 70, colors = defaultCodeColors }) {
  const items = useMemo(
    () =>
      Array.from({ length: count }, () => ({
        char: symbols[Math.floor(Math.random() * symbols.length)],
        x: (Math.random() - 0.5) * 18,
        y: (Math.random() - 0.5) * 12,
        z: -Math.random() * 8 - 1,
        speed: 0.2 + Math.random() * 0.6,
        size: 0.25 + Math.random() * 0.35,
      })),
    [count]
  )

  return (
    <>
      {items.map((item, i) => (
        <Glyph key={i} {...item} color={colors[i % colors.length]} />
      ))}
    </>
  )
}
function Book({ title, position, rotation, width, depth, color, paper }) {
  const thickness = 0.2

  return (
    <group position={position} rotation={rotation}>
      <mesh>
        <boxGeometry args={[width - 0.1, thickness - 0.045, depth - 0.1]} />
        <meshStandardMaterial color={paper} roughness={0.95} />
      </mesh>
      <mesh position={[0, -thickness / 2, 0]}>
        <boxGeometry args={[width, 0.035, depth]} />
        <meshStandardMaterial color={color} roughness={0.48} />
      </mesh>
      <mesh position={[0, thickness / 2, 0]}>
        <boxGeometry args={[width, 0.035, depth]} />
        <meshStandardMaterial color={color} roughness={0.48} />
      </mesh>
      <mesh position={[0, 0, depth / 2 - 0.035]}>
        <boxGeometry args={[width, thickness, 0.07]} />
        <meshStandardMaterial color={color} roughness={0.55} />
      </mesh>
      <Text
        position={[0, thickness / 2 + 0.045, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        fontSize={0.12}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        {title}
      </Text>
    </group>
  )
}

function GraduationCap() {
  return (
    <group position={[0.08, 0.48, 0.04]} rotation={[0, -0.12, 0]}>
      <mesh>
        <cylinderGeometry args={[0.27, 0.34, 0.28, 8]} />
        <meshStandardMaterial color="#111827" roughness={0.5} />
      </mesh>
      <mesh position={[0, 0.18, 0]} rotation={[0, Math.PI / 4, 0]}>
        <boxGeometry args={[0.95, 0.07, 0.95]} />
        <meshStandardMaterial color="#172554" roughness={0.42} metalness={0.12} />
      </mesh>
      <mesh position={[0.42, 0.02, 0]} rotation={[0, 0, -0.2]}>
        <cylinderGeometry args={[0.012, 0.012, 0.32, 8]} />
        <meshStandardMaterial color="#fbbf24" metalness={0.35} roughness={0.4} />
      </mesh>
      <mesh position={[0.45, -0.15, 0]}>
        <sphereGeometry args={[0.055, 12, 12]} />
        <meshStandardMaterial color="#fbbf24" metalness={0.35} roughness={0.4} />
      </mesh>
    </group>
  )
}

function EducationScene() {
  const books = useRef()

  useFrame((state, delta) => {
    books.current.rotation.y += delta * 0.25
    books.current.rotation.x += (0.65 - state.pointer.y * 0.18 - books.current.rotation.x) * 0.05
    books.current.position.y = Math.sin(state.clock.elapsedTime * 0.7) * 0.12
  })

  return (
    <group ref={books} position={[2.5, 0, 0]} rotation={[0.65, 0, 0]}>
      <GraduationCap />
        <Book
          title="DATA SCIENCE"
          position={[0, -0.43, 0]}
          rotation={[0, 0, -0.08]}
          width={2.15}
          depth={1.35}
          color="#d97706"
          paper="#fff7ed"
        />
        <Book
          title="MACHINE LEARNING"
          position={[-0.08, -0.16, 0.02]}
          rotation={[0, 0, 0.07]}
          width={1.95}
          depth={1.25}
          color="#2563eb"
          paper="#eff6ff"
        />
        <Book
          title="PROGRAMMING"
          position={[0.08, 0.12, 0.04]}
          rotation={[0, 0, -0.06]}
          width={1.75}
          depth={1.15}
          color="#0f9f8f"
          paper="#f0fdfa"
        />
    </group>
  )
}

const laurelLeaves = [
  [-0.55, -0.48, 0.62], [-0.78, -0.24, 0.28], [-0.86, 0.06, 0.02],
  [-0.78, 0.36, -0.3], [-0.55, 0.61, -0.66],
  [0.55, -0.48, -0.62], [0.78, -0.24, -0.28], [0.86, 0.06, -0.02],
  [0.78, 0.36, 0.3], [0.55, 0.61, 0.66],
]

function CertificatesScene() {
  const award = useRef()

  useFrame((state, delta) => {
    award.current.rotation.y += delta * 0.12
    award.current.rotation.x += (-state.pointer.y * 0.1 - award.current.rotation.x) * 0.04
    award.current.position.y = Math.sin(state.clock.elapsedTime * 0.6) * 0.12
  })

  return (
    <group ref={award} position={[3.8, 0.1, 0]} scale={0.92}>
      <Text position={[0, 1.05, 0]} fontSize={0.16} color="#f4c95d" anchorX="center">
        CERTIFICATES
      </Text>

      {/* Laurel leaves frame the award medal */}
      {laurelLeaves.map(([x, y, angle], index) => (
        <mesh key={index} position={[x, y, -0.04]} rotation={[0, 0, angle]} scale={[0.25, 0.11, 0.055]}>
          <sphereGeometry args={[1, 16, 12]} />
          <meshStandardMaterial color="#d6a945" metalness={0.42} roughness={0.42} />
        </mesh>
      ))}

      {/* Medal and ribbon */}
      <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.58, 0.58, 0.16, 48]} />
        <meshStandardMaterial color="#e8bd62" metalness={0.58} roughness={0.3} />
      </mesh>
      <mesh position={[0, 0, 0.1]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.48, 0.48, 0.06, 48]} />
        <meshStandardMaterial color="#5b267a" metalness={0.25} roughness={0.38} />
      </mesh>
      <mesh position={[0, 0, 0.16]}>
        <octahedronGeometry args={[0.22, 0]} />
        <meshStandardMaterial color="#f4c95d" metalness={0.52} roughness={0.28} />
      </mesh>
      <mesh position={[-0.16, -0.62, -0.03]} rotation={[0, 0, Math.PI]}>
        <coneGeometry args={[0.14, 0.56, 4]} />
        <meshStandardMaterial color="#8b5cf6" roughness={0.48} />
      </mesh>
      <mesh position={[0.16, -0.62, -0.03]} rotation={[0, 0, Math.PI]}>
        <coneGeometry args={[0.14, 0.56, 4]} />
        <meshStandardMaterial color="#6d28d9" roughness={0.48} />
      </mesh>
    </group>
  )
}

const skillNodes = [
  { label: 'PYTHON', position: [-1.35, 0.9, 0] },
  { label: 'C++', position: [0.1, 1.25, 0.2] },
  { label: 'AI', position: [1.35, 0.55, -0.1] },
  { label: 'DATA', position: [1.15, -0.9, 0.1] },
  { label: 'ML', position: [-0.4, -1.2, -0.15] },
  { label: 'CODE', position: [-1.45, -0.45, 0.1] },
]

function SkillsScene() {
  const network = useRef()
  useFrame((state) => {
    network.current.rotation.y += (state.pointer.x * 0.12 - network.current.rotation.y) * 0.025
    network.current.rotation.x += (-state.pointer.y * 0.08 - network.current.rotation.x) * 0.025
    network.current.position.y = Math.sin(state.clock.elapsedTime * 0.45) * 0.08
  })

  return (
    <group ref={network} position={[1.25, 0, 0]} scale={0.82}>
      <mesh>
        <icosahedronGeometry args={[0.62, 1]} />
        <meshStandardMaterial color="#5520a8" emissive="#7c3aed" emissiveIntensity={0.45} wireframe />
      </mesh>
      {skillNodes.map((node) => (
        <group key={node.label} position={node.position}>
          <mesh>
            <sphereGeometry args={[0.085, 16, 16]} />
            <meshStandardMaterial color="#a78bfa" emissive="#8b5cf6" emissiveIntensity={1.5} />
          </mesh>
          <Text position={[0, -0.22, 0]} fontSize={0.14} color="#c4b5fd" anchorX="center" anchorY="middle">
            {node.label}
          </Text>
        </group>
      ))}
      <mesh rotation={[Math.PI / 2.5, 0.15, 0]}>
        <torusGeometry args={[1.95, 0.012, 8, 96]} />
        <meshStandardMaterial color="#38bdf8" emissive="#38bdf8" emissiveIntensity={0.7} />
      </mesh>
    </group>
  )
}

function ProjectsScene() {
  return null
}

function HackathonScene() {
  return <CodeRain count={48} colors={hackathonCodeColors} />
}

const journeyMilestones = [
  { year: '2025', label: 'IIT MADRAS BS', position: [-0.2, 1.75, 0] },
  { year: '2026', label: 'DUAL ACADEMICS', position: [0.18, 1.25, 0.08] },
  { year: '2026', label: 'STARTED PROGRAMMING', position: [-0.2, 0.75, 0.12] },
  { year: '2026', label: 'EXPLORING AI', position: [0.18, 0.25, 0.08] },
  { year: '2026', label: 'NEO4J HACKATHON', position: [-0.2, -0.25, 0.12] },
  { year: '2026', label: 'AI AGENT WORKSHOP', position: [0.18, -0.75, 0.08] },
  { year: '2026', label: 'RESOF COLLEGE FINDER', position: [-0.2, -1.25, 0.12] },
  { year: '2026', label: 'PORTFOLIO WEBSITE', position: [0.18, -1.75, 0] },
]

function JourneyScene() {
  const timeline = useRef()
  useFrame((state) => {
    timeline.current.rotation.y += (state.pointer.x * 0.08 - timeline.current.rotation.y) * 0.025
    timeline.current.rotation.x += (-state.pointer.y * 0.05 - timeline.current.rotation.x) * 0.025
    timeline.current.position.y = Math.sin(state.clock.elapsedTime * 0.42) * 0.05
  })
  const path = journeyMilestones.map(({ position }) => position)

  return (
    <group ref={timeline} position={[1.65, 0, 0]} scale={0.78}>
      <Line points={path} color="#8b5cf6" lineWidth={2.2} transparent opacity={0.62} />
      {journeyMilestones.map((milestone, index) => (
        <group key={`${milestone.year}-${milestone.label}`} position={milestone.position}>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[0.19, 0.012, 8, 32]} />
            <meshStandardMaterial color={index % 2 ? '#67e8f9' : '#a78bfa'} emissive={index % 2 ? '#22d3ee' : '#8b5cf6'} emissiveIntensity={0.8} />
          </mesh>
          <mesh>
            <sphereGeometry args={[0.075, 16, 16]} />
            <meshStandardMaterial color="#e9d5ff" emissive="#a78bfa" emissiveIntensity={1.6} />
          </mesh>
          <Text position={[0.42, 0.03, 0.08]} fontSize={0.15} color="#c4b5fd" anchorX="left" anchorY="middle">
            {milestone.year}
          </Text>
          <Text position={[0.42, -0.13, 0.08]} fontSize={0.075} color="#a5b4cc" anchorX="left" anchorY="middle">
            {milestone.label}
          </Text>
        </group>
      ))}
    </group>
  )
}

function ResumeScene() {
  const page = useRef()
  useFrame((state) => {
    page.current.rotation.y += (state.pointer.x * 0.09 - page.current.rotation.y) * 0.025
    page.current.rotation.x += (-state.pointer.y * 0.05 - page.current.rotation.x) * 0.025
    page.current.position.y = Math.sin(state.clock.elapsedTime * 0.48) * 0.06
  })

  return (
    <group ref={page} position={[1.65, 0, 0]} scale={0.9}>
      <mesh position={[0, 0, -0.08]}>
        <boxGeometry args={[1.85, 2.45, 0.12]} />
        <meshStandardMaterial color="#17142b" emissive="#38206a" emissiveIntensity={0.24} metalness={0.28} roughness={0.38} />
      </mesh>
      <mesh position={[0, 0, -0.01]}>
        <planeGeometry args={[1.68, 2.28]} />
        <meshBasicMaterial color="#0c1020" />
      </mesh>
      <Text position={[-0.67, 0.87, 0.01]} fontSize={0.13} color="#c4b5fd" anchorX="left">
        ARITRA DAS
      </Text>
      <Text position={[-0.67, 0.64, 0.01]} fontSize={0.075} color="#67e8f9" anchorX="left">
        ASPIRING SOFTWARE DEVELOPER
      </Text>
      <Text position={[-0.67, 0.51, 0.01]} fontSize={0.075} color="#67e8f9" anchorX="left">
        & AI ENGINEER
      </Text>
      {[
        { label: 'EDUCATION', y: 0.19, width: 1.15 },
        { label: 'SKILLS', y: -0.27, width: 0.92 },
        { label: 'PROJECTS', y: -0.73, width: 1.28 },
      ].map((section) => (
        <group key={section.label}>
          <Text position={[-0.67, section.y, 0.01]} fontSize={0.09} color="#a78bfa" anchorX="left">
            {section.label}
          </Text>
          <mesh position={[-0.67 + section.width / 2, section.y - 0.14, 0.01]}>
            <boxGeometry args={[section.width, 0.018, 0.012]} />
            <meshBasicMaterial color="#6d5a9e" />
          </mesh>
          <mesh position={[-0.5, section.y - 0.24, 0.01]}>
            <boxGeometry args={[0.34, 0.014, 0.012]} />
            <meshBasicMaterial color="#3d4964" />
          </mesh>
          <mesh position={[0.04, section.y - 0.24, 0.01]}>
            <boxGeometry args={[0.38, 0.014, 0.012]} />
            <meshBasicMaterial color="#3d4964" />
          </mesh>
        </group>
      ))}
      <mesh position={[0.72, -0.9, 0.12]} rotation={[0, 0, -0.18]}>
        <torusGeometry args={[0.16, 0.025, 10, 32]} />
        <meshStandardMaterial color="#67e8f9" emissive="#22d3ee" emissiveIntensity={1.2} />
      </mesh>
      <mesh position={[0.88, -1.06, 0.12]} rotation={[0, 0, -0.18]}>
        <coneGeometry args={[0.08, 0.19, 3]} />
        <meshStandardMaterial color="#67e8f9" emissive="#22d3ee" emissiveIntensity={1.2} />
      </mesh>
    </group>
  )
}

export default function SpaceScene({ active }) {
  return (
    <div className="space-bg">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        eventSource={document.getElementById('root')}
        eventPrefix="client"
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 3, 5]} intensity={2.5} />
        {active !== 'certificates' && active !== 'skills' && active !== 'projects' && active !== 'hackathons' && active !== 'journey' && active !== 'resume' && (
          <Stars radius={80} depth={50} count={4000} factor={4} fade speed={1} />
        )}
        {active === 'about' ? (
          <CodeRain />
        ) : active === 'education' ? (
          <EducationScene />
        ) : active === 'certificates' ? (
          <CertificatesScene />
        ) : active === 'skills' ? (
          <SkillsScene />
        ) : active === 'projects' ? (
          <ProjectsScene />
        ) : active === 'hackathons' ? (
          <HackathonScene />
        ) : active === 'journey' ? (
          <JourneyScene />
        ) : active === 'resume' ? (
          <ResumeScene />
        ) : (
          <Planet />
        )}
      </Canvas>
    </div>
  )
}
