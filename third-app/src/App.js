import './App.css';
import React,{useState} from 'react';
import Container from './components/container'

function App() {


  const[baslik,setBaslik]=useState("I'm learning React");
  const numara=181805083
  return (
    <div className="App">
      <Container title={baslik} number={numara}/>
      <button onClick={()=>{setBaslik("Yes, I'm still learning it...")}}> Still learning?? </button>
      
    </div>
  );
}

export default App;
