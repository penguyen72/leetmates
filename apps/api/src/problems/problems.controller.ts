import { Controller, Get, Req, Param } from '@nestjs/common';
import { ProblemsService } from './problems.service'
import { Problem } from '../schemas/problem.schema'

@Controller('problems')
export class ProblemsController {
  constructor(private problemsService: ProblemsService) {}

  @Get()
  getAllProblems(@Req() request: Request): Promise<Problem[]> {
    return this.problemsService.getAllProblems();
  }

  @Get(':id')
  async getProblemById(@Param('id') id: string): Promise<Problem> {
    return this.problemsService.getProblemById(id);
  }
}
