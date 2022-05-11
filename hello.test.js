const hello = require("./hello");
const core = require('@actions/core');
const github = require('@actions/github');

try{ 


describe("My hello", () => {
  test("works", () => {
    expect(hello.hello()).toEqual("Hello World");
  });
});
}catch (error) {
  core.setFailed(error.message);
}