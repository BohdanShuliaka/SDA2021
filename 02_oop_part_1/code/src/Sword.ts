import { Weapon } from './Weapon';

export class Sword extends Weapon {

    constructor(baseDamage: number, baseDurability: number, value: number, weight: number) {
        super('sword', baseDamage, baseDurability, value, weight)
    }

    polish() {
        if(this.damageModifier < (this.baseDamage * 0.25)) {
            this.damageModifier += this.MODIFIER_CHANGE_RATE;
        }
    }
}