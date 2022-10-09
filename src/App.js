import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Screen1 from "./components/Screen1";
import Screen3 from "./components/Screen3";
import styled from "styled-components";
import Screen2 from "./components/Screen2";
import { useEffect, useState } from "react";

const getLocalStorage = () => {
  let list = localStorage.getItem("taskList");
  if (list) return JSON.parse(localStorage.getItem("taskList"));
  else return [];
};

function App() {
  const Section = styled.section`
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
  const [taskList, setTaskList] = useState(getLocalStorage());

  const addTask = ({ desc, imp, urgent, id }) => {
    setTaskList((list) => [...list, { desc, imp, urgent, id }]);
  };
  const removeTask = (id) => {
    setTaskList((list) => list.filter((task) => task.id !== id));
  };
  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(taskList));
  }, [taskList]);

  return (
    <BrowserRouter>
      <Section>
        <Routes>
          <Route
            path="/"
            element={<Screen1 taskList={taskList} removeTask={removeTask} />}
          />
          <Route
            path="DoItNow"
            element={
              <Screen3
                title="Do It Now"
                taskList={taskList}
                removeTask={removeTask}
              />
            }
          />
          <Route
            path="DecideWhenToDo"
            element={
              <Screen3
                title="Decide When To Do"
                taskList={taskList}
                removeTask={removeTask}
              />
            }
          />
          <Route
            path="DelegateIt"
            element={
              <Screen3
                title="Delegate It"
                taskList={taskList}
                removeTask={removeTask}
              />
            }
          />
          <Route
            path="DumpIt"
            element={
              <Screen3
                title="Dump It"
                taskList={taskList}
                removeTask={removeTask}
              />
            }
          />
          <Route path="create" element={<Screen2 addTask={addTask} />} />
        </Routes>
      </Section>
    </BrowserRouter>
  );
}

export default App;
