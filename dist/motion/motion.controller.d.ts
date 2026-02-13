import { MotionService } from './motion.service';
export declare class MotionController {
    private readonly motionService;
    constructor(motionService: MotionService);
    getMotion(type: string): any;
    getCurves(type: string): any;
    getDurations(): any;
}
