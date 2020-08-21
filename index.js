const Discord = require("discord.js");
const { token, prefix } = require("./config.json");
const bot = new Discord.Client();

bot.on("ready", () => {
  bot.user.setStatus("idle");
  console.log(" ");
  console.log("Bot preparadísimo.");
  console.log(`Username: ${bot.user.username}`, "|", `User ID: ${bot.user.id}`);
  console.log(" ");
});

bot.on("message", (msg) => {
  console.log(msg.content);
});

bot.on("message", (msg) => {
  if (msg.content.startsWith(`${prefix}p`)) {
    msg.channel.send(
      `El nombre del servidor es el siguiente: ${msg.guild.name}`
    );
  }
});

bot.on("message", (msg) => {
  if (msg.content === "info") {
    msg.channel.send(
      `**${msg.author}**,\nTu ID: **${msg.author.id}**\nTu nickname: **${msg.author.username}**\n-\nServer id: **${msg.guild.id}**\nNombre del server: **${msg.guild.name}**.`
    );
  }
});

bot.on('message', (msg) => {
    if (msg.content.startsWith(prefix.clan) || msg.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(' ');
    const command = args.shift().toLowerCase();
});

bot.login(token);
