const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
	name: 'test01',
	description: "a test command",
	run: async (client, message, args) => {
        const gameEnded = false;
		
		const help = [
			{
				type: 1,
				components: [
					{
						type: 2,
						style: 'PRIMARY',
						custom_id: '1',
						label: '1',
					},
					{
						type: 2,
						style: 'PRIMARY',
						custom_id: '2',
						label: '2',
					},
					{
						type: 2,
						style: 'PRIMARY',
						custom_id: '3',
						label: '3',
					},
				],
			},
		];

		const msg = await message.channel.send({
			content: 'test',
			components: help,
		});
		function update() {
			randomized = Math.floor(Math.random() * Object.keys(positions).length);
			randomPos = positions[Object.keys(positions)[randomized]];

			msg.edit({
				content: 'test01',
				components: help,
			});
		}
		const filter = button => {
			return button.user.id === message.author.id;
		};
		const button = await msg.awaitMessageComponent({ filter: filter, componentType: 'BUTTON', max: 1 });

		if(button.customId !== Object.keys(positions)[randomized]) {
			gameEnded = true;
			return button.reply({ content: 'epicc win' });
		}
		else {
			gameEnded = true;
			return button.reply({ content: 'epicc fail' });
		}
	},
};