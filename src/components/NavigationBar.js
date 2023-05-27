import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { NavbarWrapper, NavbarTab, InfoTab, Icon } from "../styles"
import { motion } from "framer-motion";
import home from "../images/home.png"
import data from "../data/PageData"

export default function NavigationBar({ showInfo, setShowInfo, pathname, navShown }) {
    const navigate = useNavigate()
    const location = useLocation()

     // Fetch information about the url and tile of each page from PageData.js and map them...
    const tab = data.map(item => {
        return (
            <NavbarTab
                key={item.id}
                /* initially, when the component is mount, the opacity is 0*/
                initial={{
                    opacity: 0,
                }}
                /* Change color to #FF9900 when hover over the component*/
                whileHover={{
                    color: '#FF9900',
                }}
                /* When click the tab, navigate to the page base on the given path*/
                transition={{ ease: "easeIn", duration: 0.2 }}
                onClick={() => {
                    navigate(item.path)
                }}
                /* When scrollTop >= 300, opacity will be 1 and the color tab will change to #FF9900 when the user is on the page...*/
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
            /* When the page just loaded up, the opacity is 0*/
            initial={{
                opacity: 0,
            }}
            /* When the page is fully load, the opacity will be 1*/
            animate={{
                opacity: 1
            }}
            transition={{ ease: "easeIn", duration: 0.2 }}
        >
            {tab}
        </NavbarWrapper>
    )
}