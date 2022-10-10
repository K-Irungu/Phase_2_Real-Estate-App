import React, { useEffect, useState } from 'react'
import Back from "../common/Back"
import image from "../images/Familypic.jpeg"
import "./Reviews.css"


const Reviews = () => {
  const [availableReviews, setAvailableReviews] = useState()

  useEffect(() => {
    fetch("https://real-estate-app-build.herokuapp.com/reviews")
    .then(r => r.json())
    .then(data => {
      const reviews = data.map((val, index) => {
        const { author, date, text } = val;
        return(
          
          <div className="box shadow" key={index}>
            <div className="reviewsText">
              <h1>{author}</h1>
              <h5>{date}</h5> 
              <h5>{text}</h5>
            </div>
          </div>

        )
      })
    setAvailableReviews(reviews)
    })},
  [availableReviews]);


  const [formData, setFormData] = useState({
    name: "",
    date: "",
    text: ""
  })

  function handleChange(e) {
    setFormData({
      ...formData, 
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e) {
    e.preventDefault();
    postReview(formData)
  }

  function postReview(formData) {
    const configurationObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        author: formData.name,
        date: formData.date,
        text: formData.text,
      })
    }
    fetch("https://real-estate-app-build.herokuapp.com/reviews", configurationObj)
    .then(r => r.json())
    .then(data => {
      setAvailableReviews(
        ...availableReviews,
        data)})
      setFormData({
        name: "",
        date: "",
        text: ""
      })
      
  }





  return (
    <>
    <section className="reviews mb">
        <Back name="Reviews" title="How Was Our Service?" cover={image} />
        { availableReviews }
        <div className="container">
            <form onSubmit={handleSubmit} className="shadow">
                <h4>Fill up the form</h4>
                <div>
                    <label for="name">Name</label>
                    <input type="text"  name="name" id="" value={formData.name} onChange={handleChange}/>
                    <label for="date">Date(dd/mm/yy)</label>
                    <input type="text"  name="date" id="" value={formData.date}  onChange={handleChange}/>
                </div>
                <label for="text">Type Review Here</label>
                <textarea name="text" id="" cols="30" rows="10"  value={formData.text}  onChange={handleChange}></textarea>
                <button>Submit Review</button>

            </form>
        </div>
    </section> 
    </>
  )
}

export default Reviews