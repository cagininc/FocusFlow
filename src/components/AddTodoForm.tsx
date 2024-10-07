import { useState } from "react"



export default function AddTodoForm() {

const [input, setInput] = useState("")

function handleSubmit(e: React.FormEvent<HTMLFormElement>){
e.preventDefault();
if(!input.trim())return;




}
return(

<form className="flex" onSubmit={handleSubmit}>

<input 
value={input}
onChange={(e)=>setInput(e.target.value)}
placeholder="What needs to be done"
className="rounded-s-md grow border-gray-400 p-2"
type="text" />

<button type="submit" className="w-16 rounded-e-md bg-slate-900 text-white hover:bg-slate-800">

    Add
</button>


</form>



)

}