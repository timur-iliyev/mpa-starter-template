import './SliderNavigation.scss'
import Button from '@/components/Button'
import clsx from 'clsx'

export default (props) => {
  const {
    className,
    id,
    hasPagination = true,
    isHiddenMobile,
  } = props

  return (
    <div
      className={clsx(
        className,
        'slider-navigation',
        isHiddenMobile && 'hidden-mobile'
      )}
      id={id}
      data-js-slider-navigation=""
    >
      <Button
        className="slider-navigation__arrow-button slider-navigation__arrow-button--previous"
        iconName="arrow-left"
        label="Previous slide"
        isLabelHidden
        extraAttributes={{
          'data-js-slider-previous-button': '',
        }}
      />
      {hasPagination && (
        <div
          className="slider-navigation__pagination"
          data-js-slider-pagination=""
        />
      )}
      <Button
        className="slider-navigation__arrow-button slider-navigation__arrow-button--next"
        iconName="arrow-right"
        label="Next slide"
        isLabelHidden
        extraAttributes={{
          'data-js-slider-next-button': '',
        }}
      />
    </div>
  )
}
