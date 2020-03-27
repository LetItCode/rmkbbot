const { Composer, Markup } = require('telegraf')
const bot = new Composer()

bot.command(
  ['start', 'help'],
  Composer.branch(
    ctx => ctx.message.text.substring(7).replace(RegExp(`^${ctx.botInfo.username} `), '') === 'clear',
    clear,
    ({ botInfo, replyWithHTML }) =>
      replyWithHTML(
        "Hi! I can help you to clear chat from custom keyboard. Just invite me and everything's gonna be alrigh!",
        Markup.inlineKeyboard([
          Markup.urlButton('Invite dat cool bot', `https://t.me/${botInfo.username}?startgroup=clear`)
        ]).extra()
      )
  )
)

bot.command('clear', clear)

function clear ({ replyWithHTML }) {
  replyWithHTML(
    '🧽 Okay chat is cleared, you can send a BTC tip to: <code>1JosHdiEs32PfTAbbaVpuFXq3pG5bR5yBb</code>',
    Markup.removeKeyboard().extra()
  )
}

module.exports = bot
