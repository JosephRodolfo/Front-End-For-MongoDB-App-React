import React from "react";
import { startCreateTask } from "../actions/tasks";
import { useAuth } from "./AuthProvider";

export const CreateTask = ({ createTaskParent }) => {
  const { token } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { description } = document.forms[0];
    startCreateTask(
      { description: description.value },
      token,
      createTaskParent
    );
  };
  return (
    <div className="task-card-container">
      <form>
        <div className="edit-checkbox-header">
          <h3 className="description">Add task</h3>
          <button onClick={handleSubmit} type="submit" className="button">
            Submit
          </button>
        </div>
        <div className="task-information-container">
          <div>
            <h3 className="description">
              <label htmlFor="description">Description: </label>
            </h3>
            <textarea name="description" className="textarea" type="text" />
          </div>
        </div>
      </form>
    </div>
  );
};
