import React, { Component } from 'react'
import axios from 'axios'
import { Link, Switch, Route } from 'react-router-dom'
import store, {UPDATE_STEPTHREE, ADD_HOUSE, CLEAR_INPUTS} from './../../store'

export class StepThree extends Component {
    constructor(){
        super();
        const reduxState = store.getState();
        this.state = {
            mortgage: reduxState.mortgage,
            rent: reduxState.rent
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

        store.dispatch({
            type: ADD_HOUSE,
            payload: this.state
        })
        const reduxState = store.getState();
        axios.post('/api/houses', reduxState.listOfHouses[reduxState.listOfHouses.length - 1])
        .then(()=>{ this.props.history.push('/') })
         // THIS.PROPS.HISTORY.PUSH('/') SENDS US BACK TO THE HOME PAGE
        .catch(err => console.log(err))
      }

      componentDidMount(){
          store.subscribe(()=>{
              const reduxState = store.getState();
              this.setState({
                  mortgage: reduxState.mortgage,
                  rent: reduxState.rent
              })
          })
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
