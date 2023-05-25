import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MiniNavBarWrapper, NavbarTab } from "../styles";
import data from "../data/PageData"

export default function MiniNavigationBar({ scrollTop }) {
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
                    opacity: scrollTop >= 300 ? 1 : 0,
                    color: location.pathname === item.path ? "#FF9900" : "#FFFFFF"
                }}
            >
                {item.title}
            </NavbarTab>
        )
    })
    return (
        <MiniNavBarWrapper
            initial={{
                opacity: 0,
                width: "0px"
            }}
            animate={{
                opacity: scrollTop >= 500 ? 1 : 0,
                width: scrollTop >= 500 ? "100%" : "0px",
                height: scrollTop >= 500 ? "50px" : "0px"

            }}
            transition={{ ease: "easeIn", duration: 0.15 }}
        >
           {tab}
        </MiniNavBarWrapper>
    )
}