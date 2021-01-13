import TableCell from './TableCell'

const TableRow = ({ row, rowIndex, click }) => (
    <tr>
        { row.map(({ color }, columnIndex) => <TableCell bgcolor={color} key={`${rowIndex}${columnIndex}`} onClick={() => click(rowIndex, columnIndex)} />)}
    </tr>
)

export default TableRow
