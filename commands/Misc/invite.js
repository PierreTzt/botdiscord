module.exports.run = (client, message, args) => {
    message.channel.send("Pong!");
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