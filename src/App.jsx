import React from 'react'
import Navbar from './components/Navbar'
import GlobalCSS from './GlobalCSS'
import Provider from './GlobalContext'
import {
  BrowserRouter as Router,
  BrowserRouter,
  Route,
  Routes,
  Link,
  Navigate,
} from "react-router-dom";
import AboutMe from './pages/About/AboutMe';
import MySkills from './pages/Skills/MySkills';
import Projects from './pages/Projects/Projects';
import Contacts from './pages/Contact/Contacts';

export default function App() {
  return (
    <>
      <Provider>
        <GlobalCSS />
        <Navbar />
        <Routes>
          <Route path="/" element={<AboutMe />}>
          </Route>
          <Route path="/skills" element={<MySkills />}>
          </Route>
          <Route path="/projects" element={<Projects />}>
          </Route>
          <Route path="/contact" element={<Contacts />}>
          </Route>
        </Routes>
      </Provider>
    </>
  )
}
