import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const Navigation = styled.ul`
font-size: 30px;
list-style-type: none;
margin: auto;
width: 100%:
overflow: hidden;
display: flex;
justify-content: space-evenly;
background-color: gray;
width: device-width;`

const ElementOfNav = styled.li`
float: left;
display: block;
color: white;
text-align: center;
padding: 14px 16px;
text-decoration: none;
border-right: 1px solid #bbb;
padding-top: 20px;
padding-bottom: 20px;`

const Wrapper = styled.div`
&:hover ${ElementOfNav} {
    background-color: #a7b9da;
}
`

const NavBar = () => {

    return (
        <Navigation>
            <Wrapper>
                <ElementOfNav>
                    <Link to="/" >Home</Link>
                </ElementOfNav>
            </Wrapper>
            <Wrapper>
                <ElementOfNav>
                    <Link to="/bird">Flappy Bird</Link>
                </ElementOfNav>
            </Wrapper>
            <Wrapper>
                <ElementOfNav>
                    <Link to="/chess">Chess</Link>
                </ElementOfNav>
            </Wrapper>
            <Wrapper>
                <ElementOfNav>
                    <Link to="/checkers">Checkers</Link>
                </ElementOfNav>
            </Wrapper>
            <Wrapper>
                <ElementOfNav>
                    <Link to="/candycrush">CandyCrush</Link>
                </ElementOfNav>
            </Wrapper>
        </Navigation>
    )
}

export default NavBar