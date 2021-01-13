module.exports = client => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setPresence({
    status: 'online',
    activity: {
        name: 'la version 1.0',
        type: 'WATCHING',
    }
});
}