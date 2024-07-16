import React, { useContext } from 'react'
import styled from 'styled-components'
import { Context } from '/src/GlobalContext'
import { Link } from 'react-router-dom'

export default function ProjectCard(props) {
  const { handleUnavailable } = useContext(Context);
  return (
    <>
      <Container>
        <div className="content">
          <h2>{props.title}</h2>
          <p>{props.description}</p>
          <div className="btnContainer">
            <Link to={props.link} target='_blank'>
              <button className="btn-31">
                <span className="text-container">
                  <span className="text">View on GitHub</span>
                </span>
              </button>
            </Link>

            {props.available == 'true' ? (
              <Link className='link' to={props.weblink} target='_blank'>
                <button className="btn-31">
                  <span className="text-container">
                    <span className="text">Try It Out ==&gt;</span>
                  </span>
                </button>
              </Link>
            ) : (<div className="try">
              <button className="btn-31" onClick={handleUnavailable}>
                <span className="text-container">
                  <span className="text">Try It Out ==&gt;</span>
                </span>
              </button>
            </div>)}
          </div>
        </div>
        <div className="image" style={{ backgroundImage: `url(${props.image})` }}></div>
      </Container>
    </>
  )
}

const Container = styled.div`
      @media (max-width: 1300px) {
        background-color: #3d85c6;
        display: flex;
        align-items: center;
        width: 95%;
        height: 200px;
        margin: 20px 0px 0px 0px;
        border-radius: 200px;
        border: 1px solid #808080;
        transition: all .2s;
        &:hover{
          transform: scale(1.05);
        }
        .image{
          width: 43%;
          height: 200px;
          background-size: cover;
          background-repeat: no-repeat;
          border-radius: 0px 200px 200px 0px;
        }
        .content{
          z-index: 100;
          display: flex;
          flex-direction: column;
          width: 57%;
          height: 200px;
          padding-top: 20px;
          transition: all .2s;
          h2{
            color: white;
            margin: 5px 0px 0px 40px;
            font-size: 0.8em;
            font-family: "Montserrat", sans-serif;
            font-optical-sizing: auto;
            font-weight: 700;
            font-style: normal;
            width: 50%;
            padding: 3px;
            border-radius: 5px;
          }
          p{
            color: white;
            font-size: 0.6em;
            margin: 0px 0px 0px 40px;
            font-family: "Nunito", sans-serif;
            font-optical-sizing: auto;
            font-weight: 800;
            font-style: normal;
            width: 80%;
            padding: 3px;
            display: flex;
            justify-content: center;
            border-radius: 5px;
            align-items: center;
          }
        }
        .link{
          display: flex;
          text-decoration: none;
          padding: 0px;
        }
        .btnContainer{
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          margin: 0px 0px 0px 40px;
          padding: 3px 0px 3px 0px;
        }
        .btn-31,
        .btn-31 *,
        .btn-31 :after,
        .btn-31 :before,
        .btn-31:after,
        .btn-31:before {
          border: 0 solid;
          box-sizing: border-box;
        }
        .btn-31 {
          -webkit-tap-highlight-color: 
        transparent;
          -webkit-appearance: button;
          appearance: button;
          background-color: 
        #000;
          background-image: none;
          color: 
        #fff;
          cursor: pointer;
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
            Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif,
            Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
          font-size: 60%;
          font-weight: 900;
          line-height: 1.5;
          margin: 0px 0px 0px 0px;
          -webkit-mask-image: -webkit-radial-gradient(#000, #fff);
          mask-image: -webkit-radial-gradient(#000, #fff);
          padding: 0;
        }
        .btn-31:disabled {
          cursor: default;
        }
        .btn-31:-moz-focusring {
          outline: auto;
        }
        .btn-31 svg {
          display: block;
        }
        .btn-31 [hidden] {
          display: none;
        }
        .btn-31 {
          border-width: 1px;
          padding: 0.15rem 0.22rem;
          margin: 5px 0px 0px 0px;
          height: 20px;
          position: relative;
          text-transform: uppercase;
        }
        .btn-31:before {
          --progress: 100%;
          background: 
        #fff;
          -webkit-clip-path: polygon(
            100% 0,
            var(--progress) var(--progress),
            0 100%,
            100% 100%
          );
          clip-path: polygon(
            100% 0,
            var(--progress) var(--progress),
            0 100%,
            100% 100%
          );
          content: "";
          inset: 0;
          position: absolute;
          transition: -webkit-clip-path 0.2s ease;
          transition: clip-path 0.2s ease;
          transition: clip-path 0.2s ease, -webkit-clip-path 0.2s ease;
        }
        .btn-31:hover:before {
          --progress: 0%;
        }
        .btn-31 .text-container {
          display: block;
          overflow: hidden;
          position: relative;
        }
        .btn-31 .text {
          display: block;
          font-weight: 900;
          mix-blend-mode: difference;
          position: relative;
        }
        .btn-31:hover .text {
          -webkit-animation: move-up-alternate 0.3s ease forwards;
          animation: move-up-alternate 0.3s ease forwards;
        }
        @-webkit-keyframes move-up-alternate {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(80%);
          }
          51% {
            transform: translateY(-80%);
          }
          to {
            transform: translateY(0);
          }
        }
        @keyframes move-up-alternate {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(80%);
          }
          51% {
            transform: translateY(-80%);
          }
          to {
            transform: translateY(0);
          }
        }
      }
      @media (min-width: 1300px) {
        background-color: #3d85c6;
        display: flex;
        align-items: center;
        width: 90%;
        height: 250px;
        margin: 30px 0px 0px 0px;
        border-radius: 200px;
        border: 1px solid #808080;
        transition: all .2s;
        &:hover{
          transform: scale(1.05);
        }
        .image{
          width: 33%;
          height: 250px;
          background-size: cover;
          background-repeat: no-repeat;
          border-radius: 0px 200px 200px 0px;
        }
        .content{
          z-index: 100;
          display: flex;
          flex-direction: column;
          width: 67%;
          height: 250px;
          padding-top: 30px;
          transition: all .2s;
          h2{
            color: white;
            margin: 0px 0px 0px 60px;
            font-size: 29px;
            font-family: "Montserrat", sans-serif;
            font-optical-sizing: auto;
            font-weight: 700;
            font-style: normal;
            width: 50%;
            padding: 5px;
            border-radius: 5px;
          }
          p{
            color: white;
            font-size: 16px;
            margin: 5px 0px 0px 60px;
            font-family: "Nunito", sans-serif;
            font-optical-sizing: auto;
            font-weight: 800;
            font-style: normal;
            width: 80%;
            padding: 5px;
            display: flex;
            justify-content: center;
            border-radius: 5px;
            align-items: center;
          }
        }
        link{
          background-color: beige;
          display: flex;
          text-decoration: none;
          width: 39%;
          padding: 0px;
        }
        .btnContainer{
          display: flex;
          justify-content: space-around;
          margin: 20px 0px 0px 40px;
        }
//Button is used from UI snippets
        .btn-31,
        .btn-31 *,
        .btn-31 :after,
        .btn-31 :before,
        .btn-31:after,
        .btn-31:before {
          border: 0 solid;
          box-sizing: border-box;
        }
        .btn-31 {
          -webkit-tap-highlight-color: 
        transparent;
          -webkit-appearance: button;
          appearance: button;
          background-color: 
        #000;
          background-image: none;
          color: 
        #fff;
          cursor: pointer;
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
            Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif,
            Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
          font-size: 100%;
          font-weight: 900;
          line-height: 1.5;
          margin: 0px 0px 0px 0px;
          -webkit-mask-image: -webkit-radial-gradient(#000, #fff);
          mask-image: -webkit-radial-gradient(#000, #fff);
          padding: 0;
        }
        .btn-31:disabled {
          cursor: default;
        }
        .btn-31:-moz-focusring {
          outline: auto;
        }
        .btn-31 svg {
          display: block;
        }
        .btn-31 [hidden] {
          display: none;
        }
        .btn-31 {
          border-width: 1px;
          padding: 0.25rem 0.52rem;
          height: 42px;
          position: relative;
          text-transform: uppercase;
        }
        .btn-31:before {
          --progress: 100%;
          background: 
        #fff;
          -webkit-clip-path: polygon(
            100% 0,
            var(--progress) var(--progress),
            0 100%,
            100% 100%
          );
          clip-path: polygon(
            100% 0,
            var(--progress) var(--progress),
            0 100%,
            100% 100%
          );
          content: "";
          inset: 0;
          position: absolute;
          transition: -webkit-clip-path 0.2s ease;
          transition: clip-path 0.2s ease;
          transition: clip-path 0.2s ease, -webkit-clip-path 0.2s ease;
        }
        .btn-31:hover:before {
          --progress: 0%;
        }
        .btn-31 .text-container {
          display: block;
          overflow: hidden;
          position: relative;
        }
        .btn-31 .text {
          display: block;
          font-weight: 900;
          mix-blend-mode: difference;
          position: relative;
        }
        .btn-31:hover .text {
          -webkit-animation: move-up-alternate 0.3s ease forwards;
          animation: move-up-alternate 0.3s ease forwards;
        }
        @-webkit-keyframes move-up-alternate {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(80%);
          }
          51% {
            transform: translateY(-80%);
          }
          to {
            transform: translateY(0);
          }
        }
        @keyframes move-up-alternate {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(80%);
          }
          51% {
            transform: translateY(-80%);
          }
          to {
            transform: translateY(0);
          }
        }
      }
`