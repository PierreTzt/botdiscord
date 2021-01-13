module.exports = client => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setPresence({
    status: 'online',
    activity: {
        name: 'TEXTE',
        type: 'LISTENING',
    }
});
}