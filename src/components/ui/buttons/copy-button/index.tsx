import { useState } from 'react'
import { IconButton, type IconButtonProps } from '@mui/material'
import MotionIconRotate from '../../motion-icon/motion-icon-rotate'

interface CopyButtonProps extends IconButtonProps {
  content: string
}

export default function CopyButton({ content, ...props }: CopyButtonProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(content)
    setCopied(true)
    setTimeout(() => setCopied(false), 1000)
  }

  return (
    <IconButton
      onClick={copyToClipboard}
      sx={{ color: 'inherit !important' }}
      disabled={copied}
      {...props}
    >
      <MotionIconRotate
        index={Number(copied)}
        srcs={['/icons/copy.svg', '/icons/check.svg']}
      />
    </IconButton>
  )
}
