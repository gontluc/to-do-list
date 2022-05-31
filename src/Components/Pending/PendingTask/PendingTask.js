import './PendingTask.css'

const PendingTask = ({ task }) => {
  return (
    <div className='pending-task'>
        <h4>
            {task.text}
        </h4>
        <p>
            {task.day}
        </p>
    </div>
  )
}

export default PendingTask