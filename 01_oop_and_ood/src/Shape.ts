import { Point } from "./Point";

export abstract class Shape {
    protected color: string;
    protected filled: boolean;
    points: Point[];

    constructor(points: Point[])
    constructor(points: Point[], color: string, filled: boolean)
    constructor(...args: any[]) {
        if (args.length === 1 && Array.isArray(args[0])) { 
            this.shapeLengthCheck(args[0]);
            this.color = 'green'; 
            this.filled = true; 
            this.points = args[0];
        } else if (
            args.length === 3 && 
            Array.isArray(args[0]) &&
            typeof args[1] === 'string' &&
            typeof args[2] === 'boolean'
            ) { 
            this.shapeLengthCheck(args[0]);
            this.color = args[1]; 
            this.filled = args[2]; 
            this.points = args[0];
        } else { 
            throw new Error('Invalid arguments.') 
        } 
    }

    private shapeLengthCheck(arr) {
        if (arr.length < 3) {
            throw new Error('Invalid points quantity') 
        }
    }

    toString() {
        const filledStr = this.filled ? 'filled' : 'not filled';
        const points = this.points.reduce((acc, curr) => {
            return acc.concat(`(${curr.x}, ${curr.y})`)
        }, []);
        
        return `A Shape with color of ${this.color} and ${filledStr}. Points: ${points.join(', ')}.`;
    }

    getPerimeter(): number {
        return this.points.reduce((acc, curr, idx, array) => {
            if(idx === array.length - 1) {
                return acc + curr.distance(array[0])
            }
            return acc + curr.distance(array[idx+1])
        }, 0)
    }

    abstract getType(): string;
}

const points = [new Point(0, 0), new Point(0, 3), new Point(4, 3)];
class TestShape extends Shape {
    getType(): string {
        return '';
    }
}
