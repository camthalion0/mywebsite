const data = {
     educations : [
        { 
            name: `National Taiwan University of Science and Technology`, 
            time: `During 2006~2011.`, 
            description:[
                "Majoring in Department of Information Management.",
            ]
        },
        { 
            name: `Taipei Municipal Lishan Senior High School`, 
            time: `During 2003~2006.`, 
            description:[
                "Studying in the 2nd. category of natural sciences."
            ]
        },
    ],

    experiences : [
        { 
            name: 'Tian-Xiang Technology Ltd.', 
            time:'During 2017~2019.', 
            description:[
                "As a Front-end Web Developer.",
                "Develop with Asp.net MVC."
            ]
        },
        { 
            name: 'RT-Mart International Co., Ltd.', 
            time:'During 2016~2017.', 
            description:[
                "As a Programmer.",
                "Develop with Oracle SQL, Shell Script, Oracle Forms."
            ]
        },
        { 
            name: 'FLH Co., Ltd.', 
            time:'During 2015~2016.', 
            description:[
                "As a Programmer.",
                "Develop with Lua, Unity 3D."
            ]
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
        description:"C++ is my compulsory subjects at the university.",
    },
    {
        index:1,
        x:0,
        y:2,
        text:['Linux'],
        xCorrection,
        yCorrection,
        description:"I developed and maintain RT-Mart Information Systems in Linux environment."
    },
    {
        index:2,
        x:2,
        y:2,
        text:['Shell'],
        xCorrection,
        yCorrection,
        description:"I developed and maintain RT-Mart Information Systems with Shell Script."
    },
    {
        index:3,
        x:4,
        y:2,
        text:['Pro*C'],
        xCorrection,
        yCorrection,
        description:"I developed and maintain RT-Mart Information Systems with Pro*C."
    },
    {
        index:4,
        x:6,
        y:2,
        text:['Oracle','SQL'],
        xCorrection,
        yCorrection:0,
        description:"Oracle SQL is at the heart of RT-Mart Information Systems."
    },
    {
        index:5,
        x:8,
        y:2,
        text:['Oracle','Forms'],
        xCorrection,
        yCorrection:0,
        description:"RT-Mart uses Oracle Forms for Management."
    },
    {
        index:6,
        x:4,
        y:4,
        text:['C#'],
        xCorrection,
        yCorrection,
        description:"I developed and maintain backend systems with Asp.net MVC(C#) at Tian-Xiang Technology."
    },
    {
        index:7,
        x:6,
        y:4,
        text:['Linq'],
        xCorrection,
        yCorrection,
        description:"I used Linq in Asp.net MVC project."
    },
    {
        index:8,
        x:6,
        y:6,
        text:['Asp.net','MVC'],
        xCorrection,
        yCorrection:0,
        description:"Most of projects at Tian-Xiang Technology is delovep with Asp.net MVC."
    },
    {
        index:9,
        x:0,
        y:8,
        text:['Lua'],
        xCorrection,
        yCorrection,
        description:"I developed Smart Home System at FLH with Lua."
    },
    {
        index:10,
        x:2,
        y:8,
        text:['Git'],
        xCorrection,
        yCorrection,
        description:"Most of my works do Version Control with Git."
    },
    {
        index:11,
        x:4,
        y:8,
        text:['HTML'],
        xCorrection,
        yCorrection,
        description:"HTML is the basic skill of my work at Tian-Xiang Technology."
    },
    {
        index:12,
        x:6,
        y:8,
        text:['CSS','SCSS','Bootstrap'],
        xCorrection,
        yCorrection:-5,
        description:"CSS and Bootstrap is the basic skill of my work at Tian-Xiang Technology, And I learned SCSS for my personal website."
    },
    {
        index:13,
        x:8,
        y:8,
        text:['JavaScript','JQuery'],
        xCorrection,
        yCorrection:0,
        description:"JavaScript and JQuery is the basic skill of my work at Tian-Xiang Technology."
    },
    {
        index:14,
        x:6,
        y:10,
        text:['React'],
        xCorrection,
        yCorrection,
        description:"I learned React for my personal website."
    },
    {        
        index:15,
        x:6,
        y:12,
        text:['Redux'],
        xCorrection,
        yCorrection,
        description:"I learned Redux for my React project."
    },
    {        
        index:16,
        x:2,
        y:4,
        text:['Unity 3D'],
        xCorrection,
        yCorrection,
        description:"I learned Unity 3D at FLH."
    },
]

export {data, skillItemList} ;