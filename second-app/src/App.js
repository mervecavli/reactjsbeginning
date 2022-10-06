import { useState } from 'react';
import './App.css';

function App() {

  const[deger,setDeger] = useState(0);

  return (
    <div className="App">
      <p><button onClick={()=>{setDeger(deger+1)}}>Arttır</button></p>
      <p>{deger}</p>
      <p><button onClick={()=>{setDeger(deger-1)}}>Azalt</button></p>


    </div>
  );
}

export default App;
