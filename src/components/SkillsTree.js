import React, { Component } from 'react';
import {skillItemList} from './../data';

class SkillsTree extends Component {
    constructor(props){
        super(props);
        this.state = { 
            skillsTree:{},  //技能樹座標、內容
        };
    }

    componentDidMount() {
        /* 第一次改變state */
        const container = document.getElementById('Skills');
        const canvas = document.getElementById('skillcanvas');        

        //傳入點擊座標判斷哪個squre 
        let w = container.clientWidth / 11;  //square width
        let h = container.clientHeight / 15;    //square height
        let sw = w*1.2;
        let sh = h*1.2;
        const findSqaure = (x,y,skillitem) => {
            let sqaure = 
            skillitem.find((item)=>{
                return( x > item.Xcenter - 0.5*sw && x < item.Xcenter +0.5* sw &&
                    y > item.Ycenter -0.5*sh && y < item.Ycenter + 0.5*sh )
            })
            //console.log(sqaure? sqaure.textArr : null);
           return sqaure? sqaure.textArr : null;
        }

        this.setState(()=>({
            skillsTree: this.updateCanvas(container.clientWidth,container.clientHeight),
            canvasWidth:container.clientWidth,
            canvasHeight:container.clientHeight
        }))

        /* 綁定視窗大小改變event */
        window.addEventListener("resize", this.eventObj,false); 

        /* 綁定click event */
        canvas.addEventListener("click",(e)=>{
            let result = findSqaure(e.layerX,e.layerY,this.state.skillsTree);
            if(result){
                console.log(result);
            }
        })
    }

    eventObj = () =>{
        const container = document.getElementById('Skills');
        this.setState(()=>({
            skillsTree:this.updateCanvas(container.clientWidth,container.clientHeight),
            canvasWidth:container.clientWidth,
            canvasHeight:container.clientHeight
        })) 
    }

    componentWillUnmount(){     //當元件準備要被移除或破壞時觸發
       window.removeEventListener("resize", this.eventObj,false);      //移除視窗大小改變時重畫
    }

