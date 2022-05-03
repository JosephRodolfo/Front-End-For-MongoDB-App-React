import React, { useState } from "react";
import { useAuth } from "./AuthProvider";
import { useEffect } from "react";
import { fetchTasks, deleteTask } from "../actions/tasks";
import moment from "moment";
import { CreateTask } from "./CreateTask";

const Dashboard = () => {
  const { token } = useAuth();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    
    fetchTasks(token, setTasks);
  }, [token]);


  const handleCreateTaskParent = (task) => {
    console.log("parent fired", task);
    let newTasks = tasks.concat(task);
    setTasks(newTasks);
  }


  return (
    <div>
      <h1>Task Dashboard</h1>
      <CreateTask createTaskParent={handleCreateTaskParent}/>
      {token ? (
        tasks.map((element, index) => {
          return (
              <li key={index}>
                <h4>{element.description}</h4>
                {(element.completed) ? <p>Completed</p> : <p>Not Completed</p>}
                <p>{moment(element.createdAt).format("MMMM Do, YYYY")}</p>
                <button id={element._id} onClick={(e)=>{
                  let newTasks = tasks.filter((item)=>{return item._id  !== e.target.id});
                  setTasks(newTasks);
                  deleteTask(token, element._id);
                }}>Delete</button>
                </li>
          );
        })
      ) : (
        <h1>Tejjjjst</h1>
      )}
    </div>
  );
};
export default Dashboard;
