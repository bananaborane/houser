import React, { Component } from 'react'
import { Link, Route, Switch, HashRouter } from 'react-router-dom';
import axios from 'axios';
import StepOne from './../StepOne/StepOne'
import StepTwo from './../StepTwo/StepTwo'
import StepThree from './../StepThree/StepThree'
import store, {CLEAR_INPUTS} from './../../store'

export class Wizard extends Component {



  clearAllInputs = ()=>{
    store.dispatch({
      type: CLEAR_INPUTS
    })
  }


  render() {
    return (
      <div>
        From Wizard.jsx
        <br></br>
        <Switch>
          <Route path='/wizard/stepone' component={StepOne} />
          <Route path='/wizard/steptwo' component={StepTwo} />
          <Route path='/wizard/stepthree' component={StepThree} />
        </Switch>
        <br></br>
        <Link to='/' >
          <button onClick={()=>{this.clearAllInputs()}}>CANCEL</button>
        </Link>

      </div>
    )
  }
}

export default Wizard
