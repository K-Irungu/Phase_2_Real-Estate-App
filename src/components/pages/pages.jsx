import React from 'react'
import Header from '../common/header/header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from '../home/Home'
import About from '../about/About'
import Reviews from '../reviews/Reviews'
import LikedProperties from '../likedProperties/LikedProperties.jsx'

export const Pages = () => {

  return (
    <>
    <Router>
      <Header  />
      <Switch>
        <Route exact  path="/" >
          <Home  />
        </Route>
        <Route path="/about" component={About}></Route>
        <Route path="/reviews" component={Reviews}></Route>
        <Route path="/likedProperties" component={LikedProperties}></Route>
      </Switch>
   </Router>
    </>
  )
}
