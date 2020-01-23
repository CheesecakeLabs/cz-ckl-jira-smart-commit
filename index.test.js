const sinon = require('sinon');
const chai = require('chai');
const sinonChai = require('sinon-chai');
const expect = chai.expect;
chai.use(sinonChai);

const czJiraSmartCommit = require('./index.js');

describe('prompt for inputs', () => {
  it('should be a function',  () => {
    expect(czJiraSmartCommit.prompter).to.be.a('function');
  });
});

describe('format commits', () => {

  const issues = 'CZ-234 CZ-235';
  const message = 'sample commit message';

  it('should be a function', () => {
    expect(czJiraSmartCommit.formatCommit).to.be.a('function');
  });

  it('should perform a full commit', () => {
    czJiraSmartCommit.formatCommit((result) => {
      expect(result).to.equal('sample commit message CZ-234 CZ-235')
    }, {issues, message});
  });
});
