javascript
const Telegraf = require('telegraf');
const bot = new Telegraf('6008668981:AAE-GMnCqmITBohOVJ2o3AN8hzYjvPqnjTA');

bot.start((ctx) => {
    ctx.reply('Привет! Я бот на Telegram!');
});

bot.help((ctx) => {
    ctx.reply('Отправьте мне сообщение и я отвечу!');
});

bot.hears('привет', (ctx) => {
    ctx.reply('Привет!');
});

bot.on('text', (ctx) => {
    ctx.reply(`Вы прислали текст: ${ctx.message.text}`);
});

bot.launch();
console.log('Бот успешно запущен');
