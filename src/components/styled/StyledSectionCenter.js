import React from "react";
import styled from "styled-components";

const StyledSectionCenter = styled.section`
  background-color: #fff;
  margin: 8rem auto 0;
  width: 90vw;
  max-width: 35rem;
  padding: 2rem;
  box-shadow: var(--light-shadow);
  a:not(:last-child) {
    color: var(--clr-primary);
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    padding: 1rem;
    background-color: var(--clr-secondary);
  }
`;
export default StyledSectionCenter;
