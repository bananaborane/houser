import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom';
import axios from 'axios'
import store, { UPDATE_STEPONE } from './../../store'

export class StepOne extends Component {
  constructor(props){
    super(props);
    let reduxState = store.getState();
    this.state = {
      name: reduxState.name,
      address: reduxState.address,
      city: reduxState.city,
      state: reduxState.state,
      zip_code: reduxState.zip_code

    }
    this.handleDatChange = this.handleDatChange.bind(this);
  }

  componentDidMount(){
      console.log(this.props.location.state)
      store.subscribe(()=>{
          const reduxState = store.getState();
          this.setState({
            name: reduxState.name,
            address: reduxState.address,
            city: reduxState.city,
            state: reduxState.state,
            zip_code: reduxState.zip_code,
          })
      });
  }

  handleDatChange(e){
    const {name, value} = e.target;
    this.setState({
      [name]: value
    })
    console.log(this.state)
  }

  updateStepOne = ()=>{
    store.dispatch({
        type: UPDATE_STEPONE,
        payload: this.state
    })
  }




  render() {
    return (
      <div>

        <input placeholder='enter name here' onChange={(e)=>{this.handleDatChange(e)}} name='name' type="text"/>
        <input placeholder='enter address here' onChange={(e)=>{this.handleDatChange(e)}} name='address' type="text"/>
        <input placeholder='enter city here' onChange={(e)=>{this.handleDatChange(e)}} name='city' type="text"/>
        <input placeholder='enter state here' onChange={(e)=>{this.handleDatChange(e)}} maxLength='2' name='state' type="text"/>
        <input placeholder='enter zip_code here' onChange={(e)=>{this.handleDatChange(e)}} maxLength='10' name='zip_code' type="number"/>
        <Link  onClick={()=>{this.updateStepOne()}} to='/wizard/steptwo' >
                    <button>ONTO STEP TWO</button>
                </Link>
      </div>
    )
  }
}

export default StepOne
