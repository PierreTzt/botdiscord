const { MessageEmbed } = require("discord.js");

module.exports.run = (client, message, args) => {
  const user = message.mentions.users.first ();
  const reason = (args.splice(1).join(' ') || 'Aucune raison spécifiée');
  user ? message.guild.member(user).ban(reason) : message.channel.send("L'utilisateur n'existe pas");

  const embed = new MessageEmbed()
  .setAuthor(`${user.username} (${user.id})`)
  .setColor("#dc143c")
  .setDescription(`**Action** : ban\n**Raison** : ${reason}`)
  .setThumbnail(user.avatarURL())
  .setTimestamp()
  .setFooter(message.author.username, message.author.avatarURL());

client.channels.cache.get('779443908647714819').send(embed);
};

module.exports.help = {
  name: "ban",
  aliases: ['ban'],
  description: "Kick un utilisateur",
  cooldown: 10,
  usage: '<votre_message>',
  isUserAdmin: true,
  permissions: true,
  args: true
};