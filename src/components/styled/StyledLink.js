import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  font-weight: 700;
  border-color: transparent;
  width: 100%;
  padding: 0.25rem 0.5rem;
  text-decoration: none;
  color: var(--clr-primary);
  display: block;
  text-align: center;
  background-color: var(--clr-secondary);
`;

export default StyledLink;
