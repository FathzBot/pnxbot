const Discord = require("discord.js");
const config = require("../../config.json")
const db = require("quick.db");

module.exports = {
    name: "tüm-ayarlar",
    category: "ayarlar",
    description: "s",
    run: async (bot, message, args) => {
 
        if (!message.member.hasPermission("ADMINISTRATOR")) {
            return message.reply("❌ Bu Komutu sadece Yönetici kişiler kullanabilir")
                .then(m => m.delete(5000));
        }

let giriş = db.fetch(`giris_cikis_${message.guild.id}`)
let girişkn = message.guild.channels.find(x => x.id === giriş)

let modl = db.fetch(`kanal_${message.guild.id}`)
let modlkn = message.guild.channels.find(x => x.id === modl)

let sayacsayi = await db.fetch(`sayac_${message.guild.id}`);

let otorol = db.fetch(`otorol_${message.guild.id}`)
let rol = message.guild.roles.find(x => x.id === otorol)

let kayıtlı = db.fetch(`ver_rol_${message.guild.id}`)
let kayıtlıs = message.guild.roles.find(x => x.id === kayıtlı)
let dogrukanal = db.fetch(`yaz_kanal_${message.guild.id}`)
let dogrukn = message.guild.channels.find(x => x.id === dogrukanal)

let s = new Discord.RichEmbed()
.setDescription("Bütün Ayarlar")
.addField("Giriş-Çıkış Kanalı:",girişkn)
.addField("ModLog Kanalı:",modlkn)
.addField("Sayaç Sayısı:",sayacsayi)
.addField("Otorol Rolü:",rol)
.addField("Doğrulanmış Rolü:",kayıtlıs)
.addField("Doğrulama Kanalı:",dogrukn)
message.channel.send(s);

    }
}