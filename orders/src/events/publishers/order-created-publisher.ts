import { Publisher, OrderCreatedEvent, Subjects } from '@commonfiles/common-demo';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
