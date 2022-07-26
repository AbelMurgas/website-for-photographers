import '../styles/utils.css'
import '../styles/navbar.css'
import logo from '../assets/logo.png'

export default function Navbar(){
 return  (
  <nav className='navbar flex-r flex-start'>
   <div className="logo">
    <img src={logo} alt="airbnbLogo" />
   </div>
   <div className='title'>
    <h1>PHOTO MEMORIES</h1>
   </div>
  </nav>
 )
}