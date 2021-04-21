import { PagesIterable } from './PagesIterableMixin'
import { Pages } from './Pages'

export abstract class Item extends PagesIterable(Object) {
    protected title: string | undefined;
    protected author: string | undefined;
    protected artist: string | undefined;
    protected pages: Pages | undefined;

    protected constructor();
    protected constructor(title: string, artist: string, author: string, pages: Pages);
    protected constructor(title?: string, artist?: string, author?: string, pages?: Pages) {
        super();
        this.title = title;
        this.author = author;
        this.artist = artist;
        this.pages = pages;
    }

    abstract toString(): string;
}
