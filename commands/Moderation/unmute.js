const ms = require("ms");
const { MessageEmbed } = require("discord.js");

module.exports.run = async (client, message, args) => {
  let user = message.guild.member(message.mentions.users.first ());
  let muteRole = message.guild.roles.cache.find(r => r.name === 'muted');

  if (user.roles.cache.has(muteRole.id)) return message.reply("L'utilisateur mentionné n'est pas muté!");
  user.roles.remove(muteRole.id);
  message.channel.send(`<@${user.id}> n'est plus muté`);

  const embed = new MessageEmbed()
  .setAuthor(`${user.user.username} (${user.id})`)
  .setColor("#ffa500")
  .setDescription(`**Action** : unmute`)
  .setThumbnail(user.user.avatarURL())
  .setTimestamp()
  .setFooter(message.author.username, message.author.avatarURL());

  client.channels.cache.get('779443908647714819').send(embed);
};

module.exports.help = {
  name: "unmute",
  aliases: ['unmute'],
  description: "Unmute un utilisateur",
  cooldown: 10,
  usage: '<@user>',
  isUserAdmin: true,
  permissions: true,
  args: true
};