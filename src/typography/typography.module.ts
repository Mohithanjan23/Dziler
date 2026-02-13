import { Module } from '@nestjs/common';
import { TypographyService } from './typography.service';
import { TypographyController } from './typography.controller';

@Module({
  providers: [TypographyService],
  controllers: [TypographyController]
})
export class TypographyModule {}
