import { Publisher, Subjects, TicketCreatedEvent } from '@commonfiles/common-demo';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
