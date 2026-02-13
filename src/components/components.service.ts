import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class ComponentsService {

    getComponent(name: string, style: string = 'flat'): any {
        const normalizedName = name.toLowerCase();
        const validComponents = ['button', 'input', 'card', 'modal'];

        if (!validComponents.includes(normalizedName)) {
            throw new NotFoundException(`Component ${name} not found`);
        }

        const tokens = this.getTokens(normalizedName, style);
        return {
            component: normalizedName,
            style,
            tokens
        };
    }

    private getTokens(name: string, style: string): any {
        const base = {
            fontFamily: 'system-ui, sans-serif',
            transition: 'all 0.2s ease-in-out',
        };

        switch (name) {
            case 'button': return this.getButtonTokens(style, base);
            case 'input': return this.getInputTokens(style, base);
            case 'card': return this.getCardTokens(style, base);
            default: return {};
        }
    }

    private getButtonTokens(style: string, base: any) {
        if (style === 'glass') {
            return {
                ...base,
                background: 'rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                color: 'white',
                padding: '12px 24px',
                borderRadius: '12px',
            };
        } else if (style === 'neu') {
            return {
                ...base,
                background: '#e0e5ec',
                boxShadow: '9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px rgba(255,255,255, 0.5)',
                color: '#4d4d4d',
                padding: '12px 24px',
                borderRadius: '16px',
                border: 'none'
            };
        }
        // Flat / Modern default
        return {
            ...base,
            background: '#3b82f6',
            color: '#ffffff',
            padding: '10px 20px',
            borderRadius: '6px',
            border: 'none',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
        };
    }

    private getInputTokens(style: string, base: any) {
        // simplified for brevity
        if (style === 'glass') {
            return {
                ...base,
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: 'white',
                padding: '8px 16px',
                borderRadius: '8px',
            };
        }
        return {
            ...base,
            background: '#ffffff',
            border: '1px solid #d1d5db',
            color: '#1f2937',
            padding: '8px 12px',
            borderRadius: '6px',
        };
    }

    private getCardTokens(style: string, base: any) {
        if (style === 'glass') {
            return {
                ...base,
                background: 'rgba(255, 255, 255, 0.25)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '16px',
                padding: '24px'
            };
        } else if (style === 'neu') {
            return {
                ...base,
                background: '#e0e5ec',
                boxShadow: '9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px rgba(255,255,255, 0.5)',
                borderRadius: '24px',
                padding: '32px'
            };
        }
        return {
            ...base,
            background: '#ffffff',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            borderRadius: '8px',
            padding: '24px'
        };
    }
}
