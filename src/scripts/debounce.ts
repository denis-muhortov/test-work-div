/* eslint-disable @typescript-eslint/no-this-alias */
/* eslint-disable @typescript-eslint/no-explicit-any */
export const debounce = (
  fn: { (args: any): Promise<void>; apply?: any },
  wait: number | undefined,
) => {
  let timer: string | number | NodeJS.Timeout | undefined
  return function (...args: any) {
    if (timer) {
      clearTimeout(timer)
    }
    const context = this
    timer = setTimeout(() => {
      fn.apply(context, args)
    }, wait)
  }
}
