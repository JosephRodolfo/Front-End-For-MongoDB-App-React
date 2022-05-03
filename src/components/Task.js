import React from "react";
import moment from "moment";
import { useState } from "react";

const Task = (props) => {
  const [edited, setEdit] = useState(true);

  const handleEditClick = () => {
    setEdit(!edited);
  };

  const handleSave = (e) => {
    e.preventDefault();
    let number = e.currentTarget.id;
    const { completed, description } = document.forms.namedItem(number);
    setEdit(!edited);

    const body = {
      completed: completed.checked,
      description: description.value,
    };

    props.taskEditParent(props.content._id, body);
  };
  return (
    <div>
      <div>
        {edited ? (
          <div>
            <h4>{props.content.description}</h4>
            <input type="checkbox" readOnly checked={props.content.completed} />
            <button onClick={handleEditClick}>Edit</button>
          </div>
        ) : (
          <form id={props.index.toString()} onSubmit={handleSave}>
            <label htmlFor="description">Description</label>
            <input name="description" className="InputTest" type="text" />
            <label htmlFor="completed">Completed</label>

            <input
              type="checkbox"
              name="completed"
              defaultChecked={props.content.completed}
            />
            <button type="submit" id={props.content._id}>
              Save
            </button>
          </form>
        )}
      </div>

      <p>{moment(props.content.createdAt).format("MMMM Do, YYYY")}</p>
      <button
        id={props.content._id}
        onClick={(e) => {
          let taskToDelete = e.target.id;
          props.taskDeleteParent(taskToDelete);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Task;
