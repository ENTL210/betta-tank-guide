import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { NavbarWrapper, NavbarTab, InfoTab, Icon } from "../styles"
import { motion } from "framer-motion";
import home from "../images/home.png"
import data from "../data/PageData"

export default function NavigationBar({ showInfo, setShowInfo, pathname, navShown }) {
    const navigate = useNavigate()
    const location = useLocation()

    const tab = data.map(item => {
        return (
            <NavbarTab
                key={item.id}
                initial={{
                    opacity: 0,
                }}
                whileHover={{
                    color: '#FF9900',
                }}
                transition={{ ease: "easeIn", duration: 0.2 }}
                onClick={() => {
                    navigate(item.path)
                }}
                animate={{
                    opacity: 1,
                    color: location.pathname === item.path ? "#FF9900" : "#FFFFFF"
                }}
            >
                {item.title}
            </NavbarTab>
        )
    })

    return (
        <NavbarWrapper
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1
            }}
            transition={{ ease: "easeIn", duration: 0.2 }}
        >
            {tab}
        </NavbarWrapper>
    )
}