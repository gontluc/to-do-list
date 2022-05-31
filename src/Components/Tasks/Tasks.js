import './Tasks.css'
import Task from './Task/Task'
import Button from './Button/Button';
import AddTask from './AddTask/AddTask';
/* import ManageFile from './ManageFile/ManageFile'; */

const Tasks = ({ 
  tasks, onDelete, onToggle, showAddTask, changeShowAddTask, addTask, showJSONfile, changeShowJSONfile
}) => {
  return (
    <div id="first-output-element">

      <div className="top-container">
        <h2>Tasks</h2>

        {/* {showJSONfile 
          ? <Button onClick={changeShowJSONfile} color='red' text='Close'/>
          : <Button onClick={changeShowJSONfile} color='blue' text='JSON file'/>
        } */}

        {showAddTask 
          ? <Button onClick={changeShowAddTask} color='red' text='Close'/>
          : <Button onClick={changeShowAddTask} color='green' text='Add'/>
        }
      </div>

      {showAddTask && <AddTask addTask={addTask}/>}

      {/* {showJSONfile && <ManageFile/>} */}

      {tasks.length > 0 
        ? tasks.map((task) => (
          <Task 
            key={task.id}
            task={task}
            onDelete={onDelete}
            onToggle={onToggle}
          />
        ))
        : 'No tasks to show'
      }
    </div>
  )
}

export default Tasks