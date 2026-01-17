import Section from '@/layouts/Section'
import TabsNavigation from '@/components/Tabs/components/TabsNavigation'
import testItems from '@/mocks/testItems'
import Tabs from '@/components/Tabs'
import Slider from '@/components/Slider'
import SliderNavigation from '@/components/Slider/components/SliderNavigation'
import AccordionGroup from '@/components/AccordionGroup'
import Accordion from '@/components/Accordion'
import getIdFromString from '@/utils/getIdFromString'
import Field from '@/components/Field'
import AnimatedLink from '@/components/AnimatedLink'
import Checkbox from '@/components/Checkbox'
import Select from '@/components/Select'

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
              <p className="item-description">
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
                <p className="item-title">
                  <b>Title:</b> {testItem.title}
                </p>
                <p className="item-description">
                  <b>Description:</b> {testItem.description}
                </p>
              </>
            ),
          }))}
        />
      </Section>

      <Section title="Slider" titleId="slider">
        <Slider navigationTargetElementId="test-slider">
          {testItems.map(({ title, description }) => (
            <>
              <p className="item-title">
                <b>Title:</b> {title}
              </p>
              <p className="item-description">
                <b>Description:</b> {description}
              </p>
            </>
          ))}
        </Slider>
        <SliderNavigation id="test-slider" hasPagination />
      </Section>

      <Section title="Fields" titleId="fields">
        <form action="" className="test-form">
          <Field
            className="test-form__cell"
            label="First Name"
            placeholder="Timur"
            isRequired
          />
          <Field
            className="test-form__cell"
            label="Last Name"
            placeholder="Iliyev"
          />
          <Field
            className="test-form__cell"
            label="Email"
            placeholder="example@example.com"
            type="email"
            isRequired
          />
          <Field
            className="test-form__cell"
            label="Phone Number"
            placeholder="999 999-999"
            type="tel"
            inputMode="tel"
            mask="+{42\0} 000 000-000"
            isRequired
            renderBefore={(buttonClassName) => (
              <Select
                label="Phone number prefix"
                buttonClassName={buttonClassName}
                options={[
                  {
                    value: '+420',
                    isSelected: true,
                  },
                  {
                    value: '+1',
                  },
                  {
                    value: '+2',
                  },
                  {
                    value: '+3',
                  },
                ]}
              />
            )}
          />
          <Field
            className="test-form__cell test-form__cell--wide"
            label="Message"
            placeholder="I have a question..."
            type="textarea"
          />
          <Checkbox label="test checkbox" isRequired />
        </form>
      </Section>

      <AnimatedLink label="Tima Karoche" href="/" />
    </>
  )
}
