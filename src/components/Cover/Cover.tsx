import React from "react";
import { PaperStyled } from "./Cover.style";

const Cover: React.FC = ({ children }) => {
  return <PaperStyled elevation={12}>{children}</PaperStyled>;
};

export default Cover;
