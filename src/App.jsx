import {Component} from 'react'
import Table from './Component/Table'
import './App.css';

const colors = ['Red', 'Green', 'Blue']

const buttons = {
  'Add Column': ({ table, color }) => ({ 
    table: table.length === 0 
        ? [ [ { color } ] ] 
        : table.map(row => ([...row, { color }]))
  }),
  'Add Row': ({ table, color }) => ({
    table: table.length === 0
        ? [ [ { color } ] ]
        :  table.concat([ table[0].map(_ => ({ color })) ]) 
  }),
  'Remove Column': ({ table }) => ({
    table: table.length < 1 || table[0].length <= 1 
        ? []
        : table.map(row => row.slice(0, row.length - 1))
  }),
  'Remove Row': ({ table }) => ({
    table: table.length < 1
        ? []
        : table.slice(0, table.length - 1)
  }),
  'Clear Colors': ({ table }) => ({
    table: table.map(r => r.map(_ => ({ color: '' })))
  }),
  'Fill All': ({ table, color }) => ({
    table: table.map(r => r.map(_ => ({ color })))
  }),
  'Fill All Uncolored': ({ table, color }) => ({
    table: table.map(r => r.map(c => c.color === '' ? ({ color }) : c))
  })
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      table: [],  // [ rows: [ columns: [ cells: { color } ] ] ]
      color: ''
    }
    this.handleButton = this.handleButton.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
    this.handleCellClick = this.handleCellClick.bind(this)
  }

  handleCellClick(row, column) {
    this.setState(({ table, color }) => ({ 
      table: table.map((r, i) => i !== row ? r : r.map((c, k) => k !== column ? c : ({ color })))
    }))
  }

  handleButton(e) {
    this.setState(buttons[e.target.name])
  }

  handleSelect(e) {
    this.setState({ color: e.target.value })
    console.log(this.state.color)
  }

  render() {
    return (
      <div>
        { Object.keys(buttons).map(text => <button onClick={this.handleButton} key={text} name={text}>{text}</button>) }
        <select name="Select Color" value={this.state.color} onChange={this.handleSelect}>
          <option value="">Select</option>
          { colors.map(color => <option value={color.toLowerCase()} key={color}>{color}</option>)}
        </select>
        <Table table={this.state.table} onCellClick={this.handleCellClick} />
      </div>
    )
  }
}


export default App;
