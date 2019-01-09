const Discord = require('discord.js');
const bot = new Discord.Client();




const devs = ['422020514966405130' , '474200581163057153' , '422020514966405130' , '', '' , '' , ''];
const adminprefix = "#";
bot.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!devs.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'ply')) {
    bot.user.setGame(argresult);
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else 
 if (message.content.startsWith(adminprefix + 'setname')) {
  bot.user.setUsername(argresult).then
      message.channel.sendMessage(`**${argresult}** : تم تغير الأسم`)
} else
if (message.content.startsWith(adminprefix + 'setavatar')) {
bot.user.setAvatar(argresult);
} else 
  if (message.content.startsWith(adminprefix + 'st')) {
    bot.user.setGame(argresult, "https://www.twitch.tv/osama_gmt");
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  }
});

const Eris = require("eris");
const BT  = new Eris(process.env.BOT_TOKEN);
BT.connect(process.env.BOT_TOKEN)
var iiserver = "508727557051645972";

BT.on("ready", ready => {
setInterval(function(){
BT.editChannel("532663255450255370", {name : "W"})
BT.editChannel("532663255450255370", {name : "We"})
BT.editChannel("532663255450255370", {name : "Wel"})
BT.editChannel("532663255450255370", {name : "Welc"})
BT.editChannel("532663255450255370", {name : "Welcom"})
BT.editChannel("532663255450255370", {name : "Welcome"})
BT.editChannel("532663255450255370", {name : "Welcome T"})
BT.editChannel("532663255450255370", {name : "Welcome To"})
BT.editChannel("532663255450255370", {name : "Welcome To H"})
BT.editChannel("532663255450255370", {name : "Welcome To HH "})
BT.editChannel("532663255450255370", {name : "Welcome To HNR"})
BT.editChannel("532663255450255370", {name : "Welcome To HNR"})
BT.editChannel("532663255450255370", {name : "Welcome To HN"})
BT.editChannel("532663255450255370", {name : "Welcome To H"})
BT.editChannel("532663255450255370", {name : "Welcome To"})
BT.editChannel("532663255450255370", {name : "Welcome T"})
BT.editChannel("532663255450255370", {name : "Welcome"})
BT.editChannel("532663255450255370", {name : "Welcom"})
BT.editChannel("532663255450255370", {name : "Welco"})
BT.editChannel("532663255450255370", {name : "Welc"})
BT.editChannel("532663255450255370", {name : "Wel"})
BT.editChannel("532663255450255370", {name : "We"})
BT.editChannel("532663255450255370", {name : "W"})
BT.editChannel("532663255450255370", {name : "W"})
BT.editChannel("532663255450255370", {name : "We"})
BT.editChannel("532663255450255370", {name : "Wel"})
BT.editChannel("532663255450255370", {name : "Welc"})
BT.editChannel("532663255450255370", {name : "Welcom"})
BT.editChannel("532663255450255370", {name : "Welcome"})
BT.editChannel("532663255450255370", {name : "Welcome T"})
BT.editChannel("532663255450255370", {name : "Welcome To"})
BT.editChannel("532663255450255370", {name : "Welcome To H"})
BT.editChannel("532663255450255370", {name : "Welcome To HH "})
BT.editChannel("532663255450255370", {name : "Welcome To HNR"})
}, 10000);
});
var eris = new Eris(process.env.BOT_TOKEN);


bot.login(process.env.BOT_TOKEN);
