import React from "react";
import moment from "moment";
import { useState } from "react";

const Task = ({taskDeleteParent, taskEditParent, index, content}) => {
  const [edited, setEdit] = useState(true);

  const handleEditClick = () => {
    setEdit(!edited);
  };

  const handleSave = (e) => {
    e.preventDefault();
    let number = e.currentTarget.id;
    const { completed = false, description = "" } = document.forms.namedItem(number);
    setEdit(!edited);

    const body = {
    completed: completed.checked || false,
    description: description.value || "",
    };

    taskEditParent(content._id, body);
  };
  return (
    <div className="task-card-container">
      <div>
        {edited ? (
          <div>
            <div className="task-desc-checkbox">
              <p>Description: {content.description}</p>

              <div className="edit-task-group">
                <span>Completed: </span>
                <input
                  type="checkbox"
                  readOnly
                  checked={content.completed}
                />
              </div>
            </div>
            <button onClick={handleEditClick}>Edit</button>
          </div>
        ) : (
          <form role="form" id={index.toString()} onSubmit={handleSave}>
            <div className="task-desc-checkbox">
              <div className="edit-task-group">
                <label htmlFor="description">Description: </label>
                <input name="description" className="text-input" type="text" />
              </div>

              <div className="edit-task-group">
                <label htmlFor="completed">Completed: </label>
                <input
                  type="checkbox"
                  name="completed"
                  defaultChecked={content.completed}
                />
              </div>
            </div>
            <button type="submit" id={content._id}>
              Save
            </button>
          </form>
        )}
      </div>

      <p>{moment(content.createdAt).format("MMMM Do, YYYY")}</p>
      <button
        id={content._id}
        onClick={(e) => {
          let taskToDelete = e.target.id;
          taskDeleteParent(taskToDelete);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Task;
