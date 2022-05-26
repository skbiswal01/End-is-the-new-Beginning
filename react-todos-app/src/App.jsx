
import './App.css';
import {useState} from "react"
function App() {
  const [todo,setTodo]=useState("")
  const [todos,setTodos]=useState([])
  const [edit,setEdit]=useState(0)

  const handleSubmit=(e)=>{
    e.preventDefault();
if(edit){
  const editTodo=todos.find((i)=>i.id===edit)
  const updatedtodos=todos.map((t)=>t.id===editTodo.id?(t={id:t.id,todo}):{id:t.id,todo:t.todo}
  )
  setTodos(updatedtodos)
  setEdit(0)
  setTodo("")
  return
}





    if(todo!==""){
      setTodos([{id:`${todo}-${Date.now()}`,todo},...todos])
     setTodo("")
    }

  }
  const handleDelete=(id)=>{
const delTodo=todos.filter((to)=>to.id!== id)
setTodos([...delTodo])
  }
  const handleEdit=(id)=>{
    const editTodo=todos.find((i)=>i.id===id)
    setTodo(editTodo.todo)
    setEdit(id)
  }
  return (
    <div className="App">
      <div className='container'>
        <h2>Todo List App</h2>
        <form className="todoForm" action="" onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter Your Task' value={todo} onChange={(e)=>setTodo(e.target.value)}/>
        <button type='submit'>{edit?"edit":"Go"}</button>
        </form>
       <ul className="allTodos">
         {todos.map((t)=>(
          <li className="singleTodo"><span className="todoText" key={t.id}>{t.todo}</span>
       
        <button onClick={()=>handleEdit(t.id)}>Edit</button>
        <button onClick={()=>handleDelete(t.id)}>Delete</button>
        </li>
         ))}
        
       </ul>
     
      </div>
    </div>
  );
}

export default App;
