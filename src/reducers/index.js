import { UPDATE_TIME, 
         TOGGLE_DESCRIPTION, 
         RECEIVE_WEATHER, 
         RECEIVE_WEATHER_ERROR,
         GET_ABOUT_DATA,
         SWITCH_MENU,
         UPDATE_SKILLS_CANVAS,
         UPDATE_SKILLS_ACTIVE,
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
        pathname:"/",
        skillCanvas:{
            skillsTree: {}, // index:0,
                            // x:2, 
                            // y:0,
                            // text:['C++'],
                            // xCorrection,
                            // yCorrection,
            description:"C++ description",
            canvasWidth: 0,    
            canvasHeight: 0,
        },
        skillsActive:{
            activeIndex:0,
            description:"C++ description"
        },
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
                pathname: action.payload.pathname
            })       
        case UPDATE_SKILLS_CANVAS:
            return Object.assign({}, state,{
                skillCanvas: action.payload.skillCanvas
            })      
        case UPDATE_SKILLS_ACTIVE:
            return Object.assign({}, state,{
                skillsActive: action.payload.skillsActive
            })               
            
        default:
            return state;
    }
}

export default appReducer;