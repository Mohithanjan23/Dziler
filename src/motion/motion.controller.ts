import { Controller, Get, Query } from '@nestjs/common';
import { MotionService } from './motion.service';
import { ApiTags, ApiOperation, ApiQuery } from '@nestjs/swagger';

@ApiTags('motion')
@Controller('motion')
export class MotionController {
    constructor(private readonly motionService: MotionService) { }

    @Get()
    @ApiOperation({ summary: 'Get all motion tokens or specific type' })
    @ApiQuery({ name: 'type', required: false, description: 'Type of motion (microinteraction, etc.)' })
    getMotion(@Query('type') type: string) {
        return this.motionService.getMotionTokens(type);
    }

    @Get('curves')
    @ApiOperation({ summary: 'Get easing curves' })
    @ApiQuery({ name: 'type', required: false, description: 'Curve type (standard, decelerate, accelerate, sharp)' })
    getCurves(@Query('type') type: string) {
        return this.motionService.getCurves(type);
    }

    @Get('durations')
    @ApiOperation({ summary: 'Get duration tokens' })
    getDurations() {
        return this.motionService.getDurations();
    }
}
