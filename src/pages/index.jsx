import Section from '@/layouts/Section'
import ColorPalette from '@/components/ColorPalette'
import Button from '@/components/Button'
import BurgerButton from '@/components/BurgerButton'
import Accordion from '@/components/Accordion'

export const metadata = {
  title: 'Home',
}

export default () => {
  return (
    <>
      <h1 className="visually-hidden">Home</h1>
      <Section
        title="Color Palettes"
        titleId="colorPalettes"
        description="This is section description"
      >
        <div
          className="components"
          style={{
            display: 'flex',
            alignContent: 'center',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <Button
            label="Test"
            iconName="search"
            iconPosition="after"
          />
          <Button
            label="Test"
            iconName="search"
            iconPosition="after"
            mode="transparent"
          />
          <Button
            label="Test"
            iconName="search"
            iconPosition="after"
            isLabelHidden
          />
          <Button
            label="Test"
            iconName="search"
            iconPosition="after"
            isLabelHidden
            mode="transparent"
          />
          <BurgerButton />
        </div>
        <Accordion
          title="This is an accordion"
          id="accordion-1"
          name="accordions"
        >
          Accordion content
        </Accordion>
        <Accordion
          title="This is an accordion"
          id="accordion-2"
          name="accordions"
        >
          Accordion content
        </Accordion>
        <ColorPalette />
        <ColorPalette />
        <ColorPalette />
      </Section>
    </>
  )
}
