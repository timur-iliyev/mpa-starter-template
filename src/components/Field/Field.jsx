import getIdFromString from '@/utils/getIdFromString'
import './Field.scss'
import clsx from 'clsx'

export default (props) => {
  const {
    className,
    id = getIdFromString(props.label),
    label,
    type, // undefined (default) | textarea | email | number | etc.
    placeholder,
    isRequired = false,
    autocomplete = 'off',
    inputMode,
    mask,
  } = props

  const Component = type === 'textarea' ? 'textarea' : 'input'
  
  const extraAttributes = {}
  if (mask) {
    extraAttributes['data-js-input-mask'] = mask
  }

  return (
    <div className={clsx(className, 'field')}>
      <label htmlFor={id} className="field__label">
        {label}{' '}
        {isRequired && (
          <span className="field__required-star" aria-hidden="true">
            *
          </span>
        )}
      </label>
      <div className="field__body">
        <Component
          className="field__control"
          id={id}
          type={type}
          placeholder={placeholder}
          required={isRequired}
          autocomplete={autocomplete}
          inputMode={inputMode}
          {...extraAttributes}
        />
      </div>
    </div>
  )
}
