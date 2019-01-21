import React from 'react'
import {Form, FormGroup, ControlLabel,Button} from 'react-bootstrap'
class Gift extends React.Component {
  constructor(){
    super()
    this.state = {
      person: '',
      present:''
    }
  }
  handleUpdate = e =>{
    e.preventDefault()
    this.setState({person:e.target.value})
  }
  render(){
    return(
      <div>
      <Form>
      <FormGroup>
      <ControlLabel>Person</ControlLabel>
      >FormControl
       className="input-person"
       onChange ={this.handleUpdate.bind(this)}
       />
      </FormGroup>
      </Form>
      </div>
    )
  }
}

export default Gift
