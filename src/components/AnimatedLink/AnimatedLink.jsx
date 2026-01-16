import './AnimatedLink.scss'
import clsx from 'clsx'
import getSegmentedString from '@/utils/getSegmentedString'

export default (props) => {
  const { className, href, label } = props

  const labelSegmented = getSegmentedString(label)

  return (
    <a
      className={clsx(className, 'animated-link')}
      href={href}
      aria-label={label}
    >
      {labelSegmented.map((char, index) => (
        <span
          className="animated-link__char"
          aria-hidden="true"
          style={{ transitionDelay: `${index * 0.01}s` }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </a>
  )
}
