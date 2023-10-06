import styled from 'styled-components'

export const CardStyle = styled.div`

*{
    margin: 0;
    padding: 0;
  
  }
  
  .flip-card {
    
      background-color: transparent;
      width: 176px;
      height: 213px; 
      perspective: 1000px; /* Remove this if you don't want the 3D effect */
      margin:  10px;
    }
    
    /* This container is needed to position the front and back side */
    .flip-card-inner {
      position: relative;
      width: 100%;
      height: 100%;
      text-align: center;
      transition: transform 0.8s;
      transform-style: preserve-3d;
    }
    
    /* Do an horizontal flip when you move the mouse over the flip box container */
    .flip-card-inner {

      transform: rotateX(${(props) => props.flip ? "180deg" : "0deg"});
    }
    
    /* Position the front and back side */
    .flip-card-front, .flip-card-back {
      display:flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      
  
      position: absolute;
      width: 100%;
      height: 100%;
      -webkit-backface-visibility: hidden; /* Safari */
      backface-visibility: hidden;
  
      border-radius: 20px;
      
    }
    
    
    .flip-card-front {
      
      background-image: url(${(props)=>props.image});
      background-size: cover;
      background-repeat: no-repeat;
      box-shadow: 2px 2px 15px rgb(41, 45, 53);
      color: #d5e639;
      text-shadow: 1px 1px 10px #1e685f;
    }
    
  
    .flip-card-back {
     
     display: flex;
     justify-content: end;
     
  
      color: rgb(19, 19, 19);
      transform: rotateX(180deg);
    }

    .movie-description{
       
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 0px 0px 10px 10px;
        background-color: #D25F5A;
        width: 100%;
        height: 50px;
       

    }
    .movie-title{
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        color: white;
        font-size: 20px;
    }
  


`