import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Problem } from '../schemas/problem.schema';

@Injectable()
export class ProblemsService {
  constructor(@InjectModel(Problem.name) private problemModel: Model<Problem>) {}

  async getAllProblems(): Promise<Problem[]> {
    return this.problemModel.find().exec(); // Fetch all problems
  }

  async getProblemById(id: string): Promise<Problem> {
    const problem = await this.problemModel.findById(id).exec();
    if (!problem) {
      throw new NotFoundException(`Problem with ID ${id} not found`);
    }
    return problem;
  }
}
