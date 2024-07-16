import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import ProjectCard from '/src/components/ProjectCard'
import AnimatedPage from '/src/components/AnimatedPage'
import { Context } from '/src/GlobalContext'

export default function Projects() {
  const { isActive, setIsActive } = useContext(Context);
  useEffect(() => {
    setIsActive(2);
  }, [])
  return (
    <>
      <AnimatedPage>
        <Container>
          <div className="contentContainer">
            <p className='greeting'>Hola!</p>
            <div className="headings">
              <h1>Some of my</h1>
              <h1 className='name'>&nbsp;Projects.</h1>
            </div>
            <p>I've developed three distinct projects: first, a classic TicTacToe game where players strategically place crosses and circles on a 3x3 grid to win; second, a Twitter clone that mirrors the original platform's functionalities, enabling users to create profiles, post tweets, follow others, and engage with content; and third, a comprehensive "Books" website featuring a vast library of diverse genres, allowing users to explore, catering to book enthusiasts seeking new literary adventures or revisiting timeless classics.</p>
            <a href="https://github.com/AbdulWahab2007?tab=repositories" target='_blank'>
              <button className="btn-37">
                <span className="new">On GitHub</span>
                <div className="old">
                  <span>More Projects</span>
                  <span aria-hidden>More Projects</span>
                </div>
              </button>
            </a>
          </div>
          <div className='ProjectContainer'>
            <ProjectCard title="Twitter Clone" description="An exact replica of Twitter, offering all its features and functionalities." image="/src/assets/Twitter.png" link='https://github.com/AbdulWahab2007/Twitter-Clone' weblink='#' available='false' />
            <ProjectCard title="Tic Tac Toe  " description="An authentic recreation of Tic Tac Toe with traditional gameplay mechanics." image="/src/assets/3Ts.png" link='https://github.com/AbdulWahab2007/TicTacToe' weblink='https://3ts.surge.sh' available='true' />
          </div>
        </Container>
      </AnimatedPage>
    </>
  )
}

const Container = styled.div`
        display: flex;
        width: 100%;
        height: 100vh;
        .contentContainer{
            display: flex;
            flex-direction: column;
            padding-top: 70px;
            width: 50%;
            a{
                margin: 15px 0px 0px 50px;
                text-decoration: none;
                width: 159px;
            }

            .btn-37,
.btn-37 *,
.btn-37 :after,
.btn-37 :before,
.btn-37:after,
.btn-37:before {
  border: 0 solid;
  box-sizing: border-box;
}
.btn-37 {
  -webkit-tap-highlight-color: 
transparent;
  -webkit-appearance: button;
  appearance: button;
  background-color: 
#fff;
  background-image: none;
  color: 
#000;
  cursor: pointer;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
    Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif,
    Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  font-size: 100%;
  font-weight: 900;
  line-height: 1.5;
  margin: 0;
  -webkit-mask-image: -webkit-radial-gradient(#fff, #000);
  mask-image: -webkit-radial-gradient(#fff, #000);
  padding: 0;
}
.btn-37:disabled {
  cursor: default;
}
.btn-37:-moz-focusring {
  outline: auto;
}
.btn-37 svg {
  display: block;
}
.btn-37 [hidden] {
  display: none;
}
.btn-37 {
  border: 1px solid;
  box-sizing: border-box;
  display: block;
  overflow: hidden;
  padding: 0.6rem 2rem;
  position: relative;
  text-transform: uppercase;
}
.btn-37 .new,
.btn-37 .old span {
  font-weight: 900;
  transition: transform 0.2s;
}
.btn-37 .new {
  display: block;
  transform: scale(0);
}
.btn-37:hover .new {
  transform: scale(1);
}
.btn-37 .old,
.btn-37 .old span {
  inset: 0;
  position: absolute;
}
.btn-37 .old span {
  background: 
#000;
  color: 
#fff;
  display: block;
  display: grid;
  place-items: center;
}
.btn-37 .old span:first-child {
  -webkit-clip-path: polygon(0 0, 51% 0, 51% 100%, 0 100%);
  clip-path: polygon(0 0, 51% 0, 51% 100%, 0 100%);
}
.btn-37 .old span:nth-child(2) {
  -webkit-clip-path: polygon(50% 0, 100% 0, 100% 100%, 50% 100%);
  clip-path: polygon(50% 0, 100% 0, 100% 100%, 50% 100%);
}
.btn-37:hover .old span:first-child {
  transform: translateY(-100%);
}
.btn-37:hover .old span:nth-child(2) {
  transform: translateY(100%);
}

        }
        .greeting{
            color: black;
            font-size: 30px;
        }
        p{
            margin: 10px 0px 10px 50px;
            font-size: 18px;
            font-family: "Nunito", sans-serif;
            font-optical-sizing: auto;
            font-weight: 800;
            font-style: normal;
            color: #7d7c7c;
        }
        .headings{
            display: flex;
        }
        h1{
            margin: 10px 0px 10px 50px;
            font-size: 55px;
            font-family: "Montserrat", sans-serif;
            font-optical-sizing: auto;
            font-weight: 700;
            font-style: normal;
        }
        .name{
            margin: 10px 0px 10px 0px;
            font-family: "Montserrat", sans-serif;
            font-optical-sizing: auto;
            font-weight: 700;
            font-style: normal;
            color: #3d85c6;
        }
        .ProjectContainer{
            display: flex;
            flex-direction: column;
            align-items: center;
            align-items: center;
            padding-top: 30px;
            width: 50%;
        }
`