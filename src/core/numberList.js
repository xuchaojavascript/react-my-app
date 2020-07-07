import React from 'react'

function ListItem (props) {
  return <li>{ props.value }</li>
}

class NumberList extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      numbers: [1, 2, 3, 4, 5]
    }
  }

  render() {
    const listItems = this.state.numbers.map(number => 
      <ListItem key={ number.toString() } value={ number } />  
    )
    return (
      <ul>
        {/* 法一 */}
        { listItems }
        <hr />
        {/* 法二 */}
        { this.state.numbers.map(number => 
            <ListItem key={ number.toString() } value={ number } />  
          ) 
        }
      </ul>
    )
  }

}

export default NumberList
