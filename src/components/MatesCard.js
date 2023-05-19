import React from "react";
import { ContentWrapper, H3, ImageWrapper, Image, Attribution, Hyperlink, Paragraph } from "../styles";

export default function MatesCard(props) {
    const fishName = props.fishName;
    const image = props.image;
    const attribution = props.attribution[0];
    const description = props.description;

    return (
        <ContentWrapper>
            <H3>{fishName}</H3>
            <ImageWrapper>
                <Image alt={attribution.title} src={image} />
                <Attribution>
                    {attribution.title} taken by <Hyperlink color={"gray"} whileHover={{ color: "#FF9900" }} transition={{ ease: "easeIn", duration: 0.5 }} href={attribution.href}>{attribution.author}</Hyperlink> ({attribution.copyrightLicense})
                </Attribution>
            </ImageWrapper>
            <Paragraph>
                {description}
            </Paragraph>
        </ContentWrapper>
    )
}