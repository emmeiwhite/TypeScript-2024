let awesomeName: string = 'Rawdha-tul-Jannah'
// awesomeName = 23; The variable awesomeName can only hold string variabes
awesomeName = 'Imran Loves Rawdha'

let isRaining: boolean = true
isRaining = false // Raining can only hold true or false and nothing else
if (isRaining) {
}
let primeNumber = 23 // This is type Inference in action, we didn't used type annotation explicityly

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
