import React from "react";
import { PageContainer, H1, Line } from "../styles";

export default function Plants() {
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
            <H1>Plants</H1>

            <Line size={"15%"} />

        </PageContainer>
    )
}