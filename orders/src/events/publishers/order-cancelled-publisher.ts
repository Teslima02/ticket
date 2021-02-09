import { Subjects, Publisher, OrderCancelledEvent } from '@commonfiles/common-demo';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
