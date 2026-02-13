import { Injectable, BadRequestException } from '@nestjs/common';
import * as tinycolor from 'tinycolor2';

@Injectable()
export class ColorService {

    generatePalette(mood: string = 'modern', contrast: string = 'high'): string[] {
        // varied base colors based on mood
        let baseColor: string;

        switch (mood.toLowerCase()) {
            case 'ocean': baseColor = '#0077be'; break;
            case 'sunset': baseColor = '#fd5e53'; break;
            case 'forest': baseColor = '#228b22'; break;
            case 'dark': baseColor = '#1a1a1a'; break;
            case 'modern':
            default: baseColor = '#3b82f6'; break;
        }

        const color = tinycolor(baseColor);
        const palette: string[] = [];

        // Monochromatic / Analogous logic simplified
        if (contrast === 'high') {
            palette.push(color.clone().lighten(40).toString());
            palette.push(color.clone().lighten(20).toString());
            palette.push(color.toString());
            palette.push(color.clone().darken(20).toString());
            palette.push(color.clone().darken(40).toString());
        } else {
            // Low contrast / subtle
            palette.push(color.clone().lighten(10).toString());
            palette.push(color.clone().lighten(5).toString());
            palette.push(color.toString());
            palette.push(color.clone().darken(5).toString());
            palette.push(color.clone().darken(10).toString());
        }

        return palette;
    }

    convertColor(color: string, format: string): any {
        const tColor = tinycolor(color);
        if (!tColor.isValid()) {
            throw new BadRequestException('Invalid color format');
        }

        switch (format.toLowerCase()) {
            case 'rgb': return tColor.toRgbString();
            case 'hsl': return tColor.toHslString();
            case 'hex': return tColor.toHexString();
            case 'hsv': return tColor.toHsvString();
            case 'name': return tColor.toName() || 'unknown';
            default: return tColor.toHexString(); // Default to hex
        }
    }
}
