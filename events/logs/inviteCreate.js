const { MessageEmbed } = require("discord.js");

module.exports = async (client, channel) => {
  const fetchGuildAuditLogs = await channel.guild.fetchAuditLogs({
    limit: 1,
    type : 'INVITE_CREATE'
  });

  const latestInviteCreated = fetchGuildAuditLogs.entries.first();
  const { executor } = latestInviteCreated;

  const embed = new MessageEmbed()
  .setAuthor("Création d'une nouvelle invitation")
  .setColor("#35f092")
  .setDescription(`**Action** : Création d'une nouvelle invitation\n**Code créé** : ${invite.code}`)
  .setTimestamp()
  .setFooter(executor.username, executor.displayAvatarURL());

client.channels.cache.get('779443908647714819').send(embed);
}