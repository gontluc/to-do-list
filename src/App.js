import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'

import Header from "./Components/Header/Header";
import Tasks from "./Components/Tasks/Tasks";
import Pending from "./Components/Pending/Pending";
import Footer from "./Components/Footer/Footer";
import About from './Components/About/About';

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [showJSONfile, setShowJSONfile] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      completed: true
    },
    {
      id: 2,
      text: "Metting at School",
      day: "Feb 6th at 1:30pm",
      completed: true
    },
    {
      id: 3,
      text: "Food Shopping",
      day: "Feb 5th at 2:30pm",
      completed: false
    }
  ])

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Task Complete ( Incomplete <--> Complete )
  const changeCompleted = (id) => {
    setTasks(tasks.map((task) => 
      task.id === id ? {...task, completed: !task.completed} : task
    ))
  }

  return (
    <Router>
      <Header />

      <Routes>
        <Route path='/' exact element={
          <>
            <div id="output-container">
              <Tasks 
                tasks={tasks} 
                onDelete={deleteTask} 
                onToggle={changeCompleted} 
                showAddTask={showAddTask} 
                changeShowAddTask={() => {
                  setShowAddTask(!showAddTask)
                  showJSONfile && setShowJSONfile(!showJSONfile)
                }}
                addTask={addTask}
                showJSONfile={showJSONfile}
                changeShowJSONfile={() => {
                  setShowJSONfile(!showJSONfile)
                  showAddTask && setShowAddTask(!showAddTask)
                }}
              />
              <Pending tasks={tasks}/>
            </div>
          </>
        }/>

        <Route path='/about' element={<About />}/>
      </Routes>

      <Footer />

    </Router>
  );
}

export default App;
