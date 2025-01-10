import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { JudgeService } from './judge.service';
import { JudgeController } from './judge.controller';

@Module({
  imports: [HttpModule],
  providers: [JudgeService],
  controllers: [JudgeController],
})
export class JudgeModule {}
