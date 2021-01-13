const { MessageEmbed } = require("discord.js");

module.exports.run = (client, message, args) => {
    
const embed = new MessageEmbed()
    .setColor(`BLUE`) // ou .setColor(`#0099ff`)
    .setTitle(`INVITATION`)
    .setAuthor(`Corner Geek`, `https://cdn.discordapp.com/emojis/790939549681057814.png`)
    // .setAuthor(`${this.client.user.tag}`, `${this.client.user.displayAvatarURL()}`, 'https://mtxserv.com/fr/')
    .setDescription(`👍 Tu souhaites nous soutenir ?\n👍 Envie de nous donner un coup de pouce ?\n`)
    // .setFooter("Pied de page du message")
    .setImage(`https://mtxserv.com/uploads/cover/creer-un-bot-discord-avec-discord-js-discord-191c77d00c4d79bf822422d6a05496bd.jpg`)
    // .setThumbnail(`https://mtxserv.com/uploads/banners/ae49ad104085151cbb44e27fffd9f16862cb6f2c.png`)
    // .setTimestamp() // Vous pouvez passer un objet Date() en argument
    // Fields
    // Sur une ligne complète :
    .addField(`Tu peux le faire en votant pour nous ! N'hésite pas !`,`Cela prends **2 secondes** et nous apporte une plus grande visibilité pour pouvoir amener plus de monde ! `)
    // Plusieurs sur une même ligne :
    .addField(`Top-Serveur`,`[ici](https://top-serveurs.net/discord/corner-geek)`, true)
    .addField(`Disbord`,`!d bump dans le chat`, true)
    .addField(`DiscordDL`,`!$ bump dans le chat ou [ici](https://www.discordl.org/serveurs/778368411620474910)`, true)
    .addField(`1 vote par IP toutes les 2 heures !`)

client.channels.cache.get('779443908647714819').send(embed);

};
  
  module.exports.help = {
    name: "invite",
    aliases: ['invite'],
    category: 'misc',
    description: "Le lien pour inviter vos amies!",
    cooldown: 10,
    usage: '',
    isUserAdmin: false,
    permissions: true,
    args: false
  };