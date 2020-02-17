
module.exports = {
    name: "taş-kağıt-makas",
    category: "eğlence",
    description: "s",
    run: async (bot, msg, args) => {

function get_random(list) {
    return list[Math.floor((Math.random() * list.length))];
};

var tkm = ["T-K-M **|** Sonuç: **<:tas:679022888019427340> (TAŞ)** ","T-K-M **|** Sonuç:<:kagit:679022879861637120> (KAĞIT)","T-K-M **|** Sonuç: <:makas:679022891261493280> (MAKAS)"] ;
        var sonuc = get_random(tkm);
        msg.channel.send('3.. 2.. 1..').then(msg => {
            setTimeout(() => {
                msg.edit("<:tas:679022888019427340>")
            }, 1000);
            setTimeout(() => {
                msg.edit("<:kagit:679022879861637120>")
            }, 2000);
            setTimeout(() => {
                msg.edit("<:makas:679022891261493280>")
            }, 3000);
            setTimeout(() => {
                msg.edit("<:tas:679022888019427340>")
            }, 4000);
            setTimeout(() => {
                msg.edit("<:kagit:679022879861637120>")
            }, 5000);
            setTimeout(() => {
                msg.edit("<:makas:679022891261493280>")
            }, 6000);
            setTimeout(() => {
                msg.edit("<:tas:679022888019427340>")
            }, 7000);
            setTimeout(() => {
                msg.edit("<:kagit:679022879861637120>")
            }, 8000);
            setTimeout(() => {
                msg.edit("<:makas:679022891261493280>")
            }, 9000);
            setTimeout(() => {
                msg.edit(sonuc)
            }, 10000);
        });

    }
}