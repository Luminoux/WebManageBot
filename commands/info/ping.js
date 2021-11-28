const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'ping',
    description: 'Shows my ping',
    run: async (client, message) => {
        const ping = new MessageEmbed()
            .setTitle('**__PONG! My latencies:__**')
            .addField(`Reply: ${Date.now() - message.createdTimestamp}ms`)
            .addField(`Websocket: ${Math.round(client.ws.ping)}ms`)
            .setTimestamp()
        
        message.reply({ embeds: [ping] })
    }
}