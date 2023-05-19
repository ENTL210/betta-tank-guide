import React from "react";
import { PageContainer, H1, Line, ContentWrapper, H2, Paragraph, H3, ImageWrapper, Image, Attribution, Hyperlink, UnorderedList, ListItem, OrderList } from "../styles";
import MatesCard from "./MatesCard";
import data from "../data/MatesData";

export default function Mates() {
    const Card = data.map(item => {
        return <MatesCard
            key={item.id}
            {...item}
        />
    })
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

            <Line size={"75px"}/>

            <H2>Best Tank Mates for Betta Fish</H2>

            {Card}

            <Attribution>
                From <Hyperlink color={"gray"} whileHover={{ color: "#FF9900" }} transition={{ ease: "easeIn", duration: 0.5 }} href="https://be.chewy.com/best-betta-fish-tank-mates/">beChewy</Hyperlink> & <Hyperlink color={"gray"} whileHover={{ color: "#FF9900" }} transition={{ ease: "easeIn", duration: 0.5 }} href="https://aquariumstoredepot.com/blogs/news/betta-tank-mates"> AquariumStoreDepot</Hyperlink>
            </Attribution>

            <H2>Tank Mates to Avoid</H2>
            <H3>Some fishes you should avoid:</H3>
            <UnorderedList>
                <ListItem>Other male bettas</ListItem>
                <ListItem>Anglefish</ListItem>
                <ListItem>Goldfish</ListItem>
                <ListItem>Nippy Tetra</ListItem>
                <ListItem>Goldfish</ListItem>
                <ListItem>Red tail sharks</ListItem>
                <ListItem>Tiger barbs</ListItem>
            </UnorderedList>

            <Attribution>
                From <Hyperlink color={"gray"} whileHover={{ color: "#FF9900" }} transition={{ ease: "easeIn", duration: 0.5 }} href="https://be.chewy.com/best-betta-fish-tank-mates/">beChewy</Hyperlink> & <Hyperlink color={"gray"} whileHover={{ color: "#FF9900" }} transition={{ ease: "easeIn", duration: 0.5 }} href="https://aquariumstoredepot.com/blogs/news/betta-tank-mates"> Aquarium Store Depot</Hyperlink>
            </Attribution>

            <H2>Acclimate Fishes</H2>
            <Paragraph>
            It is critical to understand how to properly acclimatize fish 
            because when a fish is moved from one tank to another, it suffers 
            tremendous amounts of stress. As a result, acclimatization is performed 
            to assist the fish in reducing their stress levels.
            </Paragraph>
            <H3>Acclimatization Process</H3>
            <OrderList>
                <ListItem>Do not open the container in which the fish are packaged.</ListItem>
                <ListItem>Put the container in the tank</ListItem>
                <ListItem>Allow the container to float for 15-20 minutes in the tank.</ListItem>
                <ListItem>Open the container, and gently release the fish into the water</ListItem>
            </OrderList>

            <Attribution>
                From <Hyperlink color={"gray"} whileHover={{ color: "#FF9900" }} transition={{ ease: "easeIn", duration: 0.5 }} href="https://www.paradisepetshop.net/the-importance-of-acclimation.html#:~:text=Whenever%20a%20fish%20is%20moved,introduced%20to%20a%20new%20tank.">Paradise Pet Shop</Hyperlink> 
            </Attribution>


        </PageContainer>
    )
}