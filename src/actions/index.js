//定義type屬性名稱
export const UPDATE_TIME = 'UPDATE_TIME';
export const SHOW_DESCRIPTION = 'SHOW_DESCRIPTION';

//更新時間
export const updateTime = () => {
    let currentTime = getCurrentTime();
  //  let weatherData = getWeatherData();

   // console.log(currentTime);
    return {
        type: UPDATE_TIME,
        payload:{
           timeText:`${currentTime.hours}:${currentTime.minutes}:${currentTime.seconds}`,
           dateText:`${currentTime.date} ${currentTime.monthNames}, ${currentTime.year}`,
           temp:"123",
           weather:"test"
        }
    }
}

//是否顯示DESCRIPTION
export const showDescription = () => {
    return {
        type: SHOW_DESCRIPTION,
        payload:{
                 
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

//取得天氣資料
    // async function getWeatherData() {

    //     let apiUrl = "http://api.openweathermap.org/data/2.5/weather";
    //     let queryObj = {
    //         APPID:"f8aeb1b2e591f2c787f3c774b6c8f631",
    //         q: "Taipei",
    //         units: "metric"
    //     }
    //     apiUrl+= `?APPID=${queryObj.APPID}&q=${queryObj.q}&units=${queryObj.units}`
    //     let res = await fetch(apiUrl)
    //     let data = await res.json();
    //   //  console.log(data);
    //     return {
    //         temp: Math.round(data.main.temp*10)/10,      //四捨五入到小數第一位       
    //         main: data.weather[0].main,
    //      //   mainImg: this.getMainImg(data.weather[0].main)
    //     }
    // }

