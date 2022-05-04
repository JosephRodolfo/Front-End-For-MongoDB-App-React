import React, { useState, useEffect } from "react";
import { useAuth } from "./AuthProvider";
import { fetchTasks, deleteTask, editTask } from "../actions/tasks";
import { CreateTask } from "./CreateTask";
import Task from "./Task";

const Dashboard = () => {
  const { token } = useAuth();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks(token, setTasks);
  }, [token]);

  const handleCreateTaskParent = (task) => {
    let newTasks = tasks.concat(task);
    setTasks(newTasks);
  };

  const deleteTaskHandler = (taskToDeleteId) => {
    let newTasks = tasks.filter((item) => {
      return item._id !== taskToDeleteId;
    });
    setTasks(newTasks);
    deleteTask(token, taskToDeleteId);
  };

  const editTaskHandler = (id, taskInfo) => {
    editTask(token, id, taskInfo, async (task) => {
      const editedTasks = tasks.map(element =>  {
        return element._id === task._id ? element = task : element;
      } );
      setTasks(editedTasks);
    });
  };

  return (
    <div className="content-container">
      <h1>Task Dashboard</h1>
      <CreateTask createTaskParent={handleCreateTaskParent} />
      <div className="task-list-container">

      {tasks.map((element, index) => {
        return (
          <Task
            key={index}
            index={index}
            taskDeleteParent={deleteTaskHandler}
            taskEditParent={editTaskHandler}
            content={element}
          />
        );
      })}
      </div>
      </div>
  );
};
export default Dashboard;
