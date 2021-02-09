import { Publisher, Subjects, TicketUpdatedEvent } from '@commonfiles/common-demo';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
