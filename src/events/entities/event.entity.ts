import { Event } from '@prisma/client';

export class EventEntity implements Event {
    id: string;
    name: string;
    description: string;
    date: Date;
    createdAt: Date;
    ownerId: string;
}
