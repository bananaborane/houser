import React, { Component } from 'react'
import axios from 'axios'
import { Link, Switch, Route } from 'react-router-dom'

export class StepTwo extends Component {

    constructor(){
        super();
        this.state = {
            image: ''
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
              <input value={this.state.image} onChange={e=>this.handleDatChange(e)} name='image' placeholder='enter imageURL here' type="text"/>
              <Link to='/wizard/stepone'>
                <button>BACK TO STEP ONE</button>
              </Link>
              <Link to='/wizard/stepthree' >
                    <button>ONTO STEP THREE</button>
                </Link>
          </div>
        )
      }
}

export default StepTwo
