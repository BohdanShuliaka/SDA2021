import { Item } from './Item'
import { Pages } from './Pages'

export class Comics extends Item {
    protected title: string;
    protected author: string;
    protected artist: string;
    protected pages: Pages;

    constructor(title: string, author: string, artist: string, pages: Pages) {
        super();
        this.title = title;
        this.artist = artist;
        this.author = author;
        this.pages = pages;
    }

    toString(): string {
        return `Comics: ${this.title} by ${this.author}, the artist is ${this.artist}, number of pages: ${this.pages?.pages.length}, `;
    }
    
    setTitle(title: string) {
        this.title = title;
      }
    
      getTitle(): string {
        return this.title;
      }
    
      getAuthor(): string {
        return this.author;
      }
    
      getArtist(): string {
        return this.artist;
      }

      setAuthor(author: string) {
        this.author = author;
      }
    
      setArtist(artist: string) {
        this.artist = artist;
      }
}
