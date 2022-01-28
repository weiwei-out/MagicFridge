import React, { useState, useEffect } from 'react';


function App() {
  const [pics,setPics] = useState([])
  const [num,setNum]= useState(0)

  useEffect(()=> {
      fetch('http://localhost:9292/Game')
      .then(res => res.json())
      .then(setPics)  
    },[])

  return (
    <div className="App">
      {pics.map((pic)=> 
      <img style={{}} onMouseOver={()=>setNum(pic.id)} onMouseOut={()=>setNum(0)} key={pic.id}
       src= {pic.id===num?`${pic.img}`:("Icons/closed.png")}/>
       )
      }
     
    </div>
  );
}

export default App;