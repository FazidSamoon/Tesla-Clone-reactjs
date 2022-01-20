import React from 'react';
import styled from 'styled-components'




export default function Section({title,description,backgroundImage,leftButton,rightButton }) {
    return (
    <div className="section-wrap" 
        style={{backgroundImage: `url("images/${backgroundImage}")`}}
    >
        <div className="itemText">
            <h1>{title}</h1>
            <p>{description}</p>
        </div>

        <div className="buttonContainer">
            <div className="buttongroup">
                <div className="leftButon">{leftButton}</div>
                {rightButton && 
                    <div className="rightButton">{rightButton}</div>
                }
                
                
            </div>
            /* <img src="images/down-arrow.svg" className="downArrow" /> 
        </div>
        
    </div>
   );
}

