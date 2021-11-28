//It is just demonstration, that how doing by things we learn things too, in wed-dev specially it's not necessary
//to know all the concepts beforehand, while making any project, we can google out things, that we don't know, and
//that's how we can continue our journey of making a project.

const inquirer = require('inquirer');//requring module
const cp = require('child_process');

function displayDetails() {
  inquirer
    .prompt([
      /* Pass your questions in here */
      {
        type: 'list',
        name: 'Selection',
        choices: ['About', 'Skills', 'Academics', 'Projects', 'Exit']
      }
    ]).then((choices) => {
      // Use user feedback for... whatever!!
      if (choices.Selection == 'About') {
        console.log(`I'm a full stack web developer, with impressive problem solving skills, 
                     and the ability to perform well in a team, always curious to learn
                     something new and challenging.`);
        displayNext();
      } else if (choices.Selection == 'Skills') {
        console.log("C, C++, Java, Javascript, HTML, CSS, Node.js, Express.js, MongoDB, MySQL");
        displayNext();
      } else if (choices.Selection == 'Academics') {
        cp.execSync('start chrome https://drive.google.com/file/d/1GZGpeFP8gB77NuTDDFwrHeCjWNYhAwNU/view?usp=sharing');
        displayNext();
      } else if (choices.Selection == 'Projects') {
        cp.execSync('start chrome https://github.com/theGDM');
        displayNext();
      } else {
        return;
      }
      
    }).catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
}

displayDetails();

function displayNext() {
  inquirer
    .prompt([
      /* Pass your questions in here */
      {
        type: 'list',
        name: 'GoBack',
        choices: ['back']
      }
    ]).then((choices) => {
      // Use user feedback for... whatever!!
      if (choices.GoBack == 'back') {
        displayDetails();
      }
      
    }).catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
}
