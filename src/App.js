import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Screen1 from "./components/Screen1";
import Screen3 from "./components/Screen3";
import Screen2 from "./components/Screen2";
import { useEffect, useState } from "react";
import StyledSectionCenter from "./components/styled/StyledSectionCenter";

const getLocalStorage = () => {
  let list = localStorage.getItem("taskList");
  if (list) return JSON.parse(localStorage.getItem("taskList"));
  else return [];
};

function App() {
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
      <StyledSectionCenter>
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
      </StyledSectionCenter>
    </BrowserRouter>
  );
}

export default App;
