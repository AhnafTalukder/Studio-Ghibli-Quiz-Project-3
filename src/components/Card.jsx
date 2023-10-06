import { useState } from 'react';
import { CardStyle } from './ComponentStyles/Card.styled';
import pattern from '../assets/pattern.svg'

const  Card = (prop) =>{

    let inputStyle = {
        backgroundImage: `url(${prop.image})`,
         backgroundSize:"cover",
        backgroundPosition:"center center"
      };




    return(

        
        <CardStyle image={pattern} flip={prop.reveal}>
        <div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
              
              
            </div>
            <div style={inputStyle} class="flip-card-back">
                <img alt="" />
                <div className="movie-description">
                <h2 className="movie-title">{prop.title}</h2>
                </div>
                
            </div>
         </div>
        </div>
        </CardStyle>
    )

}

export default Card;