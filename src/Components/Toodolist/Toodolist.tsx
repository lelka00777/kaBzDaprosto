
export type TaskType = {
  id:number
  title:string
  isDone:boolean
}
type PropsType = {
 task:Array<TaskType>
 title:string
}
   


export function Todoolist (props:PropsType) {
return (<div>
   <h3>{props.title}</h3>
     
     <div><input type="text" />
     <button>+</button>
     </div>
     
      <ul>
       <li> <input type="checkbox" checked={props.task[0].isDone}/><span>{props.task[0].title}</span></li>
       <li> <input type="checkbox" checked={props.task[1].isDone}/><span>{props.task[1].title}</span></li>
       <li> <input type="checkbox" checked={props.task[2].isDone}/><span>{props.task[2].title}</span></li>
      </ul>
     <button>All</button>
     <button>Active</button>
     <button>Complited</button>
</div>

)
}


