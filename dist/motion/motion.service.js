"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MotionService = void 0;
const common_1 = require("@nestjs/common");
let MotionService = class MotionService {
    getCurves(type = 'standard') {
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
    getDurations(speed = 'normal') {
        const durations = {
            fast: '100ms',
            normal: '200ms',
            slow: '300ms',
            xs: '50ms',
            xl: '500ms'
        };
        return durations;
    }
    getMotionTokens(type) {
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
};
exports.MotionService = MotionService;
exports.MotionService = MotionService = __decorate([
    (0, common_1.Injectable)()
], MotionService);
//# sourceMappingURL=motion.service.js.map