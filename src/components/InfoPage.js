import React from "react";
import { InfoPageStyle, ExitButton, H1, InfopageWrapper, Paragraph, H2, Line, H3, OrderList, ListItem, Hyperlink } from "../styles";


export default function InfoPage({ showInfo, setShowInfo }) {
    return (
        <InfoPageStyle
            initial={{
                opacity: 0
            }}
            animate={{
                opacity: 1
            }}
            transition={{ ease: "easeIn", duration: 0.5 }}
        >
            <ExitButton
                whileHover={{
                    color: "#FF9900",
                    scale: 1.5
                }}
                transition={{ ease: "easeIn", duration: 0.2 }}
                onClick={() => {
                    setShowInfo(false)
                }}
            >
                X
            </ExitButton>
            <InfopageWrapper>
                <H1 color={"black"} >Introduction </H1>
                <Line size={"30%"} color={"black"} />
                <H2 color={"black"} padding={"20px 0px"}>Welcome Messeage</H2>
                <Paragraph color={"black"}>
                    Hello everyone, this website is built by <b>Edward Lam</b> to share out different
                    crucial information to help you set up your first ever betta tank for your betta
                    easily. In this website, you will find out information about the suitable environment
                    for your betta, which plants should you put in the tank, which plants you shouldn't, which
                    fishes should stay with your betta, which fishes can't, and how to take care of your tank.
                    Last but not least, you can find where I obtain information in this website from. Thank you
                    for visiting my website, hope you have a great time set up your betta tank.
                </Paragraph>
                <H2 color={"black"} padding={"20px 0px"}>Resources</H2>

                <H3 color={"black"} padding={"20px 0px"}>Environment</H3>
                <OrderList>
                    <ListItem color="black">
                        <Hyperlink
                            whileHover={{ color: "#FF9900" }}
                            transition={{ ease: "easeIn", duration: 0.5 }}
                            color={"gray"}
                            href={"https://bettasource.com/best-environment-for-betta-fish"}
                        >
                            How To Create the Best Environment for Betta Fish 
                        </Hyperlink>
                    </ListItem>
                    <ListItem color="black">
                        <Hyperlink
                            whileHover={{ color: "#FF9900" }}
                            transition={{ ease: "easeIn", duration: 0.5 }}
                            color={"gray"}
                            href={"https://bettasource.com/best-environment-for-betta-fish"}
                        >
                            How To Create the Best Environment for Betta Fish by 
                        </Hyperlink>
                    </ListItem>
                    <ListItem color="black">
                        <Hyperlink
                            whileHover={{ color: "#FF9900" }}
                            transition={{ ease: "easeIn", duration: 0.5 }}
                            color={"gray"}
                            href={"https://www.aquariumcoop.com/blogs/aquarium/betta-tank-setup"}
                        >
                            How to Set up a Beautiful Betta Fish Tank
                        </Hyperlink>
                    </ListItem>
                </OrderList>

                <H3 color={"black"} padding={"20px 0px"}>Plants</H3>
                <OrderList>
                    <ListItem color="black">
                    <Hyperlink
                            whileHover={{ color: "#FF9900" }}
                            transition={{ ease: "easeIn", duration: 0.5 }}
                            color={"gray"}
                            href={"https://aquariumstoredepot.com/blogs/news/best-plants-for-betta-fish"}
                        >
                            11 OF THE BEST PLANTS FOR BETTA FISH
                        </Hyperlink>
                    </ListItem >
                    <ListItem color="black">
                    <Hyperlink
                            whileHover={{ color: "#FF9900" }}
                            transition={{ ease: "easeIn", duration: 0.5 }}
                            color={"gray"}
                            href={"https://www.aquariumcoop.com/blogs/aquarium/easy-aquarium-plants"}
                        >
                            Top 10 Easy Aquarium Plants for Beginners
                        </Hyperlink>
                    </ListItem>
                    <ListItem color="black">
                    <Hyperlink
                            whileHover={{ color: "#FF9900" }}
                            transition={{ ease: "easeIn", duration: 0.5 }}
                            color={"gray"}
                            href={"https://aquariumbreeder.com/lobelia-cardinalis-care-guide-planting-growing-and-propagation/"}
                        >
                            Lobelia Cardinalis Care Guide – Planting, Growing, and Propagation
                        </Hyperlink>
                    </ListItem>
                    <ListItem color="black">
                    <Hyperlink
                            whileHover={{ color: "#FF9900" }}
                            transition={{ ease: "easeIn", duration: 0.5 }}
                            color={"gray"}
                            href={"https://www.aquariumcoop.com/blogs/aquarium/how-to-plant"}
                        >
                            Quick Guide: How to Plant Live Aquarium Plants
                        </Hyperlink>
                    </ListItem>
                </OrderList>
            </InfopageWrapper>
        </InfoPageStyle>
    )
}