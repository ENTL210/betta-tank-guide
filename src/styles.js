import styled from "styled-components";
import { motion } from "framer-motion"
import { NavLink } from "react-router-dom";

const Container = styled.div`
min-height: 100vh;
display: flex;
align-items: center;
justify-content: center;
margin: 0;
`

const Wrapper = styled(motion.div)`
min-height: 100vh;
width: 100%;
background-color: rgb(1,1,59, 0.5);
backdrop-filter: blur(20px);
display: grid;
grid-template-rows: 0.4fr repeat(3, 5fr) 0.2fr;
grid-template-columns: repeat(8, 1fr);
margin: 0;
padding: 10px;
`


const NavbarWrapper = styled(motion.div)`
background-color: rgb(77,77,77, 0.80);
border-radius: 20px;
grid-row: 1 / span 1;
grid-column: 1 / -1;
height: 50px;
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

const MiniNavBarWrapper = styled(motion.div)`
position: sticky; 
bottom: 15px;
left: 95%;
width: 0px;
heihgt: 0px;
background-color: rgb(77,77,77, 0.80);
border-radius: 20px;
padding: 5px;
margin: 36px;
display: flex;
align-items: center; 
justify-content: space-evenly;
user-select: none;
`


const PageWrapper = styled(motion.div)`
grid-row: 2 / -1;
grid-column: 1 / -1;
margin: 0px 36px;
padding: 10px 0px;
display: flex;
flex-direction: column;
align-items: flex-start;
flex-wrap: wrap;
justify-content: flex-start;
gap: 0px;
`

const PageContainer = styled(motion.div)`
grid-row: 2 / -1;
grid-column: 1 / -1;
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
font-weight: 1000;
font-size: max(45px, 3vw);
line-height: 1.2;
color: ${props => props.color || "#FFFFFF"};
margin: ${props => props.margin || ""}
letter-spacing: 1px;
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
font-weight: 600;
font-size: max(30px, 1.5vw);
line-height: 1.3;
color: ${props => props.color || "#FFFFFF"};
letter-spacing: 1px;
`

const Paragraph = styled.p`
color: ${props => props.color || "#FFFFFF"};
font-family: 'Poppins';
font-styled: normal;
font-weight: 400;
font-size: clamp( 10px, 5vw, 18px)   ;
max-width: 50ch;
line-height: 1.4;
text-align: leading;
`

const ImageWrapper = styled(motion.div)`
display: block;
width: min(80%, 42vw);
background-color: #FFFFFF;
text-align: center;
border-radius: 20px;
margin: 10px 0px;
padding: 5px;
`

const Image = styled.img`
width: 100%;
padding: 0px;
border-radius: 20px 20px 0px 0px;
`

const Attribution = styled(motion.p)`
font-family: 'Poppins';
font-styled: normal;
color: gray;
margin: -2px 0px;
padding: 10px 0px;
`

const Hyperlink = styled(motion.a)`
font-family: 'Poppins';
font-styled: normal;
color: ${props => props.color || "#FFFFFF"};
margin: -2px 0px;

`

const H3 = styled.h3`
font-family: 'Poppins';
font-styled: normal;
font-weight: 600;
font-size: max(18px, 1.4vw);
line-height: 1.3;
color: ${props => props.color || "#FFFFFF"};
letter-spacing: 1px;
`

const OrderList = styled.ol`

`

const ListItem = styled.li`
color: ${props => props.color || "#FFFFFF"};
font-family: 'Poppins';
font-styled: normal;
font-weight: 400;
font-size: clamp( 10px, 5vw, 18px)   ;
max-width: 50ch;
line-height: 1.4;
padding: 10px 2px;
`

const UnorderedList = styled.ul`

`

const Footer = styled.footer`
grid-row: -1 / -1;
grid-column: 1 / -1;
width: 100%;
padding: 10px;
height: 30px;
display: flex;
align-items: center; 
justify-content: center;
`

const Header = styled.header`
display: flex;
flex-direction: column;
justify-content: center;
`

const HeaderAuthor = styled.p`
color: ${props => props.color || "#FFFFFF"};
font-family: 'Poppins';
font-styled: normal;
font-weight: 400;
font-size: clamp( 10px, 5vw, 18px)   ;
max-width: 50ch;
margin-top: -15px;
`
const ScrollToTopBtn = styled(motion.button)`
 position: sticky;
 bottom: 15px;
 left: 95%;
 width: 50px;
 height: 50px;
 background: rgb(77,77,77, 0.80);
 color: white;
 border: none;
 padding: 0;
 font: inherit;
 cursor: pointer;
 outline: inherit;
 font-size: 40px;
 border-radius: 60px;
 `



export {
    Container,
    Wrapper,
    NavbarWrapper,
    NavbarTab,
    PageWrapper,
    PageContainer,
    H1,
    Line,
    ContentWrapper,
    H2,
    Paragraph,
    ImageWrapper,
    Image,
    Attribution,
    Hyperlink,
    H3,
    OrderList,
    ListItem,
    UnorderedList,
    Footer,
    Header,
    HeaderAuthor,
    MiniNavBarWrapper,
    ScrollToTopBtn
}