const { Client } = require('discord.js');
const bot = new Client;
const token = "MTAwMDc4MzI0MDIwODA2ODYyOA.GzuMu_.mN0T0FgSyR-1HxEmhtFAZzxqr6PjVDNkXnGDk4";
var PREFIX = ">";

bot.on('ready', () => {
    console.log('Online')

    bot.user.setActivity("On Miracle Roleplay", { 
        type: "PLAYING"
    }).catch(console.error);
});

bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(' ');
    if(!message.content.startsWith(PREFIX)) return;
    switch (args[0]) {

    case 'nameic':

            if(message.channel.type == "dm") return message.channel.send("Kamu tidak bisa registrasi dari DM")
                const shifter = args.shift()
            if(!args.length) return message.channel.send("Mohon berikan nama untuk di set")
                const nick = "[WARGA]" + args.join(" ")
            if(nick.length > 32) return message.channel.send("Nickname terlalu panjang, mohon berikan yang lebih singkat")
            try {
                    message.member.roles.add("994693779531513976") //Role Yang Mau DiSet
                    message.member.setNickname(nick)
                    return message.reply("Accept");
                } catch(e) {
                    return message.channel.send("COMMAND ERROR TIDAK TERDETEKSI.")
                            }
            break;
    }
})

bot.login(token);
