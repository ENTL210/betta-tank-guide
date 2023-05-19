import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { NavbarWrapper, NavbarTab, InfoTab, Icon } from "../styles"
import { motion } from "framer-motion";
import home from "../images/home.png"

export default function NavigationBar({ showInfo, setShowInfo, pathname }) {
    const navigate = useNavigate()
    const location = useLocation()


    return (
        <NavbarWrapper>
            <NavbarTab
                whileHover={{
                    color: '#FF9900',
                }}
                transition={{ ease: "easeIn", duration: 0.2 }}
                onClick={() => {
                    navigate('/home')
                }}
                animate={{
                    color: location.pathname === "/home" ? "#FF9900" : "#FFFFFF"
                }}
            >
                Home
            </NavbarTab>
            <NavbarTab
                whileHover={{
                    color: '#FF9900',
                }}
                transition={{ ease: "easeIn", duration: 0.2 }}
                onClick={() => {
                    navigate('/environment')
                }}
                animate={{
                    color: location.pathname === "/environment" ? "#FF9900" : "#FFFFFF"
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
                }}
                animate={{
                    color: location.pathname === "/plants" ? "#FF9900" : "#FFFFFF"
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
                }}
                animate={{
                    color: location.pathname === "/mates" ? "#FF9900" : "#FFFFFF"
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
                }}
                animate={{
                    color: location.pathname === "/care" ? "#FF9900" : "#FFFFFF"
                }}
            >
                Care
            </NavbarTab>
        </NavbarWrapper>
    )
}