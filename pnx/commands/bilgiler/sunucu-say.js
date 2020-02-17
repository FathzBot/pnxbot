const Discord = require("discord.js");
const config = require("../../config.json")
const db = require("quick.db");

module.exports = {
    name: "sunucu-say",
    category: "bilgiler",
    description: "s",
    run: async (bot, message, args) => {
        
        var userCount = message.guild.memberCount;
        var onlineCount = message.guild.members.filter(m => m.presence.status === 'online').size
        var dnd = message.guild.members.filter(m => m.presence.status === 'dnd').size
        var idle = message.guild.members.filter(m => m.presence.status === 'idle').size
        var voiceCount = message.guild.members.filter(m => m.voiceChannel).size
    
        let embed = new Discord.RichEmbed()
        .setTitle(message.guild.name)
        .setDescription(`
        **Toplam üye sayısı : "__${userCount}__"** 
        **Çevrim İçi üye sayısı : "__${onlineCount + dnd + idle}__"**
        **Seste olan üye sayısı : "__${voiceCount}__"**

        `)
        .setColor(config.renk)
        .setTimestamp()
        message.channel.send(embed);
 
    }
}