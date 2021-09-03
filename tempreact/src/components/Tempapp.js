import React, {useEffect, useState} from "react";
import "./css/style.css";

const Tempapp = () => {
const [city, setCity] = useState(null);
const [search, setSearch] = useState("mumbai");

 useEffect( () => {
  const fetchApi = async() => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=fe40d0bd4ff8c0a287b8bda647b8a081`
      const response = await fetch(url);
      const resjson = await response.json();
      setCity(resjson.main);
    };

    fetchApi(); 
 }, [search] )
    return(
    <>
    <div className="box">
    <div className="inputData">
    <input
    type="search"
    value={search}
    className="inputFeild" 
    onChange={ (Event) => { setSearch(Event.target.value) } }  />
      </div>
      
       {!city ? (
         <p className="errorMsg"> No Data Found </p>
       ) : (
         <div>
        <div className="info">
    <h2 className="location">
    <i className="fas fa-street-view"> </i>{search}
        </h2>
        <h1 className="temp">
        {city.temp}°C
        </h1>
        <h3 className="tempmin_max"> Min : {city.temp_min}°Cel | max : {city.temp_max}°Cel </h3>

      </div>

      <div className = "wave"></div>
      <div className = "wave.-two"></div>
      <div className = "wave.-three"></div>
      </div>
  
       )}


      
      </div>

       </>
    )
}

export default Tempapp;