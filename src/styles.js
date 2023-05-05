import styled from "styled-components";
import { motion } from "framer-motion"
import { NavLink } from "react-router-dom";

const Container = styled.div`
min-height: 100vh;
display: flex;
align-items: center;
justify-content: center;
user-select: none;
`

const Wrapper = styled(motion.div)`
min-height: 100%
background: rgb(1,1,59, 0.5);
width: 100%;
backdrop-filter: blur(2px);
display: grid;
grid-template-rows: 1fr repeat(3, 2fr);
grid-template-columns: repeat(8, 1fr);
`

const NavbarWrapper = styled.div`
background-color: rgb(77,77,77, 0.56);
border-radius: 20px;
grid-row: 1 / span 1;
grid-column: 2 / span 6;
margin: 36px;
padding: 10px;
display: flex;
align-items: center; 
justify-content: space-evenly;
`
const NavbarTab = styled(motion.button)`
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 1.5vw;
color: #FFFF;
text-decoration: none;
background: none;
border: none;
padding: 5px;
cursor: pointer;
outline: inherit;

`

const PageContainer = styled(motion.div)`
grid-row: 2 / -1;
grid-column: 2 / span 6;
margin: 0px 36px;
padding: 10px 0px;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
gap: 0px
`

const H1 = styled.h1`
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 3vw;
line-height: 1.2;
color: ${props => props.color || "#FFFFFF"};
margin: ${props => props.margin || ""}
`

const Line = styled.hr`
width: ${props => props.size};
border: 1px solid ${props => props.color || "#FFFFFF"};
margin: -10px 0px;
`

const H2 = styled.h2`
font-family: 'Poppins';
font-styled: normal;
font-weight: 700;
font-size: 2vw;
line-height: 1.3;
color: ${props => props.color || "#FFFFFF"};
padding: ${props => props.padding || ""};
`

const Paragraph = styled.p`
color: ${props => props.color || "#FFFFFF"};
margin: ${props => props.margin || ""};
font-family: 'Poppins';
font-styled: normal;
font-weight: 400;
max-width: 450px;
text-align: leading;
margin: -15px 0px;
`

const InfoTab = styled.button`
color: #FFFF;
text-decoration: none;
background: none;
border: none;
padding: 5px;
cursor: pointer;
outline: inherit;
align-items: center;
justify-content: center;
`

const Image = styled.img`
width: 2vw;

`

const InfoPageStyle = styled(motion.div)`
position: absolute;
background-color: rgb(255,255,255);
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
z-index: 9;
width: 75%;
height: 75%;
border-radius: 20px;
padding: 10px;
display: grid;
grid-template-rows: repeat(4,1fr);
grid-template-columns: repeat(3, 1fr);
gap: 0px;
overflow: auto;

`

const ExitButton = styled(motion.button)`
    background: none;
	border: none;
    padding: 5px;
	cursor: pointer;
	outline: inherit;
    position: absolute;
    left: 80%;
    font-size: 2vw;
    padding-top: 20px;
    grid-column: 3 / span 1;
    grid-rows: 1 / span 1;
`

const InfopageWrapper = styled(motion.div)`
    grid-column: 1 / -1;
    grid-row: 2 / span -1;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    padding: 10px;
    overflow: visible;
`


export { 
    Container, 
    Wrapper, 
    NavbarWrapper, 
    NavbarTab, 
    PageContainer, 
    H1, 
    Line, 
    H2, 
    Paragraph,
    InfoTab,
    Image,
    InfoPageStyle,
    ExitButton,
    InfopageWrapper
}