import React from 'react'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      gifts:[]
    }
  }

  addGift = () => {
    const {gifts} = this.state
    const ids = this.state.gifts.map(gift=>gift.id)
    const max_id =ids.length>0 ? Math.max(...ids): 0
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
      this.state.gifts.map(gift => <div key={gift.id}></div>)
    }
      </div>
      <button className = 'btn-add' onClick = {this.addGift}>Add gift</button>
      </div>
    )
  }
}

export default App
