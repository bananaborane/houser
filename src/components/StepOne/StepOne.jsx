import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom';
import axios from 'axios'

export class StepOne extends Component {
  constructor(){
    super();
    this.state = {
      name: '',
      address: '',
      city: '',
      state: '',
      zipCode: null,
      image: '',
      mortgage: null,
      rent: null
    }
    this.handleDatChange = this.handleDatChange.bind(this);
  }


  handleDatChange(e){
    const {name, value} = e.target;
    this.setState({
      [name]: value
    })
    console.log(this.state)
  }




  render() {
    return (
      <div>

        <input placeholder='enter name here' onChange={(e)=>{this.handleDatChange(e)}} name='name' type="text"/>
        <input placeholder='enter address here' onChange={(e)=>{this.handleDatChange(e)}} name='address' type="text"/>
        <input placeholder='enter city here' onChange={(e)=>{this.handleDatChange(e)}} name='city' type="text"/>
        <input placeholder='enter state here' onChange={(e)=>{this.handleDatChange(e)}} maxLength='2' name='state' type="text"/>
        <input placeholder='enter zipCode here' onChange={(e)=>{this.handleDatChange(e)}} maxLength='10' name='zipCode' type="number"/>
        <Link to='/wizard/steptwo' >
                    <button>ONTO STEP TWO</button>
                </Link>
      </div>
    )
  }
}

export default StepOne
