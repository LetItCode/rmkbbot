const { Markup } = require('telegraf')

exports.help = ({ botInfo, replyWithHTML, i18n }) => {
  const text = i18n.t('help')
  const extra = Markup.inlineKeyboard([
    Markup.urlButton(i18n.t('btn.invite'), `https://t.me/${botInfo.username}?startgroup=clear`)
  ]).extra()
  return replyWithHTML(text, extra)
}

exports.clear = ({ replyWithHTML, i18n }) => {
  const text = i18n.t('clear')
  const extra = Markup.removeKeyboard().extra()
  return replyWithHTML(text, extra)
}
