const { MessageEmbed } = require("discord.js");

module.exports.run = (client, message, args) => {
    
const embed = new MessageEmbed()
    .setColor(`BLUE`) // ou .setColor(`#0099ff`)
    .setTitle(`Titre du message, maximum 256 caractères`)
    // .setAuthor(`Nom de l'auteur`, `https://mtxserv.com/build/img/favicon/favicon.ico`, `https://mtxserv.com/fr/`)
    // .setAuthor(`${this.client.user.tag}`, `${this.client.user.displayAvatarURL()}`, 'https://mtxserv.com/fr/')
    .setDescription(`Message contenu dans l'embed, maximum 2048 caractères`)
    .setFooter("Pied de page du message")
    .setImage(`https://mtxserv.com/uploads/cover/creer-un-bot-discord-avec-discord-js-discord-191c77d00c4d79bf822422d6a05496bd.jpg`)
    .setThumbnail(`https://mtxserv.com/uploads/banners/ae49ad104085151cbb44e27fffd9f16862cb6f2c.png`)
    .setTimestamp() // Vous pouvez passer un objet Date() en argument
    // Fields
    // Sur une ligne complète :
    .addField(`Titre, maximum 256 caractères`,`Votre texte, maximum 1024 caractères`)
    // Plusieurs sur une même ligne :
    .addField(`Titre 1`,`Votre texte 1`, true)
    .addField(`Titre 2`,`Text avec un [lien](https://mtxserv.com/fr/)`, true)

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