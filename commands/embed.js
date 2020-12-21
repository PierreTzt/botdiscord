const { MessageEmbed } = require("discord.js");

module.exports = {
  name : `embed`,
  desciption: `Renvoi un embed`,
  execute(client, message, args) {
      const embed = new MessageEmbed()
        .setColor("#dc143c")
        .setTitle("Titre pour voir")
        .setURL("https://google.com")
        .setDescription("Description pour voir")
        .setThumbnail(client.user.displayAvatarURL())
        //.setField("Je suis un champ", "et la valeur")
        //.setFields(
        //  { name : 'Je suis un champ', value : 'champs un', inline: true },
        //  { name : 'Je suis deux champs', value : 'champs deux', inline: true }
        //)
        .setImage(client.user.displayAvatarURL())
        .setTimestamps()
        .setFooter("Je suis sur le pied du footer");

        message.channel.send(embed);
  }
}