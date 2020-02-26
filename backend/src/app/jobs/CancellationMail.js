import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Mail from '../../lib/Mail';

class CancellationMail {
  get key() {
    // Nome que será usado na ligação com o Redis
    return 'CancellationMail';
  }

  async handle(info) {
    const { data } = info;

    const { appointment } = data;

    const day = format(parseISO(appointment.date), "dd 'de' MMMM", {
      locale: pt, // Português
    });

    const hour = format(parseISO(appointment.date), 'H:mm', {
      locale: pt, // Português
    });

    await Mail.sendMail({
      to: `${appointment.provider.name} <${appointment.provider.email}>`,
      subject: 'Agendamento cancelado',
      template: 'cancellation',
      context: {
        providerName: appointment.provider.name,
        userName: appointment.user.name,
        day,
        hour,
      },
    });
  }
}

export default new CancellationMail();
