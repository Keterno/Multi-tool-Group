const { Client, InteractionResponse } = require("discord.js-selfbot-v13");
const bot = new Client({checkUpdate: false});
const gradient = require("gradient-string")
const readline = require('node:readline/promises');
var rl = new readline.Interface({"input": process.stdin,"output": process.stdout});
const config = require("./config.js")
process.title = "       Multi-Tool group made by Barbeàbulle ~~ ID discord : 1067138195898236988"
async function main() {
    console.clear()
    console.log(gradient.rainbow(`::::::::::: ::::::::   ::::::::  :::              ::::::::  :::::::::   ::::::::  :::    ::: :::::::::  
    :+:    :+:    :+: :+:    :+: :+:             :+:    :+: :+:    :+: :+:    :+: :+:    :+: :+:    :+: 
    +:+    +:+    +:+ +:+    +:+ +:+             +:+        +:+    +:+ +:+    +:+ +:+    +:+ +:+    +:+ 
    +#+    +#+    +:+ +#+    +:+ +#+             :#:        +#++:++#:  +#+    +:+ +#+    +:+ +#++:++#+  
    +#+    +#+    +#+ +#+    +#+ +#+             +#+   +#+# +#+    +#+ +#+    +#+ +#+    +#+ +#+        
    #+#    #+#    #+# #+#    #+# #+#             #+#    #+# #+#    #+# #+#    #+# #+#    #+# #+#        
    ###     ########   ########  ##########       ########  ###    ###  ########   ########  ### \n\n`))
    await bot.login(config.token)
    const mainchoice = await rl.question(gradient.instagram("  What do you want to do ? \n       [1] Lock groupe name. \n       [2] Lock groupe icon (depreciated). \n       [3] Lock a member in this group (require have this member in friend). \n       [4] Lock a member out of this group (require crown of group). \n       [5] Fetch icon of a group. \n\n"))
    switch (mainchoice) {
        case "1":
            const lockname = await rl.question(gradient.pastel("How do you want lock the group name ? \n[1] With the console? \n[2] By sending a message to the group ? \n"))
            console.clear()
            switch (lockname) {
                case "1":
                    const messageID = await rl.question(gradient.pastel("Enter the group ID : "));
                    const name = await rl.question(gradient.pastel("Enter the name you want to lock : "));
                    channelname(messageID, name);
                    var channel = await bot.channels.fetch(messageID)
                    channel.setName(name).catch(() => {})
                    break;
                case "2":
                    console.log(gradient.pastel`Now just write in the group : "+lockname the name you want !"`)
                    bot.on("messageCreate", async function (message) {
                        var prefix = "+lockname";
                        if (!message.content.startsWith(prefix)) return;
                        var msgs = message.content.substring(prefix.length);
                        var arguments = msgs.split(/ +/g);
                        arguments.shift();
                        var name = arguments.join(" ")
                        var messageID = message.channel.id;
                        channelname(messageID, name);
                        var channel = await bot.channels.fetch(messageID)
                        channel.setName(name).catch(() => {})
                    })
                    break;
                default:
                    break;
            }
            break;
        case "2":
            const lockicon = await rl.question(gradient.pastel("How do you want to lock the group icon ? \n[1] With the console? \n[2] By sending a message to the group ? \n"))
            console.clear()
            switch (lockicon) {
                case "1":
                    const messageID = await rl.question(gradient.pastel("Enter the group ID : "));
                    const lelien = await rl.question(gradient.pastel("Enter the icon you want to lock (link) : "));
                    channelicon(messageID, lelien);
                    var channel = await bot.channels.fetch(messageID)
                    channel.setIcon(lelien).catch(() => {})
                    break;
                case "2":
                    console.log(gradient.pastel(`Now just write in the group : "+lockicon and the link link!"`))
                    bot.on("messageCreate", async function (message) {
                        var prefix = "+lockicon";
                        if (!message.content.startsWith(prefix)) return;
                        var msgs = message.content.substring(prefix.length);
                        var arguments = msgs.split(/ +/g);
                        var lelien = arguments[1]
                        var messageID = message.channel.id;
                        channelname(messageID, lelien);
                        var channel = await bot.channels.fetch(messageID)
                        channel.setIcon(lelien).catch(() => {})
                    })
                    break;
                default:
                    break;
            }
            break;    
        case "3":
            const lockmember = await rl.question(gradient.pastel("How do you want to lock the member ? \n[1] With the console? \n[2] By sending a message to the group ? \n"))
            console.clear()
            switch (lockmember) {
                case "1":
                    const messageID = await rl.question(gradient.pastel("Enter the group ID : "));
                    const memberID = await rl.question(gradient.pastel("Enter the user you want to lock (ID) : "));
                    spam(memberID, messageID);
                    var channel = await bot.channels.fetch(messageID)
                    channel.addMember(memberID).catch(() => {})
                    break;
                case "2":
                    console.log(gradient.pastel(`Now just write in the group : "+lockmember and the user (ID) !"`))
                    bot.on("messageCreate", async function (message) {
                        var prefix = "+lockmember";
                        if (!message.content.startsWith(prefix)) return;
                        var msgs = message.content.substring(prefix.length);
                        var arguments = msgs.split(/ +/g);
                        var memberID = arguments[1]
                        var messageID = message.channel.id;
                        spam(memberID, messageID);
                        var channel = await bot.channels.fetch(messageID)
                        channel.addMember(memberID).catch(() => {})
                    })
                    break;
                default:
                    break;
            }
            break;
        case "4":
            const blmember = await rl.question(gradient.pastel("How do you want bl the member ? \n[1] With the console? \n[2] By sending a message to the group ? \n"))
            console.clear()
            switch (blmember) {
                case "1":
                    const messageID = await rl.question(gradient.pastel("Enter the group ID : "));
                    const memberID = await rl.question(gradient.pastel("Enter the user you want to bl (ID) : "));
                    bl(memberID, messageID);
                    var channel = await bot.channels.fetch(messageID)
                    channel.removeMember(memberID).catch(() => {})
                    break;
                case "2":
                    console.log(gradient.pastel(`Now just write in the group : "+blmember and the user (ID) !"`))
                    bot.on("messageCreate", async function (message) {
                        var prefix = "+blmember";
                        if (!message.content.startsWith(prefix)) return;
                        var msgs = message.content.substring(prefix.length);
                        var arguments = msgs.split(/ +/g);
                        var memberID = arguments[1]
                        var messageID = message.channel.id;
                        bl(memberID, messageID);
                        var channel = await bot.channels.fetch(messageID)
                        channel.removeMember(memberID).catch(() => {})
                    })
                    break;
                default:
                    break;
            }
            break;
        case "5":
            const icons = await rl.question(gradient.pastel("How do you want to fetch the icon ? \n[1] With the console? \n[2] By sending a message to the group ? \n"))
            console.clear()
            switch (icons) {
                case "1":
                    const messageID = await rl.question(gradient.pastel("Enter the group ID : "));
                    var channel = await bot.channels.fetch(messageID)
                    if(!channel.iconURL()) return console.log(gradient.pastel("No icon for this group !"))
                    console.log(channel.iconURL())
                    break;
                case "2":
                    console.log(gradient.pastel`Now just write in the group : "+icon"`)
                    bot.on("messageCreate", async (message) => {
                        if(message.content != "+icon") return;
                        if(!message.channel.iconURL()) return console.log("No icon for this group !")
                        await message.reply(message.channel.iconURL())
                    })
                    break;
                default:
                    break;
            }
            break;
        default:
            break;
    }
}main()
async function channelname(messageID, name) {
    bot.on("channelUpdate", async function (oldChannel, newChannel) {
        if(oldChannel.id != messageID) return;
        if(oldChannel.name == newChannel.name) return;
        var channelID = oldChannel.id
        var channel = await bot.channels.fetch(channelID)
        await channel.setName(name).then(console.log(`"${oldChannel.name}" change to "${newChannel.name}" \n`))
    })
}
async function channelicon(messageID, lelien) {
    bot.on("channelUpdate", async function (oldChannel, newChannel) {
        if(oldChannel.id != messageID) return;
        if(oldChannel.icon == newChannel.icon) return;
        var channelID = oldChannel.id
        var channel = await bot.channels.fetch(channelID)
        await channel.setIcon(lelien)
        console.log("Icon change \n")
    })
}
async function spam(memberID, messageID) {
    bot.on("channelRecipientRemove", async function (channel, user) {
        if(channel.id != messageID) return;
        if(user.id != memberID) return;
        await channel.addMember(user)
        console.log(user.username + " is now in the group !")
    })
}
async function bl(memberID, messageID) {
    bot.on("channelRecipientAdd", async function (channel, user) {
        if(channel.id != messageID) return;
        if(user.id != memberID) return;
        await channel.removeMember(user)
        console.log(user.username + " was kick of this group !")
    })
}
