import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MiniNavBarWrapper, NavbarTab } from "../styles";
import data from "../data/PageData"

export default function MiniNavigationBar({ scrollTop }) {
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
                transition={{ ease: "easeIn", duration: 0.2 }}
                /* When click the tab, navigate to the page base on the given path and scroll to top...*/
                onClick={() => {
                    navigate(item.path)
                    document.body.scrollTo({
                        top: 0,
                        behavior: "smooth"
                    })
                }}
                /* When scrollTop >= 300, opacity will be 1 and the color tab will change to #FF9900 when the user is on the page...*/
                animate={{
                    opacity: scrollTop >= 500 ? 1 : 0,
                    color: location.pathname === item.path ? "#FF9900" : "#FFFFFF"
                }}
            >
                {item.title}
            </NavbarTab>
        )
    })
    return (
        <MiniNavBarWrapper
            /* Initially, the miniNav is hidden...*/
            initial={{
                opacity: 0,
                width: "0px"
            }}
            /* The miniNav is shown when scrollTop >= 500 ...*/
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