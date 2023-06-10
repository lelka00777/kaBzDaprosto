import React from "react";
import "./App.css";
import { Accordion } from "./Components/Accordion/Accordion";
import { Lelka } from "./Components/Lelka/Lelka";
import { Ratting } from "./Components/Ratting/Ratting";
import { TaskType, Todoolist } from "./Components/Toodolist/Toodolist";

function App() {
  // console.log("App render");
  // let task1: Array<TaskType> = [
  //   { id: 1, title: "HTML", isDone: false },
  //   { id: 2, title: "JS", isDone: true },
  //   { id: 3, title: "React", isDone: true },
  // ];
  // let task2: Array<TaskType> = [
  //   { id: 1, title: "Terminator", isDone: false },
  //   { id: 2, title: "XXX", isDone: true },
  //   { id: 3, title: "Jentelmens", isDone: true },
  // ];
  // let task3: Array<TaskType> = [
  //   { id: 1, title: "Table", isDone: false },
  //   { id: 2, title: "Learn Yeelight", isDone: true },
  //   { id: 3, title: "Scripts", isDone: true },
  // ];
  // const onClickHandler = () => {
  //   console.log("hello");
  // };

  const base = [5, 5, 5];
  return (
    <div className="App">
     
      {/* <Todoolist title="Learn1" task={task1} />
      <Todoolist title="Movi" task={task2} />
      <Todoolist title="Work" task={task3} />  */}
{/* 
      <Pegetitle title={" 1- App Component  "} />
      <Pegetitle title={"2- App Artical  "} /> 
    
      <Ratting value={1} />
      <Ratting value={1} />
      <Ratting value={1} />
      <Ratting value={1} />
      <Ratting value={5} /> <br></br> * */}
      {/* <Lelka  /> */}
{/*      

      <Ratting value={5} />
      <Ratting value={1} />
      <Ratting value={5} />
      <Ratting value={1} />
      <Ratting value={5} /><br></br>

      <Ratting value={1} />
      <Ratting value={1} />
      <Ratting value={1} />
      <Ratting value={1} />
      <Ratting value={5} /> <br></br>


      <Ratting value={1} />
      <Ratting value={1} />
      <Ratting value={1} />
      <Ratting value={1} />
      <Ratting value={5} /> <br></br>

      <Ratting value={1} />
      <Ratting value={1} />
      <Ratting value={1} />
      <Ratting value={1} />
      <Ratting value={5} /> <br></br> */}

     

     
    {/* <Ratting value={0} />
      <Ratting value={1} />
      <Ratting value={2} />
      <Ratting value={3} />
      <Ratting value={4} />
      <Ratting value={5} /> */}

      <Accordion titleValue={"Cat"} colapsed={true} table={base} />
      <Accordion titleValue={"Menu"} colapsed={true} table={base} />

    </div>
  );
}

// type PropsTypePegetitle = {
//   title: string;
// };
// function Pegetitle(props: PropsTypePegetitle) {
//   console.log("Pegetitle =>AppTitle render");
//   return (
//     <>
//       {" "}
//       {props.title}
//       <br></br>{" "}
//     </>
//   );
// }

export default App;
