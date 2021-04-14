import { Item } from './Item';
import { ItemComparator } from './ItemComparator';

export class ItemWeightComparator implements ItemComparator {
    public compare(first: Item, second: Item) {
        return first.weight === second.weight ?
        first.compareTo(second) : 
        first.weight > second.weight ? 1 : -1;
    }
}
