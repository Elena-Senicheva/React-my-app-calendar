import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Calendar from '../components/Calendar'
import Home from '../components/Home'
import ImageSlider from '../components/ImageSlider'
import { SliderData } from '../components/SliderData'

function Routes () {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/calendar' component={Calendar} />
      <Route path='/slider'> <ImageSlider slides={SliderData}/> </Route> 
      <Route path='*' component={NotFound} />
    </Switch>
  )
}

const NotFound = () => <div>Error 404. Page not found.</div>
export default Routes
