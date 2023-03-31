javascript
const Telegraf = require('telegraf');
const bot = new Telegraf('YOUR_BOT_TOKEN');

bot.start((ctx) => ctx.reply('Привет! Я бот на Telegram!'));

bot.help((ctx) => ctx.reply('Отправьте мне сообщение и я отвечу!'));

bot.hears('привет', (ctx) => {
  ctx.reply('Привет!');
});

bot.on('message', (ctx) => {
  ctx.reply(`Вы написали: ${ctx.message.text}`);
});

bot.launch();
console.log('Bot is running!');
