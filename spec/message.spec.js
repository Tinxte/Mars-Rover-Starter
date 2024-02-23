const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


// Test 4: throws error if a name is NOT passed into the constructor as the first parameter

describe("Message class", function() {
        it('throws error if a name is NOT passed into the constructor as the first parameter', function () {
            expect( function () {new Message()}).toThrow("Error! Name required.");
        });
});


// Test 5: The test confirms that the constructor in the Message class correctly sets the name property in a new message object.

describe("Message class", function() {
    let testMessage = new Message("Test Name");
    it('constructor sets name', function (){
        expect(testMessage.name).toBe("Test Name");
    });
});

// Test 6: This test confirms that the commands property of a new message object 
// contains the data passed in from the Message(name, commands) call.

describe("Message class", function() {
    let testArray = new Command("input1", "input2");
    let testMessage = new Message("Test", testArray);
    it('contains a commands array passed into the constructor as the 2nd argument', function (){
        expect(testMessage.commands).toBe(testArray);
    });
});