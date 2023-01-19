import styled from "styled-components";

export const UserAccountContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4)),
    url(${(props) => props.background});
  /* height: 100vh; */
`