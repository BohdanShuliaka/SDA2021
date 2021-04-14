import { Comparable } from './Comparable';

let id = 0;
let numberOfItems = 0;

export abstract class Item implements Comparable<Item> {
    id: number;
    value: number;
    name: string;
    weight: number;

    constructor(name: string, value: number, weight: number) {
        this.name = name;
        this.value = value;
        this.weight = weight;
        this.id = id;
        id++;
        numberOfItems++;
    }

    public compareTo(other: Item): number {
        return this.value === other.value ?
         this.name.localeCompare(other.name) : 
         this.value > other.value ? 1 : -1;
    }

    toString() {
        return `${this.name} - Value: ${this.value}, Weight: ${this.weight}`
    }

    static reset(): void {
        numberOfItems = 0;
    }
    
    abstract use(): void;

    getId() {
        return this.id;
    }

    getValue() {
        return this.value;
    }

    getName() {
        return this.name;
    }

    getWeight() {
        return this.weight;
    }

    setValue(price: number): void {
        this.value = price;
    }

    setName(name: string): void {
        this.name = name;
    }

    setWeight(weight: number): void {
        this.weight = weight;
    }

}
