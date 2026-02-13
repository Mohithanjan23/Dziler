import { Controller, Get, Query } from '@nestjs/common';
import { ColorService } from './color.service';
import { ApiTags, ApiOperation, ApiQuery } from '@nestjs/swagger';

@ApiTags('colors')
@Controller('colors')
export class ColorController {
    constructor(private readonly colorService: ColorService) { }

    @Get('palette')
    @ApiOperation({ summary: 'Generate a color palette based on mood and contrast' })
    @ApiQuery({ name: 'mood', required: false, description: 'Mood of the palette (ocean, sunset, forest, dark, modern)' })
    @ApiQuery({ name: 'contrast', required: false, description: 'Contrast level (high, low)' })
    getPalette(
        @Query('mood') mood: string,
        @Query('contrast') contrast: string
    ) {
        return this.colorService.generatePalette(mood, contrast);
    }

    @Get('convert')
    @ApiOperation({ summary: 'Convert a color to a specific format' })
    @ApiQuery({ name: 'color', required: true, description: 'Color to convert (hex, rgb, named)' })
    @ApiQuery({ name: 'format', required: true, description: 'Target format (hex, rgb, hsl, hsv, name)' })
    convertColor(
        @Query('color') color: string,
        @Query('format') format: string
    ) {
        return this.colorService.convertColor(color, format);
    }
}
