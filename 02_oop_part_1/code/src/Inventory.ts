import { Item } from './Item';
import { ItemComparator } from './ItemComparator';

export class Inventory {
    items: Item[] = [];

    addItem(item: Item) {
        this.items.push(item)
    }

    sort(comparator?: ItemComparator): void {
        if(comparator) {
            this.items = this.items.sort(comparator.compare);
        } else {
            this.items = this.items.sort((a,b) => a.value - b.value);
        }
    }

    toString(): string {
        return this.items.join(', \n');
    }
}