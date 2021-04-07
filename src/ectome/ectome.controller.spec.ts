import { Test, TestingModule } from '@nestjs/testing';
import { EctomeController } from './ectome.controller';

describe('EctomeController', () => {
  let controller: EctomeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EctomeController],
    }).compile();

    controller = module.get<EctomeController>(EctomeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
