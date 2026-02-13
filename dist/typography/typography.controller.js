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
exports.TypographyController = void 0;
const common_1 = require("@nestjs/common");
const typography_service_1 = require("./typography.service");
const swagger_1 = require("@nestjs/swagger");
let TypographyController = class TypographyController {
    constructor(typographyService) {
        this.typographyService = typographyService;
    }
    getScale(base, ratio) {
        return this.typographyService.generateScale(Number(base || 16), ratio);
    }
    getPairing(category) {
        return this.typographyService.getPairing(category);
    }
};
exports.TypographyController = TypographyController;
__decorate([
    (0, common_1.Get)('scale'),
    (0, swagger_1.ApiOperation)({ summary: 'Generate a modular type scale' }),
    (0, swagger_1.ApiQuery)({ name: 'base', required: false, description: 'Base font size in px (default 16)' }),
    (0, swagger_1.ApiQuery)({ name: 'ratio', required: false, description: 'Scale ratio name (minorSecond, majorThird, perfectFourth, goldenRatio, etc.)' }),
    __param(0, (0, common_1.Query)('base')),
    __param(1, (0, common_1.Query)('ratio')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", void 0)
], TypographyController.prototype, "getScale", null);
__decorate([
    (0, common_1.Get)('pairing'),
    (0, swagger_1.ApiOperation)({ summary: 'Get font pairings based on style' }),
    (0, swagger_1.ApiQuery)({ name: 'category', required: false, description: 'Style category (modern, contrast, tech, fun)' }),
    __param(0, (0, common_1.Query)('category')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TypographyController.prototype, "getPairing", null);
exports.TypographyController = TypographyController = __decorate([
    (0, swagger_1.ApiTags)('typography'),
    (0, common_1.Controller)('typography'),
    __metadata("design:paramtypes", [typography_service_1.TypographyService])
], TypographyController);
//# sourceMappingURL=typography.controller.js.map