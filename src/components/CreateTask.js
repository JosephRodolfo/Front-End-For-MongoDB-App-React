import React from "react";
import { startCreateTask } from "../actions/tasks";
import { useAuth } from "./AuthProvider";

export const CreateTask = ({createTaskParent}) => {
  const { token } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { description } = document.forms[0];
    startCreateTask({ description: description.value }, token, createTaskParent);
  };
  return (
    <form>
      <h3>Add task</h3>
      <label>Description</label>
      <input name="description" type="text" />

      <button onClick={handleSubmit} type="submit" className="button">
        Submit
      </button>
    </form>
  );
};
