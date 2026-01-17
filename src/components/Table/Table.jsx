import './Table.scss'

export default (props) => {
  const { className, headCells = [], rows = [] } = props

  return (
    <table className={className}>
      {headCells.length > 0 && (
        <thead>
          <tr>
            {headCells.map(({ children, width }) => (
              <th width={width}>{children}</th>
            ))}
          </tr>
        </thead>
      )}
      <tbody>
        {rows.map(({ cells }) => (
          <tr>
            {cells.map((cell) => (
              <td>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
