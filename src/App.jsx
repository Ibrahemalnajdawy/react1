import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css' 

function App() {
const [ task , setTask ]=useState(["wash disshes","work at company"])
const [ myTask , setMyTask ]=useState([])
const [numTaskin,setNumTaskin]=useState(2)
const [numTaskdec,setNumTaskdec]=useState(0)
function handleTask(e){
  setMyTask(e.target.value)
}
function addTask(){
setTask([...task,myTask])
setMyTask("")
  setNumTaskin(numTaskin+1)

}
function deleteTask(index){
  setTask(task.filter((f,i)=> i!=index))
  if(numTaskin>0 || numTaskdec>0){
  setNumTaskin(numTaskin-1)}
   if(numTaskin>0 || numTaskdec>0){
    setNumTaskdec(numTaskin-1)
   }
}

  return (
    <>
 <table className='table '>
  <thead>
    <tr>
    <th>task name</th>
    <th>Action</th> 
  </tr>
  </thead>
  <tbody>
    {task.map((f,i)=> 
 <tr key={i}>
   <td ><input type="checkbox" value={f} /> {f}</td>
 <td className='p-2'><button onClick={()=>deleteTask(i)} className='btn btn-danger '>Delete </button><button onClick={()=>editTask(i)} className='btn btn-danger '>Edit </button></td>
 </tr>)} 
  </tbody>
  
 </table>
  <div className='f-flex'>
    <input value={myTask}onChange={handleTask} type="text w-75" className='form-control'/>
  <button onClick={addTask} className='btn btn-primary'>Add task</button>
  </div>
  <hr/>
  <div className='d-flex justify-content-center m-20'>
    <p>complete : {numTaskin}</p><br />
    <p>uncomplete : {numTaskdec}</p>

  </div>
  


    </>
  )
}

export default App
 