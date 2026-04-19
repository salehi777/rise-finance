import { DialogContent, DialogTitle, type DialogProps } from '@mui/material'
import { StyledDialog } from './styles'

interface ModalProps extends Omit<DialogProps, 'title'> {
  title?: React.ReactNode
}

export default function Modal({ title, children, ...props }: ModalProps) {
  return (
    <StyledDialog fullWidth {...props}>
      {title && <DialogTitle>{title}</DialogTitle>}
      <DialogContent>{children}</DialogContent>
    </StyledDialog>
  )
}
