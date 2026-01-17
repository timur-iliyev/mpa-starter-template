import BaseComponent from './generic/BaseComponent'
import MatchMedia from '@/constants/MatchMedia'

const rootSelector = '[data-js-select]'

class Select extends BaseComponent {
  selectors = {
    root: rootSelector,
    originalControl: '[data-js-select-original-control]',
    button: '[data-js-select-button]',
    dropdown: '[data-js-select-dropdown]',
    option: '[data-js-select-option]',
  }

  stateClasses = {
    isExpanded: 'is-expanded',
    isSelected: 'is-selected',
    isCurrent: 'is-current',
    isOnLeft: 'is-on-left',
    isOnRight: 'is-on-right',
  }

  initialState = {
    isExpanded: false,
    currentOptionIndex: null,
    selectedOptionElement: null,
  }

  constructor(rootElement) {
    super()

    this.rootElement = rootElement
    this.originalControlElement = this.rootElement.querySelector(
      this.selectors.originalControl
    )
    this.buttonElement = this.rootElement.querySelector(
      this.selectors.button
    )
    this.dropdownElement = this.rootElement.querySelector(
      this.selectors.dropdown
    )
    this.optionElements = this.dropdownElement.querySelectorAll(
      this.selectors.option
    )
    this.state = this.getProxyState({
      ...this.initialStat,
      currentOptionIndex: this.originalControlElement.selectedIndex,
      selectedOptionElement:
        this.optionElements[
          this.originalControlElement.selectedIndex
        ],
    })
    setTimeout(this.fixDropdownPosition, 500)
    this.updateTabIndexes()
    this.bindEvents()
  }

  render() {
    const { isExpanded, currentOptionIndex, selectedOptionElement } =
      this.state

    const newSelectedOptionValue =
      selectedOptionElement.textContent.trim()

    const renderOriginalControl = () => {
      this.originalControlElement.value = newSelectedOptionValue
    }

    const renderButton = () => {
      this.buttonElement.textContent = newSelectedOptionValue
      this.buttonElement.classList.toggle(
        this.stateClasses.isExpanded,
        isExpanded
      )
      this.buttonElement.ariaExpanded = isExpanded
      this.buttonElement.ariaActiveDescendant =
        this.optionElements[currentOptionIndex].id
    }

    const renderDropdown = () => {
      this.dropdownElement.classList.toggle(
        this.stateClasses.isExpanded,
        isExpanded
      )
    }

    const renderOptions = () => {
      this.optionElements.forEach((optionElement, index) => {
        const isCurrent = currentOptionIndex === index
        const isSelected = selectedOptionElement === optionElement

        optionElement.classList.toggle(
          this.stateClasses.isCurrent,
          isCurrent
        )
        optionElement.classList.toggle(
          this.stateClasses.isSelected,
          isSelected
        )
        optionElement.ariaSelected = isSelected
      })
    }

    renderOriginalControl()
    renderButton()
    renderDropdown()
    renderOptions()
  }

  fixDropdownPosition = () => {
    const viewportWidth = document.documentElement.clientWidth
    const viewportCenterX = viewportWidth / 2
    const { width, x } = this.buttonElement.getBoundingClientRect()
    const buttonCenterX = x + width / 2
    const isButtonOnTheLeftViewportSide =
      buttonCenterX < viewportCenterX

    if (isButtonOnTheLeftViewportSide) {
      this.dropdownElement.classList.toggle(
        this.stateClasses.isOnLeft
      )
    } else {
      this.dropdownElement.classList.toggle(
        this.stateClasses.isOnRight
      )
    }
  }

  updateTabIndexes(isMobileDevice = MatchMedia.mobile.matches) {
    this.originalControlElement.tabIndex = isMobileDevice ? 0 : -1
    this.buttonElement.tabIndex = isMobileDevice ? -1 : 0
  }

  toggleExpandedState() {
    this.state.isExpanded = !this.state.isExpanded
  }

  expand() {
    this.state.isExpanded = true
  }

  collapse() {
    this.state.isExpanded = false
  }

  get isNeedToExpand() {
    const isButtonFocused =
      document.activeElement === this.buttonElement

    return !this.state.isExpanded && isButtonFocused
  }

  selectCurrentOption() {
    this.state.selectedOptionElement =
      this.optionElements[this.state.currentOptionIndex]
  }

  onMobileMatchMediaChange = (event) => {
    this.updateTabIndexes(event.matches)
  }

  onOriginalControlChange = () => {
    this.state.selectedOptionElement =
      this.optionElements[this.originalControlElement.selectedIndex]
  }

  onButtonClick = () => {
    this.toggleExpandedState()
  }

  onClick = ({ target }) => {
    const isButtonClick = target === this.buttonElement
    const isOutsideDropdownClick =
      target.closest(this.selectors.dropdown) !== this.dropdownElement

    if (!isButtonClick && isOutsideDropdownClick) {
      this.collapse()
      return
    }

    const isOptionClick = target.matches(this.selectors.option)

    if (isOptionClick) {
      this.state.selectedOptionElement = target
      this.state.currentOptionIndex = [
        ...this.optionElements,
      ].findIndex((optionElement) => optionElement === target)
      this.collapse()
    }
  }

  onArrowUpKeyDown = () => {
    if (this.isNeedToExpand) {
      this.expand()
      return
    }

    if (this.state.currentOptionIndex > 0) {
      this.state.currentOptionIndex--
    }
  }

  onArrowDownKeyDown = () => {
    if (this.isNeedToExpand) {
      this.expand()
      return
    }

    if (
      this.state.currentOptionIndex <
      this.optionElements.length - 1
    ) {
      this.state.currentOptionIndex++
    }
  }

  onSpaceKeyDown = () => {
    if (this.isNeedToExpand) {
      this.expand()
      return
    }

    this.selectCurrentOption()
    this.collapse()
  }

  onEnterKeyDown = () => {
    if (this.isNeedToExpand) {
      this.expand()
      return
    }

    this.selectCurrentOption()
    this.collapse()
  }

  onEscapeKeyDown = () => {
    this.collapse()
  }

  onKeyDown = (event) => {
    const { code } = event

    const action = {
      ArrowUp: this.onArrowUpKeyDown,
      ArrowDown: this.onArrowDownKeyDown,
      Space: this.onSpaceKeyDown,
      Enter: this.onEnterKeyDown,
      Escape: this.onEscapeKeyDown,
    }[code]

    if (action) {
      event.preventDefault()
      action()
    }
  }

  bindEvents() {
    MatchMedia.mobile.addEventListener(
      'change',
      this.onMobileMatchMediaChange
    )
    this.originalControlElement.addEventListener(
      'change',
      this.onOriginalControlChange
    )
    this.buttonElement.addEventListener('click', this.onButtonClick)
    document.addEventListener('click', this.onClick)
    this.rootElement.addEventListener('keydown', this.onKeyDown)
  }
}

export default class SelectCollection {
  constructor() {
    this.init()
  }

  init() {
    document.querySelectorAll(rootSelector).forEach((element) => {
      new Select(element)
    })
  }
}
