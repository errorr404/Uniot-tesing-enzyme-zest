import React from 'react'
import Gift from './Gift'
import {max_number} from '../helper'
class App extends React.Component {
  constructor(){
    super()
    this.state = {
      gifts:[]
    }
  }

  removeGift = (id) =>{
    const gifts = this.state.gifts.filter(gift=> gift.id !== id)
    this.setState({gifts})

  }

  addGift = () => {
    const {gifts} = this.state
    const ids = this.state.gifts.map(gift=>gift.id)
    const max_id =max_number(ids)
    gifts.push({id:max_id+1});
    console.log(max_id)
    this.setState({gifts})
  }
  render(){
    return(
      <div>
      <h2>Gift Giver </h2>
      <div className='gift-list'>
    {
      this.state.gifts.map(gift => <Gift key={gift.id} gift={gift} removeGift ={this.removeGift}/>)
    }
      </div>
      <button className = 'btn-add' onClick = {this.addGift}>Add gift</button>
      </div>
    )
  }
}

export default App
