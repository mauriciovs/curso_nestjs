import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateEventDto } from '../dto/create-event.dto';
import { UpdateEventDto } from '../dto/update-event.dto';
import { EventEntity } from '../entities/event.entity';

@Injectable()
export class EventsRepository {
    constructor(private readonly prisma: PrismaService) {}

    async create(createEventDto: CreateEventDto): Promise<EventEntity> {
        return this.prisma.event.create({
            data: createEventDto,
        });
    }

    async findAll(): Promise<EventEntity[]> {
        return this.prisma.event.findMany();
    }

    async findOne(id: string): Promise<EventEntity> {
        return this.prisma.event.findUnique({
            where: {
                id,
            },
        });
    }

    async update(
        id: string,
        updateEventDto: UpdateEventDto,
    ): Promise<EventEntity> {
        return this.prisma.event.update({
            where: {
                id,
            },
            data: updateEventDto,
        });
    }

    async delete(id: string): Promise<EventEntity> {
        return this.prisma.event.delete({
            where: {
                id,
            },
        });
    }
}
