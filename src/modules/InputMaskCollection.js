import getDataAttrNameFromSelector from '@/utils/getDataAttrNameFromSelector'
import IMask from 'imask'

const rootSelector = '[data-js-input-mask]'

class InputMask {
  selectors = {
    root: rootSelector,
  }

  constructor(rootElement) {
    this.rootElement = rootElement
    this.init()
  }

  init() {
    const mask = this.rootElement.getAttribute(
      getDataAttrNameFromSelector(this.selectors.root)
    )

    IMask(this.rootElement, { mask })
  }
}

export default class InputMaskCollection {
  constructor() {
    this.init()
  }

  init() {
    document.querySelectorAll(rootSelector).forEach((element) => {
      new InputMask(element)
    })
  }
}
