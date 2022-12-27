import { DocumentBuilder } from "@nestjs/swagger";

export const SwaggerConfig = new DocumentBuilder()
  .setTitle("bcheck back auth")
  .setDescription("bcheck backend auth microservice")
  .setVersion("3.0.0")
  // .setHost('localhost:3000')
  //.setBasePath('/')
  // .setSchemes('http')
  .setExternalDoc("For more information", "http://swagger.io")
  .addTag("Application", "bcheck-back-auth")
  .addBearerAuth(
    {
      type: "http",
      scheme: "bearer",
      name: "JWT",
      in: "header",
    },
    "access_token"
  )
  .build();
