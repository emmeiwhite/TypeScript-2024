// interface : Allows to setup shape for objects (only objects)
interface Book {
  readonly isbn: number
  title: string
  author: string
  genre?: string
  // method
  authorDetails(): void
}

const deepWork: Book = {
  isbn: 123,
  title: 'deep work',
  author: 'cal newport',
  genre: 'self-help',
  authorDetails: function () {
    console.log(this.title)
    console.log(this.author)
  }
}

console.log(deepWork.authorDetails())
