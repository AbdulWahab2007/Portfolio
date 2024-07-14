import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

export default function Navbar() {
    const [isActive, SetisActive] = useState(0);
    return (
        <>
            <Container>
                <div className="left">
                    <h3>عبدالوھاب</h3>
                </div>
                <div className="right">
                    <Link onClick={() => SetisActive(0)} className={isActive == 0 ? "links active" : "links"} to="/"><div className="spancontainer"><span class="material-symbols-outlined">person</span></div>About me</Link>
                    <Link onClick={() => SetisActive(1)} className={isActive == 1 ? "links active" : "links"} to="/skills"><div className="spancontainer"><span class="material-symbols-outlined">engineering</span></div>Skills</Link>
                    <Link onClick={() => SetisActive(2)} className={isActive == 2 ? "links active" : "links"} to="/projects"><div className="spancontainer"><span class="material-symbols-outlined">dashboard</span></div>Projects</Link>
                    <Link onClick={() => SetisActive(3)} className={isActive == 3 ? "links active" : "links"} to="/contact"><div className="spancontainer"><span class="material-symbols-outlined">call</span></div>Contact me</Link>
                </div>
            </Container>
        </>
    )
}

const Container = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: white;
        width: 100%;
        height: 80px;
        .left{
            width: 40%;
            display: flex;
            height: 80px;
        }
        .right{
            width: 60%;
            display: flex;
            justify-content: flex-end;
            padding-right: 50px;
        }
        .links{
            display: flex;
            text-decoration: none;
            color: #12273b;
            font-size: 17px;
            font-family: "Nunito", sans-serif;
            font-optical-sizing: auto;
            font-weight: 600;
            font-style: normal;
            margin: 0px 20px 0px 20px;
        }
        .spancontainer{
            margin-right: 5px;
        }
        .links:hover{
            text-shadow: 1px 1px 4px #EAEAEA;
        }
        .active{
            font-weight: 700;
            border-bottom: 2px solid #3d85c6;
            span{
                color: #3d85c6;
            }
        }
        h3{
            margin-top: 0px;
            font-size: 34px;
            color: #3d85c6;
            font-family: "Gulzar", serif;
            font-weight: 600;
            font-style: normal;
            user-select: none;
            margin-left: 50px;
        }
`