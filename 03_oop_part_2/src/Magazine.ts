import { Item } from './Item'
import { Pages } from './Pages'

export class Magazine extends Item  {
    protected title: string;
    protected pages: Pages;

    constructor(title: string, pages: Pages) {
        super();
        this.title = title;
        this.pages = pages;
    }

    toString(): string {
        return `Magazine: ${this.title} with number of pages: ${this.pages?.pages.length}, `;
    }

    setTitle(title: string) {
        this.title = title;
      }
    
      getTitle(): string {
        return this.title;
      }
}
