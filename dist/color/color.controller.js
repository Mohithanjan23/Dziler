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
exports.ColorController = void 0;
const common_1 = require("@nestjs/common");
const color_service_1 = require("./color.service");
const swagger_1 = require("@nestjs/swagger");
let ColorController = class ColorController {
    constructor(colorService) {
        this.colorService = colorService;
    }
    getPalette(mood, contrast) {
        return this.colorService.generatePalette(mood, contrast);
    }
    convertColor(color, format) {
        return this.colorService.convertColor(color, format);
    }
};
exports.ColorController = ColorController;
__decorate([
    (0, common_1.Get)('palette'),
    (0, swagger_1.ApiOperation)({ summary: 'Generate a color palette based on mood and contrast' }),
    (0, swagger_1.ApiQuery)({ name: 'mood', required: false, description: 'Mood of the palette (ocean, sunset, forest, dark, modern)' }),
    (0, swagger_1.ApiQuery)({ name: 'contrast', required: false, description: 'Contrast level (high, low)' }),
    __param(0, (0, common_1.Query)('mood')),
    __param(1, (0, common_1.Query)('contrast')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ColorController.prototype, "getPalette", null);
__decorate([
    (0, common_1.Get)('convert'),
    (0, swagger_1.ApiOperation)({ summary: 'Convert a color to a specific format' }),
    (0, swagger_1.ApiQuery)({ name: 'color', required: true, description: 'Color to convert (hex, rgb, named)' }),
    (0, swagger_1.ApiQuery)({ name: 'format', required: true, description: 'Target format (hex, rgb, hsl, hsv, name)' }),
    __param(0, (0, common_1.Query)('color')),
    __param(1, (0, common_1.Query)('format')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ColorController.prototype, "convertColor", null);
exports.ColorController = ColorController = __decorate([
    (0, swagger_1.ApiTags)('colors'),
    (0, common_1.Controller)('colors'),
    __metadata("design:paramtypes", [color_service_1.ColorService])
], ColorController);
//# sourceMappingURL=color.controller.js.map