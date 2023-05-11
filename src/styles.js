import styled from "styled-components";
import { motion } from "framer-motion"
import { NavLink } from "react-router-dom";

const Container = styled.div`
min-height: 100vh;
display: flex;
align-items: center;
justify-content: center;
`

const Wrapper = styled(motion.div)`
min-height: 100vh;
width: 100%;
background-color: rgb(1,1,59, 0.2);
backdrop-filter: blur(10px);
display: grid;
grid-template-rows: 0.4fr repeat(3, 2fr);
grid-template-columns: repeat(8, 1fr);
margin: 0;
padding: 10px;
`

const NavbarWrapper = styled.div`
background-color: rgb(77,77,77, 0.80);
border-radius: 20px;
grid-row: 1 / span 1;
grid-column: 2 / span 6;
padding: 5px;
margin: 36px;
display: flex;
align-items: center; 
justify-content: space-evenly;
user-select: none;
`
const NavbarTab = styled(motion.button)`
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: max(12px, 1.5vw);
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
flex-wrap: wrap;
justify-content: flex-start;
gap: 0px;
`

const H1 = styled.h1`
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: max(30px, 3vw);
line-height: 1.2;
color: ${props => props.color || "#FFFFFF"};
margin: ${props => props.margin || ""}
`

const Line = styled.hr`
width: ${props => props.size};
border: 1px solid ${props => props.color || "#FFFFFF"};
margin: -10px 0px;
`

const ContentWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-between;
padding: 10px 0px;
`

const H2 = styled.h2`
font-family: 'Poppins';
font-styled: normal;
font-weight: 700;
font-size: max(20px, 1.5vw);
line-height: 1.3;
color: ${props => props.color || "#FFFFFF"};
`

const Paragraph = styled.p`
color: ${props => props.color || "#FFFFFF"};
font-family: 'Poppins';
font-styled: normal;
font-weight: 400;
font-size: clamp( 10px, 5vw, 18px)   ;
max-width: 60ch;
line-height: 1.4;
text-align: leading;
`

const ImageWrapper = styled.div`
display: block;
width: min(80%, 42vw)
`

const Image = styled.img`
width: 100%;
padding: 5px 0px;
`

const Attribution = styled.p`
font-family: 'Poppins';
font-styled: normal;
color: gray;
margin: -2px 0px;

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

const Icon = styled.img`
width: max(15px, 1.75vw);

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
    ContentWrapper,
    H2, 
    Paragraph,
    InfoTab,
    Icon,
    ImageWrapper,
    Image,
    Attribution,
    InfoPageStyle,
    ExitButton,
    InfopageWrapper
}