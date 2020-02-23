export default {
  host: process.env.MAIL_HOST, // Host para envio através de SMTP
  port: process.env.MAIL_PORT, // Porta do host
  secure: false, // Se está utilizando SSL (segurança)
  auth: { // Autenticação para o envio através do Mailtrap
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  },
  default: { // Confirações padrão de todos os e-mails
    from: 'Matheus Bernardi <noreplay@gobarber.com>'
  }
}

/*
  Algumas provedoras de serviço de envio de e-mails:
    Amazon SES
    Mailgun
    Sparkpost
    Mandril (só para quem usa Mailchip)
    Gmail (possui limite e bloqueia o envio)
    Mailtrap (apenas para ambiente de desenvolvimento)
*/
