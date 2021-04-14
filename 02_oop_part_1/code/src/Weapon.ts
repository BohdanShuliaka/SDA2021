import { Item } from './Item';

export abstract class Weapon extends Item {
    baseDamage: number;
    damageModifier: number;
    private effectiveDamage: number 
    baseDurability: number;
    durabilityModifier: number;
    private effectiveDurability: number 
    MODIFIER_CHANGE_RATE: number = 0.05;

    constructor(name: string, baseDamage: number, baseDurability: number, value: number, weight: number) {
       super(name, value, weight);
       this.baseDamage = baseDamage;
       this.baseDurability = baseDurability;
       this.damageModifier = this.MODIFIER_CHANGE_RATE;
       this.durabilityModifier = this.MODIFIER_CHANGE_RATE;

       this.effectiveDamage = this.baseDamage + this.damageModifier;
       this.effectiveDurability = this.baseDurability + this.durabilityModifier;
    }

    getDamage(): number {
        return this.effectiveDamage;
    }

    getDurability(): number {
        return this.effectiveDurability;
    }

    toString(): string {
        return `${this.name} - 
        Value: ${this.value}, 
        Weight: ${this.weight}, 
        Damage: ${this.getDamage()},
        Durability: ${this.getDurability() * 100}%`
    }

    use(): string {
        let message;
        if(this.getDurability() > 0) {
            this.effectiveDurability -= this.MODIFIER_CHANGE_RATE;
            message = this.getDurability() > 0 ? 
            `You use the ${this.name}, dealing ${this.getDamage()} points of damage.` :
            `You use the ${this.name}, dealing ${this.getDamage()} points of damage. The ${this.name} breaks.`;
        } else {
            message = `You can't use the ${this.name}, it is broken.`
        }
        
        return message;
    }
    polish(): void {}
}