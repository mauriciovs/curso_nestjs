import { Module } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { EventsRepository } from './repositories/events.repository';

@Module({
    controllers: [EventsController],
    providers: [EventsService, PrismaService, EventsRepository],
})
export class EventsModule {}
