'use client'
import { useSelector, useDispatch } from 'react-redux'
import { setTheme } from "./slice/styleSlices"
import React, { useEffect }  from 'react' 
import { AppDispatch, RootState } from './store/store' 
import { Header } from "./components/header/Header";
import { Nav } from "./components/nav/Nav";
import { About } from "./components/about/About";
import { Cursor } from "./components/cursor/Cursor";
import ContextMenu from "./components/contextMenu/ContextMenu";
import { Experience } from "./components/experience/Experience";
import { Services } from "./components/services/Services";
import { Portfolio } from "./components/portfolio/Portfolio";
import { Testimonials } from "./components/testimonials/Testimonials";
import { Contact } from "./components/contact/Contact";
import { Footer } from "./components/footer/Footer";

import { Style } from "./components/Modes/Style";
 
export default function Home() { 
 
  const {mode} = useSelector((state: RootState) => state.style);
  const dispatch = useDispatch<AppDispatch>();
   
  

  useEffect(() => {
    if (mode === 'dark') {
      if (document.documentElement.classList.contains('light')) {
        document.documentElement.classList.remove('light');
      }
      document.documentElement.classList.add('dark');
    }
    else {
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
      }
      document.documentElement.classList.add('light');
    }
  }, [mode])


    
  return (
    <React.Fragment>

    <Cursor />
    <Style mode={mode} setTheme={setTheme} dispatch={dispatch} />
    <Header />
    <Nav />
    <About />
    {/* <ContextMenu /> */}
    <Experience />
    <Services />
    <Portfolio />
    {/* <Testimonials /> */}
    <Contact />
    <Footer />
     
     </React.Fragment>
     
    
  )
}
