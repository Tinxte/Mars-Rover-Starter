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

      //Mode_change function
      for (let i = 0; i < roverCommands.length; i++) {
               if (roverCommands[i].commandType === "MODE_CHANGE") {
                  let completedStatus = {
                     completed: true
                  }
               this.mode = roverCommands[i].value
                results.push(completedStatus);
               }};

       // Move command; Check if in low_power mode and return false for movement
       for (let i = 0; i < roverCommands.length; i++) {
         if (roverCommands[i].commandType === "MOVE") {
            if (this.mode === "NORMAL") {
            let completedStatus = {
               completed: true
            };
            this.position = roverCommands[i].value;
            results.push(completedStatus);
         }
            else if (this.mode === "LOW_POWER") {
               let completedStatus = {
                  completed: false
               }
            results.push(completedStatus);
            }
         }};


      //Status Check function
      for (let i = 0; i < roverCommands.length; i++) {
         if (roverCommands[i].commandType === "STATUS_CHECK") {
         
            let roverStatus = {
               mode: this.mode,
               generatorWatts: this.generatorWatts,
               position: this.position
               };
            let statusCheck = {
                  completed: true,   
                  roverStatus: roverStatus
               }
               results.push(statusCheck);
         }};

      let response = {
         message: msg,
         results: results,
     }
         return response;
   }}

module.exports = Rover;