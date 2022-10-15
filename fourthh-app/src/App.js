import './App.css';
import Contents from './components/contents'
import React,{useState} from 'react'
export const TemaVerisi=React.createContext();

const tema={
  dark:{
    color: 'white',
    backgroundColor: 'black'
  },
  light:{
    color: 'black',
    backgroundColor: 'white'
  }
}



function App() {
  const[deger,setDeger] =useState(tema.dark);
  function change() {
    if(tema.dark===deger){
      setDeger(tema.light);
      console.log(deger);
    }
    else{
      setDeger(tema.dark);
      console.log(deger);

    }
  }
  return (
    <div className="App">
      <button onClick={change}>
        {tema.dark===deger ? "Turn on the light mode": "Turn off the light mode"}
      </button>
     <TemaVerisi.Provider value={deger}>
     <Contents></Contents>
     </TemaVerisi.Provider>

    </div>
  );
}

export default App;
