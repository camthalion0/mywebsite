import React, { Component } from 'react';
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
                return '\u2601'
            case 'Thunderstorm':    //雷
                //return storm;
                return '\u26c8';
            case 'Clear':       //晴
                return '\u26c5'
            case 'Rain':        //雨
            case 'Drizzle':
                return '\u2614' 
            case 'Mist':     //霧霾沙塵
            case 'Smoke': 
            case 'Haze': 
            case 'Dust': 
            case 'Fog': 
            case 'Sand': 
            case 'Ash': 
            case 'Squall': 
            case 'Tornado': 
                return '\ud83c\udf01'  
            default:            //其他
                return '';
        }
    }

    render() {
        const {currentTime,currentWeather} = this.props;   //this.props已透過mapStateToProps綁定
        return (
            <div className='time_date_temp_container'>
                <div className='timeText'>{currentTime.timeText}</div>
                <div className='dateText'>{currentTime.dateText}</div>      
                <div className='temp'>{currentWeather.temp}
                    <span className='weatherIcon'>
                        {this.getMainImg(currentWeather.weather)}                 
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