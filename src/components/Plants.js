import React from "react";
import { PageContainer, H1, Line, ContentWrapper, H2, ImageWrapper, Image, Attribution, Hyperlink, OrderList, ListItem, H3, UnorderedList, Paragraph } from "../styles";
import JavaFern from "../images/java-fern.jpeg"
import AmazonSword from "../images/amazon-sword.jpg"
import Anubias from "../images/anubias.jpeg"
import Vallisneria from "../images/vallisneria.jpg"
import LobeliaCardinalis from "../images/lobelia-cardinalis.jpg"

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
            <H2>Top 5 Plants for Betta Fish Tank for Novices</H2>
            <ContentWrapper>
                <H3>Java Fern</H3>
                <ImageWrapper>
                    <Image alt="" src={JavaFern} />
                    <Attribution>
                        Java Fern taken By <Hyperlink color={"gray"} whileHover={{ color: "#FF9900" }} transition={{ ease: "easeIn", duration: 0.5 }} href="https://www.flickr.com/photos/dantje/1483653690/">Arifdani Nugraha</Hyperlink> {"(CC BY-NC-SA 2.0)"}
                    </Attribution>
                </ImageWrapper>
                <UnorderedList>
                    <ListItem>Easy to take care</ListItem>
                    <ListItem>Light Required: Moderate</ListItem>
                    <ListItem>Temperature Paremeter: 64 - 82°F</ListItem>
                    <ListItem>CO2 Required: NO</ListItem>
                    <ListItem>Growth Rate: Slow</ListItem>
                </UnorderedList>
            </ContentWrapper>
            <ContentWrapper>
                <H3>Amazon Sword</H3>
                <ImageWrapper>
                    <Image alt="" src={AmazonSword} />
                    <Attribution>
                        56 Gallons Amazon Sword Tank taken by <Hyperlink color={"gray"} whileHover={{ color: "#FF9900" }} transition={{ ease: "easeIn", duration: 0.5 }} href="https://www.flickr.com/photos/mobile_gnome/16046377980">Mobile_gnome</Hyperlink> {"(CC BY-NC-ND 2.0)"}
                    </Attribution>
                </ImageWrapper>
                <UnorderedList>
                    <ListItem>Easy to take care</ListItem>
                    <ListItem>Light Required: Moderate</ListItem>
                    <ListItem>Temperature Paremeter: 72 to 82°F</ListItem>
                    <ListItem>CO2 Required: No</ListItem>
                    <ListItem>Growth Rate: Moderate</ListItem>
                </UnorderedList>
            </ContentWrapper>
            <ContentWrapper>
                <H3>Anubias</H3>
                <ImageWrapper>
                    <Image alt="" src={Anubias} />
                    <Attribution>
                        Anubias taken by <Hyperlink color={"gray"} whileHover={{ color: "#FF9900" }} transition={{ ease: "easeIn", duration: 0.5 }} href="https://commons.wikimedia.org/wiki/File:Anubias.jpg">Colamc</Hyperlink> {"(CC BY-SA 4.0)"}
                    </Attribution>
                </ImageWrapper>
                <UnorderedList>
                    <ListItem>Easy to take care</ListItem>
                    <ListItem>Light Required: Low to Moderate</ListItem>
                    <ListItem>Temperature Paremeter: 72 to 82°F</ListItem>
                    <ListItem>CO2 Required: No</ListItem>
                    <ListItem>Growth Rate: Slow</ListItem>
                </UnorderedList>
            </ContentWrapper>
            <ContentWrapper>
                <H3>Vallisneria</H3>
                <ImageWrapper>
                    <Image alt="" src={Vallisneria} />
                    <Attribution>
                    Community Fish Tank with Vallisneria taken by <Hyperlink color={"gray"} whileHover={{ color: "#FF9900" }} transition={{ ease: "easeIn", duration: 0.5 }} href="https://commons.wikimedia.org/wiki/File:Fish_Aquarium_with_Vallisneria.jpg">Damitr</Hyperlink> {"(CC BY-SA 4.0)"}
                    </Attribution>
                </ImageWrapper>
                <UnorderedList>
                    <ListItem>Easy to take care</ListItem>
                    <ListItem>Light Required: Low to Moderate</ListItem>
                    <ListItem>Temperature Paremeter: 72 to 82°F</ListItem>
                    <ListItem>CO2 Required: No</ListItem>
                    <ListItem>Growth Rate: Slow</ListItem>
                </UnorderedList>
            </ContentWrapper>
            <ContentWrapper>
                <H3>Lobelia cardinalis</H3>
                <ImageWrapper>
                    <Image alt="" src={LobeliaCardinalis} />
                    <Attribution>
                    Cardinal flower (Lobelia cardinalis) taken by <Hyperlink color={"gray"} whileHover={{ color: "#FF9900" }} transition={{ ease: "easeIn", duration: 0.5 }} href="https://www.flickr.com/photos/stevenanichols/">Steven Nichols</Hyperlink> {"(CC BY-NC 2.0)"}
                    </Attribution>
                </ImageWrapper>
                <UnorderedList>
                    <ListItem>Easy to take care</ListItem>
                    <ListItem>Light Required: Moderate to High</ListItem>
                    <ListItem>Temperature Paremeter: 61 - 79 °F</ListItem>
                    <ListItem>CO2 Required: No, but grow better with CO2</ListItem>
                    <ListItem>Growth Rate: Slow to Moderate</ListItem>
                </UnorderedList>
            </ContentWrapper>

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

                <H3>The 3 Common Steps are:</H3>
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
            </ContentWrapper>
        </PageContainer>
    )
}