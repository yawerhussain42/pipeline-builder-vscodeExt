import React from 'react'
import { Button, ButtonProps, Image, Stack } from '@mantine/core'
import { NodeType } from '../../../shared/enums'
import iconDefaultNode from '../../../assets/images/defaultNode.png'
import iconInputNode from '../../../assets/images/inputNode.png'
import iconOutputNode from '../../../assets/images/outputNode.png'
// import classes from "./NodeDragBtn.module.css";

export interface NodeDragBtnArgs extends ButtonProps {
  nodeType: NodeType
}

export const NodeDragBtn: React.FC<NodeDragBtnArgs> = ({
  nodeType,
  size = 'md',
  h = '80px',
  fullWidth,
  variant = 'outline',
  color = 'dark',
  ...args
}) => {
  const onDragStart = (event: React.DragEvent<HTMLButtonElement>, nodeType: NodeType): void => {
    event.dataTransfer.setData('application/reactflow', nodeType)
    event.dataTransfer.effectAllowed = 'move'
  }

  function getNodeIcon() {
    let icon

    switch (nodeType) {
      case NodeType.DEFAULT:
        icon = iconDefaultNode
        break
      case NodeType.INPUT:
        icon = iconInputNode
        break
      case NodeType.OUTPUT:
        icon = iconOutputNode
        break
      default:
        icon = ''
    }

    return icon
  }

  return (
    <Button
      fullWidth={fullWidth}
      h={h}
      variant={variant}
      color={color}
      onDragStart={(event) => onDragStart(event, nodeType)}
      draggable
      size={size}
      {...args}
    >
      <Stack align="center" justify="center" gap={5}>
        <Image src={getNodeIcon()} width={20} height={50} />
      </Stack>
    </Button>
  )
}
