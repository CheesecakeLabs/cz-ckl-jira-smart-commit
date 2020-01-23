var inquirer = require('inquirer')

// This can be any kind of SystemJS compatible module.
// We use Commonjs here, but ES6 or AMD would do just
// fine.
module.exports = {
  prompter: prompter,
  formatCommit: formatCommit
};

// When a user runs `git cz`, prompter will
// be executed. We pass you cz, which currently
// is just an instance of inquirer.js. Using
// this you can ask questions and get answers.
//
// The commit callback should be executed when
// you're ready to send back a commit template
// to git.
//
// By default, we'll de-indent your commit
// template and will keep empty lines.
function prompter(cz, commit) {

  // Let's ask some questions of the user
  // so that we can populate our commit
  // template.
  //
  // See inquirer.js docs for specifics.
  // You can also opt to use another input
  // collection library if you prefer.
  inquirer.prompt([
    {
      type: 'input',
      name: 'issues',
      message: 'Jira Issue ID(s) (required):\n',
      validate: function(input) {
        if (!input) {
          return 'Must specify issue IDs, otherwise, just use a normal commit message';
        } else {
          return true;
        }
      }
    },
    {
      type: 'input',
      name: 'message',
      message: 'GitHub commit message (required):\n',
      validate: function(input) {
        if (!input) {
          return 'empty commit message';
        } else {
          return true;
        }
      }
    },
  ]).then((answers) => {
    formatCommit(commit, answers);
  });
}

function formatCommit(commit, answers) {
  commit(filter([
    answers.message,
    answers.issues,
  ]).join(' '));
}

function filter(array) {
  return array.filter(function(item) {
    return !!item;
  });
}
