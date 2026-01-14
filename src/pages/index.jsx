import Section from '@/layouts/Section'
import Button from '@/components/Button'
import TabsNavigation from '@/components/Tabs/components/TabsNavigation'
import testItems from '@/components/Tabs/testItems'
import Tabs from '@/components/Tabs'
import Slider from '@/components/Slider'
import SliderNavigation from '@/components/Slider/components/SliderNavigation'

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
          items={testItems}
        />
        <Tabs
          navigationTargetElementId="tabs-navigation"
          items={testItems.map((testItem) => ({
            ...testItem,
            children: (
              <>
                <p>
                  {testItem.title}'s nickname is{' '}
                  {testItem.description}
                </p>
                <Button href="/" label={testItem.title} />
              </>
            ),
          }))}
        />
      </Section>

      <Section title="Slider" titleId="slider">
        <SliderNavigation id="test-slider" hasPagination />
        <Slider navigationTargetElementId="test-slider">
          {testItems.map(({ title, description }) => (
            <div
              className="card"
              style={{
                backgroundColor: 'red',
              }}
            >
              <p className="card__description">
                {title} has {description} nickname
              </p>
            </div>
          ))}
        </Slider>
      </Section>
    </>
  )
}
