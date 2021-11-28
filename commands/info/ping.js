const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'ping',
    description: 'Shows my ping',
    run: async (client, message) => {

        const pings = {
            'Reply': `${Date.now() - message.createdTimestamp}ms`,
            'Websocket': `${Math.round(client.ws.ping)}ms`
        }
    
        const ping = new MessageEmbed()
            .setTitle('**__PONG! My latencies:__**')
            .setFields(pings)
            .setTimestamp()
        
        message.reply({ embeds: [ping] })
    }
}