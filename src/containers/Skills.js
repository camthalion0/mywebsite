import React, { Component } from 'react';
import SkillsTree from '../containers/SkillsTree';

class Skills extends Component {

    render(){
        // let myFont = new FontFace('myFont', 'url(../fonts/angostur.ttf)');
        // console.log(myFont);
        return(
            <div className='Skills' id='Skills'>
                <SkillsTree />
            </div>
        )
    }
}

export default Skills;
