import React from 'react'
import styled from 'styled-components'
import AnimatedPage from './AnimatedPage'

export default function MySkills() {
    return (
        <>
            <AnimatedPage>
                <Container>
                    <div className="ImgContainer">
                        <img src="/src/assets/Skills.jpg" alt="" />
                        <img className='logos react' src="https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png" alt="" />
                        <img className='logos js' src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="" />
                        <img className='logos css' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX3_5T9LtQeh9AL1FJ93GlBHO-xBruZXmA-Q&s" alt="" />
                        <img className='logos html' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVS5wOrF1fXHLGU-HDaTvt1LZG0ZF2aRmIEw&s" alt="" />
                    </div>
                    <div className="content">
                        <p className='greeting'>!السلام و علیکم</p>
                        <div className="headings">
                            <h1>I'm a</h1>
                            <h1 className='name'>&nbsp;Skilled developer.</h1>
                        </div>
                        <p>With over 1.5 years of dedicated learning in programming, I have developed a solid foundation in a variety of essential technologies. My expertise includes CSS for creating stylish and responsive web designs, JavaScript for dynamic and interactive web functionalities, and React JS for building modern and scalable web applications. Additionally, I have mastered P5.js, a JavaScript library renowned for its capabilities in creative coding and animation projects. My journey in programming has not only equipped me with technical proficiency but also a deep appreciation for innovation and problem-solving in software development.</p>
                    </div>
                </Container>
            </AnimatedPage>
        </>
    )
}

const Container = styled.div`
        display: flex;
        width: 100%;
        padding-top: 100px;
        padding-bottom: 90px;
        .content{
            display: flex;
            flex-direction: column;
            width: 55%;
            margin-right: 10px;
        }
        .greeting{
          //margin-left: 570px;
            color: black;
            font-size: 30px;
            font-family: "Gulzar", serif;
            font-weight: 600;
            font-style: normal;
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
        .ImgContainer{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 45%;
        }
        img{
            width: 350px;
            border-radius: 5px;
        }
        .logos{
            width: 70px;
            position: absolute;
        }
        .react{
            top: 175px;
            left: 490px;
            transform: rotate(10deg)
        }
        .js{
            bottom: 150px;
            left: 120px;
            transform: rotate(-20deg)
        }
        .css{
            top: 500px;
            left: 470px;
            transform: rotate(5deg)
        }
        .html{
            top: 200px;
            left: 120px;
            transform: rotate(5deg)
        }
`