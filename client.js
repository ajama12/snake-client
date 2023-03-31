const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });

  conn.on("data", () => {
    // message when idling for too long
    console.log("you ded cuz you idled");
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server!");
    conn.write("Name: AMJ");
  });

  // setTimeout((connect) => {
  //   console.log("Delayed for 2 seconds.");
  //   conn.write("Move: up");
  // }, "2000");

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

connect();

module.exports = connect;