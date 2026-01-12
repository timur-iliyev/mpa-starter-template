import './ColorPalette.scss'

export default () => {
  const colorsClassNames = [
    'color-white',
    'color-black',
    'color-accent-dark',
    'color-accent',
    'color-accent-light',
    'color-grey-dark',
    'color-grey',
    'color-grey-light',
  ]

  return (
    <div className="color-palette">
      {colorsClassNames.map((color) => (
        <>
          <div className={color}>{color}</div>
        </>
      ))}
    </div>
  )
}
