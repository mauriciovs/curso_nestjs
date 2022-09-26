import { Injectable } from '@nestjs/common';
import { NotFoundError } from 'src/common/errors/types/NotFoundError';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
import { UserRepository } from './repositories/user.repository';

@Injectable()
export class UserService {
    constructor(private readonly repository: UserRepository) {}

    create(createUserDto: CreateUserDto) {
        return this.repository.create(createUserDto);
    }

    findAll() {
        return this.repository.findAll();
    }

    async findOne(id: string): Promise<UserEntity> {
        const user = await this.repository.findOne(id);

        if (!user) {
            throw new NotFoundError('Usuário não encontrado');
        }

        return user;
    }

    update(id: string, updateUserDto: UpdateUserDto) {
        return this.repository.update(id, updateUserDto);
    }

    delete(id: string) {
        return this.repository.delete(id);
    }
}
