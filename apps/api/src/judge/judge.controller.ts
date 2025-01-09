import { Controller, Post, Body, Param, Get } from '@nestjs/common';
import { JudgeService } from './judge.service';

@Controller('submission')
export class JudgeController {
  constructor(private judgeService: JudgeService) {}

  @Post()
  async submitCode(
    @Body() body: { sourceCode: string; languageId: number; input?: string },
  ) {
    const { sourceCode, languageId, input } = body;
    return this.judgeService.submitCode(sourceCode, languageId, input);
  }

  @Get(':id')
  async getSubmission(@Param('id') token: string): Promise<any> {
    return this.judgeService.getSubmission(token);
  }
}
