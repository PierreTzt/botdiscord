const { MessageReaction } = require("discord.js")

module.exports = (client, MessageReaction, user) => {
  const message = MessageReaction.message;
  const member = message.guild.members.cache.get(user.id);
  const emoji = MessageReaction.emoji.name;
  const channel = message.guild.channels.cache.find(c => c.id === '779443908647714819')
  const fortniteRole = message.guild.roles.cache.get("778974539048419359");
  if(member.user.bot) return;

  if(["Candycane"].includes(emoji) && message.channel.id === channel.id) {
    switch (emoji) {
      case "Candycane" :
        member.roles.add(fortniteRole);
        message.channel.send(`Le rôle ${fortniteRole.name} a été ajouté avec succès!`);
        break;
    }
  }
}