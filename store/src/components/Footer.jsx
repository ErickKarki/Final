import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #f5fbfd;
  height: 250px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 2rem;

  h3 {
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin-bottom: 0.5rem;
    }
  }
`;

const InfoContainer = styled.div``;

const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    margin-right: 1rem;
    font-size: 1.2rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;

    li {
      margin-right: 1rem;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <LinksContainer>
        <h3>Navigation</h3>
        <ul>
          <Link to="/">
            <h3>About</h3>
          </Link>
          <Link to="/">
            <h3>Contact</h3>
          </Link>
          <Link to="/">
            <h3>Help</h3>
          </Link>
        </ul>
      </LinksContainer>

      <InfoContainer>
        <p>© 2024 Retro Revive. All Rights Reserved.</p>
      </InfoContainer>

      <SocialContainer>
        <h3>Connect with Us</h3>

        <Link to="/">Facebook</Link>
        <Link to="/">Instagram</Link>
        <Link to="/">Twitter</Link>
      </SocialContainer>
    </FooterContainer>
  );
};

export default Footer;
