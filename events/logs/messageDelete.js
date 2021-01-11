const { MessageEmbed } = require("discord.js");

module.exports = async (client) => {
  const fetchGuildAuditLogs = await message.guild.fetchAuditLogs({
    limit: 1,
    type : 'MESSAGE_DELETE'
  });

  const latestMessageDeleted = fetchGuildAuditLogs.entries.first();
  const { executor } = latestMessageDeleted;

  const embed = new MessageEmbed()
  .setAuthor("Suppression d'un message")
  .setColor("#dc143c")
  .setDescription(`**Action** : Suppression de message\n**Message supprimé** : ${message.content}\n**Auteur du message**: ${message.author}`)
  .setTimestamp()
  .setFooter(executor.username, executor.displayAvatarURL());

client.channels.cache.get('779443908647714819').send(embed);
}