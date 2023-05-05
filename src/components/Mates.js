import React from "react";
import { PageContainer, H1, Line } from "../styles";

export default function Mates() {
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
            <H1>Mates</H1>

            <Line size={"15%"} />

        </PageContainer>
    )
}