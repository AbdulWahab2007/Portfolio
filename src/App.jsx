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

export default function App() {
  return (
    <>
      <Routes>
      </Routes>
      <GlobalCSS />
      <Navbar />
      <AboutMe/>
    </>
  )
}
