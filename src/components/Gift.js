import React from 'react'
import {Form, FormGroup, ControlLabel,Button,FormControl} from 'react-bootstrap'
class Gift extends React.Component {
  constructor(){
    super()
    this.state = {
      person: '',
      present:''
    }
  }
  handleUpdate = e =>{
    // e.preventDefault()

    this.setState({person:e.target.value})
    console.log(this.state.person)
  }
  render(){
    return(
      <div>
      <Form>
      <FormGroup>
      <ControlLabel>Person</ControlLabel>
      <FormControl
       className="input-person"
       onChange ={this.handleUpdate.bind(this)}
       />
      </FormGroup>
      <FormGroup>
      <ControlLabel>Present</ControlLabel>
      <FormControl
       className="input-present"
       onChange ={(e)=>this.setState({present:e.target.value})}
       />
      </FormGroup>
      </Form>
      <Button className='btn-remove'
      onClick={()=>this.props.removeGift(this.props.gift.id)}>
      Remove Gift</Button>
      </div>
    )
  }
}

export default Gift
