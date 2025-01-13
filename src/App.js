import { useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import About from './components/about/About';
// import AOS files
import Aos from "aos";
import 'aos/dist/aos.css';
import Services from "./components/services/Services";

function App() {
  // Dark Mode Features 
  const [theme,setTheme] = useState(localStorage.getItem('theme')??'light');
  const element = document.documentElement;
  useEffect(() => {
    if(theme=='dark'){
      element.classList.add('dark');
      localStorage.setItem('theme','dark');
    }else{
      element.classList.remove('dark');
      localStorage.setItem('theme','light');
    }
  },[theme]);
  // AOS Initialization
  useEffect(() => {
    Aos.init({
      offset:100,
      duration:800,
      easing:'ease-in-sine',
      delay:100,
    });
    Aos.refresh();
  },[]);
  return (
    <div className="App">
      <Navbar theme={theme} setTheme={setTheme}/>
      <Hero theme={theme}/>
      <About/>
      <Services/>
    </div>
  );
}
export default App;
