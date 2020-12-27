const { MessageEmbed } = require("discord.js");

module.exports.run = async (client, message, args) => {
  let user = message.guild.member(message.mentions.user.first());
  if (isNaN(args[1]) || (args[1] <1 || args[1 > 100])) return message.reply('Il faut spcécifier un ***nombre*** entre 1 et 100!');

  const messages = (await message.channel.messages.fetch({
    limit: 100,
    before: message.id,
  })).filter (a => a.author.id === user.id).array();

  messages.length = Math.min(args[1], messages.length)

  if (messages.length === 0 || !user) return message.reply('Aucun message à supprimer sur cette utilisateur (ou cet utiliszteur n\'existe pas).');

  if (message.length === 1) await message[0].delete();
  else await message.channel.bulkDelete(messages);

  message.delete();

  const embed = new MessageEmbed()
  .setAuthor(message.author.username, message.author.avatarURL())
  .setColor("#dc143c")
  .setDescription(`**Action** : Purge\n**Nbr de message** : ${args[1]}\n**Utilisateur**: ${args[0]}`)

  client.channels.cache.get('779443908647714819').send(embed);
};

module.exports.help = {
  name: "prune",
  aliases: ['prune'],
  category: 'moderation',
  description: "Pour un nombre de message spécifié sur un utilisateur spécifier",
  cooldown: 10,
  usage: '<@user> <nbr_messages>',
  isUserAdmin: true,
  permissions: true,
  args: true
};