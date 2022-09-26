import { Injectable } from '@nestjs/common';
import { NotFoundError } from 'src/common/errors/types/NotFoundError';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { EventEntity } from './entities/event.entity';
import { EventsRepository } from './repositories/events.repository';

@Injectable()
export class EventsService {
    constructor(private readonly repository: EventsRepository) {}

    create(createEventDto: CreateEventDto) {
        return this.repository.create(createEventDto);
    }

    findAll() {
        return this.repository.findAll();
    }

    async findOne(id: string): Promise<EventEntity> {
        const event = await this.repository.findOne(id);

        if (!event) {
            throw new NotFoundError('Evento não encontrado');
        }

        return event;
    }

    update(id: string, updateEventDto: UpdateEventDto) {
        return this.repository.update(id, updateEventDto);
    }

    delete(id: string) {
        return this.repository.delete(id);
    }
}
