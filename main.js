const { Client, Message } = require('discord.js');
const client = new Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
    if (message.content === 'ping') message.reply ('Jsuis pas ton pote')
  }
);

client.login(process.env.TOKEN);