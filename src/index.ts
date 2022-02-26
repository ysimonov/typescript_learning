// Basic Types
let id: number = 5
let company: string = "U-Group"
let isPublished: boolean = true
let x: any = 'Hello'
let age: number
age = 30
console.log("ID: ", id)

// Array
let ids: number[] = [1,2,3,4,5]
ids.push(6)
console.log(ids)

// any can be any type
let arr: any[] = [1, true, 'Hello'] 

// Tuple
let person: [number, string, boolean] = [1, "Brad", true]

// Array of Tuples
let employee: [number, string][]
employee = [
    [1, 'Brad'],
    [2, 'Josh'],
    [3, 'Mary']
]

// Union
let pid: string | number
pid = '22'

// Enum
enum Direction1 {
    Up = 1,
    Down,
    Left,
    Right
}
console.log(Direction1.Up)

enum Direction2 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}
console.log(Direction2)

// Objects
type User = {
    id: number,
    name: string
}
const user: User = {
    id: 1,
    name: 'John'
}
console.log('user: ', user)

// Type Assertion
let cid: any = 1
// let customerId = <number>cid
let customerId = cid as number
console.log('customerId: ', customerId)

// Functions
function addNum(x: number, y: number): number {
    return x + y
}

console.log('1 + 2 = ', addNum(1, 2))

// Void type (function that accepts either string or number)
function log(message: string | number): void {
    console.log(message)
}

console.log('Logging function: ', log('good day'))

// Interfaces
interface UserInterface {
    readonly id: number,
    name: string,
    age?: number // optional property
}

const user1: UserInterface = {
    id: 1,
    name: "John"
}
console.log('user1: ', user1)

interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y
console.log('Add 5 + 5: ', add(5, 5))

// Classes
class Person {

    private id: number
    name: string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }

    register() {
        return `${this.name} is now registered`
    }
}

const brad = new Person(5, "Brad Traversy")
console.log(brad.register())

const mike = new Person(3, "Mike Jordan")

console.log(brad)
brad.name = 'Mike Goodwill'
console.log(brad)



interface PersonInterface {
    id: number
    name: string
    register(): string
}

class PersonInteraceClass implements PersonInterface {

    id: number
    name: string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }

    register() {
        return `${this.name} is now registered`
    }
}  

class Employee extends PersonInteraceClass {

    position: string

    constructor(id: number, name: string, position: string) {
        super(id, name)
        this.position = position
    }
}

const emp = new Employee(3, 'Shawn', 'Developer')
console.log('emp: ', emp)
console.log(emp.register())


// Generics
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4])
let strArray = getArray<string>(['Brad','John','Jill'])

// numArray.push('Hello') // Can push anything
