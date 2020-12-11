const core = require("@actions/core");

try {
  const helloText = core.getInput("hello-text");
  const textResponse = `${helloText} World!`;
  const arrayResponse = [`${helloText}`, "World!"];
  const envResponse = `${process.env.HELLO_ENV} World!`;
  const secretResponse = `${process.env.HELLO_SECRET} World!`;

  core.setOutput("arrayResponse", arrayResponse);
  core.setOutput("textResponse", textResponse);
  core.setOutput("envResponse", envResponse);
  core.setOutput("secretResponse", secretResponse);
} catch (error) {
  core.setFailed(error.message);
}
