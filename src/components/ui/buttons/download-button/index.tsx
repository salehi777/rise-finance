import { IconButton, type IconButtonProps } from '@mui/material'
import SvgBox from '@/components/ui/svg-box'

interface DownloadButtonProps extends Omit<IconButtonProps, 'type'> {
  content: string
  filename: string
  type?: string
}

export default function DownloadButton({
  content,
  filename,
  type = 'text/csv;charset=utf-8;',
  ...props
}: DownloadButtonProps) {
  const download = () => {
    const blob = new Blob([content], { type })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = filename
    link.click()
    URL.revokeObjectURL(url)
  }

  return (
    <IconButton
      onClick={download}
      sx={{ color: 'inherit !important' }}
      {...props}
    >
      <SvgBox src="/icons/arrow-down-sax.svg" />
    </IconButton>
  )
}
