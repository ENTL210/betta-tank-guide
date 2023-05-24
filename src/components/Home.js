import React from "react";
import { PageContainer, H1, Line, ContentWrapper, H2, Paragraph, ImageWrapper, Image, Attribution, Hyperlink, Header, HeaderAuthor } from "../styles";
import BettaPic from "../images/betta-pic2.jpg"
import BettaPicData from "../data/BettaPicData";
import BettaPicCard from "./BettaPicCard";

export default function Home() {
    const PicCard = BettaPicData.map(item => {
        return <BettaPicCard 
            key={item.id}
            {...item}
        />
    })

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
            <Header>
                <H1>Betta Tank Guide for Beginners</H1>
                <HeaderAuthor>Edward Lam</HeaderAuthor>
            </Header>

            <Line size={"75px"}/>

            <ContentWrapper>
                <H2>Introduction</H2>
                <ImageWrapper>
                    <Image alt="Blue and colorful Betta" src={BettaPic} />
                    <Attribution>
                        Blue and Colorful Betta taken by <Hyperlink color={"gray"} whileHover={{ color: "#FF9900" }} transition={{ ease: "easeIn", duration: 0.5 }} href="https://unsplash.com/@kyawthutun">Kyaw Tun</Hyperlink> {"(Unsplash License)"}
                    </Attribution>
                </ImageWrapper>
                <Paragraph>
                    Betta fish is one of the popular freshwater fish, and it is the reason
                    that many people start to set up a first ever fish tank in their lifes.
                    On this page, you will be learned how to properly set up a suitable and
                    nice aquarium tank for your first ever fish tank.
                </Paragraph>
            </ContentWrapper>
            <ContentWrapper>
                <H2>Pictures of Betta</H2>
                {PicCard}
            </ContentWrapper>
        </PageContainer>
    )
}