import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import cookieParser from "cookie-parser";
import session from "express-session";
import { AppModule } from "./app.module";
import { SwaggerModule } from "@nestjs/swagger";
import { SwaggerConfig } from "./swagger/swagger.config";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    })
  );
  const swagger_ui_entpoint = "/swagger";
  const document = SwaggerModule.createDocument(app, SwaggerConfig);
  SwaggerModule.setup(swagger_ui_entpoint, app, document);
  app.use(cookieParser());
  await app.listen(8000);
}
bootstrap();
