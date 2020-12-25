module.exports.run = (client, message, args) => {
  message.channe.send=("Pong!");
};

module.exports.help = {
  name: "ping",
  description: "Renvoie pong",
};