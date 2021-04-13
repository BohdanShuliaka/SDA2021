import { Point } from "./Point";

export abstract class Shape {
    protected color: string;
    protected filled: boolean;
    points: Point[];

    constructor(points: Point[])
    constructor(points: Point[], color: string, filled: boolean)
    constructor(points: Point[], color = 'green', filled = true) {
        this.shapeLengthCheck(points);
        this.color = color; 
        this.filled = filled; 
        this.points = points;
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
        }, []).join(', ');
        
        return `A Shape with color of ${this.color} and ${filledStr}. Points: ${points}.`;
    }

    getPerimeter(): number {
        return this.points.reduce((acc, curr, idx, array) => {
            let point = array[idx+1];
            if(idx === array.length - 1) {
                point = array[0]
            }
            return acc + curr.distance(point)
        }, 0)
    }

    abstract getType(): string;
}

