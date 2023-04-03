// Stores the active TCP connection object.
let connection;
const setupInput = (conn) => {
  connection = conn;


const handleUserInput = function (key) {
  if (key === "\u0003") {
    process.exit();
  }
  if (key === "w") {
    connection.write("Move: up");
  }
  if (key === "a") {
    connection.write("Move: left");
  }
  if (key === "s") {
    connection.write("Move: down");
  }
  if (key === "d") {
    connection.write("Move: right");
  }
  if (key === "1") {
    connection.write("Say: This is fun!");
  }
  if (key === "2") {
    connection.write("Say: Let's go!");
  }
};

module.exports = { setupInput };
