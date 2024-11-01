// interface : Allows to setup shape for objects (only objects)
interface Book {
  readonly isbn: number
  title: string
  author: string
  genre?: string
  // method
  printAuthor(): void
  printTitle(message: string): string
}

const deepWork: Book = {
  isbn: 123,
  title: 'deep work',
  author: 'cal newport',
  genre: 'self-help',
  printAuthor: function () {
    console.log(this.author)
  },
  printTitle: function (message) {
    return `${this.title} ${message}`
  }
}

console.log(deepWork.printAuthor())
console.log(deepWork.printTitle('is a wonderful book'))
