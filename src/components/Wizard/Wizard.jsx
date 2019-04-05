import React, { Component } from 'react'
import { Link, Route, Switch, HashRouter } from 'react-router-dom';
import axios from 'axios';
import StepOne from './../StepOne/StepOne'
import StepTwo from './../StepTwo/StepTwo'
import StepThree from './../StepThree/StepThree'

export class Wizard extends Component {



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
          <button>CANCEL</button>
        </Link>

      </div>
    )
  }
}

export default Wizard
