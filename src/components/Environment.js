import React from "react";
import { useLocation } from "react-router-dom";
import { PageContainer, H1, Line, H2, Paragraph } from "../styles";

export default function Environment() {
    const location = useLocation()


    return (
        <PageContainer
            initial={{
                opacity: 0
            }}
            animate={{
                opacity:1
            }}
            transition={{ ease: "easeIn", duration: 0.5 }}
        >
            <H1 >Environment</H1>

            <Line size={"35%"}/>

            <H2 padding={"30px 0px"}>Betta's Natural Environment</H2>

            <Paragraph>
            First and first, while setting up a fish tank for any type of fish, 
            you must understand its natural environment since it is the best 
            environment for the fish. In the case of Betta, it was discovered 
            in freshwater environments in Southeast Asia, notably in Thailand, 
            Vietnam, Cambodia, Burma, and Laos. These settings are distinguished 
            by rich vegetation, low dissolved oxygen concentrations, warm water, 
            and slow-flowing waters. As a result, while putting up a tank for your 
            betta, you must consider these factors.
            </Paragraph>

            <H2 padding={"30px 0px"}></H2>

        </PageContainer>
    )
}