import s from "./Lelka.module.css";

type RattingPropsType = {
  value: 0 | 1 | 2 | 3 | 4 | 5;

};

export function LelkaRatting(props: RattingPropsType) {
  console.log("Ratting render");

  if (props.value === 1) {
    return (
      <div className={s.Star}>
        <Star selected={true} />
        <Star selected={false} />
        <Star selected={false} />
        <Star selected={false} />
        <Star selected={false} />
      </div>
    );
  }
  if (props.value === 2) {
    return (
      <div>
        <Star selected={true} />
        <Star selected={true} />
        <Star selected={false} />
        <Star selected={false} />
        <Star selected={false} />
      </div>
    );
  }
  if (props.value === 3) {
    return (
      <div>
        <Star selected={true} />
        <Star selected={true} />
        <Star selected={true} />
        <Star selected={false} />
        <Star selected={false} />
      </div>
    );
  }
  if (props.value === 4) {
    return (
      <div>
        <Star selected={true} />
        <Star selected={true} />
        <Star selected={true} />
        <Star selected={true} />
        <Star selected={false} />
      </div>
    );
  }
  if (props.value === 5) {
    return (
      <div>
        <Star selected={true} />
        <Star selected={true} />
        <Star selected={true} />
        <Star selected={true} />
        <Star selected={true} />
      </div>
    );
  }

  return (
    <div>
      <Star selected={false} />
      <Star selected={false}   />
      <Star selected={false}  />
      <Star selected={false}   />
      <Star selected={false}   />
    </div>
  );
}

type PropsStar = {
  selected: boolean;
 
};


function Star(props: PropsStar) {
  console.log("Star rendering");

  return (
    <>
      {props.selected === true ? (
        <span>
          <b  className={s.selected}>★</b>
        </span>
      ) : (
        <span className={s.noselected}>★</span>
      )}
    </>
  );
}




// function Star(props: PropsStar) {
//   console.log("Star rendering");

//   return (
//     <>
//       {props.selected === true ? (
//         <span>
//           <b className="selected">★</b>
//         </span>
//       ) : (
//         <span className="noselected">★</span>
//       )}
//     </>
//   );
// }





//  if(props.selected === true){
//        return<span ><b>star</b> </span> //как у димыча
//     }
//  else {
//         return <span>star </span>

//     }
