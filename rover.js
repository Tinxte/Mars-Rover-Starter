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
               }}

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
         }}

         //TODO see if this works (statuscheck roverstatus object)
      // let completedStatus = {
      //    completed: true
      // }
      
      //    let roverStatus = {
      //    position: this.position,
      //    mode: this.mode,
      //    generatorWatts: this.generatorWatts
      // }

      let response = {
         message: msg,
         results: results,
     }
         return response;
   }}

module.exports = Rover;