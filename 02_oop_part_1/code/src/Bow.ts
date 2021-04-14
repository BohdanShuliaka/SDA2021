import { Weapon } from './Weapon';

export abstract class Bow extends Weapon {

    constructor(baseDamage: number, baseDurability: number, value: number, weight: number) {
        super('bow', baseDamage, baseDurability, value, weight)
    }

    polish(): void {
        if(this.durabilityModifier < 1) {
            this.durabilityModifier += this.MODIFIER_CHANGE_RATE;
        } else {
            this.durabilityModifier = 1
        }
    }
}