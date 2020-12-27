const { MessageEmbed } = require("discord.js");

module.exports.run = async (client, message, args) => {
  let user = await client.users.fetch(args[0]);
  if (!user) message.reply("L'utilisateur n'existe pas");
  message.guild.members.unban(user);

  const embed = new MessageEmbed()
  .setAuthor(`${user.username} (${user.id})`, user.avatarURL())
  .setColor("#dc143c")
  .setDescription(`**Action** : unban`)
  .setTimestamp()
  .setFooter(message.author.username, message.author.avatarURL());

client.channels.cache.get('779443908647714819').send(embed);
};

module.exports.help = {
  name: "unban",
  aliases: ['unban'],
  description: "Unban un utilisateur",
  cooldown: 10,
  usage: '<user_id>',
  isUserAdmin: false,
  permissions: true,
  args: true
};