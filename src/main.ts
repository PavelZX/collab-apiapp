import {ValidationPipe} from '@nestjs/common';
import {NestFactory} from '@nestjs/core';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';
import {AppModule} from './app.module';

async function bootstrap() {

    const app = await NestFactory.create(AppModule);

    const options = new DocumentBuilder()
        .setTitle('Collab example')
        .setDescription('The Collab API')
        .setVersion('1.0')
        .addBearerAuth('Authorization', 'header')
        .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('api', app, document);

    app.enableCors();

    app.useGlobalPipes(
        new ValidationPipe({
            disableErrorMessages: false,
            transform: true,
            transformOptions: {
                strategy: 'excludeAll',
            },
        }),
    );

    await app.listen(3000);
}

bootstrap();
