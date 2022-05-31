import './Footer.css'
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className='footer'>
        <p>Lucas Gontijo Guimarães</p>
        <Link to='/projects/react-app/about' className='link'>ABOUT</Link>
    </footer>
  )
}

export default Footer