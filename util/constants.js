const MESSAGES = {
  COMMANDS : {
    ADMIN: {
      EVAL: {
        name: "eval",
        aliases: ['eval'],
        category: 'admin',
        description: "Renvoi un code javascript testé",
        cooldown: 3,
        usage: '<cote_to_test>',
        isUserAdmin: false,
        permissions: true,
        args: true
      },

      CONFIG: {
        name: "config",
        aliases: ['config'],
        category: 'admin',
        description: "Modifier la base de données",
        cooldown: 3,
        usage: '<key> <value>',
        isUserAdmin: false,
        permissions: true,
        args: true
      }
    },
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
      },
    
    PING : {
      name: "ping",
      aliases: ['ping'],
      category: 'misc',
      description: "Renvoie pong!",
      cooldown: 10,
      usage: '',
      isUserAdmin: false,
      permissions: true,
      args: false
      }
    }
  }
}

exports.MESSAGES = MESSAGES;