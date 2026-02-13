import { Injectable } from '@nestjs/common';

@Injectable()
export class LayoutService {

    generateGrid(columns: number = 12, gutter: number = 24, margin: number = 20, container: number = 1200): any { // container is optional max-width
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

    generateSpacing(base: number = 4, scale: number = 1.5, steps: number = 10): any[] {
        const spacing = [];

        // Linear scale as default for spacing often makes more sense, but geometric is requested often too.
        // Let's do a simple linear scale based on base unit (like Tailwind's rem base) if scale is small, else geometric.

        for (let i = 0; i <= steps; i++) {
            const val = base * (i === 0 ? 0.5 : i); // 0.5 step, then 1, 2, 3...
            // Actually standard spacing is often: 0, 4, 8, 12, 16, 24, 32, 48, 64...
            // Let's generate a geometric scale if ratio > 1.1, else linear multiplier

            let pxValue;
            if (scale > 1.1) {
                pxValue = base * Math.pow(scale, i);
            } else {
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
}
