const {RichEmbed} = require("discord.js");
const config = require("../../config.json");

module.exports = {
    name: "yumruk",
    category: "eğlence",
    description: "s",
    run: async (bot, message, args) => {
 

        let gifs = ["https://i.imgur.com/q6qjskO.gif",
    "https://i.imgur.com/GsMjksq.gif",
    "https://i.imgur.com/hGuGQcA.gif",
    "https://i.imgur.com/B5wtdpE.gif",
    "https://i.imgur.com/B5wtdpE.gif",
    "https://i.imgur.com/g91XPGA.gif",
    "https://i.imgur.com/nwGsg12.gif",
    "https://i.imgur.com/WamlMnP.gif",
    "https://i.imgur.com/uCISIHo.gif",
    "https://i.imgur.com/vx4pm.gif",
    ]
 

    let üye = message.mentions.members.first() ? message.mentions.members.first() : "Boşluk";
if(üye){
let s = new RichEmbed()
.setDescription(üye + "," + message.author + " Sana yumruk attı.Opps acımış olmalı")
.setImage(gifs[Math.floor(Math.random() * gifs.length)])
.setColor(config.renk)
message.channel.send(s);
}


    }
}