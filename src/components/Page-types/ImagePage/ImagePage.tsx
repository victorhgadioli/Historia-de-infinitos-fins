import React from "react";
import { ImageStyled, PageStyled } from "./ImagePage.style";

const ImagePage: React.FC = ({ children }) => {
  return (
    <PageStyled>
      <ImageStyled />
    </PageStyled>
  );
};

export default ImagePage;
