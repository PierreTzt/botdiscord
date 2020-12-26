module.exports.run = (client, message, args) => {
  const user = message.mentions.users.first ();
  const reason = args.splice(1).join(' ');
  user ? message.guild.member(user).kick(reason) : message.channel.send("L'utilisateur n'existe pas");
};

module.exports.help = {
  name: "kick",
  aliases: ['kick'],
  description: "Kick un utilisateur",
  cooldown: 10,
  usage: '<votre_message>',
  permissions: false,
  args: true
};