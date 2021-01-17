const { MessageEmbed } = require("discord.js");

module.exports = (client) => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setPresence({
    status: 'online',
    activity: {
        name: '!vote pour nous soutenir',
        type: 'WATCHING',
    }
});

client.on('message', message => {
        if(message.author.bot) {
          return null                 //returns nothing if the message author is the bot
      
      
      } else if (message.content.startsWith(`$!spam`)) {
          
          timerId = setInterval(() => {                                           //starts to spams the channel
              message.channel.send('spamtest');
          }, 1500);   
      
      
      } else if (message.content.startsWith(`$!stop`)) {
      
          clearInterval(timerId);
          message.channel.send('condition met');
      
      }
    }
)
}