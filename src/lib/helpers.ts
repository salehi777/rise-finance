import { format } from 'date-fns'

export const mapRange = (
  value: number,
  inRange: [number, number],
  outRange: [number, number],
) =>
  ((value - inRange[0]) * (outRange[1] - outRange[0])) /
    (inRange[1] - inRange[0]) +
  outRange[0]

export const validatePassword = {
  minlength: (value: string) =>
    value?.length >= 8 || 'Password must be more than 8 characters',
  lowercase: (value: string) =>
    /[a-z]/.test(value) || 'Password must include lowercase letter',
  uppercase: (value: string) =>
    /[A-Z]/.test(value) || 'Password must include uppercase letter',
  number: (value: string) => /\d/.test(value) || 'Password must include number',
  special: (value: string) =>
    /[!@#$%^&*]/.test(value) || 'Password must include special character',
}

export const truncate = (str: string, num: number) => {
  if (!str) return ''
  return str.length > num ? str.substring(0, num) + '...' : str
}

export const formatBytes = (bytes: number) => {
  if (bytes === 0) return '0B'
  if (bytes < 0) return String(bytes)
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB']
  const i = Math.floor(Math.log(bytes) / Math.log(1024))
  const num = parseFloat((bytes / 1024 ** i).toFixed(2))
  return `${num}${sizes[i]}`
}

export const groupBy = (arr: any[], key: string) => {
  if (Object.groupBy) return Object.groupBy(arr, (item) => item[key])
  else
    return arr?.reduce((rv, x) => {
      ;(rv[x[key]] = rv[x[key]] || []).push(x)
      return rv
    }, {})
}

export function chunkArray(arr: any[], size: number) {
  const result: any[] = []
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size))
  }
  return result
}

export const fCurrency = (num: number) =>
  new Intl.NumberFormat('en-US').format(num)

export const removeFalsy = (obj: { [key: string]: any }) =>
  Object.fromEntries(
    Object.entries(obj).filter(
      ([_, value]) => value || value === 0 || value === '',
    ),
  )

export const en2pr = (s: string | number) => {
  return String(s).replace(/\d/g, (d) => '۰۱۲۳۴۵۶۷۸۹'[Number(d)])
}

export const pr2en = (s: string) => {
  return s.replace(/[۰-۹]/g, (d) => String('۰۱۲۳۴۵۶۷۸۹'.indexOf(d)))
}

const convertFormValue = (formValue: any) => {
  if (formValue instanceof Date) return format(formValue, 'yyyy-MM-dd')
  else if (formValue?.value) return formValue.value
  else return formValue
}

export const convertFormValues = (formValues: any) =>
  Object.fromEntries(
    Object.entries(formValues).map(([key, value]) => [
      key,
      convertFormValue(value),
    ]),
  )

export const dashBorder = ({
  stroke = 'currentColor',
  strokeWidth = 4,
  strokeDasharray = [10, 10],
  strokeDashoffset = 0,
}: {
  stroke?: string
  strokeWidth?: number
  strokeDasharray?: [number, number]
  strokeDashoffset?: number
} = {}) =>
  [
    "url('data:image/svg+xml,",
    '%3csvg', // <svg
    'width="100%25" height="100%25"', // width="100%" height="100%"
    'xmlns="http://www.w3.org/2000/svg"',
    '%3e', // >
    '%3crect', // <rect
    'width="100%25" height="100%25"', // width="100%" height="100%"
    'fill="none"',
    `stroke="${encodeURIComponent(stroke)}"`,
    `stroke-width="${strokeWidth}"`,
    `stroke-dasharray="${strokeDasharray}"`,
    `stroke-dashoffset="${strokeDashoffset}"`,
    '/%3e', // />
    '%3c/svg%3e', // </svg>
    "')",
  ].join(' ')
