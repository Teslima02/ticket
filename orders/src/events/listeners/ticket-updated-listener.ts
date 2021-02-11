import { Message } from 'node-nats-streaming';
import { Subjects, Listener, TicketUpdatedEvent, NotFoundError } from '@commonfiles/common-demo';
import { Ticket } from '../../models/ticket';
import { queueGroupName } from './queue-group-name';

export class TicketUpdatedListener extends Listener<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
  queueGroupName = queueGroupName;

  async onMessage(data: TicketUpdatedEvent['data'], msg: Message) {
    const ticket = await Ticket.findByEvent(data);

    if (!ticket) {
      throw new Error('Ticket not found');
    }

    // This is only meant for manual process only if we're not using mongoose plugin
    // const { title, price, version } = data;
    // ticket.set({ title, price, version });

    const { title, price } = data;
    ticket.set({ title, price });
    await ticket.save();

    msg.ack();
  }
}
