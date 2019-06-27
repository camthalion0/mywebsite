import {store} from '../../src/index';
import {data} from './../data';

//定義type屬性名稱
export const UPDATE_TIME = 'UPDATE_TIME';
export const UPDATE_WEATHER = 'UPDATE_WEATHER';
export const TOGGLE_DESCRIPTION = 'TOGGLE_DESCRIPTION';
export const REQUEST_WEATHER = 'REQUEST_WEATHER';
export const RECEIVE_WEATHER = 'RECEIVE_WEATHER';
export const RECEIVE_WEATHER_ERROR = 'RECEIVE_WEATHER_ERROR';
export const GET_ABOUT_DATA =  'GET_ABOUT_DATA';
export const SWITCH_MENU = 'SWITCH_MENU';
export const UPDATE_SKILLS_CANVAS ='UPDATE_SKILLS_CANVAS';
export const UPDATE_SKILLS_ACTIVE='UPDATE_SKILLS_ACTIVE';

//更新時間
export const updateTime = () => {
    let currentTime = getCurrentTime();
    return {
        type: UPDATE_TIME,
        payload:{
           timeText:`${currentTime.hours}:${currentTime.minutes}:${currentTime.seconds}`,
           dateText:`${currentTime.date} ${currentTime.monthNames}, ${currentTime.year}`,
        }
    }
}

//發送api請求天氣
const requestWeather = () => {  //發送api請求
    return {
      type: REQUEST_WEATHER,
      payload:{
        temp: `Loading...`,          
        weather: null
        }
    }
  }

const receiveWeather =(weatherData) => {    //更新天氣結果
    return {
        type: RECEIVE_WEATHER,
        payload:{
            temp: Math.round(weatherData.main.temp*10)/10,      //四捨五入到小數第一位      
            weather: weatherData.weather[0].main
        }
    }
  }

const receiveWeatherError =() => {    //更新天氣失敗
    return {
        type: RECEIVE_WEATHER_ERROR,
        payload:{
            temp: `Oops! Failed to get the weather.`,          
            weather: null
        }
    }
  }  

//dispatch requestWeather then call api then dispatch receiveWeather 
export const fetchWeather = () => dispatch => {  
    dispatch(requestWeather()); //api請求前  
    
    let apiUrl = "http://api.openweathermap.org/data/2.5/weather";

    let queryObj = {
        APPID:"f8aeb1b2e591f2c787f3c774b6c8f631",
        q: "Taipei",
        units: "metric"
    }
    apiUrl+= `?APPID=${queryObj.APPID}&q=${queryObj.q}&units=${queryObj.units}`
    return (
        fetch(apiUrl)
        .then(response => response.json())
        .then(json => dispatch(receiveWeather(json)))  
        .catch(() => dispatch(receiveWeatherError()))
    )
}

//是否顯示DESCRIPTION
export const toggleDescription = (itemIndex,title,newState) => {
    
   // console.log(`${itemIndex},${title},${newState}`)
    let showDescription = Object.assign({},store.getState().showDescription);
    showDescription[title] = showDescription[title].map(x=>false);    //隱藏全部
    showDescription[title][itemIndex] = newState;

    return {
        type: TOGGLE_DESCRIPTION,
        payload:{
            showDescription: showDescription      
        }
    }
}

//取得自介資料
export const getAboutData = () => {
    let {educations, experiences} =  data;

    return {
        type: GET_ABOUT_DATA,
        payload:{
            aboutMe:{
                educations,
                experiences
            }
        }
    }
} 

//切換分頁
export const switchMenu = (index)=>{   
    return {
        type: SWITCH_MENU,
        payload:{
            menuIndex: index      
        }
    }    
}

//重取SkillsTree
export const updateSkillsCanvas = (skillsTree,canvasWidth,canvasHeight)=>{   
    return {
        type: UPDATE_SKILLS_CANVAS,
        payload:{
            skillCanvas:{
                skillsTree ,
                canvasWidth,    
                canvasHeight,
            }
        }
    }    
}

//變更SkillsDescription
export const updateSkillsActive = (activeIndex,description)=>{   
    return {
        type: UPDATE_SKILLS_ACTIVE,
        payload:{
            skillsActive:{
                activeIndex,
                description
            }         
        }
    }    
}

 // 取得時間
function getCurrentTime() {
    let now = new Date(),
        datetime = new Date(now.getTime()),
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
