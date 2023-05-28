// import React from "react";

import { LelkaRatting } from "./LelkaRating";
import s from './Lelka.module.css'


export function Lelka() {

  const onClickHandler = () => {
    console.log("hello");
  };

  const base = [5, 5, 5];
  return (
    <div className={s.bodyApp}>
    
     <br></br>
      <LelkaRatting value={5}/>
      <LelkaRatting value={4} />
      {/* <LelkaRatting value={1} />
      <LelkaRatting value={1} />
      <LelkaRatting value={5} /> <br></br> */}
   

      {/* <LelkaRatting value={5} />
      <LelkaRatting value={1} />
      <LelkaRatting value={5} />
      <LelkaRatting value={1} />
      <LelkaRatting value={5} /><br></br>

      <LelkaRatting value={1} />
      <LelkaRatting value={1} />
      <LelkaRatting value={1} />
      <LelkaRatting value={1} />
      <LelkaRatting value={5} /> <br></br>


      <LelkaRatting value={1} />
      <LelkaRatting value={1} />
      <LelkaRatting value={1} />
      <LelkaRatting value={1} />
      <LelkaRatting value={5} /> <br></br>

      <LelkaRatting value={1} />
      <LelkaRatting value={1} />
      <LelkaRatting value={1} />
      <LelkaRatting value={1} />
      <LelkaRatting value={5} /> <br></br> */}

    </div>
  );
}





