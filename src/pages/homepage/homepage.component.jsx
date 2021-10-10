import React from "react";
import "./homepage.styles.scss";
import Directory from "../../components/directory/directory.component";
import { HompageContainer } from "./hompage.styles";

const HomePage = () => (
  <HompageContainer className="homepage">
    <Directory />
  </HompageContainer>
);

export default HomePage;
