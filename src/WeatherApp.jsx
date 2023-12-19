import Developer from "./Developer";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
import {useState} from "react";

export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo] = useState(
        {
            city: "Delhi",
            temp: 24.84,
            tempMin: 18.23,
            tempMax: 25.34,
            humidity: 47,
            feelsLike: 23.54,
            weather: "haze",
        }
    );

    let updatedInfo = (newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return(
        <div style={{textAlign:"center"}}>
            <h2>WeatherSnap App</h2>
            <SearchBox updatedInfo = {updatedInfo}/>
            <InfoBox info={weatherInfo}/>
            <Developer/>
        </div>
    )
}