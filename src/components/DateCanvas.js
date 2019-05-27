import React, { Component } from 'react';


class DateCanvas extends Component {

    componentDidMount() {
        //當元件被寫入 DOM 之後開始畫
        this.updateCanvas();
    }

    updateCanvas() {
        const canvas = this.refs.canvas;
        const titlediv = document.getElementById('App-title');
        canvas.width = titlediv.clientWidth;    //初始化大小
        canvas.height = titlediv.clientHeight;
        const ctx = canvas.getContext('2d');

        let timetext = this.getTimetext();

        ctx.fillText(timetext.timeText, 10, 50);
        ctx.fillText(timetext.dateText, 10, 80);

        ctx.beginPath();
        ctx.arc(100,120,50,0,Math.PI*2,true); // Outer circle
        ctx.stroke();
    }

    getTimetext(){
        let date = new Date(),
        hours = date.getHours(),
        minutes=date.getMinutes(),
        dd = date.getDate(),
        month = date.getMonth(),
        year = date.getFullYear();

        minutes=minutes<10?"0"+minutes:minutes;
        dd=dd<10?"0"+dd:dd;

        // Months
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

        return{
            timeText : `${hours}:${minutes}`,
            dateText : `${date.monthNames[month]} ${dd}, ${year}`
        }
    }

    render() {
        console.log(this.props.width)
        return (
            <canvas ref="canvas" >
            </canvas>
        );
        
        
    }
}
  
export default DateCanvas;