const dotenvConfig = require("../dotenvConfig")
const nodemailer = require("nodemailer")
require('dotenv').config(dotenvConfig)
const { MAIL_HOST, MAIL_USER, MAIL_PASSWORD, RECIEVE_CONTACT_MAIL_ADDRESS, MAIL_PORT, MAIL_USE_SECURE } = process.env
const transporter = nodemailer.createTransport({
  host: MAIL_HOST,
  port: MAIL_PORT,
  secure: MAIL_USE_SECURE,
  auth: {
    user: MAIL_USER,
    pass: MAIL_PASSWORD,
  }
})
const generateReplyContactText = (toSendInfo) => {
  const { name, email, body, subject, name_kana, tel } = toSendInfo
  return `
    ${name}様
    この度はお問い合わせありがとうございました。
    問い合わせフォームより以下の内容で送信いたしました。
    3営業日以内に、担当者よりご連絡いたします。
    お名前：${name}
    ふりがな：${name_kana}
    E-Mail：${email}
    TEL：${tel}
    お問い合わせ内容： ${subject}
    本文：
    ${body}
    ※本メールはサーバーからの自動返信メールとなっております。
    本メールに返信いただいてもご連絡いたしかねますのでご了承ください。
    ---------------------------------
    株式会社 陽神建設
    Email: info@youshin.jp
    Web: http://yoshin-kensetsu.com/
    ---------------------------------
  `
}
const generateContactText = (toSendInfo) => {
  const { name, email, body, subject, name_kana, tel } = toSendInfo
  return `
    ${name} 様より ${subject} について以下の問い合わせがありました。
    お名前: ${name}
    ふりがな：${name_kana}
    メールアドレス: ${email}
    TEL：${tel}
    問い合わせ内容: ${subject}
    本文 ---------------------------
    ${body}
    ---------------------------------
    問い合わせ元 --------------------
    株式会社 陽神建設
    Email: 
    Web:
    ---------------------------------
  `
}
const sendMail = (toSendInfo) => {
  const replyContactMailOptions = {
    from: "yoshinkensetsu.kato@outlook.jp",
    to: toSendInfo["email"],
    subject: "【株式会社 陽神建設】お問い合わせありがとうございます",
    text: generateReplyContactText(toSendInfo),
  }
  const contactMailOptions = {
    from: "yoshinkensetsu.kato@outlook.jp",
    to: RECIEVE_CONTACT_MAIL_ADDRESS,
    subject: "【株式会社 陽神建設】サイトより問い合わせがありました",
    text: generateContactText(toSendInfo),
  }
  transporter.sendMail(replyContactMailOptions, (error, info) => {
    if (info) {
      console.log(info)
    }
    if (error) {
      console.log(error)
    }
  })
  transporter.sendMail(contactMailOptions, (error, info) => {
    if (info) {
      console.log(info)
    }
    if (error) {
      console.log(error)
    }
  })
  transporter.close()
}
module.exports = sendMail
