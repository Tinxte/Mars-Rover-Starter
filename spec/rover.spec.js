const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


// Test 7: constructor sets position and default values for mode and generatorWatts

describe("Rover class", function() {
  let testRover = new Rover(98382)
  it('constructor sets position and default values for mode and generatorWatts', function () {
      expect(testRover.position).toBe(98382);
      expect(testRover.mode).toBe("NORMAL");
      expect(testRover.generatorWatts).toBe(110);
  });
});

// Test 8: “response returned by receiveMessage contains the name of the message”

describe("Rover class", function() {
  let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
  let message = new Message('Test message with two commands', commands);
  let testRover = new Rover(98382)
    it('response returned by receiveMessage contains the name of the message', function () {
    expect(testRover.receiveMessage(message)["message"]).toContain('Test message with two commands');
  });
});

// Test 9: “response returned by receiveMessage includes two results if two commands are sent in the message”

describe("Rover class", function() {
  let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
  let message = new Message('Test message with two commands', commands);
  let testRover = new Rover(98382)
    it('response returned by receiveMessage includes two results if two commands are sent in the message', function () {
    expect(testRover.receiveMessage(message).results.length).toEqual(commands.length);
  });
});

// Test 10: “responds correctly to the status check command”

describe("Rover class", function() {
  let commands = [new Command('STATUS_CHECK')];
  let message = new Message('Testing Status Check', commands);
  let testRover = new Rover(98382)
    it('responds correctly to the status check command', function () {
    // expect(testRover.receiveMessage(message).results).toContain({roverStatus: {mode: 'NORMAL', generatorWatts: 110, position: 98382}});
    expect(testRover.receiveMessage(message).results[0].roverStatus).toEqual({mode: 'NORMAL', generatorWatts: 110, position: 98382});
  });
});

// TODO 
// Test 11: 
