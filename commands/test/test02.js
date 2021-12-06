const { MessageEmbed, Message, Client } = require("discord.js");
const { readdirSync } = require("fs");
let color = "#36393f";
const config = require('../../configs/config.json');

module.exports = {
    name: "test02",
    description: "test02",
    run: async (client, message, args) => {
        let categories = [];

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

        const msg = await message.reply({
            content: help,
            components: hb,
        })
    }
}