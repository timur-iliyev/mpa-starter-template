import './Checkbox.scss'
import getIdFromString from '@/utils/getIdFromString'
import clsx from 'clsx'

export default (props) => {
  const {
    className,
    id = getIdFromString(props.label),
    label,
    isRequired,
  } = props

  return (
    <label className={clsx(className, 'checkbox')} htmlFor={id}>
      <input
        className="checkbox__input"
        id={id}
        type="checkbox"
        required={isRequired}
      />
      <span className="checkbox__label">{label}</span>
    </label>
  )
}
