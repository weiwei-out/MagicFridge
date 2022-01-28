import React, {useState}from "react";
import { useHistory } from "react-router-dom";

function Home() {
  const [close, setClose] = useState(true)
  const [grocery, setGrocery] = useState(true)

  let history = useHistory();

  return (
    <>
    <div>
    <img style={{float: "left"}} onMouseOver={()=>setClose(false)} onMouseOut={()=>setClose(true)} onClick={()=>(history.push("/Items"))}
      src={close?("Icons/closed.png"):("Icons/open.png")}
        alt="myfirdge"
      />
    </div>
    <div>
    <img style={{width: "15vw", height: "auto", float: "left"}} onMouseOver={()=>(setGrocery(false))} onMouseOut={()=>(setGrocery(true))} onClick={()=>(history.push("/Groceries"))}
      src={grocery?("Icons/blkG.png"):("Icons/colorG.png")}
        alt="myfirdge"
      />

    </div>

    
    </>
  );
}

export default Home;
