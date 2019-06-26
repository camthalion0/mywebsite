import { UPDATE_TIME, 
         TOGGLE_DESCRIPTION, 
         RECEIVE_WEATHER, 
         RECEIVE_WEATHER_ERROR,
         GET_ABOUT_DATA,
         SWITCH_MENU
        } from '../actions/index'

const initState = {
        currentTime:{       //目前時間
            timeText: ``,
            dateText: ``,
        }, 
        currentWeather:{    //目前天氣
            temp:``,
            weather: null
        },  
        showDescription:{
            education:[false,false,false], //顯示學歷描述
            experience:[false,false]       //顯示經歷描述
        },
        aboutMe:{
            educations:[],
            experiences:[]
        },
        menuIndex:0,
    };

//修改時間
const appReducer = (state = initState, action) => {
    switch(action.type){
        case UPDATE_TIME:
            // console.log('UPDATE_TIME');
            return Object.assign({}, state,{
                currentTime:{
                    timeText: action.payload.timeText,
                    dateText: action.payload.dateText,
                }
            })
        case RECEIVE_WEATHER:
            // console.log('RECEIVE_WEATHER');
            return Object.assign({}, state,{
                currentWeather:{
                    temp: `${action.payload.temp} °C`,
                    weather: action.payload.weather
                }
            })
        case RECEIVE_WEATHER_ERROR:
            return Object.assign({}, state,{
                currentWeather:{
                    temp: action.payload.temp,
                    weather: action.payload.weather
                }
            })           
        case TOGGLE_DESCRIPTION: 
            return Object.assign({}, state,{
                showDescription: action.payload.showDescription
            })

        case GET_ABOUT_DATA:
            return Object.assign({}, state,{
                aboutMe: action.payload.aboutMe
            })

        case SWITCH_MENU:
            return Object.assign({}, state,{
                menuIndex: action.payload.menuIndex
            })       

        default:
            return state;
    }
}

export default appReducer;