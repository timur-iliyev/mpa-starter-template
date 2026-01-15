import './TabsNavigation.scss'
import clsx from 'clsx'
import getTabsElementsIdsFromButtonLabel from '../../utils/getTabsElementsIdsFromButtonLabel'

export default (props) => {
  const { className, id, items = [], titleId } = props

  return (
    <div
      className={clsx(className, 'tabs-navigation')}
      id={id}
      role="tablist"
      aria-labelledby={titleId}
      data-js-tabs-navigation=""
    >
      {items.map((item) => {
        const { buttonLabel, isActive } = item

        const { buttonId, contentId } =
          getTabsElementsIdsFromButtonLabel(buttonLabel)

        return (
          <div
            className={clsx(
              'tabs-navigation__button button button--transparent',
              isActive && 'is-active'
            )}
            id={buttonId}
            aria-controls={contentId}
            role="tab"
            aria-selected={isActive}
            tabIndex={isActive ? 0 : -1}
            data-js-tabs-button=""
          >
            {buttonLabel}
          </div>
        )
      })}
    </div>
  )
}
