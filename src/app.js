require('dotenv').config()
const path = require('path')
const { Telegraf, Composer } = require('telegraf')
const I18n = require('telegraf-i18n')
const { help, clear } = require('./handlers')

const bot = new Telegraf(process.env.BOT_TOKEN)

const i18n = new I18n({
  defaultLanguage: 'en',
  defaultLanguageOnMissing: true,
  directory: path.resolve(__dirname, 'locales')
})

bot.use(i18n)
bot.command(
  ['start', 'help'],
  Composer.branch(ctx => ctx.message.text === `/start@${ctx.botInfo.username} clear`, clear, help)
)
bot.command('clear', clear)
bot.launch()
