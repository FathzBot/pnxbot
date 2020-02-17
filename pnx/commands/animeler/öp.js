const Discord = require("discord.js");
const config = require("../../config.json")

module.exports = {
    name: "öp",
    category: "animeler",
    description: "s",
    run: async (bot, message, args) => {

let gifs = ["https://i.imgur.com/PKOsDVW.gif",
"https://i.imgur.com/AncTiSt.gif",
"https://i.imgur.com/NkfsJV7.gif",
"https://i.imgur.com/w1AmQF7.gif",
"https://i.imgur.com/MVS1ilF.gif",
"https://i.imgur.com/eisk88U.gif",
"https://i.imgur.com/9y34cfo.gif",
"https://i.imgur.com/aypxaOB.gif",
"https://i.imgur.com/J1GHyBL.gif",
"https://i.imgur.com/JZLaOA2.gif",
"https://i.imgur.com/mJSU1bx.gif",
"https://i.imgur.com/Ku8LeMv.gif",
"https://i.imgur.com/PxzmuSj.gif",
"https://i.imgur.com/RwQW4j1.gif",
"https://i.imgur.com/2QwD7M0.gif",
"https://i.imgur.com/JnheKgG.gif",
"https://i.imgur.com/USWkX80.gif",
"https://i.imgur.com/it7zZUq.gif",
"https://i.imgur.com/XEL5mqQ.mp4",
"https://i.imgur.com/AGfaBJD.gif",

]


let üye = message.mentions.members.first() ? message.mentions.members.first() : "Boşluk";
if(üye){
let s = new RichEmbed()
.setDescription(üye + "," + message.author + " Seni öpü verdi")
.setImage(gifs[Math.floor(Math.random() * gifs.length)])
.setColor(config.renk)
message.channel.send(s);
}


    }
}
