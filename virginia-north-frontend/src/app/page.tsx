import Navbar from "@/components/navbar/navbar"
import Home from "./home/home"
import About from "./about/about"
import Projects from "./projects/projects"
import Contact from "./contact/contact"


export default function Page() {
  return (
  <>
    <Navbar />
    <Home />
    <About />
    <Projects />
    <Contact />
  </>
  )
}
