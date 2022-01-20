import React from 'react';
import styled from 'styled-components'
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();


export default function Section({title,description,backgroundImage,leftButton,rightButton }) {
    return (
    <div className="section-wrap" 
        style={{backgroundImage: `url("images/${backgroundImage}")`}}
    >
        
            <div className="itemText" data-aos="fade-up">
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        
        

        <div className="buttonContainer" data-aos="fade-up">
            <div className="buttongroup">
                <div className="leftButon">{leftButton}</div>
                {rightButton && 
                    <div className="rightButton">{rightButton}</div>
                }
                
                
            </div>
            <img src="images/down-arrow.svg" className="downArrow"  /> 
        </div>
        
    </div>
   );
}

