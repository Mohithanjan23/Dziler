import { Controller, Get, Query } from '@nestjs/common';
import { LayoutService } from './layout.service';
import { ApiTags, ApiOperation, ApiQuery } from '@nestjs/swagger';

@ApiTags('layout')
@Controller('layout')
export class LayoutController {
    constructor(private readonly layoutService: LayoutService) { }

    @Get('grid')
    @ApiOperation({ summary: 'Generate grid layout tokens' })
    @ApiQuery({ name: 'columns', required: false, description: 'Number of columns (default 12)' })
    @ApiQuery({ name: 'gutter', required: false, description: 'Gutter width in px (default 24)' })
    @ApiQuery({ name: 'margin', required: false, description: 'Margin width in px (default 20)' })
    @ApiQuery({ name: 'container', required: false, description: 'Max container width in px (default 1200)' })
    getGrid(
        @Query('columns') columns: number,
        @Query('gutter') gutter: number,
        @Query('margin') margin: number,
        @Query('container') container: number
    ) {
        return this.layoutService.generateGrid(Number(columns || 12), Number(gutter || 24), Number(margin || 20), Number(container || 1200));
    }

    @Get('spacing')
    @ApiOperation({ summary: 'Generate spacing scale' })
    @ApiQuery({ name: 'base', required: false, description: 'Base unit in px (default 4)' })
    @ApiQuery({ name: 'ratio', required: false, description: 'Scale ratio (1.0 for linear, >1.1 for geometric)' })
    @ApiQuery({ name: 'steps', required: false, description: 'Number of steps' })
    getSpacing(
        @Query('base') base: number,
        @Query('ratio') ratio: number,
        @Query('steps') steps: number
    ) {
        return this.layoutService.generateSpacing(Number(base || 4), Number(ratio || 1.5), Number(steps || 10));
    }
}
