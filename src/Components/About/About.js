import './About.css'
import { Link } from "react-router-dom"

const About = () => {
  return (
    <div className='about-container'>
        <h1 className='about-title'>React Project</h1>
        <p>
            This is a usefull application that helps you keep track of your daily tasks. You can easily see and edit your pending tasks. Let's start! In the left box you can view all of your tasks and in the right box all of the pending ones. Completed a task? Just click on the icon below and it will turn green. Want to delete a task? Just click on the icon above. Before leaving make sure to save all the data so you can keep working tomorrow!
        </p>

        {/* This is a usefull application that helps you keep track of your daily tasks. With just a JSON file you can easily see and edit your pending tasks. Upload your file and let's start! In the left box you can view all of your tasks and in the right box all of the pending ones. Completed a task? Just click on the icon below and it will turn green. Want to delete a task? Just click on the icon above. Before leaving make sure to download your JSON file so you can keep working tomorrow! */}

        <br />
        <Link to='/projects/react-app' className='link'>GO BACK</Link>
        <br />
    </div>
  )
}

export default About