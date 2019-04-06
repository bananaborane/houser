import React, { Component } from 'react'
import House from './../House/House'
import { Link, Switch, Route} from 'react-router-dom'
import axios from 'axios';
import store , { DISPLAY_LIST } from './../../store'

export class Dashboard extends Component {
  constructor(){
    super();
    const reduxStore = store.getState();
    this.state = {
      listOfHouses: reduxStore.listOfHouses
    }
    
  }

  componentDidMount(){
    axios.get('/api/houses')
    .then(res => {
      console.log(res)
      store.dispatch({
        type: DISPLAY_LIST,
        payload: res.data
      })
      this.setState({
        listOfHouses:res.data
      })
    })
    .catch(err=>{console.log(err)})
  }

  
  deleteDatHouse = (id)=>{
    axios.delete(`/api/houses/${id}`)
    .then(()=>this.componentDidMount())
    .catch(err => console.log(err))
  }
  

  render() {
    return (
      <div>
        From Dashboard.jsx

        {this.state.listOfHouses.map((elem, i)=>{return ( <House key={elem.house_id} 
        id={elem.house_id}
        name={elem.house_name} 
        address={elem.address} 
        city={elem.city}
        zip_code={elem.zip_code}
        state={elem.state}
        deleteDatHouse={this.deleteDatHouse}
        image={elem.image} /> )})}
        
        <Link to='/wizard/stepone'>
          <button>ADD NEW PROPERTY</button>
        </Link>
      </div>
    )
  }
}

export default Dashboard
