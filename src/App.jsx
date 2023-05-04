
import './App.css'
import Author from './components/Author'
import Title from './components/Title'
import PhraseCards from './components/PhraseCards'
import phrases from  './data/phrases.json'
import { useState } from 'react'


function App() {
  
  const [index, setIndex] = useState(0)
 
  const fonts = [ 
    "url(/fondo1.png)", 
    "url(/fondo2.png)",
    "url(/fondo3.png)",
    "url(/fondo4.png)",
    "url(/fondo1.png)", 
    "url(/fondo2.png)",
    "url(/fondo3.png)",
    "url(/fondo4.png)",
    "url(/fondo1.png)", 
    "url(/fondo2.png)",
    "url(/fondo3.png)",
    "url(/fondo4.png)",
    "url(/fondo1.png)", 
    "url(/fondo2.png)",
    "url(/fondo3.png)",
    "url(/fondo4.png)"           
  ] 
  document.body.style =`background-image: ${fonts[index]}`
  const changeIndex = () => {
    if(index < phrases.length - 1 ){
     setIndex(Math.floor((Math.random())* phrases.length))
    }else{
      setIndex(0)
    }
  }

  return (
   
      <div className='App'>        
          <Title /> 
          <button onClick={() => changeIndex() }>Cambiar</button>
          <div  className='card'>
          <PhraseCards
          data={phrases[index]} />      
           
          </div>     
          <Author 
          data={phrases[index]}
          />         
       </div>
  )
}

export default App
