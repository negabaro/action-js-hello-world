const core = require("@actions/core");
const github = require("@actions/github");

try {
  const nameToGreet = core.getInput("who-to-greet");
  const res = `Hello ${nameToGreet}!`;
  const resEnv = `env is ${process.env.HELLO_ENV}`;
  const resSecret = `secret is ${process.env.HELLO_SECRET}`;
  //console.log(res);
  core.setOutput("res", res);
  core.setOutput("resEnv", resEnv);
  core.setOutput("resSecret", resSecret);
  // Get the JSON webhook payload for the event that triggered the workflow
  //const payload = JSON.stringify(github.context.payload, undefined, 2);
  //console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
