import { Box, Button, Stack } from '@mui/material'
import toast from 'react-hot-toast'
import { StyledContentBox, StyledValue } from './styles'
import Modal from '@/components/ui/modal'
import { useModal } from '@/hooks/useModal'
import CopyButton from '@/components/ui/buttons/copy-button'
import DownloadButton from '@/components/ui/buttons/download-button'
import ListCircle from '@/components/ui/list-circle'
import { useState } from 'react'
import ValueStepper from '@/components/ui/value-stepper'

export default function GroupSample() {
  const { isOpen, openModal, closeModal } = useModal()
  const [activeValue, setActiveValue] = useState(0)
  const [value, setValue] = useState(0)

  return (
    <>
      <Stack gap="16px">
        <Stack direction="row" gap="8px">
          <Button variant="contained" onClick={() => toast('Toast')}>
            Primary
          </Button>
          <Button
            variant="contained"
            color="success"
            onClick={() => toast.success('Toast')}
          >
            Success
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={() => toast.error('Toast')}
          >
            Error
          </Button>
          <Button variant="contained" color="warning">
            Warning
          </Button>
          <Button variant="contained" color="info">
            Info
          </Button>
          <Button variant="contained" color="gray">
            Gray
          </Button>
        </Stack>

        <StyledContentBox>
          <div>Text to Copy</div>
          <CopyButton content="Text to Copy" />
        </StyledContentBox>

        <StyledContentBox>
          <div>Content to Download</div>
          <DownloadButton content="Content to Download" filename="text.txt" />
        </StyledContentBox>

        <div>
          <Button variant="contained" onClick={openModal}>
            Open Modal
          </Button>
        </div>

        <StyledValue>
          <Button variant="contained" onClick={() => setValue(value - 1)}>
            -
          </Button>
          <Button variant="contained" onClick={() => setValue(value + 1)}>
            +
          </Button>
          <div>
            <ValueStepper value={value} />
          </div>
        </StyledValue>
      </Stack>

      <Box sx={{ position: 'fixed', bottom: 16, left: 16 }}>
        <ListCircle
          degree={[-90, 0]}
          activeValue={activeValue}
          list={Array.from({ length: 5 }, (_, i) => ({
            label: `Page ${i + 1}`,
            value: i,
            onClick: () => setActiveValue(i),
          }))}
        />
      </Box>

      <Modal open={isOpen} onClose={closeModal} title="Title">
        Modal
      </Modal>
    </>
  )
}
