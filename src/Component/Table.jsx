import TableRow from './TableRow'

const Table = ({ table, onCellClick }) => (
    <table>
        { table.map((row, index) => <TableRow click={onCellClick} key={index} rowIndex={index} row={row} />) }
    </table>
)

export default Table