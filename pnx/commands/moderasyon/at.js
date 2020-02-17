const Discord = require("discord.js");
const config = require("../../config.json")
const moment = require("moment");
const db = require("quick.db");

module.exports = {
    name: "at",
    category: "moderasyon",
    description: "s",
    run: async (bot, message, args) => {
        if (!message.member.hasPermission("BAN_MEMBERS")) {
            return message.reply("❌ Bu Komutu sadece Yasaklama Yetkisine sahip kişiler kullanabilir")
                .then(m => m.delete(5000));
        }
        let üye = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!üye){
        let s = new Discord.RichEmbed()
        .setDescription("Lütfen Üyeyi etiketleyin ya da discord idsini(Kimliğini) yazınız ve tekrar komutu deneyiniz. :)")
        .setColor(config.renk)
        .setTimestamp()
        .setThumbnail(message.author.avatarURL)
    message.channel.send(s);
    }
        let sebep = args.join(" ") ? args.join(" ") : "sebepsiz";
      if(üye.id === message.author.id){
        let em = new Discord.RichEmbed()
        .setDescription("Kendini atamazsın.").setColor(config.renk).setThumbnail(message.author.avatarURL).setTimestamp()
       return message.channel.send(em)
      }
    
        if (!message.member.highestRole.calculatedPosition > message.member.highestRole.calculatedPosition - 1) {
    let es = new Discord.RichEmbed()
    .setDescription("Bu kişinin senin rollerinden/rolünden daha yüksek rolleri/rolü var.")
    .setColor(config.renk)
    .setThumbnail(message.author.avatarURL)
    .setTimestamp()
    message.channel.send(es);
        }
    
    
        let d = new Discord.RichEmbed()
        .setDescription(message.guild.name + " Adlı sunucudan" + sebep + " sebebiyle" + message.author.username + " adlı yetkili tarafından atıldın.") 
        .setTimestamp()
        .setColor(config.renk)
        üye.send(d)
        message.guild.member(üye).kick(sebep);    
        let f = new Discord.RichEmbed()
        .setDescription("~Yasaklandı~")
        .addField("Atılan Kullanıcı",üye.username)
        .addField("Atan Yetkili",message.author.username)
        .addField("Hangi Sebeple Atıldı",sebep)
        .addField("Ne Zaman Atıldı",moment.utc(msg.createdAt).format('DD MM YYYY'))
        .setColor(config.renk)
        message.channel.send(f);
    
        let kanal = db.fetch(`kanal_${msg.guild.id}`)
    let kn = msg.guild.channels.find(x => x.id === kanal)
if(!kanal || kanal === null) return;
if(kanal){
let m = new Discord.RichEmbed()
.setDescription("Komut Kullanıldı")
.addField("Hangi Komut Kullanıldı:","yasakla",false)
.addField("Kim Kullandı:",msg.author.tag,false)
.addField("Kimi yasakladı:",üye.username)
.addField("Komut hangi kanalda kullanıldı:",msg.channel)
.addField("Ne Zaman Yasaklandı",moment.utc(msg.createdAt).format('DD MM YYYY'))
.setColor(config.renk)
.setTimestamp()
kn.send(m);
}
    
    }
}