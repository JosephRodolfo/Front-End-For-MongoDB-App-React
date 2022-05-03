import React from 'react';
import { useAuth } from "./AuthProvider";
import { fetchTasks, deleteTask } from "../actions/tasks";
import moment from 'moment';
import { useState } from 'react';



const Task = (props) => {
    const [edited, setEdit] = useState(true);


    const handleEditClick = () => {
        let reverse = !edited
        setEdit(reverse);
      };
    const { token } = useAuth();
return (
  <div>

            <li key={props.index}>
              <div onClick={handleEditClick}>
                {edited ? (
                  <div>
                    <h4>{props.content.description}</h4>
                    <input
                      type="checkbox"
                      onClick={(e) => {
                        console.log(e.target.checked);
                      }}
                      defaultChecked={props.content.completed}
                    />
                  </div>
                ) : (
                  <h2>test</h2>
                )}
              </div>

              <p>{moment(props.content.createdAt).format("MMMM Do, YYYY")}</p>
              <button
                id={props.content._id}
                onClick={(e) => {
              let taskToDelete = e.target.id
              props.taskDeleteParent(taskToDelete);
                }}
              >
                Delete
              </button>
            </li>
          );



  </div>
)}

export default Task;