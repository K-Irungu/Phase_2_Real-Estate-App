import React, { useState } from 'react'
import Hero from './Hero/Hero'
import Properties from './Properties/Properties'

//Here, we define the function handleFilter, in which we passed the user input => (searchInfo), within the Hero component


const Home = () => {

 
  const [filter, setFilter] = useState('')
  function handleFilter(searchInfo) {setFilter(searchInfo)}


  return (
    <>
    <Hero handleFilter={handleFilter}/>
    <Properties filter={filter}  />
    </>
  )
}

export default Home