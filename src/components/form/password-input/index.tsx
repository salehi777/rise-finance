import { useState } from 'react'
import Input, { type InputProps } from '../input'
import { StyledIconButton } from './styles'
import MotionIconRotate from '@/components/ui/motion-icon/motion-icon-rotate'

export type PasswordInputProps = InputProps & {}

export default function PasswordInput(props: PasswordInputProps) {
  const [show, setShow] = useState(false)

  return (
    <Input
      type={show ? 'text' : 'password'}
      slotProps={{
        input: {
          endAdornment: (
            <StyledIconButton onClick={() => setShow(!show)}>
              <MotionIconRotate
                index={Number(show)}
                srcs={['/icons/eye-off.svg', '/icons/eye.svg']}
              />
            </StyledIconButton>
          ),
        },
      }}
      {...props}
    />
  )
}
