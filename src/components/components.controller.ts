import { Controller, Get, Param, Query } from '@nestjs/common';
import { ComponentsService } from './components.service';
import { ApiTags, ApiOperation, ApiQuery, ApiParam } from '@nestjs/swagger';

@ApiTags('components')
@Controller('components')
export class ComponentsController {
    constructor(private readonly componentsService: ComponentsService) { }

    @Get(':name')
    @ApiOperation({ summary: 'Get design tokens for a specific component' })
    @ApiParam({ name: 'name', description: 'Component name (button, input, card, modal)' })
    @ApiQuery({ name: 'style', required: false, description: 'Design style (flat, glass, neu)' })
    getComponent(
        @Param('name') name: string,
        @Query('style') style: string
    ) {
        return this.componentsService.getComponent(name, style);
    }
}
