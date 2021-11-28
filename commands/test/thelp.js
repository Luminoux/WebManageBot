const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    name: 'thelp',
    description: 'a version of the help command for testing',
    run: async (client, message, args) => {
        const e = new MessageEmbed()
            .setTitle('test Help')
            .setDescription('i am a new help command lmao')
        
        const r = new MessageActionRow()
        .addComponents(
            new MessageButton()
                .setCustomId('1')
                .setLabel('1')
                .setStyle('PRIMARY'),
            new MessageButton()
                .setCustomId('2')
                .setLabel('2')
                .setStyle('SECONDARY'),
            new MessageButton()
                .setCustomId('3')
                .setLabel('BAD')
                .setStyle('DANGER')
                .setDisabled('true')
        );
        
    return message.reply({ content: 'hihi', embeds: [e], components: [r] })
    }
}