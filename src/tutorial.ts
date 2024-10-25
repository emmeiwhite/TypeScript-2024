let awesomeName: string = 'Rawdha-tul-Jannah'
// awesomeName = 23; The variable awesomeName can only hold string variabes
awesomeName = 'Imran Loves Rawdha'

let isRaining: boolean = true
isRaining = false // Raining can only hold true or false and nothing else
if (isRaining) {
}
let primeNumber = 23 // This is type Inference in action, we didn't used type annotation explicitly

primeNumber = 7 // It can hold any number types

// CHALLENGE-1:
let goal = 'Keep trying put efforts & then trust ALLAH'
goal.toUpperCase()

console.log(awesomeName, primeNumber, goal)
let balanceInBank: number = 3456
console.log('Initial Balance')
console.log('After Withdrawal of Rs 1000')
balanceInBank = balanceInBank - 1000
console.log(balanceInBank)

let isBankOpen = false
if (isBankOpen) {
  console.log('Visit the bank')
} else {
  console.log('Do not visit the bank')
}

// Here is a Gotcha, In case we assign wrong types and console, the output will still work in the development but during build the typeScript checks will fail and we cannot deploy the production ready application

let color: string = 'white'
// color = 35

console.log(color)

// Day-1 Resuming learning (Wed 25-2024) Move on "Himmate Mardaan MadDade Khuda!"

// 1. Union types:  With pipe | to hold multiple types for a variable (UseCase is when we receive API data & we are not sure about the type)

let tax: string | number

tax = 12
tax = '$12'

// 2. literal type
let responseStatus: 'pending' | 'success' | 'failure'
responseStatus = 'success'
responseStatus = 'failure'

// responseStatus = 'random'

// 3. any

let jobStatus: any = 'moving forward' // Remember TypeScript infers the type
jobStatus = 23

/** --- Note: Be aware of type any, because it can spread like wild fire and such an approach somewhat defeats the entire purpose of using typescript capabilities of introduction of types to avoid errors during the production --- */

// Example-1:

const books = ['1984', 'Brave New World', 'Fahrenheit 451']

let foundBook: undefined | string

// This piece of code will execute on the run-time. So for TypeScript during development, foundBook is undefined & on line 76, when we try foundBook. we notice the error message: foundBook is possibly 'undefined'
for (let book of books) {
  if (book === '1984') {
    foundBook = book
    break
  }
}

// foundBook.

/** Day-2: UnionChallenge */
let orderStatus: 'processing' | 'shipped' | 'delivered' = 'processing'
orderStatus = 'shipped'

// orderStatus = 'cancelled' This cannot be done

// Array & Objects

let temperatures: number[] = [25, 27, 30]
temperatures.push(-23)

// temperatures = 34
// temperatures.push('hot')

let colors: string[] = ['red', 'orange']
colors.push('blue')

// colors.push(true)

let mixed: (string | number)[] = ['apple', 24, 'price', 500]
mixed.push('pen', 30)

//Do not do the following
// let test1:[]=[23,45,56]; because test1 can only be an empty array now test1 = []

/** --- Object --- */
let car: { brand: string; year: number } = { brand: 'toyoto', year: 2020 }

// car.color = 'blue'; It will not work, since color property type is not annotated in the car

/** ----- Objects in an Array Example --- */
let notebook = { title: 'classmate', price: 90 }
let pen = { title: 'reynold', price: 10 }
let eraser = { title: 'classmate' }

// Now we want to save all 3 objects in a array

let studentItems: { title: string; price?: number }[] = [notebook, pen, eraser]
// Here we used optional chaining ? operator and which makes the price optional now

// Similarly we an make the array to be read only
let student2Items: { readonly title: string; price?: number }[] = [pen, eraser]
// student2Items[0].title = 'schoolmate'; This is not possible because the array is readonly

/** --- SIMPLE CHALLENGE ---*/
let bike: {
  brand: string
  year: number
} = { brand: 'yamaha', year: 2010 }

let laptop: {
  brand: string
  year: number
} = { brand: 'dell', year: 2020 }

/*
let laptop2: {
  brand: string
  year: number
} = { brand: 'dell' }
There has to be a year property in laptop2 object, otherwise typescript will scream 
*/

let laptop3: {
  brand: string
  year?: number
} = { brand: 'dell' }

// laptop3.year = '2020'; Again though the property 'year' is optional, it's type must be number
laptop3.year = 2020

// Challenge-2: Adding products to an array

let product1 = { title: 'bed', price: 15000 }
let product2 = { title: 'water cane', price: 85 }
let product3 = { title: 'silver ring' }

let latestProducts: { title: string; price?: number }[] // here we declared an array of objects

latestProducts = [product1, product2, product3]

/** Day-3: functions  */

function greeting(name: string) {
  return `Hello ${name.toUpperCase()}`
}

// 3 ways to set the type of parameter
// - any (explicitly)
// - tsconfig file
// - setting the type for each parameter so that the correct type is passed to the function

greeting('Imran Rafiq Rather')
// greeting(23) ; TypeScript just starts to yell at us here

/** return type  */

function calculateDiscount(price: number): number {
  let couponApplied = true

  if (couponApplied) {
    // return 'Discount of 10%'
    return price * 0.9
  }

  return price
}

const finalPrice = calculateDiscount(345)

/** --- Be careful with any type --- */

function addThree(value: any) {
  let anotherValue: number = 3

  return value + anotherValue
}

const finalValue = addThree(40) // any 'type'

const someValue = finalValue // any 'type'

someValue.dummyMethod() // This is weird
