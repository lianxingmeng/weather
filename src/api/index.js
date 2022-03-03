import axios from "axios";

const  base={
    baseUrl:"http://api.openweathermap.org/data/2.5/weather?q=Lincoln&units=metric&appid=7b08b6b34f3f1c3b0e50aace47a001ba",
    weather:"weather?",
    curdayInfo:""
}

const api ={
    getCurenttday(params){
        return axios.get(base.baseUrl,{ withCredentials: true })
    }
}
export default api;