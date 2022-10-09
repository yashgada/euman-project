import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledIcon = styled(Link)`
  grid-row: 4;
  font-size: 3rem;
  background-color: transparent;
  background: transparent;
  padding-left: 2rem;
  color: var(--clr-primary);
`;

export default StyledIcon;
