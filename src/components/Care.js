import React from "react";
import { H1, PageContainer, Line, ContentWrapper, H2, Paragraph, ImageWrapper, Image, Attribution, Hyperlink, H3, OrderList, ListItem } from "../styles";
import { useLocation } from "react-router-dom";

export default function Care() {
    const location = useLocation()
    return (
        <PageContainer
            /* initially, when the component is mount, the opacity is 0*/
            initial={{
                opacity: 0,
            }}
            /* when fully load, the opacity will become one, else be zero*/
            animate={{
                opacity: 1,
            }}
            transition={{ ease: "easeIn", duration: 0.5 }}
        >
            <H1>Care</H1>

            <Line size={"75px"} />
            <ContentWrapper>
                <H2>Properly Condition Your Water </H2>
                <ImageWrapper>
                    <Image alt="Blue Betta swiming" src={require("../images/betta-pic6.jpg")} />
                    <Attribution>
                        Blue Betta swiming taken by <Hyperlink color={"gray"} whileHover={{ color: "#FF9900" }} transition={{ ease: "easeIn", duration: 0.5 }} href="https://unsplash.com/@jayasuryakarthik">Jaya Surya Karthik</Hyperlink> {"(Unsplash License)"}
                    </Attribution>
                </ImageWrapper>
                <Paragraph>
                    The water paremeter in your tank is critical since it is the key to maintaining
                    a healthy fish aquarium. Remember that tap water includes several constituents,
                    such as minerals, that must be balanced out. Otherwise, fish and plants are unhealthy
                    and will suffer from a variety of health problems. As a result, it is essential to
                    condition the water, which you may accomplish by purchasing supplements on the market
                    that remove these features, following the instructions of the supplements, and your
                    fish tank will be in good shape.
                </Paragraph>

                <Attribution>
                    From <Hyperlink color={"gray"} whileHover={{ color: "#FF9900" }} transition={{ ease: "easeIn", duration: 0.5 }} href="https://www.petlandtexas.com/10-key-tips-to-keeping-a-healthy-aquarium/">Pet Land Texas</Hyperlink>
                </Attribution>

                <H2>Cycle the Tank before Adding Fishes</H2>
                <Paragraph>
                    When you initially set up a new fish tank,
                    there are no good microorganisms in the tank
                    to help break down waste and keep the water safe
                    for your fish. As a result, when you initially set
                    up a fresh new fish tank, you must let the tank cycle for
                    a bit. In other words, you should not buy fish and immediately
                    place them in the tank after it has been set up. According to experts,
                    you should let the tank run for at least a week before introducing fish,
                    which may seem like a long time, but it is necessary.
                </Paragraph>

                <Attribution>
                    From <Hyperlink color={"gray"} whileHover={{ color: "#FF9900" }} transition={{ ease: "easeIn", duration: 0.5 }} href="https://pethelpful.com/fish-aquariums/How-to-Care-for-a-Fish-Tank-Aquarium-Maintenance-Tips">Pet Helpful</Hyperlink>
                </Attribution>

                <H2>Perform Water Changes</H2>
                <Paragraph>
                    As you may be aware, pollutants like ammonia, nitrates, and nitrites
                    accumulate in your tank over time. As a result, frequent water changes
                    are required to keep a healthy fish tank. Experts recommend performing
                    a 10% to 25% water change every week or two, depending on the size and
                    number of fish in your tank.
                </Paragraph>

                <Attribution>
                    From <Hyperlink color={"gray"} whileHover={{ color: "#FF9900" }} transition={{ ease: "easeIn", duration: 0.5 }} href="https://pethelpful.com/fish-aquariums/How-to-Care-for-a-Fish-Tank-Aquarium-Maintenance-Tips">Pet Helpful</Hyperlink> & <Hyperlink color={"gray"} whileHover={{ color: "#FF9900" }} transition={{ ease: "easeIn", duration: 0.5 }} href="https://www.aqueon.com/articles/starting-a-new-aquarium-60-days#:~:text=There%20are%20different%20philosophies%20on,starting%20to%20colonize%20your%20aquarium.">Aqueon</Hyperlink>
                </Attribution>

                <H3>How to perform a water change:</H3>
                <OrderList>
                    <ListItem>
                        Remove 10% to 25% of the water from the tank
                        ,and the amount of water removed depend on
                        the size of your tank and the amount of fishes
                        in your tank
                    </ListItem>
                    <ListItem>
                        Lay a plastic bag that big enough to fit 60%
                        of the area of the fish tank in the fish tank
                        so when you add water into the tank, it will not
                        corrupt the subtrate and stress out the fish much.
                    </ListItem>
                    <ListItem>
                        Find a bucket that can carry the amount of water you need to add back to the tank
                    </ListItem>
                    <ListItem>Fill the bucket with the amount of water you need to add back to the tank</ListItem>
                    <ListItem>
                        Follow the instructions of the suppplements that you bought,
                        and add them to the water in the bucket to remove chlorine,
                        chlorimates, and other subtances.
                    </ListItem>
                    <ListItem>Wait 2-3 minutes, for the supplements to balance out and condition the water</ListItem>
                    <ListItem>Gently add the water in the bucket to the tank</ListItem>
                </OrderList>

                <Attribution>
                    From <Hyperlink color={"gray"} whileHover={{ color: "#FF9900" }} transition={{ ease: "easeIn", duration: 0.5 }} href="https://interpet.co.uk/support/we-can-help-you-with/cleaning-care/doing-an-easy-water-change-general-cleaning/">Interpret</Hyperlink>
                </Attribution>




            </ContentWrapper>
        </PageContainer>
    )
}