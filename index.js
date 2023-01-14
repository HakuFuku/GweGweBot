const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

const { token } = require('./config.json');

const fs = require('fs');

fs.readdir("./pouvoirs/", (err, files) => {
    if(err) console.log(err)
    for (let fileName of files){
        if(fileName.endsWith(".js")) client.on(fileName.split(".")[0], require(`./pouvoirs/${fileName}`).bind(null, client))
    }
});

client.on("ready", () => {
    console.log("Bot opérationnel");
});

client.on("messageCreate", message => {
    console.log(message);
    if(message.content === "pi"){
        message.channel.send("hi");
    }
});


























client.login(token);