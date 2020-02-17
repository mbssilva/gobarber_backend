export default {
  host: 'smtp.mailtrap.io', // Host para envio através de SMTP
  port: '2525', // Porta do host
  secure: false, // Se está utilizando SSL (segurança)
  auth: { // Autenticação para o envio através do Mailtrap
    user: 'ba8f796fd72a0a',
    pass: '7b480a2861642d'
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
