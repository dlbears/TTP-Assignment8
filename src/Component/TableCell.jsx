const TableCell = (props) => 
{
    return(
        <td {...props} style={{backgroundColor: `${props.bgcolor}`}}></td>
    )
}


export default TableCell
