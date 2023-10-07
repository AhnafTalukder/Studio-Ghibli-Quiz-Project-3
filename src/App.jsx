import { useState } from 'react'
import './App.css'
import { FormStyle } from './components/ComponentStyles/Form.styled'


import GhibliLogo from './assets/logo.svg'
import WindRises from './assets/WindRises.jpg'
import Ponyo from './assets/Ponyo.jpg'
import Fireflies from './assets/Fireflies.jpg'
import Totoro from './assets/Totoro.jpg'
import Mononoke from './assets/Mononoke.jpg'
import Howl from './assets/Howl.jpg'
import Marnie from './assets/marnie.jpg'
import Nausicaa from './assets/Nausicaa.jpg'
import Kiki from './assets/Kiki.jpg'
import Heron from './assets/Heron.jpg'


import Card from './components/Card'

function App() {

  const [currentCard, setCurrentCard] = useState(0);
  const [answer, setAnswer] = useState('');
  
  const movies = [
    { img: Howl, name: "Howl's Moving Castle", revealed: false },
    { img: Ponyo, name: "Ponyo", revealed: false },
    { img: Fireflies, name: "Grave Of The Fireflies", revealed: false},
    { img: Totoro, name: "My Neighbor Totoro", revealed: false },
    { img: Mononoke, name: "Princess Mononoke", revealed: false },
    { img: Marnie, name: "When Marnie Was There", revealed: false },
    { img: WindRises, name: "Wind Rises", revealed: false },
    { img: Nausicaa, name: "Nausicaa", revealed: false },
    { img: Kiki, name: "Kiki's Delivery Service", revealed: false },
  ];

  const [movieCollection, setMovieCollection] = useState(movies)




  const incrementCard = () =>{
    if(currentCard < movies.length){
     
      setCurrentCard(currentCard+1);
      
     
    }
    
  }

  const decrementCard = () =>{
    if(currentCard > 0){
      setCurrentCard(currentCard-1);
    }
    
  }


  const handleSubmit = (e) =>{
    e.preventDefault();

    if(answer.toLowerCase() == movieCollection[currentCard].name.toLowerCase()){
      flip(movieCollection[currentCard])
      incrementCard()
      alert("Good job!")
      setAnswer('')
    }


  }

  const flip = (card) =>{
    card.revealed = true;
    setMovieCollection(movieCollection => [...movieCollection]);
    console.log(movieCollection)
   
  }


  

  const renderCards = (movieCollection) =>{
    return movieCollection.map(({ img, name, revealed }) =>{
      return(
        <Card reveal={revealed} title={name} image = {img}/>
      )
     
    })
  }


  return (
    <>

    <div className="wrapper">
      <div className="header">
        <div>
        <h1 id="title">Studio Ghibli Quiz</h1>
        <h3 id ="subheading">Test your knowledge of Studio Ghibli Films and unlock the whole card deck!</h3>
        </div>

     
        <img src={GhibliLogo} alt="" />
       
      </div>

      <div className="main">

        <div className="deck">
          {renderCards(movieCollection)}
        </div>

        <FormStyle>
        <div className="form-container">
            <h3>Cards Unlocked: { movieCollection.filter((movie) => movie.revealed == true).length}</h3>
            <h1>Which Ghibli film is depicted in this image?</h1>
            <img src={movieCollection[currentCard].img} alt="" />
            <form>
              <input type="text" value={answer} onChange={(e) => setAnswer(e.target.value)} />
              <button onClick={handleSubmit}>Submit</button>
            </form>
            <button onClick={decrementCard}>Back</button>
            <button onClick={incrementCard}>Next</button>
          
       
        </div>
        </FormStyle>
    
      </div>
    </div>

     
  
    </>
  )
}

export default App
