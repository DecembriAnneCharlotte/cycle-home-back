import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Configuration Swagger
  const config = new DocumentBuilder()
    .setTitle('HomeCycl\'Home API')
    .setDescription('API pour la gestion des interventions à domicile pour les vélos')
    .setVersion('1.0')
    .addBearerAuth() // Pour l'authentification JWT
    .addTag('auth', 'Authentification endpoints')
    .addTag('users', 'Gestion des utilisateurs')
    .addTag('interventions', 'Gestion des interventions')
    .addTag('planning', 'Gestion des plannings')
    .addTag('zones', 'Gestion des zones')
    .addTag('products', 'Gestion des produits')
    .addTag('feedback', 'Gestion des retours clients')
    .addTag('brand', 'Gestion des marques blanches')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // Configuration CORS
  app.enableCors();

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
