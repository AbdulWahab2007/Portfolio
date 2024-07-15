import React from 'react'
import styled from 'styled-components'

export default function ProjectCard(props) {
  return (
    <>
      <Container>
        <div className="content">
          <h2>{props.title}</h2>
          <p>{props.description}</p>
          <a href={props.link} target='_blank'>
            <button class="btn-31">
              <span class="text-container">
                <span class="text">View on GitHub</span>
              </span>
            </button>
          </a>
        </div>
        <div className="image" style={{ backgroundImage: `url(${props.image})` }}></div>
      </Container>
    </>
  )
}

const Container = styled.div`
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
        a{
          display: flex;
          text-decoration: none;
          width: 39%;
          padding: 0px;
          margin: 20px 0px 0px 60px;
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
  padding: 0.5rem 1rem;
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
`