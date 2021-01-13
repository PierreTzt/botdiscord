const { MessageEmbed } = require("discord.js");

module.exports = async (client, channel) => {
  const fetchGuildAuditLogs = await channel.guild.fetchAuditLogs({
    limit: 1,
    type : 'INVITE_DELETE'
  });

  const latestInviteDeleted = fetchGuildAuditLogs.entries.first();
  const { executor } = latestInviteDeleted;

  const embed = new MessageEmbed()
  .setAuthor("Suppression d'une invitation")
  .setColor("#35f092")
  .setDescription("**Action** : Suppression d'une invitation")
  .setTimestamp()
  .setFooter(executor.username, executor.displayAvatarURL());

client.channels.cache.get('779443908647714819').send(embed);
}