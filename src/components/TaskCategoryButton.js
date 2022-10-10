import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  font-size: 1rem;
  @media screen and (min-width: 800px) {
    font-size: 2rem;
  }
`;
const TaskCategoryButton = ({ path, title, count }) => {
  return (
    <StyledLink to={path}>
      <div>{title}</div>
      <span>{count}</span>
    </StyledLink>
  );
};

export default TaskCategoryButton;
