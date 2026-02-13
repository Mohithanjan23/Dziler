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
exports.LayoutController = void 0;
const common_1 = require("@nestjs/common");
const layout_service_1 = require("./layout.service");
const swagger_1 = require("@nestjs/swagger");
let LayoutController = class LayoutController {
    constructor(layoutService) {
        this.layoutService = layoutService;
    }
    getGrid(columns, gutter, margin, container) {
        return this.layoutService.generateGrid(Number(columns || 12), Number(gutter || 24), Number(margin || 20), Number(container || 1200));
    }
    getSpacing(base, ratio, steps) {
        return this.layoutService.generateSpacing(Number(base || 4), Number(ratio || 1.5), Number(steps || 10));
    }
};
exports.LayoutController = LayoutController;
__decorate([
    (0, common_1.Get)('grid'),
    (0, swagger_1.ApiOperation)({ summary: 'Generate grid layout tokens' }),
    (0, swagger_1.ApiQuery)({ name: 'columns', required: false, description: 'Number of columns (default 12)' }),
    (0, swagger_1.ApiQuery)({ name: 'gutter', required: false, description: 'Gutter width in px (default 24)' }),
    (0, swagger_1.ApiQuery)({ name: 'margin', required: false, description: 'Margin width in px (default 20)' }),
    (0, swagger_1.ApiQuery)({ name: 'container', required: false, description: 'Max container width in px (default 1200)' }),
    __param(0, (0, common_1.Query)('columns')),
    __param(1, (0, common_1.Query)('gutter')),
    __param(2, (0, common_1.Query)('margin')),
    __param(3, (0, common_1.Query)('container')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Number, Number]),
    __metadata("design:returntype", void 0)
], LayoutController.prototype, "getGrid", null);
__decorate([
    (0, common_1.Get)('spacing'),
    (0, swagger_1.ApiOperation)({ summary: 'Generate spacing scale' }),
    (0, swagger_1.ApiQuery)({ name: 'base', required: false, description: 'Base unit in px (default 4)' }),
    (0, swagger_1.ApiQuery)({ name: 'ratio', required: false, description: 'Scale ratio (1.0 for linear, >1.1 for geometric)' }),
    (0, swagger_1.ApiQuery)({ name: 'steps', required: false, description: 'Number of steps' }),
    __param(0, (0, common_1.Query)('base')),
    __param(1, (0, common_1.Query)('ratio')),
    __param(2, (0, common_1.Query)('steps')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Number]),
    __metadata("design:returntype", void 0)
], LayoutController.prototype, "getSpacing", null);
exports.LayoutController = LayoutController = __decorate([
    (0, swagger_1.ApiTags)('layout'),
    (0, common_1.Controller)('layout'),
    __metadata("design:paramtypes", [layout_service_1.LayoutService])
], LayoutController);
//# sourceMappingURL=layout.controller.js.map