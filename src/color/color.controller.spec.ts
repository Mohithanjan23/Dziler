import { Test, TestingModule } from '@nestjs/testing';
import { ColorController } from './color.controller';
import { ColorService } from './color.service';

describe('ColorController', () => {
  let controller: ColorController;

  const mockColorService = {
    generatePalette: jest.fn(),
    convertColor: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ColorController],
      providers: [
        {
          provide: ColorService,
          useValue: mockColorService
        }
      ]
    }).compile();

    controller = module.get<ColorController>(ColorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
