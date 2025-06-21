0x06. Unittests in JS
Project Overview
This project focuses on implementing unit and integration tests in JavaScript using Mocha, Chai, and Sinon. It covers writing test suites, using assertion libraries, spies, stubs, hooks, async testing, and integration testing with a small Node.js server using Express.
Learning Objectives
At the end of this project, you should be able to explain:

How to use Mocha to write a test suite
How to use different assertion libraries (Node assert or Chai)
How to present long test suites using describe
When and how to use spies and stubs with Sinon
What hooks are and when to use them
Unit testing with async functions
How to write integration tests with a small Node server

Requirements

All code executed on Ubuntu 18.04 with Node 12.x.x
Allowed editors: vi, vim, emacs, Visual Studio Code
All files end with a new line
A README.md file at the root of the project directory
Files use the .js extension
Tests run with npm run test <test-file> without warnings or errors

Project Structure

Repository: alx-backend-javascript
Directory: 0x06-unittests_in_js
Files:
package.json
0-calcul.js, 0-calcul.test.js
1-calcul.js, 1-calcul.test.js
2-calcul_chai.js, 2-calcul_chai.test.js
utils.js, 3-payment.js, 3-payment.test.js
4-payment.js, 4-payment.test.js
5-payment.js, 5-payment.test.js
6-payment_token.js, 6-payment_token.test.js
7-skip.test.js
8-api/package.json, 8-api/api.js, 8-api/api.test.js
9-api/package.json, 9-api/api.js, 9-api/api.test.js
10-api/package.json, 10-api/api.js, 10-api/api.test.js



Setup

Initialize the project:npm init -y
npm install mocha chai sinon --save-dev


For tasks 8–10, install additional dependencies in their respective directories:cd 8-api
npm install express request --save
cd ../9-api
npm install express request --save
cd ../10-api
npm install express request --save



Running Tests

For tasks 0–7: Run npm test <test-file> (e.g., npm test 0-calcul.test.js)
For tasks 8–10: Start the server with node api.js in one terminal, then run npm test api.test.js in another.

Tasks

Basic test with Mocha and Node assertion library: Implements calculateNumber and tests with Node's assert.
Combining descriptions: Upgrades calculateNumber to handle multiple operations and uses nested describe blocks.
Basic test using Chai assertion library: Rewrites tests using Chai's expect for BDD style.
Spies: Uses Sinon spies to verify function calls in sendPaymentRequestToApi.
Stubs: Stubs Utils.calculateNumber to return a fixed value and verifies console.log.
Hooks: Uses beforeEach and afterEach hooks for spy setup/teardown.
Async tests with done: Tests an async getPaymentTokenFromAPI function using done.
Skip: Skips a failing test to ensure the suite passes.
Basic Integration testing: Tests an Express server with GET / endpoint.
Regex integration testing: Adds and tests GET /cart/:id with regex validation.
Deep equality & Post integration testing: Tests GET /available_payments and POST /login endpoints.

Author

[Kale Francis]

