export const startLogin = async (loginInfo, callback, redirectOnSuccess) => {
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

      if (data.token) {
        redirectOnSuccess();
      } else {
        return;
      }
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

export const startCreateUser = async (
  createUserInfo,
  callback,
  redirectOnSuccess
) => {
  fetch(`${process.env.REACT_APP_PORT}/users`, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(createUserInfo),
  })
    .then((response) => response.json())

    .then((data) => {
      callback(data);
      redirectOnSuccess();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
