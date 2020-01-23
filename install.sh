#!/bin/bash
echo "Installing Commitizen Globally"
npm install -g commitizen

echo "Installing CKL JIRA Smart Commits"
npm install -g cz-ckl-jira-smart-commit

echo "Creating a global config file"
echo '{ "path": "/usr/local/lib/node_modules/cz-ckl-jira-smart-commit/" }' > ~/.czrc
