import React, {Component} from 'react'
import TableCell from './TableCell';

export default class TableRow extends Component{
    render()
    {
      return(
        <tr>
            {this.props.someProp.map((row) => {
                     <TableCell someProp={row}/>
                })}
        </tr>
      );
    }
}