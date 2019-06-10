import React, { Component } from 'react';
import alice from '../img/alice.png'
import clouds from '../img/clouds.png';
import storm from '../img/storm.png';
import sun from '../img/sun.png';
import rain from '../img/rain.png';
import atmosphere from '../img/atmosphere.png';

class DateText extends Component {
    constructor() {
        super();

        let timeText = this.getTimetext();
        this.state={};
        this.state.timeText=`${timeText.hours}:${timeText.minutes}:${timeText.seconds}`;
        this.state.dateText=`${timeText.date} ${timeText.monthNames}, ${timeText.year}`;       
        this.getWeatherData().then((res)=> {
            this.state.temp = res.temp
            this.state.main = res.main
            this.state.mainImg = res.mainImg          
        });    //fetch天氣結果後assign給this.state         
    }

    componentDidMount() {       //當元件被寫入 DOM 之後觸發
        this.timer = setInterval(()=>{
            this.resetState()
            console.log('resetState');
        },
            1000          
        );
    }

    componentWillUnmount(){     //當元件準備要被移除或破壞時觸發
        clearInterval(this.timer);
    }

    resetState() {
        let timeText = this.getTimetext();
        if(timeText.minutes==="00"&&timeText.seconds==="00" ){  //整點
            this.getWeatherData().then((res)=>{
                this.setState({
                    temp: res.temp,
                    main: res.main,
                    mainImg: res.mainImg
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
        console.log(data);
        return {
            temp: Math.round(data.main.temp*10)/10,      //四捨五入到小數第一位       
            main: data.weather[0].main,
            mainImg: this.getMainImg(data.weather[0].main)
        }
    }

    getMainImg(main){
        switch(main){
            case 'Clouds':      //陰
                return clouds;
            case 'Thunderstorm':    //雷
                return storm;
            case 'Clear':       //晴
                return sun;    
            case 'Rain':        //雨
            case 'Drizzle':
                return rain;     
            case 'Mist':     //霧霾沙塵
            case 'Smoke': 
            case 'Haze': 
            case 'Dust': 
            case 'Fog': 
            case 'Sand': 
            case 'Ash': 
            case 'Squall': 
            case 'Tornado': 
                return atmosphere;     
            default:            //其他
                return alice;
        }
    }

    // handleImageErrored() {
    //     this.setState({ 
    //         mainImg: alice
    //     });
    // }

    render() {
        return (
            <div>
                <div className='timeText'>{this.state.timeText}</div>
                <div className='dateText'>{this.state.dateText}</div>      
                <div className='temp'>{this.state.temp}°C
                    <span>
                        <img className='mainImg' src={this.state.mainImg} alt={this.state.main}
                        // onError={this.handleImageErrored.bind(this)}
                        ></img>
                    </span>
                </div>
                
            </div>
        );       
    }
}
  
export default DateText;