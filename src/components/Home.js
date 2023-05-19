import React from "react";
import { PageContainer, H1, Line, ContentWrapper, H2, Paragraph, ImageWrapper, Image, Attribution, Hyperlink, Header, HeaderAuthor } from "../styles";
import BettaPic from "../images/betta-pic2.jpg"
import BettaPic1 from "../images/betta-pic3.jpg"
import BettaPic2 from "../images/betta-pic4.jpg"
import BettaPic3 from "../images/betta-pic5.jpg"

export default function Home() {
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
                <ImageWrapper>
                    <Image alt="Two Beautiful Bettas" src={BettaPic1} />
                    <Attribution>
                        Two Beautiful Bettas taken by <Hyperlink color={"gray"} whileHover={{ color: "#FF9900" }} transition={{ ease: "easeIn", duration: 0.5 }} href="https://unsplash.com/@worachatsodsri">Worachat Sodsri</Hyperlink> {"(Unsplash License)"}
                    </Attribution>
                </ImageWrapper>
                <ImageWrapper>
                    <Image alt="Blue Betta swiming" src={BettaPic2} />
                    <Attribution>
                        Blue Betta swiming taken by <Hyperlink color={"gray"} whileHover={{ color: "#FF9900" }} transition={{ ease: "easeIn", duration: 0.5 }} href="https://unsplash.com/@jayasuryakarthik">Jaya Surya Karthik</Hyperlink> {"(Unsplash License)"}
                    </Attribution>
                </ImageWrapper>
                <ImageWrapper>
                    <Image alt="Red, White, and Blue Betta swiming" src={BettaPic3} />
                    <Attribution>
                        Red, White, and Blue Betta swiming taken by <Hyperlink color={"gray"} whileHover={{ color: "#FF9900" }} transition={{ ease: "easeIn", duration: 0.5 }} href="https://unsplash.com/@huyphan2602">Huy Phan</Hyperlink> {"(Unsplash License)"}
                    </Attribution>
                </ImageWrapper>
            </ContentWrapper>
        </PageContainer>
    )
}