    updateCanvas(canvasWidth,canvasHeight) {
        const canvas = document.getElementById('skillcanvas'); 
        canvas.width =canvasWidth;
        canvas.height=canvasHeight;

        let w = canvas.width / 11;  //square width
        let h = canvas.height / 15;    //square height
        let sw = w*1.2;
        let sh = h*1.2;
  
        const ctx = canvas.getContext('2d');

        let r = 5,  //radius
            ml = (canvas.width / 11) ,    //margin left
            mt = (canvas.height / 15) ;    //margin top
        let f = w / 4.5;
        
        //取得技能框實際位置中心點
        const Realcoor = (x,y) => ({
            Xcoor: x * w + ml,
            Ycoor: y * h + mt,
            Xcenter: (x +0.5)* w + ml,
            Ycenter: (y +0.5)* h + mt,
        })

        //技能方塊 x座標,y座標,文字內容,x校正,y校正,字體大小
        const square = (x, y, textArr, fontSize = f ) => {
            let {Xcenter,Ycenter} = Realcoor(x,y);  
            
            /* 開始繪製外框 */

            //設定陰影
            ctx.shadowColor = "rgba(0, 0, 0, 0.7)";
            ctx.shadowBlur = 5;
            ctx.shadowOffsetX = -1;
            ctx.shadowOffsetY = 3;
 
            ctx.beginPath();  //開始繪圖區塊
            ctx.moveTo(Xcenter-0.5*sw+r,Ycenter-0.5*sh);//左上
            ctx.arcTo(Xcenter+0.5*sw, Ycenter-0.5*sh, Xcenter+0.5*sw, Ycenter+0.5*sh, r);  //右上 右下
            ctx.arcTo(Xcenter+0.5*sw, Ycenter+0.5*sh, Xcenter-0.5*sw, Ycenter+0.5*sh, r);  //右下 左下
            ctx.arcTo(Xcenter-0.5*sw, Ycenter+0.5*sh, Xcenter-0.5*sw, Ycenter-0.5*sh, r);    //左下 左上  
            ctx.arcTo(Xcenter-0.5*sw, Ycenter-0.5*sh, Xcenter+0.5*sw, Ycenter-0.5*sh, r);    //左上 右上
    
            ctx.closePath();  //閉合繪圖區塊
      
            //用fillStyle指定填滿色彩
            ctx.fillStyle = "rgba(240, 204, 249, 0.7)";
            ctx.fill();
            //  ctx.stroke(); //繪製相連點的線條

            /* 開始書寫文字 */
            
            //取消陰影
            ctx.shadowBlur = 0;
            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = 0;

            //若內文高度超出格子則縮小字型 
            if(fontSize*(textArr.length+1)>sh){                 
                fontSize = sh/((textArr.length+1))
            };  
            ctx.font = `${fontSize}px bodytext`;  

            //文字顏色
            ctx.fillStyle = "#000000";

            textArr.forEach((item,index)=>{
                let textWidth = ctx.measureText(item).width;
                let x1 = (textWidth) /2;
                let y1 = (textArr.length*fontSize) /2;
                ctx.fillText(item, Xcenter-x1, Ycenter - y1 + fontSize*(index+1) );  //內文
            })

            return {Xcenter, Ycenter, textArr};
        }
  
        const arrow = ( direction,...points ) => {
            //起始點
            let { x, y } = points[0];
            let {Xcenter,Ycenter} = Realcoor(x ,y );  
            ctx.beginPath();  //開始繪圖區塊

            switch(direction.begin){
                case 'right':
                    ctx.moveTo(Xcenter+0.5*sw,Ycenter);
                    break;
                case 'left':
                    ctx.moveTo(Xcenter-0.5*sw,Ycenter);
                    break;    
                case 'up':
                    ctx.moveTo(Xcenter,Ycenter-0.5*sh);
                    break;       
                case 'down':
                    ctx.moveTo(Xcenter,Ycenter+0.5*sh);
                    break;      
                default:
                    break;   
            }

            //畫直線
            for(let i=1;i<points.length;i++){
                x = points[i].x;
                y = points[i].y;
                Xcenter = Realcoor(x,y).Xcenter;
                Ycenter = Realcoor(x ,y ).Ycenter; 
                if(i<points.length-1){
                    ctx.lineTo(Xcenter,Ycenter);
                }
            }

            switch(direction.end){
                case 'right':
                    ctx.lineTo(Xcenter-0.5*sw,Ycenter);
                    break;
                case 'left':
                    ctx.lineTo(Xcenter+0.5*sw,Ycenter);
                    break;    
                case 'up':
                    ctx.lineTo(Xcenter,Ycenter+0.5*sh);
                    break;       
                case 'down':
                    ctx.lineTo(Xcenter,Ycenter-0.5*sh);
                    break;      
                default:
                    break;   
            }
            ctx.lineWidth='1.2';
            ctx.stroke(); //繪製相連點的線
    
            //畫箭頭 
            ctx.beginPath();  //開始繪圖區塊   
            switch(direction.end){
                case 'right':
                    ctx.moveTo(Xcenter- 0.5*sw, Ycenter); 
                    ctx.lineTo(Xcenter- 0.5*sw -5, Ycenter-3);
                    ctx.lineTo(Xcenter- 0.5*sw -5, Ycenter+3);
                    break;
                case 'left':
                    ctx.moveTo(Xcenter+ 0.5*sw, Ycenter);  
                    ctx.lineTo(Xcenter+ 0.5*sw+5, Ycenter-3);
                    ctx.lineTo(Xcenter+ 0.5*sw+5, Ycenter+3);
                    break;    
                case 'up':
                    ctx.moveTo(Xcenter,Ycenter+0.5*sh); 
                    ctx.lineTo(Xcenter-3,Ycenter+0.5*sh+5);
                    ctx.lineTo(Xcenter+3,Ycenter+0.5*sh+5);
                    break;       
                case 'down':
                    ctx.moveTo(Xcenter,Ycenter-0.5*sh); 
                    ctx.lineTo(Xcenter-3,Ycenter-0.5*sh-5);
                    ctx.lineTo(Xcenter+3,Ycenter-0.5*sh-5);
                    break;      
                default:
                    break;   
            }
    
            ctx.closePath();  //閉合繪圖區塊  
            ctx.fill();
            ctx.stroke(); //繪製相連點的線
        }        
   //     {begin:,end:}
        arrow( {begin:'right',end:'down'}, {x:2,y:0}, {x:4,y:0}, {x:4,y:2} ); //C++ > Pro*C
        arrow( {begin:'right',end:'right'}, {x:0,y:2}, {x:2,y:2} ); //Linux > Shell
        arrow( {begin:'right',end:'right'}, {x:2,y:2}, {x:4,y:2} ); //Shell > Pro*C
        arrow( {begin:'left',end:'left'}, {x:6,y:2}, {x:4,y:2} ); //SQL > Pro*C
        arrow( {begin:'right',end:'right'}, {x:6,y:2}, {x:8,y:2} ); //SQL > Forms
        arrow( {begin:'down',end:'down'}, {x:6,y:2}, {x:6,y:4} ); //SQL > Linq
        arrow( {begin:'right',end:'right'}, {x:4,y:4}, {x:6,y:4} ); //C# > Linq
        arrow( {begin:'down',end:'right'},{x:4,y:4}, {x:4,y:6}, {x:6,y:6} ); //C# > Asp.net MVC
        arrow( {begin:'down',end:'down'}, {x:6,y:4}, {x:6,y:6} ); //Linq > Asp.net MVC
        arrow( {begin:'up',end:'up'}, {x:6,y:6}, {x:6,y:4} ); //Asp.net MVC > Linq
        arrow( {begin:'up',end:'right'},{x:4,y:8}, {x:4,y:6}, {x:6,y:6} ); //HTML > Asp.net MVC
        arrow( {begin:'down',end:'right'},{x:4,y:8}, {x:4,y:10}, {x:6,y:10} ); //HTML > React
        arrow( {begin:'up',end:'up'}, {x:6,y:8}, {x:6,y:6} ); //CSS > Asp.net MVC
        arrow( {begin:'down',end:'down'}, {x:6,y:8}, {x:6,y:10} ); //CSS > React
        arrow( {begin:'up',end:'left'},{x:8,y:8}, {x:8,y:6}, {x:6,y:6} ); //JavaScript > Asp.net MVC
        arrow( {begin:'down',end:'left'},{x:8,y:8}, {x:8,y:10}, {x:6,y:10} ); //JavaScript > React
        arrow( {begin:'down',end:'down'}, {x:6,y:10}, {x:6,y:12} ); //React > Redux
        arrow( {begin:'up',end:'up'}, {x:6,y:12}, {x:6,y:10} ); //React > Redux
  
        let skillitems = [];
        //畫出技能塊並取得畫出來的itemlist
        skillItemList.forEach((item)=>{
            skillitems.push(square(item.x, item.y, item.text));
        })
       // console.log(skillitems)
        return skillitems;
    }


    render() {
         return (
             <canvas ref="canvas" id="skillcanvas" >
             </canvas>
         );    
     }
}

export default SkillsTree;