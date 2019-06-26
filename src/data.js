const data = {
     educations : [
        { 
            name: `edu1`, 
            time: `2001~2001`, 
            description:`edu1_description`
        },
        { 
            name: `edu2`, 
            time: `2002~2002`, 
            description:`edu2_description`
        },
        { 
            name: `edu3`, 
            time: `2003~2003`, 
            description:`edu3_description`
        },
    ],

    experiences : [
        { 
            name: 'exp1', 
            time:'2011~2011', 
            description:'exp1_description'
        },
        { 
            name: 'exp2', 
            time:'2012~2012', 
            description:'exp2_description'
        },
    ]
}

let xCorrection = 5; //x校正
let yCorrection = 5;  //y校正

const skillItemList = [
    {
        x:2, 
        y:0,
        text:['C++'],
        xCorrection,
        yCorrection
    },
    {
        x:0,
        y:2,
        text:['Linux'],
        xCorrection,
        yCorrection
    },
    {
        x:2,
        y:2,
        text:['Shell'],
        xCorrection,
        yCorrection
    },
    {
        x:4,
        y:2,
        text:['Pro*C'],
        xCorrection,
        yCorrection
    },
    {
        x:6,
        y:2,
        text:['Oracle','SQL'],
        xCorrection,
        yCorrection:0
    },
    {
        x:8,
        y:2,
        text:['Oracle','Forms'],
        xCorrection,
        yCorrection:0
    },
    {
        x:4,
        y:4,
        text:['C#'],
        xCorrection,
        yCorrection
    },
    {
        x:6,
        y:4,
        text:['Linq'],
        xCorrection,
        yCorrection
    },
    {
        x:6,
        y:6,
        text:['Asp.net','MVC'],
        xCorrection,
        yCorrection:0
    },
    {
        x:1,
        y:5,
        text:['Shell'],
        xCorrection,
        yCorrection
    },
    {
        x:1,
        y:8,
        text:['Git'],
        xCorrection,
        yCorrection
    },
    {
        x:4,
        y:8,
        text:['HTML'],
        xCorrection,
        yCorrection
    },
    {
        x:6,
        y:8,
        text:['CSS','SCSS','Bootstrap'],
        xCorrection,
        yCorrection:-5
    },
    {
        x:8,
        y:8,
        text:['JavaScript','JQuery'],
        xCorrection,
        yCorrection:0
    },
    {
        x:6,
        y:10,
        text:['React'],
        xCorrection,
        yCorrection
    },
    {
        x:6,
        y:12,
        text:['Redux'],
        xCorrection,
        yCorrection
    },
]

export {data, skillItemList} ;