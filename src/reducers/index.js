import { UPDATE_TIME, SHOW_DESCRIPTION } from '../actions/index'

const initState = {
        currentTime:{
            timeText:"00:01:02",
            dateText:"12 Jun, 2019",
            temp:"15",
            weather:"Clouds"
        },     //目前時間、天氣
        showDescription:{
            educations:[false,false,false], //顯示學歷描述
            experiences:[false,false]       //顯示經歷描述
        }
    };

//修改時間
const appReducer = (state = initState, action) => {
    switch(action.type){
        case UPDATE_TIME:
            return Object.assign({}, state,{
                currentTime:{
                    timeText: action.payload.timeText,
                    dateText: action.payload.dateText,
                    temp: action.payload.temp,
                    weather: action.payload.weather
                }
            })
        case SHOW_DESCRIPTION:
            return Object.assign({}, state,{
                showDescription:{
                    educations: action.educations,
                    experiences: action.experiences
                }
            })

        default:
            return state;
    }
}

export default appReducer;