import React from "react";
import Wrapper from "../components/Wrapper";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import { Container } from "@material-ui/core";

export default ({ children }) => (
  <Wrapper>
    <Header />
    <Main>
      <Container>{children}</Container>
    </Main>
    <Footer />
  </Wrapper>
);
