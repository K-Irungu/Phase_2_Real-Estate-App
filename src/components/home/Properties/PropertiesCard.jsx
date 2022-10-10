import React, { useState, useEffect } from 'react'


const PropertiesCard = ( { filter } ) => {


    const [houses, setHouses] = useState([]);

    useEffect(() => {
        fetch("https://real-estate-app-build.herokuapp.com/listings")
        .then(r => r.json())
        .then(data => {
            if(!filter) {setHouses(data)} 
            else {
                const filteredHouses = data.filter(each => each.location.toUpperCase().includes(filter.city.toUpperCase()))
                setHouses(filteredHouses)
            }
        })
    },[filter]) 

  
   const homesCards = houses.map((val, index) => {
        const { location, type, imageURL, liked, id } = val;
        return (
            <div className="box shadow" key={index}>
                <div className="img">
                    <img src={imageURL} alt="property" />
                </div>
    
                <div className="text">
                    <div className="location flex">
                        <span style={{background: "#25b5791a", color: "#black", fontSize: "18px", }}>
                            {location}
                        </span>
                        <button 
                            className='likeBTN' 
                            onClick={(e) => {
                                e.preventDefault();
                               if(e.target.textContent === "🤍"){
                                e.target.textContent = "🖤";
                                handleLike(id)
                                }
                               else if(e.target.textContent === "🖤"){
                                e.target.textContent = "🤍";
                                handleUnlike(id)}
                               }}
                        >{liked}</button>
                    </div>
                    <h4>{type}</h4>
                </div>
    
            </div>
        )
    })


function handleLike(id) {
    const configurationObj = {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            liked: "🖤",
        })
    }
   fetch(`https://real-estate-app-build.herokuapp.com/listings/${id}`, configurationObj )
}

function handleUnlike(id) {
    const configurationObj = {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            liked: "🤍",
        })
    }
   fetch(`https://real-estate-app-build.herokuapp.com/listings/${id}`, configurationObj )
}





  return (
    <>
    <div className="content grid3 mtop">
        { homesCards }
    </div>
    </>
  )
  }

export default PropertiesCard