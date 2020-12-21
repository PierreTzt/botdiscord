const { Client, Message } = require('discord.js');
const { PREFIX } = require('./config');
const client = new Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
    if (message.content === 'Hey') message.channel.send ("Hey !")
  }
);

client.on('message', message => {
    if (message.content.startsWith(`${PREFIX}Hey`)) message.channel.send ("Hey !")
});

client.login(process.env.TOKEN);