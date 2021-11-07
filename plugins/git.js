const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: "Gives github link of the bot"}, (async (message, match) => {

    var skl = await axios.get("https://imgur.com/a/y7HFCdO", { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(skl.data), MessageType.image, {mimetype: Mimetype.png, caption: `*M6858 bot created by ZBRT*
*Creator number : wa.me/9114842842183?text=Hi%ZBRT%20

*CREATOR INSTAGRAM : https://instagram.com/klsiy *

*Githublink (Setup)  :    https://github.com/zbrt-y/M6858*

*Audio commads :   https://github.com/zbrt-y/M6858/tree/master/uploads*

*Sticker commads : https://github.com/zbrt-y/M6858/tree/master/uploads*

*Website    : https://zbrt.github.io
  


*For More Updates FOLLOW INSTAGRAM*
`}) 

}));
