import Paper from "@material-ui/core/Paper";
import styled from "styled-components";

export const PageStyled = styled(Paper)`
  cursor: pointer;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ImageStyled = styled("img")`
  width: 50%;
  max-width: 50%;
  height: auto;
`;
