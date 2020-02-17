const {RichEmbed} = require("discord.js");
const config = require("../../config.json")
const moment = require('moment')
const filterLevels = ['Yok.', 'Rolü olmayanlar için.', 'Herkes için.'];
const verificationLevels = ['Yok.', 'Düşük.', 'Orta.', '(╯°□°）╯︵ ┻━┻', '(╯°□°）╯︵ ┻━┻', '┻━┻ ﾐヽ(ಠ益ಠ)ノ彡┻━┻'];

module.exports = {
    name: "sunucu-bilgi",
    category: "bilgiler",
    description: "s",
    run: async (bot, msg, args) => {


var konum = ''
if(msg.guild.region === "russia") {
    var konum = 'Rusya :flag_ru:'
}
if(msg.guild.region === "us-west") {
    var konum = 'Batı Amerika :flag_us: '
}
if(msg.guild.region === "us-south") {
    var konum = 'Güney Amerika :flag_us: '
}
if(msg.guild.region === "us-east") {
    var konum = 'Doğu Amerika :flag_us: '
}
if(msg.guild.region === "us-central") {
    var konum = 'Amerika :flag_us: '
}
if(msg.guild.region === "brazil") {
    var konum = 'Brezilya :flag_br:'
}
if(msg.guild.region === "singapore") {
    var konum = 'Singapur :flag_sg:'
}
if(msg.guild.region === "sydney") {
    var konum = 'Sidney :flag_sh:'
}
if(msg.guild.region === "eu-west") {
    var konum = 'Batı Avrupa :flag_eu:'
}
if(msg.guild.region === "eu-south") {
    var konum = 'Güney Avrupa :flag_eu:'
}
if(msg.guild.region === "eu-east") {
    var konum = 'Doğu Avrupa :flag_eu:'
}
if(msg.guild.region === "eu-central") {
    var konum = 'Avrupa :flag_eu:'
}
if(msg.guild.region === "hongkong") {
    var konum = 'Hong Kong :flag_hk: '
}
if(msg.guild.region === "japan") {
    var konum = 'Japonya :flag_jp:'
}
var tarih = ''
if(moment(msg.guild.createdAt).format('MM') === '01') {
    var tarih = `${moment(msg.guild.createdAt).format('DD')} Ocak ${moment(msg.guild.createdAt).format('YYYY HH:mm:ss')} `
}
if(moment(msg.guild.createdAt).format('MM') === '02') {
    var tarih = `${moment(msg.guild.createdAt).format('DD')} Şubat ${moment(msg.guild.createdAt).format('YYYY HH:mm:ss')} `
}
if(moment(msg.guild.createdAt).format('MM') === '03') {
    var tarih = `${moment(msg.guild.createdAt).format('DD')} Mart ${moment(msg.guild.createdAt).format('YYYY HH:mm:ss')} `
}
if(moment(msg.guild.createdAt).format('MM') === '04') {
    var tarih = `${moment(msg.guild.createdAt).format('DD')} Nisan ${moment(msg.guild.createdAt).format('YYYY HH:mm:ss')} `
}
if(moment(msg.guild.createdAt).format('MM') === '05') {
    var tarih = `${moment(msg.guild.createdAt).format('DD')} Mayıs ${moment(msg.guild.createdAt).format('YYYY HH:mm:ss')} `
}
if(moment(msg.guild.createdAt).format('MM') === '06') {
    var tarih = `${moment(msg.guild.createdAt).format('DD')} Haziran ${moment(msg.guild.createdAt).format('YYYY HH:mm:ss')} `
}
if(moment(msg.guild.createdAt).format('MM') === '07') {
    var tarih = `${moment(msg.guild.createdAt).format('DD')} Temmuz ${moment(msg.guild.createdAt).format('YYYY HH:mm:ss')} `
}
if(moment(msg.guild.createdAt).format('MM') === '08') {
    var tarih = `${moment(msg.guild.createdAt).format('DD')} Ağustos ${moment(msg.guild.createdAt).format('YYYY HH:mm:ss')} `
}
if(moment(msg.guild.createdAt).format('MM') === '09') {
    var tarih = `${moment(msg.guild.createdAt).format('DD')} Eylül ${moment(msg.guild.createdAt).format('YYYY HH:mm:ss')} `
}
if(moment(msg.guild.createdAt).format('MM') === '10') {
    var tarih = `${moment(msg.guild.createdAt).format('DD')} Ekim ${moment(msg.guild.createdAt).format('YYYY HH:mm:ss')} `
}
if(moment(msg.guild.createdAt).format('MM') === '11') {
    var tarih = `${moment(msg.guild.createdAt).format('DD')} Kasım ${moment(msg.guild.createdAt).format('YYYY HH:mm:ss')} `
}
if(moment(msg.guild.createdAt).format('MM') === '12') {
    var tarih = `${moment(msg.guild.createdAt).format('DD')} Aralık ${moment(msg.guild.createdAt).format('YYYY HH:mm:ss')} `
}

const embed = new RichEmbed()
    .setThumbnail(msg.guild.iconURL)
    .addField(`Sunucu Adı:`, msg.guild.name, true)
    .addField(`Sunucu Sahibi:`, msg.guild.owner.user.username, true)
    .addField(`ID:`, msg.guild.id, true)
    .addField(`Oluşturulma Tarihi:`, tarih, true)
    .addField(`Üye Sayısı:`, `👤Toplam: ${msg.guild.members.size} \nÇevrimiçi: ${msg.guild.members.filter(m => m.user.presence.status === "online").size} \nRahatsız Etmeyin: ${msg.guild.members.filter(m => m.user.presence.status === "dnd").size} \nBoşta: ${msg.guild.members.filter(m => m.user.presence.status === "idle").size} \nÇevrımdışı/Görünmez: ${msg.guild.members.filter(m => m.user.presence.status === "offline").size} \nBot: ${msg.guild.members.filter(m => m.user.bot).size}`, true)
    .addField(`Kanal Sayısı:`, `➕Toplam: ${msg.guild.channels.size} \n📝Yazı: ${msg.guild.channels.filter(c => c.type === "text").size} \n🔊Sesli: ${msg.guild.channels.filter(c => c.type === "voice").size} \n📋Kategori: ${msg.guild.channels.filter(c => c.type === "category").size}`, true)
    .addField(`Sunucu Bölgesi:`, konum, true)
    .addField(`Doğrulama seviyesi`, `${verificationLevels[msg.guild.verificationLevel]}`, true)
    .addField(`Sakıncalı İçerik Filtresi:`, `${filterLevels[msg.guild.explicitContentFilter]}`, true)
    .addField(`Rol Sayısı:`, `${msg.guild.roles.size}`, true)
    .addField(`Roller:`, `<@&${msg.guild.roles.map(role => `${role.id}`).join('>, <@&')}>`, true)
    .setColor(config.renk)
    .setTimestamp()
    .setFooter(`PnXTR Bot | Sunucu Bilgi`)
    return msg.channel.send(embed);

}
}