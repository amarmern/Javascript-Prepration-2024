//Register
//send email
//login
//getUserData
//displayuserData

function register() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Register User END!!');
      resolve();
    }, 1000);
  });
}
function sendEmail() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Send email END!!');
      resolve();
    }, 3000);
  });
}
function login() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('login END!!');
      resolve();
    }, 1000);
  });
}
function getUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('get users data END!!');
      resolve();
    }, 2000);
  });
}
function displayUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Display Users END!!');
      resolve();
    }, 500);
  });
}

async function authenticateUser() {
  try {
    await register();
    await sendEmail();
    await login();
    await getUserData();
    await displayUserData();

    console.log('Welcome user!!');
  } catch (err) {
    console.error('Error:', err);
  }
}

authenticateUser();
