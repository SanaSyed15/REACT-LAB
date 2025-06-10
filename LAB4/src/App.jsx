import {useState} from 'react'
const ToDoFunction=()=>{
  const[tasks,setTasks]=useState([]);
  const[input,setInput]=useState("");
  const addTask=()=>{
    if(input.trim()){
      setTasks([...tasks,{text:input,completed:false}]);
      setInput("");
    }
  }
  const toggleTask=(i)=>
    setTasks(tasks.map((t,idx)=>idx===i?{...t,completed:!t.completed}:t))

  const deleteTask=(i)=>
    setTasks(tasks.filter((_,idx)=>idx!==i))

  return(
    <div style={{textAlign:'center',marginTop:'50px'}}>
      <h1>React To-Do-List 📃✅</h1>
      <input type="text" value={input} placeholder="Enter a task.." onChange={(e)=>setInput(e.target.value)}
      style={{padding:'10px',fontSize:'16px',width:'250'}}/>
      <button onClick={addTask} style={{padding:'10px',fontSize:'16px',marginLeft:'10px'}}>Add Task</button>
      <ul style={{listStyle:'none',padding:'0',marginTop:'20px'}}>
        {tasks.map((task,i)=>(
          <li key={i}
          style={{
            padding:'10px',
            margin:'10px 20px',
            fontSize:'16px',
            textDecoration:task.completed?'line-through':'none',
            color:task.completed?'gray':'black',
            borderBottom:'1px solid #ddd',
            display:'flex',
            justifyContent:'space-between',
            alignItems:'center'
          }}>
            <span onClick={()=>toggleTask(i)} style={{cursor:'pointer'}}>
              {i+1}{task.completed?'✔️':'❌'}{task.text}
            </span>
            <button onClick={()=>deleteTask(i)} style={{border:'none',backgroundColor:'none',cursor:'pointer'}}>🗑️</button>
          </li>

        ))}
      </ul>
    </div>
  )
}
export default ToDoFunction;