import { Test, TestingModule } from '@nestjs/testing';
import { EctomerResolver } from './ectomer.resolver';

describe('EctomerResolver', () => {
  let resolver: EctomerResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EctomerResolver],
    }).compile();

    resolver = module.get<EctomerResolver>(EctomerResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
