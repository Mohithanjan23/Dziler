import { TypographyService } from './typography.service';
export declare class TypographyController {
    private readonly typographyService;
    constructor(typographyService: TypographyService);
    getScale(base: number, ratio: string): any[];
    getPairing(category: string): any;
}
