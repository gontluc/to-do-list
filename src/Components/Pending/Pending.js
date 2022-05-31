import './Pending.css'
import PendingTask from './PendingTask/PendingTask'

const Pending = ({ tasks }) => {
  const incompletedTasks = tasks.filter((task) => (
    !task.completed 
  ))

  return (
    <div id="second-output-element">
      <h3>Pending</h3>

      {incompletedTasks.length > 0 
        ? incompletedTasks.map((task) => <PendingTask key={task.id} task={task}/>)
        : 'No tasks pending'
      }
      
    </div>
  )
}

export default Pending