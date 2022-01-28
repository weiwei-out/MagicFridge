import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Home() {
  const [close, setClose] = useState(true);
  const [grocery, setGrocery] = useState(true);

  let history = useHistory();

  return (
    <>
      <div>
        <span>
          <img
            id="image1"
            // style={{ float: "left" }}
            onMouseOver={() => setClose(false)}
            onMouseOut={() => setClose(true)}
            onClick={() => history.push("/Items")}
            src={close ? "Icons/fridgeclose.png" : "Icons/fridgeopen.png"}
            alt="myfirdge"
          />
        </span>

        <span>
          <img
            id="image2"
            // style={{ width: "15vw", height: "auto", float: "left" }}
            onMouseOver={() => setGrocery(false)}
            onMouseOut={() => setGrocery(true)}
            onClick={() => history.push("/Groceries")}
            src={grocery ? "Icons/blkG.png" : "Icons/colorG.png"}
            alt="myfirdge"
          />
        </span>
      </div>
      <div id="spans">
        <span id="span1">Open Fridge</span>
        <span id="span2">Add Groceries</span>
      </div>
    </>
  );
}

export default Home;
