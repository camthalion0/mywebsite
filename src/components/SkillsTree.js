import React, { Component } from 'react';
import {skillItemList} from './../data';

class SkillsTree extends Component {
    componentDidMount() {
        //當元件被寫入 DOM 之後開始畫

    //     const canvas = document.getElementById('skillcanvas'); 
    //     const container = document.getElementById('Skills');
    //     canvas.width = container.clientWidth;    //初始化大小
    //    // canvas.height = container.clientHeight;
    //    canvas.height = container.clientWidth; 
    //    // let w = container.clientWidth / 12;  //square width
    //     // let h = w / 1.3;    //square height

        this.updateCanvas();
        window.addEventListener("resize", this.updateCanvas);

    }

    updateCanvas() {

        const canvas = document.getElementById('skillcanvas'); 

        const container = document.getElementById('Skills');

        canvas.width = container.clientWidth;    //初始化大小
        //canvas.height = container.clientHeight;
       //  canvas.width = 1000;  
         canvas.height =  container.clientWidth; 
        let w = canvas.width / 12;  //square width
        let h = w / 1.3;    //square height
  
        const ctx = canvas.getContext('2d');

        let r = 5,  //radius
            ml = (canvas.width / 12) * 1.5,    //margin left
            mt = (canvas.height / 15) ;    //margin top

        let f = w / 4.5;
        

        //技能框實際位置
        const Realcoor = (x,y) => ({
            Xcoor: x * w + ml,
            Ycoor: y * h + mt
        })

        //技能方塊 x座標,y座標,文字內容,x校正,y校正,字體大小
        const square = (x, y, textArr, x1, y1, fontSize = f ) => {
            let {Xcoor,Ycoor} = Realcoor(x,y);  
    
            ctx.font = `${fontSize}px Arial`;    
            ctx.beginPath();  //開始繪圖區塊
            ctx.moveTo(Xcoor+r,Ycoor);
            ctx.arcTo(Xcoor+w*1.1, Ycoor, Xcoor+w*1.1, Ycoor+h*1.1, r);
            ctx.arcTo(Xcoor+w*1.1, Ycoor+h*1.1, Xcoor, Ycoor+h*1.1, r);
            ctx.arcTo(Xcoor, Ycoor+h*1.1, Xcoor, Ycoor, r);
            ctx.arcTo(Xcoor, Ycoor, Xcoor+w*1.1, Ycoor, r);  
    
            ctx.closePath();  //閉合繪圖區塊
            //用fillStyle指定填滿色彩
            ctx.fillStyle = "#e0bcb1"; 
            ctx.fill();
            ctx.stroke(); //繪製相連點的線
            ctx.fillStyle = "#000000"; 
            textArr.forEach((item,index)=>{
                let textWidth = ctx.measureText(item).width;
                x1 = (w - textWidth) /2;
                y1 = (h - textArr.length*f) /2;
                ctx.fillText(item, Xcoor+x1, Ycoor + y1 + f*(index+1) );  //內文
            })

            return {Xcoor, Ycoor, textArr};
        }
  
        const arrow = ( direction,...points ) => {
            //起始點
            let { x, y } = points[0];
            let {Xcoor,Ycoor} = Realcoor(x + 0.5,y + 0.5);  
            // let Xcoor = (x + 0.5) * w + m;  
            // let Ycoor = (y + 0.5) * h + m;
            ctx.beginPath();  //開始繪圖區塊
            ctx.moveTo(Xcoor,Ycoor);
    
            //畫直線
            for(let i=1;i<points.length;i++){
                x = points[i].x;
                y = points[i].y;
                Xcoor = Realcoor(x + 0.5,y + 0.5).Xcoor;
                Ycoor = Realcoor(x + 0.5,y + 0.5).Ycoor; 
                ctx.lineTo(Xcoor,Ycoor);
            }
            ctx.stroke(); //繪製相連點的線
    
            //畫箭頭 
            ctx.beginPath();  //開始繪圖區塊   
            switch(direction){
                case 'right':
                    ctx.moveTo(Xcoor-w/2,Ycoor); 
                    ctx.lineTo(Xcoor-w/2-5,Ycoor-3);
                    ctx.lineTo(Xcoor-w/2-5,Ycoor+3);
                    break;
                case 'left':
                    ctx.moveTo(Xcoor+w/2,Ycoor); 
                    ctx.lineTo(Xcoor+w/2+5,Ycoor-3);
                    ctx.lineTo(Xcoor+w/2+5,Ycoor+3);
                    break;    
                case 'up':
                    ctx.moveTo(Xcoor,Ycoor+h/2); 
                    ctx.lineTo(Xcoor-3,Ycoor+h/2+5);
                    ctx.lineTo(Xcoor+3,Ycoor+h/2+5);
                    break;       
                case 'down':
                    ctx.moveTo(Xcoor,Ycoor-h/2); 
                    ctx.lineTo(Xcoor-3,Ycoor-h/2-5);
                    ctx.lineTo(Xcoor+3,Ycoor-h/2-5);
                    break;      
                default:
                    break;   
            }
    
            ctx.closePath();  //閉合繪圖區塊  
            ctx.fill();
            ctx.stroke(); //繪製相連點的線
        }          

        arrow( 'down', {x:2,y:0}, {x:4,y:0}, {x:4,y:2} ); //C++ > Pro*C
        arrow( 'right', {x:0,y:2}, {x:2,y:2} ); //Linux > Shell
        arrow( 'right', {x:2,y:2}, {x:4,y:2} ); //Shell > Pro*C
        arrow( 'left', {x:6,y:2}, {x:4,y:2} ); //SQL > Pro*C
        arrow( 'right', {x:6,y:2}, {x:8,y:2} ); //SQL > Forms
        arrow( 'down', {x:6,y:2}, {x:6,y:4} ); //SQL > Linq
        arrow( 'right', {x:4,y:4}, {x:6,y:4} ); //C# > Linq
        arrow( 'right',{x:4,y:4}, {x:4,y:6}, {x:6,y:6} ); //C# > Asp.net MVC
        arrow( 'down', {x:6,y:4}, {x:6,y:6} ); //Linq > Asp.net MVC
        arrow( 'up', {x:6,y:6}, {x:6,y:4} ); //Asp.net MVC > Linq
        arrow( 'right',{x:4,y:8}, {x:4,y:6}, {x:6,y:6} ); //HTML > Asp.net MVC
        arrow( 'right',{x:4,y:8}, {x:4,y:10}, {x:6,y:10} ); //HTML > React
        arrow( 'up', {x:6,y:8}, {x:6,y:6} ); //CSS > Asp.net MVC
        arrow( 'down', {x:6,y:8}, {x:6,y:10} ); //CSS > React
        arrow( 'left',{x:8,y:8}, {x:8,y:6}, {x:6,y:6} ); //JavaScript > Asp.net MVC
        arrow( 'left',{x:8,y:8}, {x:8,y:10}, {x:6,y:10} ); //JavaScript > React
        arrow( 'down', {x:6,y:10}, {x:6,y:12} ); //React > Redux
        arrow( 'up', {x:6,y:12}, {x:6,y:10} ); //React > Redux
  
        let skillitem = [];
        //畫出技能塊並取得itemlist
        skillItemList.forEach((item)=>{
            skillitem.push(square(item.x, item.y, item.text, item.xCorrection, item.yCorrection));

        })
       // console.log(skillitem);

        const clickEvent = (x,y) => {
            let sqaure = 
            skillitem.find((item)=>{
                return( x > item.Xcoor && x < item.Xcoor + w &&
                    y > item.Ycoor && y < item.Ycoor + h )
            })
            return sqaure? sqaure.textArr : null;
        }
        //綁定點擊事件
        canvas.addEventListener('click', function(e){
            console.log(clickEvent(e.layerX,e.layerY));
        }, false);

    }

    render() {
       // console.log(this.props.width)
        return (
            <canvas ref="canvas" height='1000' id="skillcanvas" >
            </canvas>
        );    
    }
}

export default SkillsTree;