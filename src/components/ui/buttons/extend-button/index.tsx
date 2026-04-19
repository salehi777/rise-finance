import { IconButton } from '@mui/material'
import { motion } from 'motion/react'
import { memo } from 'react'

interface ExtendButtonProps {
  isExtended?: boolean
  onToggle: () => void
}

function ExtendButtonComponent({ isExtended, onToggle }: ExtendButtonProps) {
  return (
    <IconButton onClick={onToggle}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <motion.path
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={false}
          animate={isExtended ? 'expanded' : 'collapsed'}
          variants={{
            expanded: { d: 'M7 20L12 15L17 20M7 4L12 9L17 4' },
            collapsed: { d: 'M7 15L12 20L17 15M7 9L12 4L17 9' },
          }}
        />
      </svg>
    </IconButton>
  )
}

const ExtendButton = memo(ExtendButtonComponent)
export default ExtendButton
