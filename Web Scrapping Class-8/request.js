const request = require("request");

console.log("before");
//after reaching the given websites the callback function will perform the next task
request("https://www.worldometers.info/coronavirus/", cb);

function cb(error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
}

console.log("after");

//statuscode, response given by server in form of some token/number, for user's request is known as statuscode.
//the answer given by server, for client request is known as response.