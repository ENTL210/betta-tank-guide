import React, { useEffect, useState } from "react";
import styled from "styled-components";
import background from "./images/background.png"
import { Routes, Route, useNavigate, useLocation, Navigate } from "react-router-dom";
import { Attribution, Container, Footer, Hyperlink, PageContainer, PageWrapper, Wrapper, ScrollToTopBtn } from "./styles"
import NavigationBar from "./components/NavigationBar";
import Care from "./components/Care";
import Environment from "./components/Environment";
import Mates from "./components/Mates";
import Plants from "./components/Plants";
import Home from "./components/Home";
import { color } from "framer-motion";
import MiniNavigationBar from "./components/MiniNavigationBar";

export default function App() {
    const navigate = useNavigate()
    const location = useLocation()
    const [scrollTop, setScrollTop] = useState(0)

    // Retrieve the distance from the top of the page...
    const handleScrolling = () => {
        const position = document.body.scrollTop;
        setScrollTop(position);
    }

    // listen to action of scroll and run the handleScrolling()...
    document.body.addEventListener('scroll', handleScrolling);

    return (
        <Container
            style={{
                backgroundImage: `url(${background})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "50% 50%",
            }}
        >
            <Wrapper
                transition={{ ease: "easeIn", duration: 0.5 }}
            >
                
                {/* NavigationBar Component*/}
                <NavigationBar pathname={location.pathname} />

                {/* When the distance from the current location to the top > 500, and window's 
                width > 910, a mini navigation bar will appear...*/}
                {scrollTop >= 500 && window.innerWidth > 910 &&
                    <MiniNavigationBar scrollTop={scrollTop} />
                }

                {/* When the distance from the current location to the top > 500, and window's 
                width < 910, a scroll to top btn will appear...*/}
                {scrollTop >= 500 && window.innerWidth < 910 &&
                    <ScrollToTopBtn
                        /* initially, when the component is mount, the opacity is 0*/
                        initial={{
                            opacity: 0,
                        }}
                        /* when scrollTop >= 150, the opacity will become one, else be zero*/
                        animate={{
                            opacity: scrollTop >= 150 ? 1 : 0

                        }}
                        transition={{ ease: "easeIn", duration: 0.5 }}
                        /* Change color to #FF9900 when hover over the component*/
                        whileHover={{
                            color: "#FF9900"
                        }}
                        /* scroll to the top of the page when click on...*/
                        onClick={() => {
                            document.body.scrollTo({
                                top: 0,
                                behavior: "smooth"
                            })
                        }}
                    >
                        ↑
                    </ScrollToTopBtn>
                }

                <PageWrapper
                    /* initially, when the component is mount, the opacity is 0*/
                    initial={{
                        opacity: 0
                    }}
                    /* After the component is fully mount, the opacity will be 1*/ 
                    animate={{
                        opacity: 1,
                    }}

                    transition={{ ease: "easeIn", duration: 0.5 }}
                >
                    <Routes>
                        <Route path="/" element={<Navigate to="/home" />} />
                        <Route path="home" element={<Home />} />
                        <Route path="environment" element={<Environment />} />
                        <Route path="plants" element={<Plants />} />
                        <Route path="mates" element={<Mates />} />
                        <Route path="care" element={<Care />} />
                    </Routes>
                </PageWrapper>

                <Footer>
                    <Attribution>
                        This website was created by <Hyperlink color={"gray"} whileHover={{ color: "#FF9900" }} transition={{ ease: "easeIn", duration: 0.5 }} href="mailto:lame972@hsd.k12.or.us">Edward Lam</Hyperlink> &copy; 2023</Attribution>
                </Footer>
            </Wrapper>
        </Container>
    )
}