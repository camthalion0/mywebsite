import React, { Component } from 'react';

class SkillsTree extends Component {
    componentDidMount() {
        //當元件被寫入 DOM 之後開始畫
        this.updateCanvas();
    }

    updateCanvas() {

        let r = 10;  //radius
        let w = 70;  //width
        let h = 50;    //height
        let m = 30;    //margin
        let xCorrection = 20; //x校正
        let yCorrection = 5;  //y校正

        //技能方塊 x座標,y座標,文字內容,x校正,y校正,字體大小
        const square = (x, y, textArr, x1=xCorrection, y1=yCorrection, fontSize=12 ) => {
            let Xcoor = x * w + m;  
            let Ycoor = y * h + m;
    
            ctx.font = `${fontSize}px Arial`;    
            ctx.beginPath();  //開始繪圖區塊
            ctx.moveTo(Xcoor+r,Ycoor);
            ctx.arcTo(Xcoor+w, Ycoor, Xcoor+w, Ycoor+h, r);
            ctx.arcTo(Xcoor+w, Ycoor+h, Xcoor, Ycoor+h, r);
            ctx.arcTo(Xcoor, Ycoor+h, Xcoor, Ycoor, r);
            ctx.arcTo(Xcoor, Ycoor, Xcoor+w, Ycoor, r);  
    
            ctx.closePath();  //閉合繪圖區塊
            //用fillStyle指定填滿色彩
            ctx.fillStyle = "#e0bcb1"; 
            ctx.fill();
            ctx.stroke(); //繪製相連點的線
            textArr.forEach((item,index)=>{
                ctx.strokeText(item, Xcoor+x1, Ycoor+h/2 + y1 + index*fontSize );  //內文
            })
        }
  
        const arrow = ( direction,...points ) => {
            //起始點
            let { x, y } = points[0];
            let Xcoor = (x + 0.5) * w + m;  
            let Ycoor = (y + 0.5) * h + m;
            ctx.beginPath();  //開始繪圖區塊
            ctx.moveTo(Xcoor,Ycoor);
    
            //畫直線
            for(let i=1;i<points.length;i++){
                x = points[i].x;
                y = points[i].y;
                Xcoor = (x + 0.5) * w + m;  
                Ycoor = (y + 0.5) * h + m;   
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


        const canvas = this.refs.canvas;
        const container = document.getElementById('Skills');
        canvas.width = container.clientWidth;    //初始化大小
        canvas.height = container.clientHeight;
        const ctx = canvas.getContext('2d');

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
  
        square(2, 0, ['C++'], );
        square(0, 2, ['Linux'],  );
        square(2, 2, ['Shell'],  );
        square(4, 2, ['Pro*C'],  );
        square(6, 2, ['Oracle', 'SQL'], xCorrection,0);
        square(8, 2, ['Oracle', 'Forms'], xCorrection,0);
        square(4, 4, ['C#'],  );
        square(6, 4, ['Linq'],  );
        square(6, 6, ['Asp.net','MVC'], 15,0);
        square(1, 5, ['Lua'],  );
        square(1, 8, ['Git'],  );
        square(4, 8, ['HTML'],  );
        square(6, 8, ['CSS','SCSS','Bootstrap'],10,-5  );
        square(8, 8, ['JavaScript','JQuery'], 5,0 );
        square(6, 10, ['React'],  );
        square(6, 12, ['Redux'],  );
    }

    render() {
       // console.log(this.props.width)
        return (
            <canvas ref="canvas" >
            </canvas>
        );    
    }
}

export default SkillsTree;