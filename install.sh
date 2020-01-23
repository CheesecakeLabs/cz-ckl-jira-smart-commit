#!/bin/bash
echo "Installing Commitizen Globally"
npm install -g commitizen

echo "Installing CKL JIRA Smart Commits"
npm install -g @cheesecakelabs/cz-ckl-jira-smart-commit

echo "Creating a global config file"
echo '{ "path": "/usr/local/lib/node_modules/@cheesecakelabs/cz-ckl-jira-smart-commit/" }' > ~/.czrc
