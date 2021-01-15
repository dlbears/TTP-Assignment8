import React, {Component} from 'react'
import TableRow from './TableRow';


export default class Table extends Component{
    
    render()
    {
        return(
            <table className = "grid">
                
                {this.props.table.map((row) => {
                    <TableRow someProp={row}/>
                })}
                
            </table>
            
        );
    }
}