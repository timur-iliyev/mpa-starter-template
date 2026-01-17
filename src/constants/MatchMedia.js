import pxToRem from '@/utils/pxToRem'

export default {
  mobile: window.matchMedia(`(width <= ${pxToRem(768)}rem)`),
}
