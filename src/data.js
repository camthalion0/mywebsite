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
        index:0,
        x:2, 
        y:0,
        text:['C++'],
        xCorrection,
        yCorrection,
        description:"C++ description",
    },
    {
        index:1,
        x:0,
        y:2,
        text:['Linux'],
        xCorrection,
        yCorrection,
        description:"Linux description"
    },
    {
        index:2,
        x:2,
        y:2,
        text:['Shell'],
        xCorrection,
        yCorrection,
        description:"Shell description"
    },
    {
        index:3,
        x:4,
        y:2,
        text:['Pro*C'],
        xCorrection,
        yCorrection,
        description:"Pro*C description"
    },
    {
        index:4,
        x:6,
        y:2,
        text:['Oracle','SQL'],
        xCorrection,
        yCorrection:0,
        description:"Oracle SQL description"
    },
    {
        index:5,
        x:8,
        y:2,
        text:['Oracle','Forms'],
        xCorrection,
        yCorrection:0,
        description:"Oracle Forms description"
    },
    {
        index:6,
        x:4,
        y:4,
        text:['C#'],
        xCorrection,
        yCorrection,
        description:"C# description"
    },
    {
        index:7,
        x:6,
        y:4,
        text:['Linq'],
        xCorrection,
        yCorrection,
        description:"Linq description"
    },
    {
        index:8,
        x:6,
        y:6,
        text:['Asp.net','MVC'],
        xCorrection,
        yCorrection:0,
        description:"Asp.net MVC description"
    },
    {
        index:9,
        x:1,
        y:5,
        text:['Shell'],
        xCorrection,
        yCorrection,
        description:"Shell description"
    },
    {
        index:10,
        x:1,
        y:8,
        text:['Git'],
        xCorrection,
        yCorrection,
        description:"Git description"
    },
    {
        index:11,
        x:4,
        y:8,
        text:['HTML'],
        xCorrection,
        yCorrection,
        description:"HTML description"
    },
    {
        index:12,
        x:6,
        y:8,
        text:['CSS','SCSS','Bootstrap'],
        xCorrection,
        yCorrection:-5,
        description:"CSS description"
    },
    {
        index:13,
        x:8,
        y:8,
        text:['JavaScript','JQuery'],
        xCorrection,
        yCorrection:0,
        description:"JavaScript description"
    },
    {
        index:14,
        x:6,
        y:10,
        text:['React'],
        xCorrection,
        yCorrection,
        description:"React description"
    },
    {        
        index:15,
        x:6,
        y:12,
        text:['Redux'],
        xCorrection,
        yCorrection,
        description:"Redux description"
    },
]

export {data, skillItemList} ;