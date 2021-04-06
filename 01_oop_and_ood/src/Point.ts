export class Point {
    x: number;
    y: number;

    constructor()
    constructor(x = 0, y = 0) {
        this.x = x; 
        this.y = y; 
    }

    toString() {
        return `(${this.x}, ${this.y})`;;
    }

    distance(): number;
    distance(other: Point): number;
    distance(x: number, y: number): number;
    distance(arg1?: Point | number, arg2?: number): number {
        if(!arg1) {
            return this.calculateDistace(0, 0);
        } else if(arg1 instanceof Point) {
            const { x, y } = arg1;
            return this.calculateDistace(x, y);
        } else if(typeof arg1 === 'number' && typeof arg2 === 'number') {
            return this.calculateDistace(arg1, arg2);
        } else { 
            throw new Error('Invalid arguments.') 
        } 
    }

    private calculateDistace(calculateToX, calculateToY): number {
        const distanceX = calculateToX - this.x;
        const distanceY = calculateToY - this.y;

        return Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2));
    }
}


