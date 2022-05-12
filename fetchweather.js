import axios from "axios";
const API_KEY='6aa0e4f7cfe1633df7bf478d4b9ecd81';
const URL='https://api.openweathermap.org/data/2.5/weather';

export const fetchWeather=async (query)=>{
  
 const {data} = await axios.get(URL,{

    params:{
        q:query,
        units:'metric',
        APPID:API_KEY,
    }
 })

return data;
}  
