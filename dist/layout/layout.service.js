"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LayoutService = void 0;
const common_1 = require("@nestjs/common");
let LayoutService = class LayoutService {
    generateGrid(columns = 12, gutter = 24, margin = 20, container = 1200) {
        const totalGutter = gutter * (columns - 1);
        const availableWidth = container - (margin * 2);
        const columnWidth = (availableWidth - totalGutter) / columns;
        return {
            columns,
            gutter: `${gutter}px`,
            margin: `${margin}px`,
            container: `${container}px`,
            columnWidth: `${parseFloat(columnWidth.toFixed(2))}px`,
            cssGrid: `repeat(${columns}, 1fr)`,
            gap: `${gutter}px`
        };
    }
    generateSpacing(base = 4, scale = 1.5, steps = 10) {
        const spacing = [];
        for (let i = 0; i <= steps; i++) {
            const val = base * (i === 0 ? 0.5 : i);
            let pxValue;
            if (scale > 1.1) {
                pxValue = base * Math.pow(scale, i);
            }
            else {
                pxValue = base * i;
            }
            spacing.push({
                step: i,
                px: `${Math.round(pxValue)}px`,
                rem: `${parseFloat((pxValue / 16).toFixed(3))}rem`
            });
        }
        return spacing;
    }
};
exports.LayoutService = LayoutService;
exports.LayoutService = LayoutService = __decorate([
    (0, common_1.Injectable)()
], LayoutService);
//# sourceMappingURL=layout.service.js.map