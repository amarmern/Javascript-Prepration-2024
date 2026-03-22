//Register
//send email
//login
//getUserData
//displayuserData

function register(cb) {
  setTimeout(() => {
    console.log('Register User END!!');
    cb();
  }, 1000);
}
function sendEmail(cb) {
  setTimeout(() => {
    console.log('Send email END!!');
    cb();
  }, 3000);
}
function login(cb) {
  setTimeout(() => {
    console.log('login END!!');
    cb();
  }, 1000);
}
function getUserData(cb) {
  setTimeout(() => {
    console.log('get users data END!!');
    cb();
  }, 2000);
}
function displayUserData(cb) {
  setTimeout(() => {
    console.log('Display Users END!!');
    cb();
  }, 1000);
}

register(function () {
  sendEmail(function () {
    login(function () {
      getUserData(function () {
        displayUserData(function () {});
      });
    });
  });
});
