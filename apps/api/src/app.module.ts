import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProblemsService } from './problems/problems.service';
import { ProblemsController } from './problems/problems.controller';
import { ProblemsModule } from './problems/problems.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Makes the configuration accessible globally
    }),
    MongooseModule.forRoot(process.env.MONGO_URI),
    ProblemsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
