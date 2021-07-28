import React from "react";
import { BackgroundStyled } from "./Background.style";

const Background: React.FC = ({ children }) => {
  return <BackgroundStyled>{children}</BackgroundStyled>;
};

export default Background;
