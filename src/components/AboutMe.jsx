import React from 'react'
import styled from 'styled-components'

export default function AboutMe() {
    return (
        <>
            <Container>
                <div className="content">
                    <p className='hello'>Hello!</p>
                    <div className="headings">
                        <h1>I'm</h1>
                        <h1 className='name'>&nbsp;AbdulWahab.</h1>
                    </div>
                    <p>I'm 16 years old, from Gujrat, Pakistan.I'm a front-end web developer.I have learned HTML, CSS, JS and React js.I mainly work with React js.I have created some cool projects like Quiz app, News App, Calculator...And right now I'm working on Twitter Clone.</p>
                </div>
                <div className="ImgContainer">
                    <img src="/src/assets/AnimeBoy.jpg" alt="" />
                </div>
            </Container>
        </>
    )
}

const Container = styled.div`
        display: flex;
        width: 100%;
        padding-top: 100px;
        .content{
            display: flex;
            flex-direction: column;
            width: 55%;
        }
        .hello{
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