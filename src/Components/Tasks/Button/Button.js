import './Button.css'

const Button = ({ onClick, color, text }) => {
  return (
    <div className='add-task' onClick={onClick} style={{ backgroundColor: color }}>
        {text}
    </div>
  )
}

export default Button