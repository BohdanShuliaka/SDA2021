export class Point {
    x: number;
    y: number;

    constructor()
    constructor(x: number, y: number)
    constructor(...args: any[]) {
        if (!args.length) { 
            this.x = 0; 
            this.y = 0; 
        } else if (typeof args[0] === 'number' && typeof args[1] === 'number') { 
            this.x = args[0]; 
            this.y = args[1]; 
        } else { 
            throw new Error('Invalid arguments.') 
        } 
    }

    toString() {
        return `(${this.x}, ${this.y})`;;
    }

    distance(): number;
    distance(other: Point): number;
    distance(x: number, y: number): number;
    distance(...args: any[]): number {
        if(!args.length) {
            return this.calculateDistace(0, 0);
        } else if(args[0] instanceof Point) {
            const { x, y } = args[0];
            return this.calculateDistace(x, y);
        } else if(typeof args[0] === 'number' && typeof args[1] === 'number') {
            return this.calculateDistace(args[0], args[1]);
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


