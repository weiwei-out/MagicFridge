import React, {useState}from "react";
import { useHistory } from "react-router-dom";

function Home() {
  const [close, setClose] = useState(true)
  function mouseOver(){
    setClose(false)
  }
  function mouseOut(){
    setClose(true)
  }
  let history = useHistory();
 
  return (
    <>
      <img  onMouseOver={mouseOver} onMouseOut={mouseOut} onClick={()=>(history.push("/Items"))}
      src={close?("Icons/closed.png"):("Icons/open.png")}
        alt="myfirdge"
      />
    </>
  );
}

export default Home;
