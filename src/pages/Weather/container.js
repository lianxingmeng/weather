import React from "react";

class Card extends React.Component{
    constructor(props) {
        super(props);

    }
    render() {
        const url1 =`owf owf-${this.props.data.id}  owf-5x`
        const url2 =`owf owf-${this.props.data.id}  owf-2x`
        return(
            <div>
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-4 col-sm-12 col-xs-12">
                            <div className="card p-4">
                                <div className="d-flex">
                                    <h6 className="flex-grow-1">{this.props.data.location}</h6>
                                    <h6>{this.props.data.date}</h6>
                                </div>
                                <div className="d-flex flex-column temp mt-5 mb-3">
                                    <h1 className="mb-0 font-weight-bold" id="heading"> {this.props.data.temp}° C </h1>
                                    <span className="small grey">{this.props.data.high_temp}/ {this.props.data.low_tem}C</span>
                                    <span className="small grey"><i className={url2}></i> {this.props.data.weatherDes}</span>
                                </div>
                                <div className="d-flex">
                                    <div className="temp-details flex-grow-1">
                                        <p className="my-1"><img src="https://i.imgur.com/B9kqOzp.png" height="17px"/>
                                            <span> {this.props.data.wind} km/h </span></p>
                                        <p className="my-1"><i className="fa fa-tint mr-2" aria-hidden="true"></i>
                                            <span> Humidity {this.props.data.humidity}% </span></p>

                                    </div>
                                     <i className={url1} ></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}
export default Card;