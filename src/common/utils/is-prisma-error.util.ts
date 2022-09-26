import { PrismaClientError } from '../errors/types/PrismaClientError';

export const isPrismaError = (error: PrismaClientError) => {
    return (
        typeof error.code === 'string' &&
        typeof error.clientVersion === 'string' &&
        (typeof error.meta === 'undefined' || typeof error.meta === 'object')
    );
};
