import React, { useState } from 'react'
import { Edge, Node, useEdgesState, useNodesState } from 'reactflow'
interface SharedContextInterface {
  setMaximumInputConnections: (value: number) => void
  setMaximumOutputConnections: (value: number) => void
  maxInputConnections: number
  maxOutputConnections: number
  setNodes: (nodes: any) => void
  setEdges: (edges: any) => void
  onNodesChange: (nodes: any) => void
  onEdgesChange: (edges: any) => void
  nodes: Node[]
  edges: Edge[]
}
const SharedContext = React.createContext<SharedContextInterface>({} as SharedContextInterface)
export const SharedProvider = ({ children }: any) => {
  const [maxInputConnections, setMaximumInputConnections] = useState<number>(1)
  const [maxOutputConnections, setMaximumOutputConnections] = useState<number>(1)
  const [nodes, setNodes, onNodesChange] = useNodesState([])
  const [edges, setEdges, onEdgesChange] = useEdgesState([])
  const value = React.useMemo(
    () => ({
      maxInputConnections,
      setMaximumInputConnections,
      maxOutputConnections,
      setMaximumOutputConnections,
      nodes,
      setNodes,
      onNodesChange,
      edges,
      setEdges,
      onEdgesChange
    }),
    [
      maxInputConnections,
      setMaximumInputConnections,
      maxOutputConnections,
      setMaximumOutputConnections,
      nodes,
      setNodes,
      onNodesChange,
      edges,
      setEdges,
      onEdgesChange
    ]
  )

  return <SharedContext.Provider value={value}>{children}</SharedContext.Provider>
}

export const useShared = () => React.useContext(SharedContext)!
