import React, {Component} from 'react'

export default class TableCell extends Component{
    render()
    {
        return(
           <div>
                {this.props.someProp.map(() => {
                     <td></td>
                })}
           </div>
        );
    }
}