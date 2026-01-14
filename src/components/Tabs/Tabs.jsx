import clsx from 'clsx'
import './Tabs.scss'
import getTabsElementsIdsFromButtonLabel from './utils/getTabsElementsIdsFromButtonLabel'
import TabNavigation from './components/TabsNavigation/TabNavigation'

export default (props) => {
  const {
    className,
    items = [],
    navigationTargetElementId = null,
    titleId,
  } = props

  return (
    <div
      className={clsx(className, 'tabs')}
      data-js-tabs={JSON.stringify({ navigationTargetElementId })}
    >
      {!navigationTargetElementId && (
        <div>
          <TabNavigation items={items} titleId={titleId} />
        </div>
      )}

      <div className="tabs__body">
        {items.map((item) => {
          const {
            buttonLabel,
            title: tabTitle,
            isActive,
            children,
          } = item

          const { buttonId, contentId, headingId } =
            getTabsElementsIdsFromButtonLabel(buttonLabel)

          return (
            <div
              id={contentId}
              aria-labelledby={`${buttonId} ${headingId}`}
              className={clsx('tabs__tab', isActive && 'is-active')}
              aria-hidden={!isActive}
              data-js-tabs-content=""
            >
              <h3 className="tabs__tab-title " id={headingId}>
                {tabTitle}
              </h3>
              {children}
            </div>
          )
        })}
      </div>
    </div>
  )
}
