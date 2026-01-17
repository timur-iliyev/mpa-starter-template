import './Select.scss'
import getIdFromString from '@/utils/getIdFromString'
import clsx from 'clsx'

export default (props) => {
  const {
    id = getIdFromString(props.label),
    label,
    isLabelHidden = true,
    options = [], // Array<{ value: string, isSelected?: boolean }>
    buttonClassName,
  } = props

  const IDs = {
    originalControl: id,
    label: `${id}-label`,
    dropdown: `${id}-dropdown`,
  }

  const selectedOption =
    options.find(({ isSelected }) => isSelected) ?? options[0]

  return (
    <div className="select" data-js-select="">
      <label
        className={clsx(
          'select__label',
          isLabelHidden && 'visually-hidden'
        )}
        id={IDs.label}
        htmlFor={IDs.originalControl}
      >
        {label}
      </label>
      <select
        className={clsx('select__original-control', buttonClassName)}
        id={IDs.originalControl}
        tabIndex={-1}
        defaultValue={selectedOption.value}
        data-js-select-original-control=""
      >
        {options.map(({ value }) => (
          <option value={value}>{value}</option>
        ))}
      </select>
      <div className="select__body">
        <div
          className={clsx('select__button', buttonClassName)}
          role="combobox"
          aria-expanded={false}
          aria-haspopup="listbox"
          aria-controls={IDs.dropdown}
          aria-labelledby={IDs.label}
          tabIndex={0}
          data-js-select-button=""
        >
          {selectedOption.value}
        </div>
        <div
          className="select__dropdown"
          id={IDs.dropdown}
          role="listbox"
          aria-labelledby={IDs.label}
          data-js-select-dropdown=""
        >
          {options.map(({ value, isSelected = false }, index) => (
            <div
              className={clsx(
                'select__option',
                isSelected && 'is-selected',
                isSelected && 'is-current'
              )}
              id={`${id}-option-${index}`}
              role="option"
              aria-selected={isSelected}
              data-js-select-option=""
            >
              {value}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
