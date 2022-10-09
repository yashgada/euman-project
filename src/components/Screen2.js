import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "./styled/SubmitButton";

const Screen2 = ({ addTask }) => {
  // const SubmitButton = styled.input`
  //   font-weight: 700;
  //   border-color: transparent;
  //   width: 100%;
  //   padding: 0.25rem 0.5rem;
  // `;
  const [descState, setDescState] = useState("");
  const [impState, setImpState] = useState(false);
  const [urgentState, setUrgentState] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({
      desc: descState,
      imp: impState,
      urgent: urgentState,
      id: new Date().getTime().toString(),
    });
    navigate("/");
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1>Create a new task</h1>
      <div className="form-control">
        <label htmlFor="desc">Task Description: </label>
        <input
          type="text"
          name="desc"
          id="desc"
          required
          value={descState}
          onChange={(e) => setDescState(e.target.value)}
        />
      </div>
      <div className="form-control">
        <input
          type="checkbox"
          name="imp"
          id="imp"
          checked={impState}
          onChange={(e) => setImpState(!impState)}
        />
        <label htmlFor="imp">Is it Important?</label>
      </div>
      <div className="form-control">
        <input
          type="checkbox"
          name="urgent"
          id="urgent"
          checked={urgentState}
          onChange={(e) => setUrgentState(!urgentState)}
        />
        <label htmlFor="urgent">Is it Urgent?</label>
      </div>
      <Button type="submit" value="Create Task" />
    </form>
  );
};

export default Screen2;
