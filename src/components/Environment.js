import React from "react";
import { useLocation } from "react-router-dom";
import { PageContainer, H1, Line, ContentWrapper, H2, Paragraph, ImageWrapper, Image, Attribution, Hyperlink } from "../styles";
import BettaPic from "../images/betta-pic.jpg"
import BettaSwiming from "../images/betta-swiming.jpg"
import { hover } from "@testing-library/user-event/dist/hover";

export default function Environment() {
    const location = useLocation()


    return (
        <PageContainer
            initial={{
                opacity: 0
            }}
            animate={{
                opacity: 1
            }}

            transition={{ ease: "easeIn", duration: 0.5 }}
        >
            <H1 >Environment</H1>

            <Line size={"20vw"} />
            
            <ContentWrapper>
                <H2>Betta's Natural Environment</H2>
                <ImageWrapper>
                    <Image alt="Resting Betta" src={BettaPic} />
                    <Attribution>
                        Resting Betta taken by <Hyperlink color={"gray"} whileHover={{ color: "#FF9900" }} transition={{ ease: "easeIn", duration: 0.5 }} href="https://unsplash.com/@timothycdykes">Timothy Dykes</Hyperlink> {"(Unsplash License)"}
                    </Attribution>
                </ImageWrapper>
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
            </ContentWrapper>

            <ContentWrapper>
                <H2>Tank's Size</H2>
                <Paragraph>
                    Many people out there state that Betta can live in fish bowls or small tanks;
                    however, this is not true. In a fish bowl or a small fish tank, the Betta will not
                    have much room to swim around, and this could lead to many issues, such as feces
                    and urine will build up and break down into chemicals that will harm your Betta quicky, your
                    Betta will get bore, obesity in your Betta, and so forth. Therefore, an approriate tank's size for
                    your Betta to live in is no less than 5 gallons (19 litters)
                </Paragraph>
            </ContentWrapper>

            <ContentWrapper>
                <H2>Idea Water's Temperature</H2>
                <Paragraph>
                    Betta originate in freshwater environments in Southeast Asia, where the typical
                    temperature is around 75 degrees Fahrenheit, hence Betta fish require a temperature
                    in their environment that is similar to this to stay healthy. It is necessary to use
                    an aquarium heater to keep the temperature around 75 degrees Fahrenheit. However,
                    if you live in an area where it is warm all year, you do not need an aquarium heater.
                </Paragraph>
            </ContentWrapper>

            <ContentWrapper>
                <H2>Things Betta Fish Love to Have in Their Tank </H2>

                <Paragraph>
                    To keep the Betta fish happy, there should be some decorations and accessories in
                    the tank for them to play with, hide in, and sleep on. Live plants, caverns,
                    driftwood, and other aquarium decorations are among the items you should consider
                    putting in the tank. However, one thing to keep in mind while selecting decorations
                    for your tank is that the object must have smooth, rounded edges since anything too
                    rough or too sharp might wind up harming them.
                </Paragraph>

                <Attribution>
                    From <Hyperlink color={"gray"} whileHover={{ color: "#FF9900" }} transition={{ ease: "easeIn", duration: 0.5 }} href="https://bettasource.com/best-environment-for-betta-fish">BettaSource</Hyperlink> & <Hyperlink color={"gray"} whileHover={{ color: "#FF9900" }} transition={{ ease: "easeIn", duration: 0.5 }} href="https://www.aquariumcoop.com/blogs/aquarium/betta-tank-setup"> Aquarium Co-op</Hyperlink>
                </Attribution>
            </ContentWrapper>


        </PageContainer>
    )
}