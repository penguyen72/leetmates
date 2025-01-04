import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProblemsController } from './problems.controller';
import { ProblemsService } from './problems.service';
import { Problem, ProblemSchema } from '../schemas/problem.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Problem.name, schema: ProblemSchema }]),
  ],
  controllers: [ProblemsController],
  providers: [ProblemsService],
})
export class ProblemsModule {}
