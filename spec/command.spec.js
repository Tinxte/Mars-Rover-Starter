const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

describe("Command class", function() {

  it("throws error if command type is NOT passed into constructor as the first parameter", function() {
    expect( function() { new Command();}).toThrow(new Error('Command type required.'));
  });

});

// //Test 2: Create a second Command test using “constructor sets command type” as the description. 

describe("Command class", function() {
 let testClass = new Command("input");
  it("constructor sets command type", function() {
    expect(testClass.commandType).toBe("input");
  });

});

//Test 3: This test checks that the constructor correctly sets the value property in the new object.

describe("Command class", function() {
let testClass = new Command("input1", "input2");
  it("constructor sets a value passed in as the 2nd argument", function () {
    expect(testClass.value).toBe("input2");
  });
});