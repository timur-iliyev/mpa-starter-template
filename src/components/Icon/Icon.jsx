import './Icon.scss'
import clsx from 'clsx'
import { Icon as IconMinista } from 'minista'

export default (props) => {
  const { className, name, hasFill = false } = props

  return (
    <span className={clsx(className, 'icon')}>
      <IconMinista
        iconId={name}
        fill={hasFill ? 'currentColor' : 'none'}
        stroke={hasFill ? 'none' : 'currentColor'}
      />
    </span>
  )
}
