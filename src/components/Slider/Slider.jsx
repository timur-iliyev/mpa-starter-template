import 'swiper/css'
import './Slider.scss'
import SliderNavigation from './components/SliderNavigation'

const defaultSliderParams = {
  slidesPerView: 1,
  slidesPerGroup: 1,
  // spaceBetween: 16,
}

export default (props) => {
  const {
    children,
    navigationTargetElementId = null,
    sliderParams = defaultSliderParams,
    isNavigationHiddenMobile = true,
  } = props

  return (
    <div
      className="slider"
      data-js-slider={JSON.stringify({
        sliderParams,
        navigationTargetElementId,
      })}
    >
      <div className="slider__swiper swiper" data-js-slider-swiper="">
        <ul className="slider__list swiper-wrapper">
          {children.map((item) => (
            <li className="slider__item swiper-slide">{item}</li>
          ))}
        </ul>
      </div>

      {!navigationTargetElementId && (
        <SliderNavigation
          className="slider__navigation"
          isHiddenMobile={isNavigationHiddenMobile}
        />
      )}
    </div>
  )
}
