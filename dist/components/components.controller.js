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
exports.ComponentsController = void 0;
const common_1 = require("@nestjs/common");
const components_service_1 = require("./components.service");
const swagger_1 = require("@nestjs/swagger");
let ComponentsController = class ComponentsController {
    constructor(componentsService) {
        this.componentsService = componentsService;
    }
    getComponent(name, style) {
        return this.componentsService.getComponent(name, style);
    }
};
exports.ComponentsController = ComponentsController;
__decorate([
    (0, common_1.Get)(':name'),
    (0, swagger_1.ApiOperation)({ summary: 'Get design tokens for a specific component' }),
    (0, swagger_1.ApiParam)({ name: 'name', description: 'Component name (button, input, card, modal)' }),
    (0, swagger_1.ApiQuery)({ name: 'style', required: false, description: 'Design style (flat, glass, neu)' }),
    __param(0, (0, common_1.Param)('name')),
    __param(1, (0, common_1.Query)('style')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ComponentsController.prototype, "getComponent", null);
exports.ComponentsController = ComponentsController = __decorate([
    (0, swagger_1.ApiTags)('components'),
    (0, common_1.Controller)('components'),
    __metadata("design:paramtypes", [components_service_1.ComponentsService])
], ComponentsController);
//# sourceMappingURL=components.controller.js.map