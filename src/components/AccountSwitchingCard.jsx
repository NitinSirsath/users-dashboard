import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { UserDetailsContext } from "../pages/UserDetails";

const Container = styled.div`
  position: fixed;
  top: 13%;
  background-color: white;
  border-radius: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  padding: 10px 20px;
  z-index: 10;

  h4 {
    text-align: center;
    margin-bottom: 10px;
  }
`;
const LinkContainer = styled.p`
  width: 200px;
  margin-bottom: 5px;
  border-bottom: 1px solid lightgray;
  padding-bottom: 2px;
`;

const LinkStyle = styled(Link)`
  text-decoration: none;
  color: black;
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
`;
const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ImageCurrentUser = styled.div`
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${(props) => props.background});
  border-radius: 50%;
`;

export const LinkWrapper = styled.div`
  margin-top: 25px;

  p {
    text-align: center;
    margin-bottom: 10px;
    
  }
`;

export const SignOutButton = styled.button`
  padding: 9px 13px;
  font-weight: bold;
  background-color: #fb2121;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  border: none;
  width: 100%;
  margin-top: 10px;
  border-radius: 4px;
  color: white;
  cursor: pointer;
`

//`/user/${user.id}/details`

const AccountSwitchingCard = ({ userDetails, currentUserDetails }) => {
  return (
    <Container>
      {/* <h4>Account Switching</h4> */}
      <ImageContainer>
        <ImageCurrentUser
          height={45}
          width={45}
          background={currentUserDetails.profilepicture}
        ></ImageCurrentUser>
      </ImageContainer>
      <h3>{currentUserDetails?.username}</h3>
      <h2>{currentUserDetails?.name}</h2>
      <div>
        <Link to='/'>
          <SignOutButton>SIGN OUT</SignOutButton>
        </Link>
      </div>
      <LinkWrapper>
        <p style={{fontWeight:'bold'}}>OTHER ACCOUNTS</p>
        {userDetails?.map((user, idx) => {
          return (
            <LinkContainer key={idx}>
              <LinkStyle to={`/user/${user.id}/details`}>
                <ImageCurrentUser
                  height={27}
                  width={27}
                  background={user.profilepicture}
                ></ImageCurrentUser>
                <span>{user.name}</span>
              </LinkStyle>
            </LinkContainer>
          );
        })}
      </LinkWrapper>
    </Container>
  );
};

export default AccountSwitchingCard;
