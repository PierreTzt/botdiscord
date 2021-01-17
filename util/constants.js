const MESSAGES = {
  COMMANDS : {
    MISC : {
      SAY : {
        name: "say",
        aliases: ['repeat', 'rep'],
        category: 'misc',
        description: "Répéte le message d'un utilisateur",
        cooldown: 10,
        usage: '<votre_message>',
        isUserAdmin: false,
        permissions: false,
        args: true
      }
    }
  }
}

exports.MESSAGES = MESSAGES;