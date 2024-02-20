import React from 'react'
import { Box, Button, Group, NumberInput, Paper, SimpleGrid, Stack, Text, rem } from '@mantine/core'
import { NodeDragBtn } from '../../../components/atoms/NodeDragBtn/NodeDragBtn'
import { NodeType } from '../../../shared/enums'
import { useShared } from '../../../hooks/useShared'

export interface SidebarArgs {}
export const Sidebar = () => {
  const {
    maxInputConnections,
    maxOutputConnections,
    setMaximumInputConnections,
    setMaximumOutputConnections,
    nodes,
    edges
  } = useShared()

  const validate = () => {
    console.log(nodes)
    console.log(edges)
    alert('Validated Nodes')
  }
  return (
    <Stack justify="space-between" h="100%">
      <Box>
        <Text
          py={20}
          ta="center"
          size={rem('30px')}
          fw={900}
          variant="gradient"
          gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
        >
          Pipeline Builder
        </Text>
        <Paper p={10}>
          <NumberInput
            label="Maximum Inputs"
            description="The exact number of input pipes that the node can receive."
            min={0}
            step={1}
            value={maxInputConnections}
            onChange={(value) => setMaximumInputConnections(value as number)}
          />
          <NumberInput
            label="Maximum Outputs"
            description="The exact number of output pipes that the node can receive."
            min={0}
            step={1}
            value={maxOutputConnections}
            onChange={(value) => setMaximumOutputConnections(value as number)}
          />
        </Paper>
        <SimpleGrid cols={2} p={10}>
          <NodeDragBtn nodeType={NodeType.DEFAULT}>Default Node</NodeDragBtn>
          <NodeDragBtn nodeType={NodeType.INPUT}>Input Node</NodeDragBtn>
          <NodeDragBtn nodeType={NodeType.OUTPUT}>Output Node</NodeDragBtn>
        </SimpleGrid>
      </Box>
      <Group align="center" justify="center" py="xl" px="md">
        <Button color="orange" fullWidth onClick={validate}>
          Validate
        </Button>
      </Group>
    </Stack>
  )
}
