'use client';

import { useSelector } from 'react-redux'
import React, { useEffect } from 'react'
import { RootState } from './store/store'
import { Header } from "./components/header/Header";
import { Nav } from "./components/nav/Nav";
import { About } from "./components/about/About";
import { Cursor } from "./components/cursor/Cursor";
import { Experience } from "./components/experience/Experience";
import { Services } from "./components/services/Services";
import { Portfolio } from "./components/portfolio/Portfolio";
import { Contact } from "./components/contact/Contact";
import { Footer } from "./components/footer/Footer";

export default function Home() {

  const { mode } = useSelector((state: RootState) => state.style);

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
      {/* <Style mode={mode} setTheme={setTheme} dispatch={dispatch} /> */}
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
