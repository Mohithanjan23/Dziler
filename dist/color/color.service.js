"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorService = void 0;
const common_1 = require("@nestjs/common");
const tinycolor = require("tinycolor2");
let ColorService = class ColorService {
    generatePalette(mood = 'modern', contrast = 'high') {
        let baseColor;
        switch (mood.toLowerCase()) {
            case 'ocean':
                baseColor = '#0077be';
                break;
            case 'sunset':
                baseColor = '#fd5e53';
                break;
            case 'forest':
                baseColor = '#228b22';
                break;
            case 'dark':
                baseColor = '#1a1a1a';
                break;
            case 'modern':
            default:
                baseColor = '#3b82f6';
                break;
        }
        const color = tinycolor(baseColor);
        const palette = [];
        if (contrast === 'high') {
            palette.push(color.clone().lighten(40).toString());
            palette.push(color.clone().lighten(20).toString());
            palette.push(color.toString());
            palette.push(color.clone().darken(20).toString());
            palette.push(color.clone().darken(40).toString());
        }
        else {
            palette.push(color.clone().lighten(10).toString());
            palette.push(color.clone().lighten(5).toString());
            palette.push(color.toString());
            palette.push(color.clone().darken(5).toString());
            palette.push(color.clone().darken(10).toString());
        }
        return palette;
    }
    convertColor(color, format) {
        const tColor = tinycolor(color);
        if (!tColor.isValid()) {
            throw new common_1.BadRequestException('Invalid color format');
        }
        switch (format.toLowerCase()) {
            case 'rgb': return tColor.toRgbString();
            case 'hsl': return tColor.toHslString();
            case 'hex': return tColor.toHexString();
            case 'hsv': return tColor.toHsvString();
            case 'name': return tColor.toName() || 'unknown';
            default: return tColor.toHexString();
        }
    }
};
exports.ColorService = ColorService;
exports.ColorService = ColorService = __decorate([
    (0, common_1.Injectable)()
], ColorService);
//# sourceMappingURL=color.service.js.map