import { Controller, Get, Query } from '@nestjs/common';
import { TypographyService } from './typography.service';
import { ApiTags, ApiOperation, ApiQuery } from '@nestjs/swagger';

@ApiTags('typography')
@Controller('typography')
export class TypographyController {
    constructor(private readonly typographyService: TypographyService) { }

    @Get('scale')
    @ApiOperation({ summary: 'Generate a modular type scale' })
    @ApiQuery({ name: 'base', required: false, description: 'Base font size in px (default 16)' })
    @ApiQuery({ name: 'ratio', required: false, description: 'Scale ratio name (minorSecond, majorThird, perfectFourth, goldenRatio, etc.)' })
    getScale(
        @Query('base') base: number,
        @Query('ratio') ratio: string
    ) {
        return this.typographyService.generateScale(Number(base || 16), ratio);
    }

    @Get('pairing')
    @ApiOperation({ summary: 'Get font pairings based on style' })
    @ApiQuery({ name: 'category', required: false, description: 'Style category (modern, contrast, tech, fun)' })
    getPairing(
        @Query('category') category: string
    ) {
        return this.typographyService.getPairing(category);
    }
}
