import { Injectable } from '@nestjs/common';

@Injectable()
export class MotionService {

    getCurves(type: string = 'standard'): any {
        const curves = {
            standard: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
            decelerate: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
            accelerate: 'cubic-bezier(0.4, 0.0, 1, 1)',
            sharp: 'cubic-bezier(0.4, 0.0, 0.6, 1)',
            spring: 'spring(1, 100, 10, 0)'
        };

        if (type && curves[type]) {
            return { [type]: curves[type] };
        }
        return curves;
    }

    getDurations(speed: string = 'normal'): any {
        const durations = {
            fast: '100ms',
            normal: '200ms',
            slow: '300ms',
            xs: '50ms',
            xl: '500ms'
        };

        return durations;
    }

    getMotionTokens(type: string): any {
        if (type === 'microinteraction') {
            return {
                duration: '150ms',
                easing: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
                properties: ['transform', 'opacity', 'color', 'background-color']
            };
        }
        return {
            curves: this.getCurves(),
            durations: this.getDurations()
        };
    }
}
