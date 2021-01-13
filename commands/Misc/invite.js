const { MessageEmbed } = require("discord.js");

module.exports.run = (client, message, args) => {
    
const embed = new MessageEmbed()
  .setAuthor("test")
  .setColor("#dc143c")
  .setDescription("test")
  //.setThumbnail(user.avatarURL())
  .setTimestamp()
  //.setFooter(message.author.username, message.author.avatarURL());

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