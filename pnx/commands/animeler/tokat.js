const {RichEmbed} = require("discord.js");
const config = require("../../config.json");

module.exports = {
    name: "tokat",
    category: "eğlence",
    description: "s",
    run: async (bot, message, args) => {

        let array = [
        "https://i.imgur.com/fm49srQ.gif",
        "https://i.imgur.com/4MQkDKm.gif",
        "https://i.imgur.com/o2SJYUS.gif",
        "https://i.imgur.com/oOCq3Bt.gif",
        "https://i.imgur.com/Agwwaj6.gif",
        "https://i.imgur.com/YA7g7h7.gif",
        "https://i.imgur.com/mIg8erJ.gif",
        "https://i.imgur.com/oRsaSyU.gif",
        "https://i.imgur.com/kSLODXO.gif",
        "https://i.imgur.com/CwbYjBX.gif",
        "https://i.imgur.com/VW0cOyL.gif",
        "https://i.imgur.com/mdZR2D2.gif",
        "https://i.imgur.com/kVI9SHf.gif",
        "https://i.imgur.com/Li9mx3A.gif",
        "https://i.imgur.com/ABE1arT.gif",
        "https://i.imgur.com/sKDLYXE.gif",
        "https://i.imgur.com/3ultMVh.gif",
        "https://i.imgur.com/FQKJpzU.gif",
        "https://i.imgur.com/miFmhBg.gif",
        "https://i.imgur.com/ISDUslk.gif",
        "https://i.imgur.com/Q6iX9OA.gif",
        "https://i.imgur.com/XqtlhuZ.gif",
        "https://i.imgur.com/0B7O5Zi.gif",
        "https://i.imgur.com/HcTCdJ1.gif",
        "https://i.imgur.com/HqHljrw.gif",
        "https://i.imgur.com/yAlP0u1.gif",
        "https://i.imgur.com/ESD4TJ2.gif",
        "https://i.imgur.com/ZDiDDdc.gif",
        "https://i.imgur.com/4iPCfVO.gif",
    ]

    let üye = message.mentions.members.first() ? message.mentions.members.first() : "Boşluk";
if(üye){
let s = new RichEmbed()
.setDescription(üye + "," + message.author + " Sana tokat attı.Uff acımış olmalı")
.setImage(array[Math.floor(Math.random() * array.length)])
.setColor(config.renk)
message.channel.send(s);
}
    }
}

