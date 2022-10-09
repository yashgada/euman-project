import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// const Button = styled.div`
/* display: flex; */
/* justify-content: space-between; */
/* width: 100%; */
/* margin-top: 3rem;
  margin-bottom: 3rem;
  padding: 1rem;
  background-color: blue; */
// `;
const StyledLink = styled(Link)`
  font-size: 2rem;
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
