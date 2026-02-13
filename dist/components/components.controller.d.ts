import { ComponentsService } from './components.service';
export declare class ComponentsController {
    private readonly componentsService;
    constructor(componentsService: ComponentsService);
    getComponent(name: string, style: string): any;
}
