import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { Context } from '/src/GlobalContext'

export default function Navbar() {
    const { isActive, SetisActive } = useContext(Context);
    return (
        <>
            <Container>
                <div className="left">
                    <h3>عبدالوھاب</h3>
                </div>
                <div className="right">
                    <Link className={isActive == 0 ? "links active" : "links"} to="/"><div className="spancontainer"><span className="material-symbols-outlined">person</span></div>About me</Link>
                    <Link className={isActive == 1 ? "links active" : "links"} to="/skills"><div className="spancontainer"><span className="material-symbols-outlined">engineering</span></div>Skills</Link>
                    <Link className={isActive == 2 ? "links active" : "links"} to="/projects"><div className="spancontainer"><span className="material-symbols-outlined">dashboard</span></div>Projects</Link>
                    <Link className={isActive == 3 ? "links active" : "links"} to="/contact"><div className="spancontainer"><span className="material-symbols-outlined">call</span></div>Contact me</Link>
                </div>
            </Container>
        </>
    )
}

const Container = styled.div`

        @media (max-width: 1300px) {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 50px;
            background-color: white;
                .left{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 25%;
                    height: 50px;
                }
                .right{
                    width: 75%;
                    height: 50px;
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;
                }
                .links{
                    display: flex;
                    align-items: center;
                    text-decoration: none;
                    color: #12273b;
                    font-size: 0.8em;
                    font-family: "Nunito", sans-serif;
                    font-optical-sizing: auto;
                    font-weight: 600;
                    font-style: normal;
                    margin: 0px 5px 0px 4px;
                }
                .links:hover{
                    text-shadow: 1px 1px 4px #EAEAEA;
                }
                .active{
                    margin-top: 2px;
                    font-weight: 700;
                    border-bottom: 2px solid #3d85c6;
                    span{
                        color: #3d85c6;
                    }
            }
                .spancontainer{
                    margin-right: 3px;
                }
                span{
                    font-size: 1.4em;
                    margin: 4px 0px 0px 0px;
                }
                h3{
                    margin: 3px 0px 0px 0px;
                    font-size: 1.4em;
                    color: #3d85c6;
                    font-family: "Gulzar", serif;
                    font-weight: 600;
                    font-style: normal;
                    user-select: none;
                }
        }
        @media (min-width : 1300px) {
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
                margin-top: 23px;
                font-size: 34px;
                color: #3d85c6;
                font-family: "Gulzar", serif;
                font-weight: 600;
                font-style: normal;
                user-select: none;
                margin-left: 50px;
            }
        }
`