"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MotionController = void 0;
const common_1 = require("@nestjs/common");
const motion_service_1 = require("./motion.service");
const swagger_1 = require("@nestjs/swagger");
let MotionController = class MotionController {
    constructor(motionService) {
        this.motionService = motionService;
    }
    getMotion(type) {
        return this.motionService.getMotionTokens(type);
    }
    getCurves(type) {
        return this.motionService.getCurves(type);
    }
    getDurations() {
        return this.motionService.getDurations();
    }
};
exports.MotionController = MotionController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all motion tokens or specific type' }),
    (0, swagger_1.ApiQuery)({ name: 'type', required: false, description: 'Type of motion (microinteraction, etc.)' }),
    __param(0, (0, common_1.Query)('type')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MotionController.prototype, "getMotion", null);
__decorate([
    (0, common_1.Get)('curves'),
    (0, swagger_1.ApiOperation)({ summary: 'Get easing curves' }),
    (0, swagger_1.ApiQuery)({ name: 'type', required: false, description: 'Curve type (standard, decelerate, accelerate, sharp)' }),
    __param(0, (0, common_1.Query)('type')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MotionController.prototype, "getCurves", null);
__decorate([
    (0, common_1.Get)('durations'),
    (0, swagger_1.ApiOperation)({ summary: 'Get duration tokens' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MotionController.prototype, "getDurations", null);
exports.MotionController = MotionController = __decorate([
    (0, swagger_1.ApiTags)('motion'),
    (0, common_1.Controller)('motion'),
    __metadata("design:paramtypes", [motion_service_1.MotionService])
], MotionController);
//# sourceMappingURL=motion.controller.js.map