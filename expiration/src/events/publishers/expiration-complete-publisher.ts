import { Subjects, Publisher, ExpirationCompleteEvent } from '@commonfiles/common-demo';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
    subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}