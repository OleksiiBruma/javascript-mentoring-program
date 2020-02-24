import React from "react";
import Wrapper from "../../components/Wrapper";
import Header from "../../components/Header";
import Main from "../../components/Main";
import Footer from "../../components/Footer";
import { Container } from "@material-ui/core";
import Loader from "../../components/common/Loader";

const Base = ({ children }) => (
  <Wrapper>
    <Header />
    <Loader />
    <Main>
      <Container>{children}</Container>
    </Main>
    <Footer />
  </Wrapper>
);

export default Base
