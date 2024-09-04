// We need to import the file in main.ts for the file to be executed!!
console.log('TypeScript is awesome!')

interface someValue {
  name: string
  age: number
}

let person: someValue = {
  name: 'Shakeel Bhai',
  age: 31
}

console.log(person)
