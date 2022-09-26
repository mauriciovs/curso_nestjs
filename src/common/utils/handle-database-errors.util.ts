import { DatabaseError } from '../errors/types/DatabaseError';
import { PrismaClientError } from '../errors/types/PrismaClientError';
import { UniqueConstraintError } from '../errors/types/UniqueConstraintError';

enum PrismaErrors {
    UniqueConstraintFail = 'P2002',
}

export const handleDatabaseErrors = (error: PrismaClientError): Error => {
    switch (error.code) {
        case PrismaErrors.UniqueConstraintFail:
            return new UniqueConstraintError(error);
            break;

        default:
            return new DatabaseError(error.message);
            break;
    }
};
