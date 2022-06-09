import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

@Module({
    controllers: [AppController],
    providers: [AppService],
    // be careful with the dg ports
    imports: [
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: 'localhost',
            port: 8080,
            username: 'postgres',
            password: 'admin',
            database: 'nest-test',
            models: [],
            autoLoadModels: true
          }),
    ]
})
export class AppModule {}