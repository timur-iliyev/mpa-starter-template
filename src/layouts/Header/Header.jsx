import './Header.scss'
import clsx from 'clsx'
import Logo from '@/components/Logo'
import BurgerButton from '@/components/BurgerButton'

export default (props) => {
  const { url } = props
  const menuItems = [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: '404',
      href: '/404',
    },
    {
      label: 'About',
      href: '/about',
    },
    {
      label: 'Contact',
      href: '/contact',
    },
  ]

  return (
    <header className="header" data-js-overlay-menu="">
      <div className="header__inner container">
        <Logo className="header__logo" loading="eager" />
        <dialog
          className="header__overlay-menu-dialog"
          data-js-overlay-menu-dialog=""
        >
          <nav className="header__menu">
            <ul className="header__menu-list">
              {menuItems.map(({ label, href }) => (
                <li className="header__menu-item">
                  <a
                    href={href}
                    className={clsx(
                      'header__menu-link',
                      href === url && 'is-active'
                    )}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </dialog>
        <BurgerButton
          className="header__burger-button visible-tablet"
          extraAttributes={{
            'data-js-overlay-menu-burger-button': '',
          }}
        />
      </div>
    </header>
  )
}
