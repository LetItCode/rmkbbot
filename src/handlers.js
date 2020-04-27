const { Markup } = require('telegraf')

exports.greet = ({ botInfo, replyWithHTML, i18n, mixpanel }) => {
  mixpanel.track('greeting')
  const text = i18n.t('greet')
  const extra = Markup.inlineKeyboard([
    Markup.urlButton(i18n.t('btn.invite'), `https://t.me/${botInfo.username}?startgroup=clear`)
  ]).extra()
  return replyWithHTML(text, extra)
}

exports.clear = ({ chat, replyWithHTML, i18n, mixpanel }) => {
  mixpanel.track('clearing', { chatId: chat.id, title: chat.title })
  const text = i18n.t('clear')
  const extra = Markup.removeKeyboard().extra()
  return replyWithHTML(text, extra)
}
