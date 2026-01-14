import Section from '@/layouts/Section'
import Button from '@/components/Button'
import TabsNavigation from '@/components/Tabs/components/TabsNavigation'
import tabsItems from '@/components/Tabs/tabsItems'
import Tabs from '@/components/Tabs'

export const metadata = {
  title: 'Home',
}

export default () => {
  return (
    <>
      <h1 className="visually-hidden">Home</h1>

      <Section title="Tabs" titleId="tabs">
        <TabsNavigation
          id="tabs-navigation"
          titleId="tabs"
          items={tabsItems}
        />
        <Tabs
          navigationTargetElementId="tabs-navigation"
          items={tabsItems.map((tabsItem) => ({
            ...tabsItem,
            children: (
              <>
                <p>
                  {tabsItem.title}'s nickname is{' '}
                  {tabsItem.description}
                </p>
                <Button href="/" label={tabsItem.title} />
              </>
            ),
          }))}
        />
      </Section>
    </>
  )
}
