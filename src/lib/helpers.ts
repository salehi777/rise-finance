export const mapRange = (
  value: number,
  inRange: [number, number],
  outRange: [number, number],
) =>
  ((value - inRange[0]) * (outRange[1] - outRange[0])) /
    (inRange[1] - inRange[0]) +
  outRange[0]

export const groupBy = (arr: any[], key: string) => {
  if (Object.groupBy) return Object.groupBy(arr, (item) => item[key])
  else
    return arr?.reduce((rv, x) => {
      ;(rv[x[key]] = rv[x[key]] || []).push(x)
      return rv
    }, {})
}

export const fCurrency = (num: number) =>
  new Intl.NumberFormat('en-US').format(num)
