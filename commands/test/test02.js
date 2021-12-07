const { MessageEmbed, Message, Client } = require("discord.js");
const { readdirSync } = require("fs");
let color = "#36393f";
const config = require('../../configs/config.json');

module.exports = {
    name: "test02",
    description: "test02",
    run: async (client, message, args) => {
        let categories = [];
        let ignored = ["util", "database", "db"];

        const emo = {
          info: "❓",
          fun: "🎮",
          mod: "👁",
          games: "🎲",
          test: "🖼️"
        };
  
        const catinfo = {
          info: "info land",
          fun: "fun land",
          mod: "punish those baddies from existence",
          games: "gaymerland",
          test: "testing"
        };
        
        const hb = [
            {
                type: 1,
                components: [
                    {
                        type: 2,
                        style: 'PRIMARY',
                        custom_id: 'fun',
                        label: 'FUN',
                    },
                    {
                        type: 2,
                        style: 'PRIMARY',
                        custom_id: 'games',
                        label: 'GAMES',
                    },
                    {
                        type: 2,
                        style: 'PRIMARY',
                        custom_id: 'info',
                        label: 'INFO'
                    },
                    {
                        type: 2,
                        style: 'PRIMARY',
                        custom_id: 'mod',
                        label: 'MOD',
                    },
                    {
                        type: 2,
                        style: 'PRIMARY',
                        custom_id: 'test',
                        label: 'TEST',
                    },
                ]
            }
        ];

        const help = 
          readdirSync("./commands/").forEach((dir) => {
            if (ignored.includes(dir.toLowerCase())) return;
            const name = `${emo[dir.toLowerCase()]} ${dir.toUpperCase()} - ${catinfo[dir.toLowerCase()]}`;
            let cats = new Object();
    
            cats = {
              name: name,
              value: `\`${config.prefix}help ${dir.toLowerCase()}\``,
              inline: false,
            };
    
            categories.push(cats);
          });

        const mainHelp = new MessageEmbed()
          .setTitle(`\`\`Help Menu\`\``)
          .setDescription(`\`\`My Prefix is : ${config.prefix} \`\`\n \`\`\` Presented By Luminoux Studios \`\`\` \n To check out a category, use command ${config.prefix}help [category] \n\n [Invite Me Now](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot%20applications.commands) \n [My Support Server](https://discord.gg/m5xUeZj7Xb) \n [My Other Server](https://discord.gg/aFCQSyzNU8)`)
          .addFields(categories)
          .setFooter(
            `Requested by ${message.author.tag}`,
            message.author.displayAvatarURL({
              dynamic: true,
            })
          )
          .setTimestamp()
          .setThumbnail(
            client.user.displayAvatarURL({
              dynamic: true,
            })
          )
          .setColor(color);
        
        const msg = await message.channel.send({
            content: help,
            embeds: [mainHelp],
            components: hb,
        })

        const filter = button => {
          return button.user.id === message.author.id;
        };
        const button = await msg.awaitMessageComponent({ filter: filter, componentType: 'BUTTON', max: 1 });
    
        const test = new MessageEmbed()
          .setTitle('**THE TEST SUCCEEDED**')
          .setDescription('**HELL YES I KNOW YOU ARE HAPPY**');

        if(button.customId == fun) {
            msg.edit({
                content: test,
                embeds: [test],
                components: hb,
            })
        }
    }
}