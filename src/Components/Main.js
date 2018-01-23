import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Todo from './Todo'
import Signup from './Signup'
import Signin from './Signin'
import Home from './Home'

const Main = () => (
    <main>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/signup' component={Signup}/>
        <Route path='/signin' component={Signin}/>
        <Route path='/todo' component={Todo} />
      </Switch>
    </main>
  )

  export default Main