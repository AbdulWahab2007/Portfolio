import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import AnimatedPage from '/src/components/AnimatedPage'
import { Context } from '/src/GlobalContext'

export default function Contacts() {
  const { isActive, setIsActive } = useContext(Context);
  useEffect(() => {
    setIsActive(3);
  }, [])
  return (
    <>
      <AnimatedPage>
        <Container>
          <div className="content">
            <p className='greeting'>Kon'nichiwa !</p>
            <div className="headings">
              <h1>Here is my</h1>
              <h1 className='name'>&nbsp;Contact Info.</h1>
            </div>
          </div>
          <div className="cardContainer">
            <div className="Gitcard">
              <p className='address'>GitHub -- AbdulWahab2007</p>
              <a target='_blank' href="https://github.com/AbdulWahab2007">
                <button className="btn-24"><span>Go to Profile</span></button>
              </a>
            </div>
            <div className="Mailcard">
              <p className='address'>Gmail -- abdulwahab020070@gmail.com</p>
            </div>
          </div>
          <footer>
            <p>&copy; 2024 Abdul Wahab. All rights reserved.</p>
          </footer>
        </Container>
      </AnimatedPage>
    </>
  )
}

const Container = styled.div`
  @media (max-width: 1300px) {
        display: flex;
        flex-direction: column;
        .content{
            display: flex;
            flex-direction: column;
            width: 100%;
            padding-top: 10px;
        }
        .greeting{
            color: black;
            font-size: 1.2em;
            margin: 10px 0px 10px 30px;
        }
        p{
            margin: 5px 0px 10px 30px;
            font-size: 1em;
            font-family: "Nunito", sans-serif;
            font-optical-sizing: auto;
            font-weight: 800;
            font-style: normal;
            color: #7d7c7c;
        }
        .headings{
            display: flex;
            margin: 0px 0px 0px 30px;
        }
        h1{
            font-size: 1.6em;
            font-family: "Montserrat", sans-serif;
            font-optical-sizing: auto;
            font-weight: 700;
            font-style: normal;
        }
        .name{
            font-family: "Montserrat", sans-serif;
            font-optical-sizing: auto;
            font-weight: 700;
            font-style: normal;
            color: #3d85c6;
        }
        .address{
            background-color: rgba(4, 52, 94, 0.1);
            width: 210px;
            border-radius: 5px;
            user-select: none;
            margin: 0px 0px 5px 5px;
            font-size: 0.65em;
            font-family: "Nunito", sans-serif;
            font-optical-sizing: auto;
            font-weight: 700;
            font-style: normal;
        }
        .cardContainer{
            height: 508px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
            width: 100%;
            margin: 20px 0px 0px 0px;
        }
        .Gitcard{
            display: flex;
            justify-content: flex-end;
            flex-direction: column;
            padding-left: 20px;
            border: 2px solid #333;
            border-radius: 100px 0px 100px 0px;
            width: 85%;
            height: 200px;
            background-image: url('https://static.faqabout.me/cover/github-cover.png');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
        }
        .Mailcard{
            display: flex;
            align-items: flex-end;
            padding-left: 20px;
            border: 2px solid #333;
            border-radius: 100px 0px 100px 0px;
            width: 85%;
            height: 200px;
            background-image: url('https://9to5google.com/wp-content/uploads/sites/4/2021/06/gmail-cover.png');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
        }
        
        footer {
            width: 100%;
            text-align: center;
            padding: 10px 0;
            background-color: #04345e;
            color: #fff;
            font-family: "Nunito", sans-serif;
            font-optical-sizing: auto;
            font-weight: 600;
            font-style: normal;
        }
        .btn-24,
        .btn-24 *,
        .btn-24 :after,
        .btn-24 :before,
        .btn-24:after,
        .btn-24:before {
          border: 0 solid;
          box-sizing: border-box;
        }
        .btn-24 {
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
          font-size: 50%;
          margin-left: 200px;
          font-weight: 900;
          line-height: 1.5;
          margin: 0;
          -webkit-mask-image: -webkit-radial-gradient(#000, #fff);
          mask-image: -webkit-radial-gradient(#000, #fff);
          padding: 0;
          text-transform: uppercase;
        }
        .btn-24:disabled {
          cursor: default;
        }
        .btn-24:-moz-focusring {
          outline: auto;
        }
        .btn-24 svg {
          display: block;
        }
        .btn-24 [hidden] {
          display: none;
        }
        .btn-24 {
          --background: 
        #000;
          background: none;
          overflow: hidden;
          padding: 0.3rem 2rem;
          margin: 0px 0px 2px 0px;
          width: 150px;
          height: 25px;
          position: relative;
        }
        .btn-24 span {
          display: block;
          position: relative;
          transition: transform 0.2s ease;
        }
        .btn-24:after,
        .btn-24:before {
          --tilt: 20px;
          background: 
        #fff;
          -webkit-clip-path: polygon(0 0, 100% 0, 100% 50%, 100% 100%, 0 100%);
          clip-path: polygon(0 0, 100% 0, 100% 50%, 100% 100%, 0 100%);
          content: "";
          display: block;
          height: 100%;
          left: 0;
          position: absolute;
          top: 0;
          transition: -webkit-clip-path 0.2s ease;
          transition: clip-path 0.2s ease;
          transition: clip-path 0.2s ease, -webkit-clip-path 0.2s ease;
          width: 100%;
          z-index: -1;
        }
        .btn-24:after {
          --thickness: 5px;
          background: var(--background);
          height: calc(100% - var(--thickness) * 2);
          left: var(--thickness);
          top: var(--thickness);
          width: calc(100% - var(--thickness) * 2);
        }
        .btn-24:hover span {
          transform: translateX(-20px);
        }
        .btn-24:hover:after,
        .btn-24:hover:before {
          -webkit-clip-path: polygon(
            0 0,
            calc(100% - var(--tilt)) 0,
            100% 50%,
            calc(100% - var(--tilt)) 100%,
            0 100%
          );
          clip-path: polygon(
            0 0,
            calc(100% - var(--tilt)) 0,
            100% 50%,
            calc(100% - var(--tilt)) 100%,
            0 100%
          );
        }
  }
  @media (min-width: 1300px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    .content{
            margin-top: 50px;
            display: flex;
            flex-direction: column;
            width: 55%;
            margin-right: 10px;
        }
        .greeting{
          margin-left: 50px;
            color: black;
            font-size: 30px;
            font-family: "Gulzar", serif;
            font-weight: 600;
            font-style: normal;
        }
        .headings{
            display: flex;
        }
        .address{
            background-color: rgba(4, 52, 94, 0.1);
            border-radius: 5px;
            user-select: none;
            margin: 0px 0px 5px 0px;
            font-size: 18px;
            font-family: "Nunito", sans-serif;
            font-optical-sizing: auto;
            font-weight: 700;
            font-style: normal;
        }
        h1{
            margin: 0px 0px 10px 50px;
            font-size: 55px;
            font-family: "Montserrat", sans-serif;
            font-optical-sizing: auto;
            font-weight: 700;
            font-style: normal;
        }
        .name{
            margin: 0px 0px 10px 0px;
            font-family: "Montserrat", sans-serif;
            font-optical-sizing: auto;
            font-weight: 700;
            font-style: normal;
            color: #3d85c6;
        }
        .cardContainer{
            height: 387px;
            display: flex;
            justify-content: space-around;
            width: 100%;
            margin: 40px 0px 0px 0px;
        }
        .Gitcard{
            display: flex;
            align-items: flex-end;
            padding-left: 20px;
            border: 2px solid #333;
            border-radius: 100px 0px 100px 0px;
            width: 35%;
            height: 260px;
            background-image: url('https://static.faqabout.me/cover/github-cover.png');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
        }
        .Mailcard{
            display: flex;
            align-items: flex-end;
            padding-left: 20px;
            border: 2px solid #333;
            border-radius: 100px 0px 100px 0px;
            width: 35%;
            height: 260px;
            background-image: url('https://9to5google.com/wp-content/uploads/sites/4/2021/06/gmail-cover.png');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
        }
        
        footer {
            width: 100%;
            text-align: center;
            padding: 10px 0;
            background-color: #04345e;
            color: #fff;
            font-family: "Nunito", sans-serif;
            font-optical-sizing: auto;
            font-weight: 600;
            font-style: normal;
        }
        .btn-24,
        .btn-24 *,
        .btn-24 :after,
        .btn-24 :before,
        .btn-24:after,
        .btn-24:before {
          border: 0 solid;
          box-sizing: border-box;
        }
        .btn-24 {
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
          margin: 0;
          -webkit-mask-image: -webkit-radial-gradient(#000, #fff);
          mask-image: -webkit-radial-gradient(#000, #fff);
          padding: 0;
          text-transform: uppercase;
        }
        .btn-24:disabled {
          cursor: default;
        }
        .btn-24:-moz-focusring {
          outline: auto;
        }
        .btn-24 svg {
          display: block;
        }
        .btn-24 [hidden] {
          display: none;
        }
        .btn-24 {
          --background: 
        #000;
          background: none;
          overflow: hidden;
          padding: 0.4rem 1.5rem;
          position: relative;
        }
        .btn-24 span {
          display: block;
          position: relative;
          transition: transform 0.2s ease;
        }
        .btn-24:after,
        .btn-24:before {
          --tilt: 20px;
          background: 
        #fff;
          -webkit-clip-path: polygon(0 0, 100% 0, 100% 50%, 100% 100%, 0 100%);
          clip-path: polygon(0 0, 100% 0, 100% 50%, 100% 100%, 0 100%);
          content: "";
          display: block;
          height: 100%;
          left: 0;
          position: absolute;
          top: 0;
          transition: -webkit-clip-path 0.2s ease;
          transition: clip-path 0.2s ease;
          transition: clip-path 0.2s ease, -webkit-clip-path 0.2s ease;
          width: 100%;
          z-index: -1;
        }
        .btn-24:after {
          --thickness: 5px;
          background: var(--background);
          height: calc(100% - var(--thickness) * 2);
          left: var(--thickness);
          top: var(--thickness);
          width: calc(100% - var(--thickness) * 2);
        }
        .btn-24:hover span {
          transform: translateX(-20px);
        }
        .btn-24:hover:after,
        .btn-24:hover:before {
          -webkit-clip-path: polygon(
            0 0,
            calc(100% - var(--tilt)) 0,
            100% 50%,
            calc(100% - var(--tilt)) 100%,
            0 100%
          );
          clip-path: polygon(
            0 0,
            calc(100% - var(--tilt)) 0,
            100% 50%,
            calc(100% - var(--tilt)) 100%,
            0 100%
          );
        }
    }
`