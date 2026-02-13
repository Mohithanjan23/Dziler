import { ColorService } from './color.service';
export declare class ColorController {
    private readonly colorService;
    constructor(colorService: ColorService);
    getPalette(mood: string, contrast: string): string[];
    convertColor(color: string, format: string): any;
}
