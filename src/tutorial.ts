// interface : Allows to setup shape for objects (only objects)
interface Book {
  readonly isbn: number
  title: string
  author: string
  genre?: string
}
const deepWork: Book = {
  isbn: 123,
  title: 'deep work',
  author: 'cal newport',
  genre: 'self-help'
}

console.log(deepWork)
