import React from 'react'
import "./country.css"

const Country = ({item}) => {
  // console.log(drop)
  // console.log(item)
     const {name:{common}, flags:{png, alt}, coatOfArms:{png:bagde}, languages, capital, currencies} = item;

     let curr = "";
     for (const key in currencies) {
      curr = currencies[key]
     }

     let lang = "";
     for (const key in languages) {
      lang = languages[key]
     }

  return (
    <>
    <div className="country">
      <h1>{common}</h1>
      <img className="flag" src={png} alt={alt} />
      <div className="country-info">
        <div className="info">
        <h2><b>Capital:</b> {capital}</h2>
        <p><b>Language:</b> {lang}</p>
        <p><b>Currency:</b> {curr?.name} ({curr?.symbol})</p>
        </div>
        <img className="base" src={bagde} />
      </div>
    </div>
    </>
  )
}

export default Country