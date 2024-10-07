import { useState } from "react";
import TodoItem from "./components/TodoItem";
import { dummyData } from "./data/todos";
import AddTodoForm from "./components/AddTodoForm";
import Hero from "./components/Hero";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion, AnimatePresence } from 'framer-motion';
import Login from "./components/Login";
function App() {
  const [todos, setTodos] = useState(dummyData);

  function setTodoCompleted(id: number, completed: boolean) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed } : todo
      )
    );
  }

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
              transition={{ duration: 1}}
            >
              <Login />
            </motion.div>
          </AnimatePresence>
        } />

        {/* Todo list route */}
        <Route path="/todos" element={
          <AnimatePresence>
            <motion.main
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7 }}
              className="py-10 bg-gray-50 h-screen space-y-5"
            >
              <h1 className="font-bold text-3xl text-center">FocusFlow</h1>
              <motion.div
                initial={{ scale: 1.5 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5}}
                className="max-w-lg mx-auto bg-slate-50 rounded-md p-5 space-y-6"
              >
                <AddTodoForm />
                <div className="space-y-2">
                  {todos.map((todo) => (
                    <TodoItem
                      key={todo.id}
                      todo={todo}
                      onCompletedChange={setTodoCompleted}
                    />
                  ))}
                </div>
              </motion.div>
            </motion.main>
          </AnimatePresence>
        } />
      </Routes>
      
    </Router>
  );
}

export default App;
