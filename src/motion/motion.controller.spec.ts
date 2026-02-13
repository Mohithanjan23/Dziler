import { Test, TestingModule } from '@nestjs/testing';
import { MotionController } from './motion.controller';
import { MotionService } from './motion.service';

describe('MotionController', () => {
  let controller: MotionController;

  const mockMotionService = {
    getMotionTokens: jest.fn(),
    getCurves: jest.fn(),
    getDurations: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MotionController],
      providers: [
        {
          provide: MotionService,
          useValue: mockMotionService
        }
      ]
    }).compile();

    controller = module.get<MotionController>(MotionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
