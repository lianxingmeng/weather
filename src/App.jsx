import React, {Component} from "react";
import WeatherContains from "./pages/Weather/WeatherContains";
class App extends Component{
    render() {
        return(
            <div className="App">
                <WeatherContains/>
            </div>
        )
    }
}

export default App;