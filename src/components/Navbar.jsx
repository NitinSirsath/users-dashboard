import React from "react";
import {
    Container,
    LinksContainer,
    LinkItem,

} from "../styles/navbar.style";

const Navbar = () => {
    return (
        <Container>
            <LinksContainer>
                <div>
                    <LinkItem to="details">
                        <p>Profile</p>
                    </LinkItem>
                    <LinkItem to="post">
                        <p>Post</p>
                    </LinkItem>
                    <LinkItem to="gallery">
                        <p>Gallery</p>
                    </LinkItem>
                    <LinkItem to="todo">
                        <p>ToDo</p>
                    </LinkItem>
                </div>
            </LinksContainer>
        </Container>
    );
};

export default Navbar;
