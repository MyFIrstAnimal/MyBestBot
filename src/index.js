const Discord = require("discord.js");
const Bot = new Discord.Client();
const token = "NjcwMjAwMDQ3OTIwNzQyNDIx.Xiq7Qw.-kBvBQTdXVOzrUlR8K2z7P09PGY";
const { RichEmbed } = require("discord.js");
Bot.on("ready", () => {
  console.log("BOT IS WORKING");
});

Bot.on("message", cmd => {
  if (cmd.content === "test") {
    cmd.reply("Completed");
  }
});
Bot.login(token);
