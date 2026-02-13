import { Test, TestingModule } from '@nestjs/testing';
import { TypographyController } from './typography.controller';
import { TypographyService } from './typography.service';

describe('TypographyController', () => {
  let controller: TypographyController;

  const mockTypographyService = {
    generateScale: jest.fn(),
    getPairing: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypographyController],
      providers: [
        {
          provide: TypographyService,
          useValue: mockTypographyService
        }
      ]
    }).compile();

    controller = module.get<TypographyController>(TypographyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
