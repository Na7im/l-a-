const Discord = require('discord.js');
const client = new Discord.Client();
var token = "NTg1MDIyNTA3MTM2OTc0ODU4.XPTbOw.xquwWC40nBz6-TKFc6w-8EaxjBw"
var prefix = "!!"

client.on('ready', () => {
    client.user.setGame("Léa.... ", "https://www.twitch.tv/twitch");
    console.log('Aiko est co !');
});

 client.on("message", async message => {
           if (message.content.startsWith(prefix + "mpall")) {
           
                  var args = message.content.split(" ").slice(1);
                  var msge = args.join(' ');
        
                   if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send("❌ Tu n'as pas la permission d'utiliser cette commande!");
                   if(!msge) return message.channel.send("Précise un message")
                   var mpall =new Discord.RichEmbed()
                        .setTitle("Regarde bb")
                        .addField("Message:", msge);
         
                   message.delete()
                   message.guild.members.map(m => m.send(mpall))
                   await message.channel.send("Le mp est envoyé à tout le serveur")
               
        
           }

});

client.login('NTg1MDIyNTA3MTM2OTc0ODU4.XPTbOw.xquwWC40nBz6-TKFc6w-8EaxjBw')