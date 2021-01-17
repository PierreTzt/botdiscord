const { MessageEmbed } = require("discord.js");

module.exports = (client, message) => {
  const user = message.author;

  const embed = new MessageEmbed()
    .setAuthor(`${user.username} (${user.id})`)
    .setColor("#ffa500")
    .setDescription(`**Action** : Ouverture ticket\n**Raison** : ${message.content}`)
    .setThumbnail(user.avatarURL())
    .setTimestamp()
    .setFooter(message.author.username, message.author.avatarURL());

  user.send("Nous avons recu votre ticket, on vous répondra tes que possible.")
  client.channels.cache.get('779443908647714819').send(embed);
}
