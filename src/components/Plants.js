import React from "react";
import { PageContainer, H1, Line, ContentWrapper, H2, ImageWrapper, Image, Attribution, Hyperlink, OrderList, ListItem, H3, UnorderedList, Paragraph } from "../styles";
import JavaFern from "../images/java-fern.jpeg"
import AmazonSword from "../images/amazon-sword.jpg"
import Anubias from "../images/anubias.jpeg"
import Vallisneria from "../images/vallisneria.jpg"
import LobeliaCardinalis from "../images/lobelia-cardinalis.jpg"
import data from "../PlantsData.js"
import PlantCard from "./PlantsCard";

export default function Plants() {
    const Card = data.map(item => {
        return <PlantCard
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
            <H1>Plants</H1>

            <Line size={"15%"} />
            <H2>Top 5 Plants for Betta Fish Tank</H2>

            {Card}

            <Attribution>
                From <Hyperlink color={"gray"} whileHover={{ color: "#FF9900" }} transition={{ ease: "easeIn", duration: 0.5 }} href="https://aquariumstoredepot.com/blogs/news/best-plants-for-betta-fish">Aquarium Store Depot</Hyperlink> & <Hyperlink color={"gray"} whileHover={{ color: "#FF9900" }} transition={{ ease: "easeIn", duration: 0.5 }} href="https://www.aquariumcoop.com/blogs/aquarium/easy-aquarium-plants">Aquarium Co-op</Hyperlink>
            </Attribution>

            <ContentWrapper>
                <H2>How to Plant Them</H2>
                <Paragraph>
                    Each variety of plant has a particular method of planting,
                    and you have to follow the instruction on the label of
                    each plant; however, there are 3 fundamental steps that
                    all aquatic plants share, as well as one to two tools that
                    you may need to prepare ahead of time.
                </Paragraph>

                <H3>Tools you might need:</H3>
                <UnorderedList>
                    <ListItem>
                        Scissors
                    </ListItem>
                    <ListItem>
                        Tweezers
                    </ListItem>
                </UnorderedList>

                <H3>The 3 common steps are:</H3>
                <OrderList>
                    <ListItem>
                        Get the plant out of its package gentely to
                        prevent any damage to the root or the plant itself.
                    </ListItem>
                    <ListItem>
                        Rinse the plant under water gently, and
                        remove any excess of gel, if there is any.
                    </ListItem>
                    <ListItem>
                        Cut off any yellow or wilted leaves
                    </ListItem>
                </OrderList>

                <Attribution>
                    From <Hyperlink color={"gray"} whileHover={{ color: "#FF9900" }} transition={{ ease: "easeIn", duration: 0.5 }} href="https://www.aquariumcoop.com/blogs/aquarium/how-to-plant">Aquairum Co-op</Hyperlink>
                </Attribution>
            </ContentWrapper>
            <ContentWrapper>
                <H2>How to Take Care of the Plants </H2>
                <Paragraph>
                    Aquatic plants are rather simple to care for; simply
                    examine the plants daily to see if there are any yellow
                    or wilted leaves and clip them with scissors. Furthermore,
                    attempt to offer enough light for the plants by utilizing LED
                    lights and just trimming the plants down to your preferred size
                    as necessary. Last but not least, try to keep the water paremeter
                    nice and good.
                </Paragraph>

                <Attribution>
                    From <Hyperlink color={"gray"} whileHover={{ color: "#FF9900" }} transition={{ ease: "easeIn", duration: 0.5 }} href="https://splashyfishstore.com/blogs/care-guide-for-live-aquarium-plant/how-to-take-care-of-live-aquarium-plants">Splashy Fish</Hyperlink>
                </Attribution>
            </ContentWrapper>
        </PageContainer>
    )
}