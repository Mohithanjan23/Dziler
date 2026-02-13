import { Injectable } from '@nestjs/common';

@Injectable()
export class TypographyService {
    private readonly ratios = {
        minorSecond: 1.067,
        majorSecond: 1.125,
        minorThird: 1.2,
        majorThird: 1.25,
        perfectFourth: 1.333,
        augmentedFourth: 1.414,
        perfectFifth: 1.5,
        goldenRatio: 1.618,
    };

    generateScale(baseSize: number = 16, ratioName: string = 'majorThird', steps: number = 6): any[] {
        const ratio = this.ratios[ratioName] || this.ratios.majorThird;
        const scale = [];

        // Generate smaller sizes
        for (let i = 2; i > 0; i--) {
            scale.push({
                step: `xs-${i}`,
                size: parseFloat((baseSize / Math.pow(ratio, i)).toFixed(2)) + 'px',
                rem: parseFloat((baseSize / Math.pow(ratio, i) / 16).toFixed(3)) + 'rem'
            });
        }

        // Base
        scale.push({
            step: 'base',
            size: baseSize + 'px',
            rem: (baseSize / 16) + 'rem'
        });

        // Larger sizes
        for (let i = 1; i <= steps; i++) {
            scale.push({
                step: `xl-${i}`,
                size: parseFloat((baseSize * Math.pow(ratio, i)).toFixed(2)) + 'px',
                rem: parseFloat((baseSize * Math.pow(ratio, i) / 16).toFixed(3)) + 'rem'
            });
        }

        return scale;
    }

    getPairing(category: string = 'modern'): any {
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
}
