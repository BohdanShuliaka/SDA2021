import { Item } from './Item'
import { Page } from './Page';
import { Pages } from './pages';

export class Book extends Item {
    pages: Pages;
    title: string;
    author: string;

    constructor(title: string, author: string, pages: Pages) {
        super();
        this.pages = pages;
        this.title = title;
        this.author = author;
    }

    toString(): string {
        return `Book: ${this.title} by ${this.author} with number of pages: ${this.pages.pages.length}, `
    }

    getTitle(): string {
        return this.title;
    }
    
    getAuthor(): string {
        return this.author;
    }

    setTitle(title: string) {
        this.title = title;
      }
    
    setAuthor(author: string) {
        this.author = author;
    }
}
