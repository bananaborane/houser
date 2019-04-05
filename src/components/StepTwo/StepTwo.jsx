import React, { Component } from 'react'
import axios from 'axios'
import { Link, Switch, Route } from 'react-router-dom'
import store, { UPDATE_STEPTWO } from './../../store'

export class StepTwo extends Component {

    constructor(){
        super();
        const reduxState = store.getState();
        this.state = {
            image: reduxState.image
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
    
      componentDidMount(){
          store.subscribe(()=>{
              const reduxState = store.getState();
              this.setState({
                  image: reduxState.image
              })
          })
      }
    
      updateStepTwo=()=>{
          store.dispatch({
              type: UPDATE_STEPTWO,
              payload: this.state.image
          })
      }
      
    
      render() {
        return (
          <div>
              <input value={this.state.image} onChange={e=>this.handleDatChange(e)} name='image' placeholder='enter imageURL here' type="text"/>
              <Link onClick={()=>{this.updateStepTwo()}} to='/wizard/stepone'>
                <button>BACK TO STEP ONE</button>
              </Link>
              {/* pretty cool, onclick on a link tag */}
              <Link onClick={()=>{this.updateStepTwo()}} to='/wizard/stepthree' > 
                    <button >ONTO STEP THREE</button>
                </Link>
          </div>
        )
      }
}

export default StepTwo
