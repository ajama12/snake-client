const {moveUp, moveLeft, moveRight, moveDown} = require("./constants.js");
// Stores the active TCP connection object.
let connection;
const setupInput = (conn) => {
  connection = conn;


const handleUserInput = function (key) {
  if (key === "\u0003") {
    process.exit();
  }
  if (key === "w") {
    connection.write(MOVE_UP_KEY);
  }
  if (key === "a") {
    connection.write(MOVE_LEFT_KEY);
  }
  if (key === "s") {
    connection.write(MOVE_DOWN_KEY);
  }
  if (key === "d") {
    connection.write(MOVE_RIGHT_KEY);
  }
  if (key === "1") {
    connection.write("Say: This is fun!");
  }
  if (key === "2") {
    connection.write("Say: Let's go!");
  }
};

module.exports = { setupInput };
