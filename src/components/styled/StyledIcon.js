import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledIcon = styled(Link)`
  grid-row: 4;
  background-color: transparent;
  background: transparent;
  font-size: 2rem;
  padding-left: 1rem;
  color: var(--clr-primary);
  @media screen and (min-width: 800px) {
    font-size: 3rem;
    padding-left: 2rem;
  }
`;

export default StyledIcon;
