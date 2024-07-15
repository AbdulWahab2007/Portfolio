import React from 'react'
import Navbar from './components/Navbar'
import GlobalCSS from './GlobalCSS'
import {
  BrowserRouter as Router,
  BrowserRouter,
  Route,
  Routes,
  Link,
  Navigate,
} from "react-router-dom";
import AboutMe from './components/AboutMe';
import MySkills from './components/MySkills';
import Projects from './components/Projects';

export default function App() {
  return (
    <>
      <GlobalCSS />
      <Navbar />
      <Routes>
        <Route path="/" element={<AboutMe />}>
        </Route>
        <Route path="/skills" element={<MySkills />}>
        </Route>
        <Route path="/projects" element={<Projects />}>
        </Route>
        <Route path="/contact" element={<MySkills />}>
        </Route>
      </Routes>
    </>
  )
}
