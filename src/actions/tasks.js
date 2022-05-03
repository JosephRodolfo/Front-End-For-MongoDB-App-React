export const fetchTasks = async (token, setState) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_PORT}/tasks`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    let data = await response.json();
    setState(data);
  } catch (e) {
    console.error(`Could not get tasks: ${e}`);
  }
};

export const deleteTask = async (token, idParam, setState) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_PORT}/tasks/${idParam}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

  } catch (e) {
    console.error(`Could not delete task: ${e}`);

  }
};

export const startCreateTask = async (taskInfo, token, setTasks) =>{

  try {
    const response = await fetch(
      `${process.env.REACT_APP_PORT}/tasks`,
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",

        },
        body: JSON.stringify(taskInfo),

      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    let data = await response.json();
    setTasks(data);
  } catch (e) {
    console.error(`Could not add task: ${e}`);

  }


}
