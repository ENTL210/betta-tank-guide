import React, { useEffect, useState } from "react";
import styled from "styled-components";
import background from "./images/background.png"
import { Routes, Route, useNavigate, useLocation, Navigate } from "react-router-dom";
import { Attribution, Container, Footer, Hyperlink, Wrapper } from "./styles"
import NavigationBar from "./components/NavigationBar";
import Care from "./components/Care";
import Environment from "./components/Environment";
import Mates from "./components/Mates";
import Plants from "./components/Plants";
import InfoPage from "./components/InfoPage";
import InfoComponent from "./components/PlantsCard";
import Home from "./components/Home";


export default function App() {
    const navigate = useNavigate()
    const location = useLocation()
    const [showInfo, setShowInfo] = useState(false)
    return (
        <Container
            style={{
                backgroundImage: `url(${background})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "50% 50%",
            }}
        >
            {showInfo === true &&
                <InfoPage showInfo={showInfo} setShowInfo={setShowInfo}/>
            }
            <Wrapper
                animate={{
                    filter: showInfo === true ? "blur(10px)" : "",
                    pointerEvents: showInfo === true ? "none" : "",
                }}
                transition={{ ease: "easeIn", duration: 0.5 }}
            >
                <NavigationBar showInfo={showInfo} setShowInfo={setShowInfo} pathname={location.pathname} />
                <Routes>
                    <Route path="/" element={<Navigate to="/environment" />} />
                    <Route path="home" element={<Home/>} />
                    <Route path="environment" element={<Environment />} />
                    <Route path="plants" element={<Plants />} />
                    <Route path="mates" element={<Mates />} />
                    <Route path="care" element={<Care />} />
                </Routes>

                <Footer>
                    <Attribution>
                        This website was created by <Hyperlink color={"gray"} whileHover={{ color: "#FF9900" }} transition={{ ease: "easeIn", duration: 0.5 }} href="mailto:lame972@hsd.k12.or.us">Edward Lam</Hyperlink> &copy; 2023</Attribution>
                </Footer>
            </Wrapper>
        </Container>
    )
}