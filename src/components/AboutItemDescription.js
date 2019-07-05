import React from 'react';

const AboutItemDescription = (props) => {
        let description = props.description.map((element,index) => {
            return (<div key={index}>{element}</div>)
        });
        
        let time = props.time;

        return (
            <div className='AboutItemDescription' >
                <div>
                    <div>{time}</div>
                    <div>
                        {description}                    
                    </div>     
                </div>          
            </div>
        )    
    }

export default AboutItemDescription;