import { Test, TestingModule } from '@nestjs/testing';
import { Judge } from './judge';

describe('Judge', () => {
  let provider: Judge;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Judge],
    }).compile();

    provider = module.get<Judge>(Judge);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
