export const PagesIterable = (superclass: any) => class extends superclass {
  [Symbol.iterator] = () => {
      let i = 0;
      const bookDescription = this.toString();
      const { pages } = this.pages;

      return {
          next() {
              if (i < pages.length) {
                  const nextVal = bookDescription + pages[i]?.toString();
                  i++;
                  return { value: nextVal, done: false } 
              } else {
                  return { value: undefined, done: true };
              }
          }
      };
  }
}
