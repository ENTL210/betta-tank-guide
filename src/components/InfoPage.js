import React from "react";
import { InfoPageStyle, ExitButton, H1, InfopageWrapper, Paragraph, H2, Line } from "../styles";


export default function InfoPage({ showInfo, setShowInfo }) {
    return (
        <InfoPageStyle
            initial={{
                opacity: 0
            }}
            animate={{
                opacity: 1
            }}
            transition={{ ease: "easeIn", duration: 0.5 }}
        >
            <ExitButton
                whileHover={{
                    color: "#FF9900",
                    scale: 1.5
                }}
                transition={{ ease: "easeIn", duration: 0.2 }}
                onClick={() => {
                    setShowInfo(false)
                }}
            >
                X
            </ExitButton>
            <InfopageWrapper>
                <H1 color={"black"} >Introduction </H1>
                <Line size={"30%"} color={"black"}/>
                <H2 color={"black"} padding={"20px 0px"}>Welcome Messeage</H2>
                <Paragraph color={"black"}>
                    Hello everyone, this website is built by <b>Edward Lam</b> to share out different 
                    crucial information to help you set up your first ever betta tank for your betta
                    easily. In this website, you will find out information about the suitable environment
                    for your betta, which plants should you put in the tank, which plants you shouldn't, which 
                    fishes should stay with your betta, which fishes can't, and how to take care of your tank.
                    Last but not least, you can find where I obtain information in this website from. Thank you 
                    for visiting my website, hope you have a great time set up your betta tank.
                </Paragraph>
                <H2 color={"black"} padding={"20px 0px"}>Resources</H2>
                
            </InfopageWrapper>
        </InfoPageStyle>
    )
}