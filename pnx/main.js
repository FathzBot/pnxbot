const {Client,Collection,RichEmbed} = require("discord.js");
const bot = new Client();
const canvas = require("canvas");
const configs = require("./config.json")
const db = require("quick.db")
const fs = require("fs");
let linkEngel = JSON.parse(fs.readFileSync("./json/reklam-koruması.json", "utf8"));
const {config} = require("dotenv")
bot.login("Njc3OTE3MjI1NzIxNzkwNDk3.XkcuFQ.xdJRW-xNAEpQ8fZ_MYOLMFb0yFY");
var prefix = config.prefix;
bot.on("ready",() => {
console.log("Bot " + bot.guilds.size + " Tane sunucuda var");
bot.user.setActivity("pnx yardım");
});

bot.once("disconnect",() => {
console.log("Disconnect From Discord");
});

bot.once("reconnecting",() => {
console.log("Reconneting From Discord")
});



bot.commands = new Collection();
bot.aliases = new Collection();

config({
    path: __dirname + "/.env"
});

["command"].forEach(handler => {
    require(`./handlers/${handler}`)(bot);
});

bot.on("message", async message => {

    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;

    if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    
    if (cmd.length === 0) return;
    
    let command = bot.commands.get(cmd);
    if (!command) command = bot.commands.get(bot.aliases.get(cmd));

    if (command) 
        command.run(bot, message, args);
  

});


bot.on("roleCreate",async(role) => {
    let fetch = await role.guild.fetchAuditLogs({type: "ROLE_CREATE"}).then(log => log.entries.first())
    let member = fetch.executor;

    let kanal = db.fetch(`kanal_${role.guild.id}`)
    let kn = role.guild.channels.find(x => x.id === kanal)
    if(!kanal || kanal === null) return;
    if(kanal){
    let s = new RichEmbed()
    .setDescription(`Rol Oluşturuldu`)
    .addField("Oluşturulma saati:",role.createdAt)
    .addField("Kim Oluşturdu:",member)
    .setTimestamp()
    .setColor(configs.renk)
    kn.send(s);
    }
});

bot.on("roleDelete",async(role) => {
    let fetch = await role.guild.fetchAuditLogs({type: "ROLE_DELETE"}).then(log => log.entries.first())
    let member = fetch.executor;

    let kanal = db.fetch(`kanal_${role.guild.id}`)
    let kn = role.guild.channels.find(x => x.id === kanal)
    if(!kanal || kanal === null) return;
    if(kanal){
    let s = new RichEmbed()
    .setDescription(`Rol Silindi`)
    .addField("Silinme saati:",role.createdAt)
    .addField("Kim Sildi:",member)
    .setTimestamp()
    .setColor(configs.renk)
    kn.send(s);
    }
});

bot.on("channelCreate",async(channel) => {
    let fetch = await channel.guild.fetchAuditLogs({type: "CHANNEL_CREATE"}).then(log => log.entries.first())
    let member = fetch.executor;

    let kanal = db.fetch(`kanal_${channel.guild.id}`)
    let kn = channel.guild.channels.find(x => x.id === kanal)
    if(!kanal || kanal === null) return;
    if(kanal){
        let s = new RichEmbed()
        .setDescription(`Kanal Açıldı`)
        .addField("Açılma Saati:",channel.createdAt)
        .addField("Kim Açtı:",member)
        .addField("Kanal Tipi:",channel.type)
        .addField("Kanal İsmi",channel.name)
        .addField("Kanal Konumu",channel.position)
        .setTimestamp()
        .setColor(configs.renk)
        kn.send(s);
    }
});

bot.on("channelDelete",async(channel) => {
    let fetch = await channel.guild.fetchAuditLogs({type: "CHANNEL_DELETE"}).then(log => log.entries.first())
    let member = fetch.executor;

    let kanal = db.fetch(`kanal_${channel.guild.id}`)
    let kn = channel.guild.channels.find(x => x.id === kanal)
    if(!kanal || kanal === null) return;
    if(kanal){
        let s = new RichEmbed()
        .setDescription(`Kanal Silindi`)
        .addField("Silinme Saati:",channel.createdAt)
        .addField("Kim Sildi:",member)
        .addField("Kanal Tipi:",channel.type)
        .addField("Kanal İsmi",channel.name)
        .addField("Kanal Konumu",channel.position)
        .setTimestamp()
        .setColor(configs.renk)
        kn.send(s);
    }
});

bot.on("emojiCreate",async(emoji) => {
    let fetch = await emoji.guild.fetchAuditLogs({type: "EMOJI_CREATE"}).then(log => log.entries.first())
    let member = fetch.executor;

    let kanal = db.fetch(`kanal_${emoji.guild.id}`)
    let kn = emoji.guild.channels.find(x => x.id === kanal)
    if(!kanal || kanal === null) return;
    if(kanal){
    let s = new RichEmbed()
    .setDescription("Emoji Oluşturuldu")
    .addField("Kim Oluşturdu:",member)
    .addField("Oluşturma saati:",emoji.createdAt)
    .addField("Animasyonlu mu:",emoji.animated)
    .addField("Emoji İsmi:",emoji.name)
    .setColor(configs.renk)
    kn.send(s);
    }
});

