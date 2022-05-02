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

  } catch (e) {}
};
