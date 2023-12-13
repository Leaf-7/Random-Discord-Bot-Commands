const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');
const { mcservstatus } = require("../../logic/mcfetch.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName('mcfetch')
        .setDescription('Fetches server info on a Minecraft server!')
        .addStringOption(option =>
            option.setName('ip')
                .setDescription('The Ip address of the Minecraft Server.')
                .setRequired(true)
        ),
    async execute(interaction) {
        const ip = interaction.options.getString('ip')
        let info = await mcservstatus(ip)
        if (info != "The server is currently offline!"){
            const mcServStat = new EmbedBuilder()
                .setColor(0x11CF16)
                .setTitle(ip)
                .setDescription(info)
            await interaction.reply({ embeds: [mcServStat] });
        }
        else {
            const mcServStat = new EmbedBuilder()
                .setColor(0xFF2F2F)
                .setTitle(ip)
                .setDescription(info)
            await interaction.reply({ embeds: [mcServStat] });
        }
    },
};
