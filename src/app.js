require('dotenv').config()
const path = require('path')
const { Telegraf, Composer } = require('telegraf')
const I18n = require('telegraf-i18n')
const Mixpanel = require('telegraf-mixpanel')
const { greet, clear } = require('./handlers')

const bot = new Telegraf(process.env.BOT_TOKEN)

const i18n = new I18n({
  defaultLanguage: 'en',
  defaultLanguageOnMissing: true,
  directory: path.resolve(__dirname, 'locales')
})

const mixpanel = new Mixpanel(process.env.MIXPANEL_TOKEN)

bot.use(i18n, mixpanel)
bot.start(Composer.branch(ctx => ctx.message.text === `/start@${ctx.botInfo.username} clear`, clear, greet))
bot.help(greet)
bot.command('clear', clear)
bot.launch()
