import { LayoutService } from './layout.service';
export declare class LayoutController {
    private readonly layoutService;
    constructor(layoutService: LayoutService);
    getGrid(columns: number, gutter: number, margin: number, container: number): any;
    getSpacing(base: number, ratio: number, steps: number): any[];
}
