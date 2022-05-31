import './Task.css'
import { FaTimes } from 'react-icons/fa'
import {  BiTask, BiTaskX } from 'react-icons/bi'

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div className={`task ${task.completed ? 'completed' : 'incompleted'}`}>
        <h3>
            {task.text}
            <FaTimes className='task-button' onClick={() => onDelete(task.id)}/>
        </h3>
        <p>
            {task.day}
            {task.completed 
                ? <BiTaskX className='task-button2' onClick={() => onToggle(task.id)}/> 
                : <BiTask className='task-button2' onClick={() => onToggle(task.id)}/>
            }
        </p>
    </div>
  )
}

export default Task