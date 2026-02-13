"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypographyService = void 0;
const common_1 = require("@nestjs/common");
let TypographyService = class TypographyService {
    constructor() {
        this.ratios = {
            minorSecond: 1.067,
            majorSecond: 1.125,
            minorThird: 1.2,
            majorThird: 1.25,
            perfectFourth: 1.333,
            augmentedFourth: 1.414,
            perfectFifth: 1.5,
            goldenRatio: 1.618,
        };
    }
    generateScale(baseSize = 16, ratioName = 'majorThird', steps = 6) {
        const ratio = this.ratios[ratioName] || this.ratios.majorThird;
        const scale = [];
        for (let i = 2; i > 0; i--) {
            scale.push({
                step: `xs-${i}`,
                size: parseFloat((baseSize / Math.pow(ratio, i)).toFixed(2)) + 'px',
                rem: parseFloat((baseSize / Math.pow(ratio, i) / 16).toFixed(3)) + 'rem'
            });
        }
        scale.push({
            step: 'base',
            size: baseSize + 'px',
            rem: (baseSize / 16) + 'rem'
        });
        for (let i = 1; i <= steps; i++) {
            scale.push({
                step: `xl-${i}`,
                size: parseFloat((baseSize * Math.pow(ratio, i)).toFixed(2)) + 'px',
                rem: parseFloat((baseSize * Math.pow(ratio, i) / 16).toFixed(3)) + 'rem'
            });
        }
        return scale;
    }
    getPairing(category = 'modern') {
        const pairings = {
            modern: {
                heading: { family: 'Inter', weight: 700 },
                body: { family: 'Inter', weight: 400 },
            },
            contrast: {
                heading: { family: 'Playfair Display', weight: 700 },
                body: { family: 'Lato', weight: 400 },
            },
            tech: {
                heading: { family: 'Space Grotesk', weight: 700 },
                body: { family: 'Roboto', weight: 400 },
            },
            fun: {
                heading: { family: 'Fredoka One', weight: 400 },
                body: { family: 'Nunito', weight: 400 }
            }
        };
        return pairings[category] || pairings.modern;
    }
};
exports.TypographyService = TypographyService;
exports.TypographyService = TypographyService = __decorate([
    (0, common_1.Injectable)()
], TypographyService);
//# sourceMappingURL=typography.service.js.map