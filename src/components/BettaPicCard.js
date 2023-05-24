import React from "react";
import { ImageWrapper, Image, Attribution, Hyperlink } from "../styles";

export default function BettaPicCard(props) {
    const title = props.attribution[0].title;
    const image = props.image
    const author = props.attribution[0].author;
    const href = props.attribution[0].href;
    const copyrightLicense = props.attribution[0].copyrightLicense;

    return (
        <ImageWrapper>
            <Image alt={title} src={image} />
            <Attribution>
                {title} taken by <Hyperlink color={"gray"} whileHover={{ color: "#FF9900" }} transition={{ ease: "easeIn", duration: 0.5 }} href={href}>{author}</Hyperlink> ({copyrightLicense})
            </Attribution>
        </ImageWrapper>
    )
}