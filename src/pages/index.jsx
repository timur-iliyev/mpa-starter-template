import Section from '@/layouts/Section'
import TabsNavigation from '@/components/Tabs/components/TabsNavigation'
import testItems from '@/mocks/testItems'
import Tabs from '@/components/Tabs'
import Slider from '@/components/Slider'
import SliderNavigation from '@/components/Slider/components/SliderNavigation'
import AccordionGroup from '@/components/AccordionGroup'
import Accordion from '@/components/Accordion'
import getIdFromString from '@/utils/getIdFromString'

export const metadata = {
  title: 'Home',
}

export default () => {
  return (
    <>
      <h1 className="visually-hidden">Home</h1>

      <Section title="Accordion Group" titleId="accordion-group">
        <AccordionGroup columns={2} isOrdered={true}>
          {testItems.map(({ title, description }) => (
            <Accordion
              title={title}
              id={getIdFromString(title)}
              name="test-accordion-group"
            >
              <p>
                <b>Description:</b> {description}
              </p>
            </Accordion>
          ))}
        </AccordionGroup>
      </Section>

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
                  <b>Title:</b> {testItem.title}
                </p>
                <p>
                  <b>Description:</b> {testItem.description}
                </p>
              </>
            ),
          }))}
        />
      </Section>

      <Section title="Slider" titleId="slider">
        <SliderNavigation id="test-slider" hasPagination />
        <Slider navigationTargetElementId="test-slider">
          {testItems.map(({ title, description }) => (
            <>
              <p>
                <b>Title:</b> {title}
              </p>
              <p>
                <b>Description:</b> {description}
              </p>
            </>
          ))}
        </Slider>
      </Section>
    </>
  )
}
