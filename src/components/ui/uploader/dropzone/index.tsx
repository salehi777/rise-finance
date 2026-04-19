import alova from '@/lib/alova'
import { useRequest } from 'alova/client'
import { useCallback } from 'react'
import { useDropzone, type DropzoneOptions } from 'react-dropzone'

export interface DropzoneProps extends Omit<
  React.ComponentProps<'div'>,
  'children'
> {
  options?: DropzoneOptions
  onChange: (data: any) => void
  onError?: (error: any) => void
  children: (data: { loading: boolean }) => React.ReactNode
}

export default function Dropzone({
  options,
  onChange,
  onError,
  children,
  ...props
}: DropzoneProps) {
  const { loading, send } = useRequest(
    (data) =>
      alova.Post(
        `upload/${options?.multiple ? 'multiple' : 'single'}?delay=500`,
        data,
      ),
    { immediate: false },
  )

  const onDrop = useCallback(async (acceptedFiles) => {
    const formData = new FormData()

    acceptedFiles.forEach((file) =>
      formData.append(options?.multiple ? 'files' : 'file', file),
    )
    try {
      const data = await send(formData)
      onChange(data)
    } catch (error) {
      onError?.(error)
    }
  }, [])

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: false,
    ...options,
    disabled: loading || options?.disabled,
  })

  return (
    <div {...getRootProps()} {...props}>
      <input {...getInputProps()} />
      {children({ loading })}
    </div>
  )
}

// const accept: Accept = {
//   'image/*': [],
//   'image/jpeg': ['.jpg', '.jpeg'],
//   'image/png': ['.png'],
//   'application/pdf': ['.pdf'],
//   'application/zip': ['.zip'],
//   'application/x-zip-compressed': ['.zip'],
//   'application/vnd.rar': ['.rar'],
//   'application/msword': ['.doc'],
//   'application/vnd.openxmlformats-officedocument.wordprocessingml.document': [
//     '.docx',
//   ],
//   'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': [
//     '.xlsx',
//   ],
//   'application/vnd.ms-excel': ['.xls'],
//   'text/csv': ['.csv'],
// }
