import React, { useEffect, useState } from 'react'
import Country from './Country'

const CountryList = () => {
    const [country, setCountries] = useState([])
    const url = "https://restcountries.com/v3.1/all"
    useEffect(()=>{
        fetch(url)
            .then(response => response.json())
            .then(data => setCountries(data))
    }, [country])

    const dropZionist = country.filter(item => item.name.common !== 'Israel')
  
  return (
    <>
      <div className="countries-card">
        <h1 style={{fontSize: "40px", fontWeight: 800, textAlign: "center", marginBottom: "30px", backgroundColor: "steelblue"}}>Countries Information</h1>
        <div className="countries">
          {
            dropZionist.map((item)=> <Country key={item.name.common} item={item} />)
          }
         
        </div>
      </div>
    </>
  )
}

export default CountryList