import React, { Component } from 'react'
import axios from 'axios'
import { Link, Switch, Route } from 'react-router-dom'

export class StepThree extends Component {
    constructor(){
        super();
        this.state = {
            mortgage: null,
            rent: null
        }
        this.handleDatChange = this.handleDatChange.bind(this);
        this.addDatHouse = this.addDatHouse.bind(this);
      }
    
    
      handleDatChange(e){
        const {name, value} = e.target;
        this.setState({
          [name]: value
        })
        console.log(this.state)
      }
    
      addDatHouse(){
        let { address, city, state } = this.state
        axios.post('/api/houses', { 
          house_name: this.state.name,
          address,
          city,
          state,
          zip_code: this.state.zipCode
          } ).then(()=>{ this.props.history.push('/') }).catch(err => console.log(err))
      }
    
    
      render() {
        return (
          <div>
              <input name='mortgage' value={this.state.mortgage} placeholder='enter mortgage here' onChange={e=>this.handleDatChange(e)} type="text"/>
              <input name='rent' value={this.state.rent} placeholder='enter rent here' onChange={e=>this.handleDatChange(e)} type="text"/>
              <Link to='/wizard/steptwo' >
                <button>BACK TO STEP TWO</button>
              </Link>
                <button onClick={()=>{this.addDatHouse()}} >ADD A HOUSE</button>
          </div>
        )
      }
}

export default StepThree
