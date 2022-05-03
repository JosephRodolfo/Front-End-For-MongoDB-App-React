import React, { useState } from "react";
import { useAuth } from "./AuthProvider";
import { useEffect } from "react";
import { fetchTasks, deleteTask } from "../actions/tasks";
import moment from "moment";
import { CreateTask } from "./CreateTask";
import Task from "./Task";

const Dashboard = () => {
  const { token } = useAuth();
  const [tasks, setTasks] = useState([]);
  const [edited, setEdit] = useState(true);

  useEffect(() => {
    fetchTasks(token, setTasks);
  }, [token]);

  const handleCreateTaskParent = (task) => {
    console.log("parent fired", task);
    let newTasks = tasks.concat(task);
    setTasks(newTasks);
  };

  const handleEditClick = () => {
    let reverse = !edited;
    setEdit(reverse);
  };

  const deleteTaskHandler = (taskToDeleteId) => {
    let newTasks = tasks.filter((item) => {
      return item._id !== taskToDeleteId;
    });
    setTasks(newTasks);
    deleteTask(token, taskToDeleteId);
  };

  return (
    <div>
      <h1>Task Dashboard</h1>
      <CreateTask createTaskParent={handleCreateTaskParent} />

      {tasks.map((element, index) => {
        return (
          <Task
            index={index}
            taskDeleteParent={deleteTaskHandler}
            content={element}
          />
        );
      })}
    </div>
  );
};
export default Dashboard;
{
  /* {(element.completed) ? <input type="checkbox" checked="true"/> :  <input type="checkbox" checked="true"/>} */
}
