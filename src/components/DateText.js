import React, { Component } from 'react';


class DateText extends Component {
    constructor() {
        super();

        let timeText = this.getTimetext();
        this.state={};
        this.state.timeText=`${timeText.hours}:${timeText.minutes}:${timeText.seconds}`;
        this.state.dateText=`${timeText.date} ${timeText.monthNames}, ${timeText.year}`;       
        this.getWeatherData().then((res)=> this.state.temp = res.temp);    //取得fetch結果後assign給this.state.temp      
    }

    componentDidMount() {
        setInterval(()=>{
            this.resetState()},
            1000
        );
    }

    resetState() {
        let timeText = this.getTimetext();
        if(timeText.minutes==="00"&&timeText.seconds==="00" ){  //整點
            this.getWeatherData().then((res)=>{
                this.setState({
                    temp: res.temp
                })
            });           
        }

        this.setState({     //顯示時鐘
           timeText:`${timeText.hours}:${timeText.minutes}:${timeText.seconds}`,
           dateText:`${timeText.date} ${timeText.monthNames}, ${timeText.year}`})
    }

    // 取得時間
    getTimetext(addseconds=0) {
        let now = new Date(),
            datetime = new Date(now.getTime() + addseconds),
            hours = datetime.getHours(),
            minutes=datetime.getMinutes(),
            seconds=datetime.getSeconds(),
            date = datetime.getDate(),
            month = datetime.getMonth() + 1,    //0~11 > 1~12
            year = datetime.getFullYear();

        // 補0
        hours = hours < 10 ? "0" + hours : hours.toString();
        seconds = seconds < 10 ? "0" + seconds : seconds.toString();
        minutes = minutes < 10 ? "0" + minutes : minutes.toString();
        month = month < 10 ? "0" + month : month.toString();
        date = date < 10 ? "0" + date : date.toString();

        // Months Names
        Date.prototype.monthNames = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ];

        return {
            hours,
            seconds,
            minutes,  
            year,     
            month,
            date, 
            monthNames:  datetime.monthNames[month - 1]         
        }
    }

    // 取得天氣資料
    async getWeatherData() {

        let apiUrl = "http://api.openweathermap.org/data/2.5/weather";
        let queryObj = {
            APPID:"f8aeb1b2e591f2c787f3c774b6c8f631",
            q: "Taipei",
            units: "metric"
        }
        apiUrl+= `?APPID=${queryObj.APPID}&q=${queryObj.q}&units=${queryObj.units}`
        let res = await fetch(apiUrl)
        let data = await res.json();
     //   console.log(data);
        return {
            temp: Math.round(data.main.temp*10)/10      //四捨五入到小數第一位       
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.timeText}</h1>
                <h3>{this.state.dateText}</h3>      
                <h3>{this.state.temp}°C</h3>         
            </div>
        );       
    }
}
  
export default DateText;