bot.on("emojiDelete",async(emoji) => {
    let fetch = await emoji.guild.fetchAuditLogs({type: "EMOJI_DELETE"}).then(log => log.entries.first())
    let member = fetch.executor;

    let kanal = db.fetch(`kanal_${emoji.guild.id}`)
    let kn = emoji.guild.channels.find(x => x.id === kanal)
    if(!kanal || kanal === null) return;
    if(kanal){
    let s = new RichEmbed()
    .setDescription("Emoji Silindi")
    .addField("Kim Sildi:",member)
    .addField("Silinme saati:",emoji.createdAt)
    .addField("Animasyonlu mu:",emoji.animated)
    .addField("Emoji İsmi:",emoji.name)
    .setColor(configs.renk)
    kn.send(s);
    }
});

bot.on("guildBanRemove",async(guild,user) => {
    let fetch = await guild.fetchAuditLogs({type: "GUILD_BAN_REMOVE"}).then(log => log.entries.first())
    let member = fetch.executor;

    let kanal = db.fetch(`kanal_${guild.id}`)
    let kn = guild.channels.find(x => x.id === kanal)
    if(!kanal || kanal === null) return;
    if(kanal){ 
let s = new RichEmbed()
.setDescription("Yasak Açıldı")
.addField("Kimin yasağı açıldı:",user.name)
.addField("Yasağı Kim Açtı:",member)
.addField("Yasak Açılış Saati:",guild.createdAt)
.setColor(configs.renk)
kn.send(s)
}
});

bot.on("messageDelete",async(message) => {
    let fetch = await message.guild.fetchAuditLogs({type: "MESSAGE_DELETE"}).then(log => log.entries.first())

    let kanal = db.fetch(`kanal_${message.guild.id}`)
    let kn = message.guild.channels.find(x => x.id === kanal)
    if(!kanal || kanal === null) return;
    if(kanal){ 
    let s = new RichEmbed()
    .setDescription("Mesaj Silindi")
    .addField("Kim Sildi:",message.author)
    .addField("Hangi mesajı sildi:",message.content)
    .addField("Ne zaman sildi:",message.createdAt)
    .addField("Hangi kanalda sildi:",message.channel)
.setColor(configs.renk)
.setTimestamp()
kn.send(s);
    }
});

bot.on("messageUpdate",async(oldMessage,newMessage) => {
    let fetch = await oldMessage.guild.fetchAuditLogs({type: "MESSAGE_UPDATE"}).then(log => log.entries.first())

    let kanal = db.fetch(`kanal_${oldMessage.guild.id}`)
    let kn = oldMessage.guild.channels.find(x => x.id === kanal)
    if(!kanal || kanal === null) return;
    if(kanal){ 
    let s = new RichEmbed()
    .setDescription("Mesaj Düzenlendi")
    .addField("Hangi Mesaj Düzenlendi:",oldMessage.content)
    .addField("Nasıl Düzenlendi:",newMessage.content)
    .addField("Hangi Kanalda düzenlendi:",oldMessage.channel)
    .addField("Ne zaman düzenlendi",oldMessage.createdAt)
    .setColor(configs.renk)
    .setTimestamp()
    kn.send(s)
    }
});

bot.on("message", async message => {

    if(message.author.bot) return;
    if(!message.guild) return;
    if(message.content.includes(`${prefix}afk`)) return;
    
    if(await db.fetch(`afk_${message.author.id}`)) {
      db.delete(`afk_${message.author.id}`);
      db.delete(`afk_süre_${message.author.id}`);
      const embedaf = new RichEmbed()
      .setDescription(`<@${message.author.id}> Afk Modundan başarıyla çıktınız.`)
      .setColor(configs.renk)
      message.channel.send(embedaf).then(m => m.delete(10000));
       
  
    }
    
    
    var USER = message.mentions.users.first();
    if(!USER) return;
    var REASON = await db.fetch(`afk_${USER.id}`);
    
    if(REASON) {
      let süre = await db.fetch(`afk_süre_${USER.id}`);

var msgArray = [];
        msgArray.push(`**${USER.username} Uptime**\n`);
        var hrs = Math.round(süre.uptime / (1000 * 60 * 60)) + " saat(s),"
        var mins = " " + Math.round(süre.uptime / (1000 * 60)) % 60 + " dakika(dk), "
        var sec = Math.round(süre.uptime / 1000) % 60 + " saniye(s)"
        if (hrs == "0 saat(s),") hrs = ""
        if (mins == " 0 dakika(dk), ") mins = ""

      const afkembed = new RichEmbed()
      .addField(`${USER.tag}`,"Şuan Afk")
      .addField("**Afk kalma süresi**", hrs + mins + sec)
      .addField("**Hangi Sebeple Afk kalmış**",`${REASON}`)
      .setColor(configs.renk)
      .setThumbnail(USER.avatarURL)
      message.channel.send(afkembed);
    }
  });
  
  

