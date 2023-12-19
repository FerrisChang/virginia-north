import Link from "next/link"
import Image from "next/image"
import logo from "../../app/assets/logo.svg"
import './navbar.scss'

export default function Navbar() {
  return (
    <nav id="sticky__navbar">
      <div id="logo">
        <Image 
          src={logo}
          width={50}
          height={50}
          alt="Ferris Chang logo" 
          />
        </div>
      <ul id="links">
        <li className="nav-btn"><Link href='#header' id="homeBtn">Home</Link></li>
        <li className="nav-btn"><Link href='#about' id="aboutBtn">About</Link></li>
        <li className="nav-btn"><Link href='#project' id="projectBtn">Project</Link></li>
        <li className="nav-btn"><Link href='#contact' id="contactBtn">Contact</Link></li>
      </ul>
    </nav>
  )
}
