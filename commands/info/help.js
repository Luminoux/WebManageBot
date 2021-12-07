const { MessageEmbed, Message, Client } = require("discord.js");
const { readdirSync } = require("fs");
let color = "#36393f";
const config = require('../../configs/config.json');

module.exports = {
  name: "help",
  aliases: "h",
  description: "Shows all available commands",
  run: async (client, message, args) => {
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

      const embed = new MessageEmbed()
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

      return message.channel.send({ embeds: [embed] });

      let cots = [];
      let catts = [];
    const helpFun = 
      readdirSync("./commands/").forEach((dir) => {
        if (dir.toLowerCase() !== args[0].toLowerCase()) return;
        const commands = readdirSync(`./commands/${dir}/`).filter((file) =>
          file.endsWith(".js")
        );

        const cmds = commands.map((command) => {
          let file = require(`../../commands/${dir}/${command}`);

          if (!file.name) return "No command name.";

          let name = file.name.replace(".js", "");

          let des = `${client.commands.get(name).description}`;
          let emo = `✅`;

          let obj = {
            cname: `${emo} \`${name}\``,
            des,
          };

          return obj;
        });

        let dota = new Object();

        cmds.map((co) => {
          dota = {
            name: `${cmds.length === 0 ? "In progress" : co.cname}`,
            value: co.des ? co.des : "No Description",
            inline: true,
          };
          catts.push(dota);
        });

        cots.push(dir.toLowerCase());
      });
			
      const command =
        client.commands.get(args[0].toLowerCase()) ||
        client.commands.find(
          (c) => c.aliases && c.aliases.includes(args[0].toLowerCase())
        );

        const combed = new MessageEmbed()
          .setTitle(
            `__${
              args[0].charAt(0).toUpperCase() + args[0].slice(1)
            } Commands!__`
          )
          .setDescription(
            `Use \`${config.prefix}help\` followed by a command name to get more information on a command.\nFor example: \`${config.prefix}help ping\`\n\n`
          )
          .addFields(catts)
          .setColor(color);

      const embed = new MessageEmbed()
        .setTitle("Command Details:")
        .addField(
          "Command:",
          command.name ? `\`${command.name}\`` : "No name for this command."
        )
        .addField(
          "Aliases:",
          command.aliases
            ? `\`${command.aliases.join("` `")}\``
            : "No aliases for this command."
        )
        .addField(
          "Usage:",
          command.usage
            ? `\`${config.prefix}${command.name} ${command.usage}\``
            : `\`${config.prefix}${command.name}\``
        )
        .addField(
          "Command Description:",
          command.description
            ? command.description
            : "No description for this command."
        )
        .setFooter(
          `Requested by ${message.author.tag}`,
          message.author.displayAvatarURL({
            dynamic: true,
          })
        )
        .setTimestamp()
        .setColor(color);
                
        const msg = await message.channel.send({
          content: help,
          embeds: [help],
          components: hb,
      })

      const filter = button => {
        return button.user.id === message.author.id;
      };
      const button = await msg.awaitMessageComponent({ filter: filter, componentType: 'BUTTON', max: 1 });
  
      const test = new MessageEmbed()
        .setTitle('**THE TEST SUCCEEDED**')
        .setDescription('**HELL YES I KNOW YOU ARE HAPPY**');

    if(button.customId == hb.fun) {
      msg.edit({
        content: test,
        embeds: [test],
        components: hb,
      })
      }
    }
  };