import React from "react";
import { H1, PageContainer, Line } from "../styles";
import { useLocation } from "react-router-dom";

export default function Care() {
    const location = useLocation()
    return (
        <PageContainer
            initial={{
                opacity: 0,
            }} 
            animate={{
                opacity: 1,
            }}
            transition={{ ease: "easeIn", duration: 0.5 }}
        >
            <H1>Care</H1>

            <Line size={"15%"}/>

        </PageContainer>
    )
}