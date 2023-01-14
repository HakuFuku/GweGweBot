const { EmbedBuilder } = require("discord.js");

let player = { mana: 100, force: 100 };
let damage = 0;
const critChance = 1;
let isCrit = false;
let seuil = 350;
let multiplier = Math.floor(Math.random() * (300 - 100 + 1) + 100) / 100;

function reset() {
    isCrit = false;
    multiplier = Math.floor(Math.random() * (300 - 100 + 1) + 100) / 100;
    if (multiplier >= seuil) {
        multiplier = seuil / 100;
        isCrit = true;
    }
    damage = Math.ceil(player.force * multiplier);
}

module.exports = async (_, message) => {
    if(message.author.bot) return;
    if(message.content !== "=SlashFoudroyant") return;
    let player = { mana: 100, force: 100 };
    let damage = 0;
    const critChance = 0.05;
    let isCrit = false;
    let seuil = 350;
    let multiplier = Math.floor(Math.random() * (300 - 100 + 1) + 100) / 100;
    if (multiplier >= seuil) {
        multiplier = seuil / 100;
        isCrit = true;
    }
    damage = Math.ceil(player.force * multiplier);
    if(player.mana < 20) {
        const infoEmbed = new EmbedBuilder()
            .setTitle("SlashFoudroyant")
            .setDescription("Vous ne pouvez pas effectuer cette compétence car votre mana est insuffisant.")
            .setColor("#FF0000");
        message.channel.send({ embeds: [ infoEmbed ] });
        return;
    }
    player.mana -= 20;
    if(isCrit){
        const infoEmbed = new EmbedBuilder()
            .setTitle('Slash Foudroyant')
            .setDescription(`Vous effectuez des attaques rapides et précises, évitant les coups de vos adversaires tout en les touchant. Vous infligez ainsi ${damage} dégâts critiques.`)
            .setAuthor({name: `Ce sort vous a coûté 20 de mana.`})
            .setImage('https://64.media.tumblr.com/86b9cefbf9af72d52f94b7d6af13a2a3/47cb96fdfb8625f5-96/s1280x1920/122c3c2caa802e38a1681df78fa758b02ca89126.gif')
            .setColor("#ffd700");
        message.channel.send({ embeds: [ infoEmbed ] });
    }else{
        const infoEmbed = new EmbedBuilder()
            .setTitle('Slash Foudroyant')
            .setDescription(`Vous effectuez des attaques rapides et précises, évitant les coups de vos adversaires tout en les touchant. Vous infligez ainsi ${damage} dégâts.`)
            .setAuthor({name: `Ce sort vous a coûté 20 de mana.`})
            .setImage('https://64.media.tumblr.com/86b9cefbf9af72d52f94b7d6af13a2a3/47cb96fdfb8625f5-96/s1280x1920/122c3c2caa802e38a1681df78fa758b02ca89126.gif')
            .setColor("#FFFD80");
        message.channel.send({ embeds: [ infoEmbed ] });
    }
};
