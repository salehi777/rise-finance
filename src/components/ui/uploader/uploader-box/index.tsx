import SvgBox from '../../svg-box'
import Dropzone, { type DropzoneProps } from '../dropzone'
import { StyledBox } from './styles'

export interface UploaderBoxProps extends Omit<DropzoneProps, 'children'> {}

export default function UploaderBox(props: UploaderBoxProps) {
  return (
    <Dropzone {...props}>
      {({ loading }) => (
        <StyledBox loading={loading}>
          <SvgBox src="/icons/upload.svg" />
          <div>Drop Your File Here To Upload</div>
        </StyledBox>
      )}
    </Dropzone>
  )
}
