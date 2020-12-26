module.exports.run = (client, message, args) => {
  message.channel.send(args.join(" "));
};

module.exports.help = {
  name: "say",
  description: "Répéte le message d'un utilisateur",
  cooldown: 10,
  usage: '<votre_message>',
  args: true
};