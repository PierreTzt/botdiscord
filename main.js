const { Client, Collection } = require('discord.js');
//const { PREFIX } = require('./config');
const { loadCommands, loadEvents } = require("./util/loader")

const client = new Client();
client.mongoose = require("./util/mongoose");

["commands", "cooldowns"].forEach(x => client[x] = new Collection());

loadCommands(client);
loadEvents(client);
client.mongoose.init();

client.login(process.env.TOKEN);