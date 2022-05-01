export const startLogin = async (loginInfo)=>{

console.log(`${process.env.REACT_APP_PORT}/users/login`)


fetch(`${process.env.REACT_APP_PORT}/users/login`, {
  method: 'POST', 

  headers: {
    'Content-Type': 'application/json',
  },
 body: JSON.stringify(loginInfo),
})
.then(response => response.json())
.then(data => {
  console.log(data);
})
.catch((error) => {
  console.error('Error:', error);
});


}

