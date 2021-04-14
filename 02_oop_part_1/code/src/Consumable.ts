import { Item } from './Item';

export class Consumable extends Item {
    consumed: boolean;
    spoiled: boolean;

    constructor(name: string, value: number, weight: number, spoiled: boolean = false) {
        super(name, value, weight);
        this.spoiled = spoiled;
    }

    use(): string {
        if(!this.isSpoiled() && !this.isConsumed()) {
            this.eat()
        } else {
            return `There is nothing left of the ${this.name} to consume.`;
        }
    }

    eat(): string {
        this.setConsumed(true);
        return this.isSpoiled() ? `You eat the  ${this.name}. You feel sick.` : `You eat the  ${this.name}.`;
    }

    isConsumed(): boolean {
        return this.consumed;
    }

    setConsumed(consumed: boolean): void {
        this.consumed = consumed;
    }

    isSpoiled(): boolean {
        return this.spoiled;
    }
}