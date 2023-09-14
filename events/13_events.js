const EventEmitter = require("events");
const eventEmitter = new EventEmitter();
eventEmitter.on("Greet", (name, id) => {
  console.log(`Good Afternoon ${name} id:${id}`);
});
eventEmitter.emit("Greet", "Arnab", 9);
