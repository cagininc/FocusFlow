import { useState } from "react";

import { dummyData } from "./data/todos";
import AddTodoForm from "./components/AddTodoForm";
import Hero from "./components/Hero";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion, AnimatePresence } from 'framer-motion';
import Login from "./components/Login";
import TodoList from "./components/TodoList";
import TodoSummary from "./components/TodoSummary";
function App() {
  
  const [todos, setTodos] = useState(dummyData);

  
//function to setthe completion status of a todo
function setTodoCompleted(id: number, completed: boolean) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed } : todo
      )
    );
  }
  //function to add a todo
  function addTodo(title:string){
setTodos(prevTodos=>[{

id:prevTodos.length+1,
title,
completed:false
},
...prevTodos

])


  }
  //function to delete todo
  function deleteTodo(id:number){
setTodos(prevTodos=>prevTodos.filter((todo)=>todo.id!==id))
}

function deleteAllCompleted(){}

  return (
    <Router>
      <Routes>
        {/*Hero componenti */}
        <Route path="/" element={
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 1 }}
            >
              <Hero />
            </motion.div>
          </AnimatePresence>
        } />
        {/*Login  */}
        <Route path="/login" element={
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.9, ease: "easeInOut" }}
              >
              <Login />
            </motion.div>
          </AnimatePresence>
        } />

        {/* Todo list route */}
        <Route path="/todos" element={
          <AnimatePresence mode="wait">
            <motion.main
               initial={{ opacity: 0, y: -10 }}   // Smaller y movement for a more subtle effect
               animate={{ opacity: 1, y: 0 }}     // Moves back to original position smoothly
               exit={{ opacity: 0, y: 10 }}       // Soft exit motion
               transition={{ duration: 0.5, ease: "easeInOut" }} 
              className="py-10 h-screen space-y-5 overflow-y-auto"
            >
              <h1 className="font-bold text-3xl text-center">FocusFlow</h1>
              <motion.div
                initial={{ scale: 1.5 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5}}
                className="max-w-lg mx-auto bg-slate-50 rounded-md p-5 space-y-6"
              >
                <AddTodoForm  onSubmit={addTodo}/>
                <TodoList 
                onDelete={deleteTodo}
                todos={todos}
                onCompletedChange={setTodoCompleted}/>
                              

              </motion.div>
              
            </motion.main>
            
          </AnimatePresence>
        } />
        <Route path="">element={
          

          
          }

        </Route>
      </Routes>
      <TodoSummary todos={todos} deleteAllCompleted={deleteAllCompleted} />

    </Router>
    
  );
}

export default App;
