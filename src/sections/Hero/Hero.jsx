import './Hero.scss'

export default () => {
  return (
    <section className="hero" aria-labelledby="main-title">
      <div className="hero__inner container">
        <h1 className="hero__title" id="main-title">
          Main Title
        </h1>
        Hero section content...
      </div>
    </section>
  )
}
