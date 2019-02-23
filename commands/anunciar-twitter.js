const Discord = require('discord.js');
const Canvas = require('canvas');
const snekfetch = require('snekfetch');
const Twit = require('twit');
const request = require('request');

/*
var T = new Twit({
    consumer_key:         process.env.TWITTER_CONSUMER_KEY,
    consumer_secret:      process.env.TWITTER_CONSUMER_SECRET,
    access_token:         process.env.TWITTER_ACCESS_TOKEN,
    access_token_secret:  process.env.TWITTER_ACCESS_TOKEN_SECRET,
    timeout_ms:           60*1000,
<<<<<<< HEAD
    strictSSL:            true,
=======
    strictSSL:            true,     
>>>>>>> twitter
})
*/

const host = "http://danielgreis.me:8000/users?"

<<<<<<< HEAD
module.exports = {
    run: (client, message, args) => {

=======
>>>>>>> twitter
var Day = new Date().toISOString().split("T")[0];
var id_users = []
request(`${host}${Day}`, (err, res, body) => {
    var info = JSON.parse(body);
    info['data'].forEach(element => {
        id_users.push(element['discord_id'])
    });
<<<<<<< HEAD
            console.log(id_users)
            var name = client.guilds.get(process.env.GUILD_ID).members.get(id_users[1]);
            console.log(`${name.displayName}`)
            })
        },

=======
    console.log(id_users)


    module.exports = {
        run: (client, message, args) => {
            var name = client.user.get('id', id_users[1]);
            console.log(name)
        },
    
>>>>>>> twitter
        get command() {
            return {
              name: 'twitter',
              category: 'Moderator',
<<<<<<< HEAD
              description: 'Divulgação de novos usuarios no twitter.',
              usage: 'twitter'
            }
        }
    }
=======
              description: 'Divulgação de novos usuarios no tt',
              usage: 'Twitter'
            }
        }
    }

})






>>>>>>> twitter
