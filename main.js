const { Client, Message } = require('discord.js');
// const { TOKEN , PREFIX } = require('./config');
const client = new Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
    if (message.content === 'Hey') message.channel.send ("Hey !");
    if (message.content.startsWith(`${process.env.PREFIX}Hey`)) message.channel.send ("Hey !");
    if (message.content.startsWith(`${process.env.PREFIX}Bonjour`)) message.channel.send (`Bonjour de la part de tout ${message.guild.name}.`);
    if (message.content.startsWith(`${process.env.PREFIX}Salut`)) message.author.send (`Salut ${message.author.tag}`);
});

client.login(process.env.TOKEN);