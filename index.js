const Telegram = require('node-telegram-bot-api')

const TOKEN = '1120731807:AAHu71FeTVzrX7OhJWzEDf1uMeRhxH6FtUQ'
// const PORT = 21
// const APP_URL = 'https://el-hayot.uz'
// const options = {
//     webHook: {
//         port: PORT
//     }
// }

// const url = APP_URL
const bot = new Telegram(TOKEN, {polling: true})

// bot.setWebhook(`${url}/bot${TOKEN}`)

bot.on('message', msg => {
    const chatId = msg.chat.id
    bot.sendMessage(chatId, 'Hello')
})