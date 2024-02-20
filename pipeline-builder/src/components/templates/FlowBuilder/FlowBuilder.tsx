import { Box } from '@mantine/core'
import React, { useState, useRef, useCallback } from 'react'
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  Controls,
  Background,
  ReactFlowInstance,
  Edge,
  Node
} from 'reactflow'
import 'reactflow/dist/style.css'
// import classes from './FlowBuilder.module.css'
import { useShared } from '../../../hooks/useShared'

let id = 0
const getId = () => `pipeline_node_${id++}`

export interface FlowBuilderArgs {}
export const FlowBuilder = () => {
  const {
    maxInputConnections,
    maxOutputConnections,
    nodes,
    setNodes,
    onNodesChange,
    edges,
    setEdges,
    onEdgesChange
  } = useShared()
  const reactFlowWrapper = useRef(null)
  const [reactFlowInstance, setReactFlowInstance] = useState<ReactFlowInstance | null>(null)

  const onConnect = (params: Edge) => {
    const { source, target } = params

    // Find the source and target nodes based on their IDs
    const sourceNode = nodes.find((node) => node.id === source)
    const targetNode = nodes.find((node) => node.id === target)

    // Check if the nodes exist and have the required properties
    if (!sourceNode || !targetNode || !sourceNode.data || !targetNode.data) {
      alert('Source or target node does not exist or missing data.')
      return
    }

    // Get the maximum allowed input and output connections for the source and target nodes
    const sourceMaxInputConnections = sourceNode.data.maxInputConnections ?? Infinity
    const sourceMaxOutputConnections = sourceNode.data.maxOutputConnections ?? Infinity
    const targetMaxInputConnections = targetNode.data.maxInputConnections ?? Infinity
    const targetMaxOutputConnections = targetNode.data.maxOutputConnections ?? Infinity

    // Find the number of existing input and output connections for the source and target nodes
    const sourceInputConnections = edges.filter((edge) => edge.target === source).length
    const sourceOutputConnections = edges.filter((edge) => edge.source === source).length
    const targetInputConnections = edges.filter((edge) => edge.target === target).length
    const targetOutputConnections = edges.filter((edge) => edge.source === target).length

    // Check if adding this connection would exceed the maximum allowed input connections for source node
    if (sourceInputConnections >= sourceMaxInputConnections) {
      return alert('Maximum input connections reached for the source node.')
    }

    // Check if adding this connection would exceed the maximum allowed output connections for source node
    if (sourceOutputConnections >= sourceMaxOutputConnections) {
      return alert('Maximum output connections reached for the source node.')
    }

    // Check if adding this connection would exceed the maximum allowed input connections for target node
    if (targetInputConnections >= targetMaxInputConnections) {
      return alert('Maximum input connections reached for the target node.')
    }

    // Check if adding this connection would exceed the maximum allowed output connections for target node
    if (targetOutputConnections >= targetMaxOutputConnections) {
      return alert('Maximum output connections reached for the target node.')
    }

    // Allow the connection to proceed
    setEdges((eds: Edge[]) => addEdge(params, eds))
  }

  const onDragOver = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    event.dataTransfer.dropEffect = 'move'
  }, [])

  const onDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()

    const type = event.dataTransfer.getData('application/reactflow')

    // check if the dropped element is valid
    if (typeof type === 'undefined' || !type) {
      return
    }

    const position = reactFlowInstance?.screenToFlowPosition({
      x: event.clientX,
      y: event.clientY
    })
    const newNode = {
      id: getId(),
      type,
      position,
      // className: classes.customNode,
      data: {
        label: '',
        maxInputConnections: maxInputConnections,
        maxOutputConnections: maxOutputConnections
      }
    }

    console.log(maxInputConnections, maxOutputConnections)

    setNodes((nds:Node[]) => nds.concat(newNode as Node))
  }

  return (
    <ReactFlowProvider>
      <Box h="100vh" w="100%" ref={reactFlowWrapper}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect as () => void}
          onInit={setReactFlowInstance}
          onDrop={onDrop}
          onDragOver={onDragOver}
          fitView
        >
          <Background />
          <Controls />
        </ReactFlow>
      </Box>
    </ReactFlowProvider>
  )
}
