import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import AnimatedPage from '/src/components/AnimatedPage'
import { Context } from '/src/GlobalContext'

export default function MySkills() {
    const { isActive, setIsActive } = useContext(Context);
    useEffect(() => {
        setIsActive(1);
    }, [])
    return (
        <>
            <AnimatedPage>
                <Container>
                    <div className="ImgContainer">
                        <img src="/skills.png" alt="" />
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
    @media (max-width: 1300px) {
        display: flex;
        flex-direction: column;
        .ImgContainer{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            padding: 2vw 0vw 0vw 0vw;
        }
        img{
            width: 50vw;
            border-radius: 5px;
        }
        .content{
            display: flex;
            flex-direction: column;
            width: 100%;
            padding-top: 10px;
        }
        .greeting{
            color: black;
            font-size: 4vw;
            font-family: "Gulzar", serif;
            font-weight: 600;
            font-style: normal;
            margin: 2.3vw 0vw 0vw 6vw;
        }
        p{
            margin: 0vw 6vw 2vw 6vw;
            font-size: 3vw;
            font-family: "Nunito", sans-serif;
            font-optical-sizing: auto;
            font-weight: 800;
            font-style: normal;
            color: #7d7c7c;
        }
        .headings{
            display: flex;
            margin: 1.6vw 0vw 1.6vw 6vw;
        }
        h1{
            font-size: 5.8vw;
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
    }
    @media (min-width: 1300px) {
        
    
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
            width: 450px;
            border-radius: 5px;
            margin-top: -50px;
        }
    }    
`