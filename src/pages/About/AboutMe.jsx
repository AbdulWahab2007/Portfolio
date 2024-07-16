import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import AnimatedPage from '/src/components/AnimatedPage'
import { Context } from '/src/GlobalContext'

export default function AboutMe() {
    const { isActive, setIsActive } = useContext(Context);
    useEffect(() => {
        setIsActive(0);
    }, [])
    return (
        <>
            <AnimatedPage>
                <Container>
                    <div className="content">
                        <p className='greeting'>Hello!</p>
                        <div className="headings">
                            <h1>I'm</h1>
                            <h1 className='name'>&nbsp;AbdulWahab.</h1>
                        </div>
                        <p>I am a 16-year-old aspiring front-end web developer from Gujrat, Pakistan, passionate about crafting engaging digital experiences. Proficient in HTML, CSS, JavaScript, and specializing in React.js, I've honed my skills through creating dynamic projects. Among my notable creations are a Quiz App, News App, and a Calculator. Currently, I am immersed in developing a Twitter Clone, pushing my abilities further to deliver intuitive and user-friendly applications.</p>
                    </div>
                    <div className="ImgContainer">
                        <img src="/src/assets/AnimeBoy.jpg" alt="" />
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
`