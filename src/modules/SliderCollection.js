import getParams from '@/utils/getParams'
import Swiper from 'swiper'
import { Navigation, Pagination, Scrollbar } from 'swiper/modules'

const rootSelector = '[data-js-slider]'

class Slider {
  selectors = {
    root: rootSelector,
    swiper: '[data-js-slider-swiper]',
    navigation: '[data-js-slider-navigation]',
    previousButton: '[data-js-slider-previous-button]',
    nextButton: '[data-js-slider-next-button]',
    pagination: '[data-js-slider-pagination]',
    scrollbar: '[data-js-slider-scrollbar]',
  }

  constructor(rootElement) {
    this.rootElement = rootElement
    this.swiperElement = this.rootElement.querySelector(
      this.selectors.swiper
    )
    this.params = getParams(this.rootElement, this.selectors.root)
    this.navigationElement = this.params.navigationTargetElementId
      ? document.getElementById(this.params.navigationTargetElementId)
      : this.rootElement.querySelector(this.selectors.navigation)
    this.previousButtonElement = this.navigationElement.querySelector(
      this.selectors.previousButton
    )
    this.nextButtonElement = this.navigationElement.querySelector(
      this.selectors.nextButton
    )
    this.paginationElement = this.navigationElement.querySelector(
      this.selectors.pagination
    )
    this.scrollbarElement = this.rootElement.querySelector(
      this.selectors.scrollbar
    )
    this.init()
  }

  init() {
    new Swiper(this.swiperElement, {
      ...this.params.sliderParams,
      modules: [Navigation, Pagination, Scrollbar],
      navigation: {
        prevEl: this.previousButtonElement,
        nextEl: this.nextButtonElement,
      },
      pagination: {
        el: this.paginationElement,
        bulletClass: 'slider-navigation__pagination-bullet',
        bulletActiveClass: 'is-active',
      },
      scrollbar: {
        el: this.scrollbarElement,
        dragClass: 'slider__scrollbar-drag',
      },
    })
  }
}

class SliderCollection {
  constructor() {
    this.init()
  }

  init() {
    document.querySelectorAll(rootSelector).forEach((element) => {
      new Slider(element)
    })
  }
}

export default SliderCollection
