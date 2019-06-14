import React, { Component } from 'react';
import alice from '../img/alice.png'
import clouds from '../img/clouds.png';
import storm from '../img/storm.png';
import sun from '../img/sun.png';
import rain from '../img/rain.png';
import atmosphere from '../img/atmosphere.png';
import { connect } from 'react-redux'
import { updateTime, fetchWeather } from '../actions/index'


class DateText extends Component {

    componentDidMount() {       //當元件被寫入 DOM 之後觸發
        this.props.dispatch(updateTime());  //取得時間
        this.props.dispatch(fetchWeather());    //取得天氣

        this.timeTimer = setInterval(()=>{
            this.props.dispatch(updateTime())      //等同store.dispatch(action)
        },
            1000          
        );

        this.weatherTimer = setInterval(()=>{
            this.props.dispatch(fetchWeather())    
        },
            1000 * 60 * 60          
        );
    }

    componentWillUnmount(){     //當元件準備要被移除或破壞時觸發
        clearInterval(this.timeTimer);
        clearInterval(this.weatherTimer);
    }

    //對應天氣icon
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

    render() {
        const {currentTime,currentWeather} = this.props;   //this.props已透過mapStateToProps綁定
        return (
            <div>
                <div className='timeText'>{currentTime.timeText}</div>
                <div className='dateText'>{currentTime.dateText}</div>      
                <div className='temp'>{currentWeather.temp}
                    <span>
                        <img className='mainImg' src={this.getMainImg(currentWeather.weather)} alt={currentWeather.weather}></img>
                    </span>
                </div>
                
            </div>
        );       
    }
}

//將store state tree 的值轉為this.props
const mapStateToProps = state => {
    //console.log(state);
    return {
        currentTime: state.currentTime,
        currentWeather: state.currentWeather
    }
}

export default connect(mapStateToProps)(DateText);