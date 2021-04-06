import { Point } from './Point';
import { Shape } from './Shape';

export class Triangle extends Shape {
    constructor(point1: Point, point2: Point, point3: Point)
    constructor(point1: Point, point2: Point, point3: Point, color: string, filled: boolean)
    constructor(...args: any[]) {
        if (args.length === 3 &&
             args[0] instanceof Point &&
             args[1] instanceof Point &&
             args[2] instanceof Point) { 
            super([args[0], args[1], args[2]])
        } else if (
            args.length === 5 && 
            args[0] instanceof Point &&
            args[1] instanceof Point &&
            args[2] instanceof Point &&
            typeof args[1] === 'string' &&
            typeof args[2] === 'boolean'
            ) { 
            super([args[0], args[1], args[2]], args[3], args[4])
        } else { 
            throw new Error('Invalid arguments.') 
        } 
    }

    toString() {
        const points = this.points.reduce((acc, curr, idx) => {
            return acc.concat(`v${idx+1}=(${curr.x}, ${curr.y})`)
        }, []);
        
        return `Triangle[${points.join(',')}]`;
    }

    getType(): any {
        const sides = this.points.map((point: Point, idx, array): number => {
            if(idx === array.length - 1) {
                return +point.distance(array[0]).toFixed(1)
            }
            return +point.distance(array[idx+1]).toFixed(1)
        })

        if (sides.every(el => el > 0)) {
            const size = new Set(sides).size
            if (size === 1) return "equilateral triangle";
                else if (size === 2) return "isosceles triangle";
                else return "scalene triangle";
        } else {
            return "invalid";
        }
    }
}
