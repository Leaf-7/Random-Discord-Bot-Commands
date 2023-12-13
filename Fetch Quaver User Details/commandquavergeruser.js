const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');
const { quavergetuser } = require("../../logic/quavergetuser.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName('qgetuser')
        .setDescription('Fetches user information on Quaver!')
        .addStringOption(option =>
            option.setName('username')
                .setDescription('Enter username')
                .setRequired(true)
        ),
    async execute(interaction) {
        const user = interaction.options.getString('username')
        let info = await quavergetuser(user)
        if (info != "Invalid username!"){
            const quaverGetUser = new EmbedBuilder()
                .setColor(0x11CF16)
                .setTitle(user)
                .setDescription(info)
            await interaction.reply({ embeds: [quaverGetUser] });
        }
        else {
            const quaverGetUser = new EmbedBuilder()
                .setColor(0xFF2F2F)
                .setTitle(user)
                .setDescription(info)
            await interaction.reply({ embeds: [quaverGetUser] });
        }
    },
};
