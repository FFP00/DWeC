import {useState, useRef} from "react";
import Spinner from "./Spinner";
import Card from "./Card";

export default function WeatherPanel({appid}){
    const inputRef = useRef(null);

    const [spinner,setSpinner] = useState(true);
    const [forecast,setForecast] = useState([]);
    const [weather,setWeather] = useState([]);

    let urlWeather = `https://api.openweathermap.org/data/2.5/weather?appid=${appid}&lang=es&units=metric`;    
    let urlForecast = `https://api.openweathermap.org/data/2.5/forecast?appid=${appid}&lang=es&units=metric`;
    let cityUrl = "&q=";    

    function getLocation(loc){
        fetch(urlForecast + cityUrl + loc)
            .then(res => res.json())
            .then(data => {
                setForecast(data);
                console.log(data);
            }).catch(error =>{
                console.error(error);
            })

        fetch(urlWeather + cityUrl + loc)
            .then(res => res.json())
            .then(data => {
                setWeather(data);
                setSpinner(false);
                console.log(data);
            }).catch(error =>{
                console.error(error);
            })

    }

    return(
            <div className="containet">
               <form onSubmit={(e) => {
                    e.preventDefault();
               }}>
                  <div className="input-group mb-3 mx-auto">
                    <input type="text"
                        className="form-control"
                        placeholder="City"
                        ref={inputRef}/>
                    <button className="btn btn-primary input-group-text" 
                        type="submit"
                        onClick={() => getLocation(inputRef.current.value)}>Search</button>
                  </div>
                  {spinner?<Spinner/>:(weather.main && forecast.list) && <Card weather={weather} forecast={forecast}/>}
               </form>
            </div>
    )
}