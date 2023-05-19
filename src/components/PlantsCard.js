import React from "react";
import { ContentWrapper, H3, ImageWrapper, Image, Attribution, Hyperlink, UnorderedList, ListItem } from "../styles";


export default function PlantCard(props) {
    const name = `${props.name}`
    const image = props.image
    const attribution = props.attribution[0]
    const features = props.features[0]

    
    return (
        <ContentWrapper>
            <H3>{name}</H3>
            <ImageWrapper>
                <Image alt={attribution.tile} src={image}/>
                <Attribution>
                    {attribution.title} taken By <Hyperlink color={"gray"} whileHover={{ color: "#FF9900" }} transition={{ ease: "easeIn", duration: 0.5 }} href={attribution.href}>{attribution.author}</Hyperlink> ({attribution.copyrightLicense})
                </Attribution>
            </ImageWrapper>
            <UnorderedList>
                <ListItem>{features.skill}</ListItem>
                <ListItem>Light Required: {features.lightRequired}</ListItem>
                <ListItem>Temperature Paremeter: {features.temperatureParemeter}</ListItem>
                <ListItem>CO2 Required: {features.co2Required}</ListItem>
                <ListItem>Growth Rate: {features.growthRate}</ListItem>
            </UnorderedList>
        </ContentWrapper>
    )
}