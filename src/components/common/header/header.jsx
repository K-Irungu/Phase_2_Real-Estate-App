import React  from 'react'
import image from '../../images/logo.png'
import { Link } from 'react-router-dom'
import "./header.css"

const nav = [
  {
      text: "home",
      path: "/",
  },
  {
      text: "about",
      path: "/about",
  },
  {
      text: "reviews",
      path: "/reviews",
  },
  {
    text: "liked properties",
    path: "/likedProperties",
  }
  

]

// Create links with the above paths
const navigationList = nav.map((list, index) => (

  <li key={index} >
    <Link to={list.path}> {list.text} </Link>
  </li>

))


const Header = ( ) => {

  return (
    <header>
        <div className='container flex'>

          {/* Logo */}
          <div className='logo'>
            <img  src={image} alt='logo' ></img>
          </div>

          {/* Navigation List */}
          <div className='nav'>
            <ul className= "flex"> 
            {navigationList}
            </ul>
          </div>

        </div>
    </header>
  )
}

export default Header