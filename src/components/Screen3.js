import React from "react";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import styled from "styled-components";
import Button from "./styled/SubmitButton";
import StyledLink from "./styled/StyledLink";

const Screen3 = ({ title, taskList, removeTask }) => {
  const Task = styled.article`
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
  `;
  return (
    <div>
      <h1>{title}</h1>
      <ul>
        {taskList
          .filter((task) => {
            if (title === "Do It Now") return task.imp && task.urgent;
            if (title === "Decide When To Do") return task.imp && !task.urgent;
            if (title === "Delegate It") return !task.imp && task.urgent;
            if (title === "Dump It") return !task.imp && !task.urgent;
            console.log("We've got a problem");
          })
          .map((task) => (
            <Task key={task.id}>
              <li>{task.desc}</li>
              <FaTrash onClick={() => removeTask(task.id)} />
            </Task>
          ))}
      </ul>
      <StyledLink to="/">Back</StyledLink>
    </div>
  );
};

export default Screen3;
