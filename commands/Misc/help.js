const { MessageEmbed } = require("discord.js");
const { PREFIX } = require("../../config");
const { readdirSync } = require("fs");
const categoryList = readdirSync('./commands');

module.exports.run = (client, message, args) => {
console.log(client.commands.filter(cat => cat.help.category === 'misc'));

  if (!args.length) {
    const embed = new MessageEmbed()
      .setColor("#36393F")
      .addField("Liste des commandes", `Une liste de toutes les sous-catégories disponibles et leurs commandes\nPour plus d'informations sur une commande, taper \`${PREFIX}help <command_name>\``)

    for (const category of categoryList) {
      embed.addField(
        `${category}`,
        `${client.commands.filter(cat => cat.help.category === category.toLowerCase()).map(cmd => cmd.help.name).join(', ')}`
      );
    };

    return message.channel.send(embed);
  }
};

module.exports.help = {
  name: "help",
  aliases: ['help'],
  category: 'misc',
  description: "Renvoie une liste de commandes ou les informations sur une seule",
  cooldown: 3,
  usage: '<command_name>',
  isUserAdmin: false,
  permissions: false,
  args: false
};