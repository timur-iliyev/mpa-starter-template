import './AccordionGroup.scss'
import clsx from 'clsx'

export default (props) => {
  const {
    className,
    columns = 1,
    children,
    isOrdered = false,
  } = props

  const ListTag = isOrdered ? 'ol' : 'ul'

  return (
    <ListTag
      className={clsx(
        className,
        'accordion-group',
        columns > 1 && `accordion-group--${columns}-columns`,
        isOrdered && 'accordion-group--has-counter'
      )}
    >
      {children.map((child) => (
        <li className="accordion-group__item">{child}</li>
      ))}
    </ListTag>
  )
}
