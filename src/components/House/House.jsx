import React, { Component } from 'react'

export class House extends Component {
  render() {
    return (
      <div>
        <img src={this.props.image} width={200} alt=""/>
        <h2>{this.props.name}</h2>
        <h4>ADDRESS: {this.props.address}</h4>
        <h4>CITY: {this.props.city}</h4>
        <h4>STATE: {this.props.state}</h4>
        <h4>ZIP CODE: {this.props.zip_code}</h4>
        <button onClick={()=>{this.props.deleteDatHouse(this.props.id)}} >Delete</button>
        <br></br>
        <br></br>
      </div>
    )
  }
}

export default House
