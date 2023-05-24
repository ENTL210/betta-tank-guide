import React, { useEffect, useState } from "react";
import styled from "styled-components";
import background from "./images/background.png"
import { Routes, Route, useNavigate, useLocation, Navigate } from "react-router-dom";
import { Attribution, Container, Footer, Hyperlink, PageContainer, PageWrapper, Wrapper, ScrollToTopBtn} from "./styles"
import NavigationBar from "./components/NavigationBar";
import Care from "./components/Care";
import Environment from "./components/Environment";
import Mates from "./components/Mates";
import Plants from "./components/Plants";
import Home from "./components/Home";
import { color } from "framer-motion";

export default function App() {
    const navigate = useNavigate()
    const location = useLocation()
    const [scrollTop, setScrollTop] = useState(0)

    const handleScrolling = () => {
        const position = document.body.scrollTop;
        setScrollTop(position);
    }

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

                <NavigationBar pathname={location.pathname}/>
                
                {scrollTop >= 120 && 
                    <ScrollToTopBtn
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: scrollTop >= 120 ? 1 : 0
                            
                        }}
                        transition={{ease: "easeIn", duration: 0.5}}
                        whileHover={{
                            color: "#FF9900"
                        }}
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
                    initial={{
                        opacity: 0
                    }}
                    animate={{
                        opacity: 1,
                    }}
                    scrollTop={scrollTop}

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