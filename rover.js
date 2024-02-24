const Message = require('./message.js');

class Rover {
   constructor (position) {
      this.position = position;
      this.mode = "NORMAL";
      this.generatorWatts = 110
   }
   receiveMessage(message) {
      let msg = message.name;
      let roverCommands = message.commands
      let results = [];

      for (let i = 0; i < roverCommands.length; i++) {
         if (roverCommands[i].commandType === "STATUS_CHECK") {
            testVariable = "includes status check";
      //  } else testVariable = "does not work"; 
         }
      
      let response = {
         message: msg,
         results: [roverCommands[0], roverCommands[1]]}
         return response;
   }}

module.exports = Rover;