import './Button.scss'
import clsx from 'clsx'
import Icon from '../Icon/Icon'

export default (props) => {
  const {
    className,
    type = 'button',
    href,
    target,
    mode = '', // '' (default) | 'transparent'
    label,
    isLabelHidden = false,
    iconName,
    iconPosition = 'before', // 'before' (default) | 'after'
    iconHasFill,
    extraAttributes,
  } = props

  const isLink = href !== undefined
  const Component = isLink ? 'a' : 'button'
  const linkAttributes = { href, target }
  const buttonAttributes = { type }
  const currentTagAttributes = isLink
    ? linkAttributes
    : buttonAttributes
  const title = isLabelHidden ? label : undefined
  const IconComponent = iconName && (
    <Icon
      className="button__icon"
      name={iconName}
      hasFill={iconHasFill}
    />
  )

  return (
    <Component
      className={clsx(className, 'button', mode && `button--${mode}`)}
      title={title}
      aria-label={title}
      {...currentTagAttributes}
      {...extraAttributes}
    >
      {iconPosition === 'before' && IconComponent}
      {!isLabelHidden && (
        <span className="button__label">{label}</span>
      )}
      {iconPosition === 'after' && IconComponent}
    </Component>
  )
}
