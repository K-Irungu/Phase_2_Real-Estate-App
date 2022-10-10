import React, { useState } from 'react'
import Hero from './Hero/Hero'
import Properties from './Properties/Properties'

const Home = () => {

  const [filter, setFilter] = useState('');
  function handleFilter(searchInfo) {setFilter(searchInfo)};

  return (
    <>
    <Hero handleFilter={handleFilter}/>
    <Properties filter={filter}  />
    </>
  )
}

export default Home;