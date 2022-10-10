import React, { useState} from 'react'
import "./Hero.css"
import Heading from '../../common/heading'


//Logic for Seacrh engine:

//The function handleChange stores user input in state as {searchInfo} //=> This is the city name

//The function handleSubmit passes the user input in state {searchInfo} into the function handleFilter 
//and then sets search info to an empty string, whenever the form is submitted.

//The function handleReset sets the filters to an empty string.




const Hero = ({ handleFilter }) => {

    const [searchInfo, setSearchInfo] = useState( {city: ""})

    function handleChange(e) { setSearchInfo( {...searchInfo, [e.target.name]: e.target.value} ) }

    function handleSubmit(e) {
        e.preventDefault();
        handleFilter(searchInfo);
        setSearchInfo( { city: "", property: "" } );
    }

    function handleReset (e) {
        e.preventDefault();
        handleFilter('')    
    }


  return (
    <>
    <section className='hero'>
        <div className="container">

            <Heading title="Find Your Next Home" subtitle="Search property located in your city here" />
            <form  className="flex" onSubmit={handleSubmit} >
                
                <div className="box">
                    <span>City</span>
                    <input type="text" name="city" placeholder='City' value={searchInfo.city} onChange={handleChange}/>
                </div>
                
                <button type="submit" className='btn'> Search </button>
                <button onClick={handleReset} className='reset'> Reset </button>

            </form>

        </div>
    </section>
    </>
    )
}

export default Hero