import React from "react";
import styled from "styled-components";
import TaskCategoryButton from "./TaskCategoryButton";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const Screen1 = ({ taskList }) => {
  const StyledDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-auto-flow: column;
    align-items: center;
  `;
  const StyledLink = styled(Link)`
    grid-row: 4;
    font-size: 3rem;
    background-color: transparent;
    background: transparent;
    padding-left: 2rem;
    color: var(--clr-primary);
  `;
  let countDoItNow = 0;
  let countDecideWhenToDo = 0;
  let countDelegateIt = 0;
  let countDumpIt = 0;
  taskList.forEach((task) => {
    if (task.urgent) {
      if (task.imp) countDoItNow++;
      else countDelegateIt++;
    } else {
      if (task.imp) countDecideWhenToDo++;
      else countDumpIt++;
    }
  });
  return (
    <StyledDiv>
      <TaskCategoryButton
        path="DoItNow"
        title="Do it now"
        count={countDoItNow}
      />
      <TaskCategoryButton
        path="DecideWhenToDo"
        title="Decide when to do"
        count={countDecideWhenToDo}
      />
      <TaskCategoryButton
        path="DelegateIt"
        title="Delegate it"
        count={countDelegateIt}
      />
      <TaskCategoryButton path="DumpIt" title="Dump it" count={countDumpIt} />
      <StyledLink to="/create">
        <AiOutlinePlusCircle />
      </StyledLink>
    </StyledDiv>
  );
};

export default Screen1;
