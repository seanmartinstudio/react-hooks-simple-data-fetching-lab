import React, { useState, useEffect } from "react";

function App() {
const [dogPics, setDogPics] = useState([])
const [isLoading, setisLoading] = useState(false)

useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
        setDogPics(data.message)
        setisLoading(true)

        
    })
}, [])

if(!isLoading) return <p>"Loading..."</p>

return <img src={dogPics} alt="A Random Dog"></img>
}

export default App;
