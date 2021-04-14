import { Consumable } from './Consumable';

export class Pizza extends Consumable {
    numbersOfSlices: number;
    slicesEaten: number;

    constructor(numbersOfSlices: number, spoiled: boolean = false, value?: number, weight?: number, ) {
        super('pizza', value, weight)
        this.numbersOfSlices = numbersOfSlices;
    }

    eat(): string {
        if(this.slicesEaten < this.numbersOfSlices) {
            this.slicesEaten++

            if(this.slicesEaten >= this.numbersOfSlices) {
                this.consumed = true;
            }

            return "You eat a slice of the pizza"
        } else {
            return ''
        }
    }
}