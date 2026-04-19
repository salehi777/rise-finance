import { format, formatDistanceToNow } from 'date-fns'

export const fDate1 = (date: any) => fDate(date, 'yyyy-MM-dd')
export const fDate2 = (date: any) => fDate(date, 'E - dd MMM, yyyy')
export const fDate3 = (date: any) => fDate(date, 'HH:mm:ss')
export const fDate4 = (date: any) => fDate(date, 'hh:mm:ss a')

export const fDate = (date: any, f: string) =>
  date ? format(new Date(date), f) : null

export const fToNow = (date: any) =>
  date
    ? formatDistanceToNow(new Date(date), {
        addSuffix: true,
      })
    : null
