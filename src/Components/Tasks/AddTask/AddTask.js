import './AddTask.css'
import { useState } from "react"

const AddTask = ({ addTask }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text || !day) {
            alert('Please add a task')
            return
        }

        addTask({text, day, completed: false})

        setText('')
        setDay('')

    }

  return (
    <form className="add-form" onSubmit={onSubmit}>

        <div className="form-control">
            <label>Task</label>
            <input 
                type="text" 
                placeholder="Doctors Appointment"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
        </div>

        <div className="form-control">
            <label>Day & Time</label>
            <input 
                type="text" 
                placeholder="Feb 5th at 2:30pm"
                value={day}
                onChange={(e) => setDay(e.target.value)}
            />
        </div>

        <input 
            type="submit" 
            value="Save Task" 
            className="btn btn-block"
        />

    </form>
  )
}

export default AddTask