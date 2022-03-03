import React, {useState} from "react";
import api from "../../api";
import moment from 'moment';
import Card from "./container";
class WeatherContains extends  React.Component{
    constructor(props) {
        super(props);
        this.state={
            latitude:40.825763,
            longitude:-96.685198,
            location:"",
            date:"",
            temp:"",
            high_temp:"",
            low_tem:"",
            weatherDes:"",
            wind:"",
            humidity:"",
            id:0,

        }

    }
    componentWillMount() {
        this.positions()
        clearInterval(this.inteerval)
    }
    componentDidMount=async ()=> {

        await this.getInfoWeather().then()
        this.inteerval =setInterval(this.getInfoWeather,3000);


    }
     positions=()=>{
         //
         navigator.geolocation.getCurrentPosition(async (position)=>{
             await this.setState({
                 latitude:position.coords.latitude,
                 longitude:position.coords.longitude,
             })


         });
    }
    getInfoWeather =async ()=>{
        console.log(this.state.latitude)

        // let day = moment().format('dd DD MMM')


        await fetch("http://api.openweathermap.org/data/2.5/weather?lat="+this.state.latitude+"&lon="+this.state.longitude+"&units=metric&appid=7b08b6b34f3f1c3b0e50aace47a001ba")
            .then(res=>res.json())
            .then(data=>{
                    // console.log(data)
                    // console.log(latitude1)
                    // console.log(data["main"])
                    this.setState({
                        date:moment().format('ddd DD MMM'),
                        location:data["name"],
                        temp:data["main"]["temp"],
                        high_temp: data["main"]["temp_max"],
                        low_tem: data["main"]["temp_min"],
                        weatherDes:data["weather"][0]["description"],
                        wind:data["wind"]["speed"],
                        humidity:data["main"]["humidity"],
                        id:data["weather"][0]["id"]
                    },()=>console.log(this.state))
                }
            )






    }
    render() {
        return(
            <div>

            <Card data = {this.state}/>

            </div>
        )
    }

}
export  default WeatherContains;