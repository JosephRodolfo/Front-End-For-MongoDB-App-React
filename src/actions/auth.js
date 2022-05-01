export const startLogin = async (loginInfo, callback) => {
  fetch(`${process.env.REACT_APP_PORT}/users/login`, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginInfo),
  })
    .then((response) => response.json())
    .then((data) => {
      callback(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

export const startLogout = async (token, callback) => {
  fetch(`${process.env.REACT_APP_PORT}/users/logout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((data) => {
      callback(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
