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
                        <img src="/AnimeBoy.jpg" alt="" />
                    </div>
                </Container>
            </AnimatedPage>
        </>
    )
}

const Container = styled.div`
    @media (max-width: 1300px) {
        display: flex;
        flex-direction: column-reverse;
        .ImgContainer{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            padding: 10px 0px 0px 0px;
        }
        img{
            width: 245px;
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
            font-size: 1.2em;
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
            margin: 0px 0px 5px 30px;
        }
        h1{
            font-size: 2em;
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
    }    
`