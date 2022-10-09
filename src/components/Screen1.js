import React from "react";
import TaskCategoryButton from "./TaskCategoryButton";
import { AiOutlinePlusCircle } from "react-icons/ai";
import StyledIcon from "./styled/StyledIcon";
import StyledScreen1Frame from "./styled/StyledScreen1Frame";

const Screen1 = ({ taskList }) => {
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
    <StyledScreen1Frame>
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
      <StyledIcon to="/create">
        <AiOutlinePlusCircle />
      </StyledIcon>
    </StyledScreen1Frame>
  );
};

export default Screen1;
