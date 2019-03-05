const Discord = require('discord.js');
const request = require('request');

module.exports = {
  run: (client, message, args) => {
    console.dir(client.guilds.get("452926217558163456").members.map(m=>m.user.id), {'maxArrayLength': null})
  },

  get command() {
    return {
      name: 'wipe',
      category: 'Mods',
      description: 'api',
      usage: 'wipe'
    }
  }

}
