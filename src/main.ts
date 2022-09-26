import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { env } from 'process';
import { AppModule } from './app.module';
import { ConflictInterceptor } from './common/interceptors/conflict.interceptor';
import { DatabaseInterceptor } from './common/interceptors/database.interceptor';
import { NotFoundInterceptor } from './common/interceptors/notfound.interceptor';
import { UnauthorizedInterceptor } from './common/interceptors/unauthrized.interceptor';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true,
            forbidNonWhitelisted: true,
            transform: true,
        }),
    );
    app.useGlobalInterceptors(new ConflictInterceptor());
    app.useGlobalInterceptors(new DatabaseInterceptor());
    app.useGlobalInterceptors(new UnauthorizedInterceptor());
    app.useGlobalInterceptors(new NotFoundInterceptor());
    await app.listen(env.PORT || 3000);
}
bootstrap();
