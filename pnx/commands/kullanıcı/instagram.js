const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const fetch = require("node-fetch");
const config = require("../../config.json");

module.exports = {
    name: "instagram",
    aliases: ["insta"],
    category: "kullanıcı",
    description: "Find out some nice instagram statistics",
    usage: "<name>",
    run: async (client, message, args) => {
        const name = args.join(" ");

        if (!name) {
            return message.reply("Belki birisini aramak faydalı olabilir...!")
                .then(m => m.delete(5000));
        }

        const url = `https://instagram.com/${name}/?__a=1`;
        
        let res; 

        try {
            res = await fetch(url).then(url => url.json());
        } catch (e) {
            return message.reply("Hesabı bulamadım :(")
                .then(m => m.delete(5000));
        }

        const account = res.graphql.user;

        const embed = new RichEmbed()
            .setColor(config.renk)
            .setTitle(account.full_name)
            .setURL(`https://instagram.com/${name}`)
            .setThumbnail(account.profile_pic_url_hd)
            .addField("Profil Bilgi", stripIndents`**- İsim:** ${account.username}
            **- Full Adı:** ${account.full_name}
            **- Biosu:** ${account.biography.length == 0 ? "none" : account.biography}
            **- Gönderileri:** ${account.edge_owner_to_timeline_media.count}
            **- Takipçisi:** ${account.edge_followed_by.count}
            **- Takip ettiği:** ${account.edge_follow.count}
            **- Gizli Hesap mı:** ${account.is_private ? "Evet 🔐" : "Hayır 🔓"}`);

        message.channel.send(embed);
    }
}
