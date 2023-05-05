import React, {useState} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { NavbarWrapper, NavbarTab, InfoTab, Image } from "../styles"
import { motion } from "framer-motion";
import infoSymbol from "../images/infoSymbol.png"

export default function NavigationBar({showInfo, setShowInfo}) {
    const navigate = useNavigate()
    const location = useLocation()
    const [tab, setTab] = useState(location.pathname)


    return (
        <NavbarWrapper>
            <NavbarTab
                whileHover={{
                    color: '#FF9900',
                }}
                animate={{
                    color: tab === "/environment" ? "#FF9900": "#FFFFFF"
                }}
                transition={{ ease: "easeIn", duration: 0.2 }}
                onClick={() => {
                    navigate('/environment')
                    if (location.pathname !== "/environment") {
                        setTab("/environment")
                    }
                }}
            >
                Environment
            </NavbarTab>
            <NavbarTab
                whileHover={{
                    color: '#FF9900',
                }}
                transition={{ ease: "easeIn", duration: 0.2 }}
                onClick={() => {
                    navigate('/plants')
                    if (location.pathname !== '/plants') {
                        setTab("/plants")
                    }
                }}
                animate={{
                    color: tab === "/plants" ? "#FF9900": "#FFFFFF"
                }}
            >
                Plants
            </NavbarTab>
            <NavbarTab
                whileHover={{
                    color: '#FF9900',
                }}
                transition={{ ease: "easeIn", duration: 0.2 }}
                onClick={() => {
                    navigate('/mates')
                    if (location.pathname !== "/mates") {
                        setTab("/mates")
                    }
                }}
                animate={{
                    color: tab === "/mates" ? "#FF9900": "#FFFFFF"
                }}
            >
                Mates
            </NavbarTab>
            <NavbarTab
                whileHover={{
                    color: '#FF9900',
                }}
                transition={{ ease: "easeIn", duration: 0.2 }}
                onClick={() => {
                    navigate('/care')
                    if (location.pathname !== "/care") {
                        setTab("/care")
                    }
                }}
                animate={{
                    color: tab === "/care" ? "#FF9900": "#FFFFFF"
                }}
            >
                Care
            </NavbarTab>
            <InfoTab
                onClick={() => {
                    if (showInfo === false) {
                        setShowInfo(state => true )
                    }
                }}
            >
                <Image alt="" src={infoSymbol}/>
            </InfoTab>
        </NavbarWrapper>
    )
}