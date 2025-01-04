import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Types } from 'mongoose';

// Define the TestCaseModel schema
@Schema()
export class TestCase {
  @Prop({ required: true })
  input: string;

  @Prop({ required: true })
  output: string;
}

export const TestCaseSchema = SchemaFactory.createForClass(TestCase);

@Schema({ timestamps: true }) // Adds `createdAt` and `updatedAt` automatically
export class Problem extends Document {
  @Prop({ type: Types.ObjectId, auto: true })
  id: Types.ObjectId;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  difficulty: string;

  @Prop({ type: [String] })
  tags: string[];

  @Prop({ type: [TestCaseSchema] }) // Embed the TestCase schema
  testCases: TestCase[];
}

export const ProblemSchema = SchemaFactory.createForClass(Problem);