bot.on("message", async(msg) => { 
    if (!linkEngel[msg.guild.id]) return;
    if (linkEngel[msg.guild.id].linkEngel === "kapat") return;
        if (linkEngel[msg.guild.id].linkEngel === "aç") {
        var regex = new RegExp(/(discord.gg|http|.gg|.com|.net|.org|invite|İnstagram|Facebook|watch|Youtube|youtube|facebook|instagram)/)
        if (regex.test(msg.content)== true) {
        if (!msg.member.hasPermission("MANAGE_MESSAGES")) {
          msg.delete()
           msg.channel.send(`<@${msg.author.id}>`).then(message => message.delete(5000));
            var e = new Discord.RichEmbed()
            .setColor(configs.renk)
            .setAuthor("Yasak")
            .setDescription(`Bu sunucuda link atmak yasak`)
            msg.channel.send(e).then(message => message.delete(5000));
        }
    }
        }
    });

    bot.on('guildMemberAdd', async member => {
        let kanal = db.fetch(`giris_cikis_${member.guild.id}`)
        let kn = member.guild.channels.find(x => x.id === kanal)
        if(!kanal || kanal === null) return;
        if(kanal){ 

let userinfo = {};
userinfo.tarih = moment.utc(member.user.createdAt).format('DD/MM/YYYY HH:mm')
userinfo.id = member.id;
userinfo.status = member.user.presence.status.toString()
.replace("dnd",`Rahatsız Etmeyin`)
.replace("online", `Çevrimiçi`)
.replace("idle", `Boşta`)
.replace("offline", `Çevrimdışı`)

let avatar = member.user.avatarURL || member.user.defaultAvatarURL;

let s = new RichEmbed()
    .setThumbnail(avatar)
    .setTitle(member.username + " Hoşgeldin")
    .setDescription(`Seninle birlikte ` + member.guild.memberCount + " Kişi Olduk")
    .addField("Discorda Katılım Tarihi:",userinfo.tarih)
    .setColor(confings.renk)    
    kn.send(s);
        }
    });

    bot.on('guildMemberRemove', async member => {
        let kanal = db.fetch(`giris_cikis_${member.guild.id}`)
        let kn = member.guild.channels.find(x => x.id === kanal)
        if(!kanal || kanal === null) return;
        if(kanal){ 
            let userinfo = {};
            userinfo.tarih = moment.utc(member.user.createdAt).format('DD/MM/YYYY HH:mm')
            userinfo.id = member.id;
            userinfo.status = member.user.presence.status.toString()
            .replace("dnd",`Rahatsız Etmeyin`)
            .replace("online", `Çevrimiçi`)
            .replace("idle", `Boşta`)
            .replace("offline", `Çevrimdışı`)
            
            let avatar = member.user.avatarURL || member.user.defaultAvatarURL;
            
            let s = new RichEmbed()
                .setThumbnail(avatar)
                .setDescription(member.username + " Sunucudan Çıktı " + member.guild.memberCount + " Kişi Kaldık")
                .setColor(configs.renk)
                kn.send(s);
        }
    });

bot.on("guildMemberAdd",async(member) => {
let otorol = db.fetch(`otorol_${member.guild.id}`)
let rol = member.guild.roles.find(x => x.id === otorol)
if(!otorol || otorol === null) return;
if(otorol){
member.addRole(rol);
}
});



bot.on("message",async(message) => {

let girdi = db.fetch(`mesaj_${message.guild.id}`);
let çıktı = db.fetch(`mesaj2_${message.guild.id}`);

if(!girdi || girdi === null) return;
if(!çıktı || çıktı === null) return;

if(message.content.toLowerCase() === girdi){
message.channel.send(çıktı);
}
});

bot.on("userUpdate", async(old, nev) => {

let tag = db.fetch(`tag_${old.guild.id}`);
let rol = db.fetch(`ototag_${old.guild.id}`);
let sunucu = db.fetch(`tagsunucu_${old.guild.id}`);

    if(old.username !== nev.username) {
    if(!nev.username.includes(tag) && bot.guilds.get(sunucu).members.get(nev.id).roles.has(rol)) {
          bot.guilds.get(sunucu).members.get(nev.id).removeRole(rol)
       nev.send(`**Tagı çıkartmışsın :/ üzüldük**`)
      } 
     if(nev.username.includes(tag) && !bot.guilds.get(sunucu).members.get(nev.id).roles.has(rol)) {
        nev.send(`**Tagı aldığın için teşekkürler** :hearts:`) 
        bot.guilds.get(sunucu).members.get(nev.id).addRole(rol)
       }
    }
    });


