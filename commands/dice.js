const { MessageEmbed, MessageAttachment } = require("discord.js");
const diceImg = new MessageAttachment('./assets/img/logo.jpg');
const randomDice = () => Math.floor(Math.random() * 6) + 1;

module.exports = {
  name : `dice`,
  desciption: `Renvoi un chiffre au hasard`,
  execute(client, message, args) {
      const embed = new MessageEmbed()
        .setColor("#dc198c")
        .setTitle("Random dice")
        .attachFiles(diceImg)
        .setThumbnail('attachment://logo.jpg')
        .addFields(
          { name : 'D1', value : randomDice(), inline: true },
          { name : 'D2', value : randomDice(), inline: true },
          { name : 'D3', value : randomDice(), inline: true }
        )
        .addFields(
          { name : 'D4', value : randomDice(), inline: true },
          { name : 'D5', value : randomDice(), inline: true },
          { name : 'D6', value : randomDice(), inline: true }
        )
        message.channel.send(embed);
  }
}