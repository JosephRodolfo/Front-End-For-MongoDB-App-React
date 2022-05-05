import React from "react";
import moment from "moment";
import { useState } from "react";

const Task = ({ taskDeleteParent, taskEditParent, index, content }) => {
  const [edited, setEdit] = useState(true);

  const handleEditClick = () => {
    setEdit(!edited);
  };

  const handleSave = (e) => {
    e.preventDefault();
    let number = e.currentTarget.id;
    const { completed = false, description = "" } =
      document.forms.namedItem(number);
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
            <div className="edit-checkbox-header">
              <img
                title="Edit"
                className="edit-icon"
                alt="edit task icon"
                src="/images/edit-icon.png"
                onClick={handleEditClick}
              />
              <div>
                <img
                  title="Delete"
                  src="images/delete.png"
                  alt="delete icon button"
                  className="delete-icon"
                  id={content._id}
                  onClick={(e) => {
                    let taskToDelete = e.target.id;
                    taskDeleteParent(taskToDelete);
                  }}
                />

                <input
                  type="checkbox"
                  checked={content.completed}
                  readOnly
                  id="cb1"
                />
                <label className="checkbox-label" for="cb1">
                  <div class="tick"></div>
                </label>
              </div>
            </div>
            <div className="task-information-container">
              <h3 className="description">Description: {content.description}</h3>
              
              <p>
                Created on: {moment(content.createdAt).format("MMMM Do, YYYY")}
              </p>
            </div>
          </div>
        ) : (
          <div>
            <form id={index.toString()} onSubmit={handleSave}>
              <div className="edit-checkbox-header">
                <button
                  className="save-icon-button"
                  type="submit"
                  id={content._id}
                >
                  <img
                    title="Save"
                    className="save-icon"
                    src="/images/save.png"
                    alt="save icon button"
                  />
                </button>

                <div>
                  <img
                    title="Delete"
                    src="images/delete.png"
                    className="delete-icon"
                    alt="delete icon button"
                    id={content._id}
                    onClick={(e) => {
                      let taskToDelete = e.target.id;
                      taskDeleteParent(taskToDelete);
                    }}
                  />

                  <input
                    type="checkbox"
                    name="completed"
                    defaultChecked={content.completed}
                    id="cb1"
                  />
                  <label className="checkbox-label" for="cb1">
                    <div class="tick"></div>
                  </label>
                </div>
              </div>

              <div className="task-desc-checkbox">
                <div className="task-information-container">
                  <div>
                    <h3 className="description">
                      <label htmlFor="description">Description: </label>
                    </h3>
                    <textarea
                      name="description"
                      className="textarea"
                      defaultValue={content.description}
                      type="text"
                    />{" "}
                  </div>

                  <p>
                    Created on:{" "}
                    {moment(content.createdAt).format("MMMM Do, YYYY")}
                  </p>
                </div>

                <div className="edit-task-group">
                  <label htmlFor="completed"> </label>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Task;
