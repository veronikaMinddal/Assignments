/*Basic Types:

Define variables with the following types: number, string, boolean, array, and any.*/
var num: number = 1;
var str: string = "Hello";
var bool: boolean = true;
var arr: number[] = [1, 2, 3];
var any: any = 1;
/*Enums:

Create a numeric enum for all days of the week.
Change a day of the week to a string enums.
What else could you use that would be similar to an enum?*/
enum Days {
  MONDAY = 0,
  TUESDAY = 2 ,
  WEDNESDAY = 3,
  THURSDAY = "Thursday",
  FRIDAY = 5,
  SATURDAY = 6,
  SUNDAY  = 7
}
/*litteral*/
type DaysOfWeek = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";
/*Classes:

Create a ts class representing a basic person with properties for name, email and age. Make the properties private and add getters and setters.
Also add a constructor that takes the values for the properties as parameters. Make the email property read-only. Create an instance of the class.
Now create another class called employee that extends the person class and adds a property for salary. Create an instance of the employee class.*/

class Person {
  private _name: string;
  private readonly _email: string;
  private _age: number;

  constructor(name: string, email: string, age: number) {
    this._name = name;
    this._email = email;
    this._age = age;
  }

  get name(): string {
    return this._name;
  }

  set name(newName: string) {
    this._name = newName;
  }

  get email(): string {
    return this._email;
  }

  get age(): number {
    return this._age;
  }
}

const johnny: Person = new Person("Johnny", "johnnyboi@jmail.com", 25);

class Employee extends Person {
  private _salary: number;

  constructor(name: string, email: string, age: number, salary: number) {
    super(name, email, age);
    this._salary = salary;
  }

  public getSalary(): number {
    return this._salary;
  }
}
const mark = new Employee("Mark", "Markiplier@youtube.com", 30, 420);
/*Use type assertion to convert a variable from type any to type string.*/
var someValue: any = "this is a string";
var someString = someValue as string;

/*Function with Types:

Create a function that takes two numbers as parameters and returns their sum*/
function add(a: number, b: number): number {
  return a + b;
}
/*Tuples:

Define 4 tuples representing the http status codes 200, 400, 404 and 500 and their corresponding messages.
Define a tuple representing a person with name(string), age(number) and email(string).
*/
type Status = [number, string];
const OK: Status = [200, "OK"];
const BAD_REQUEST: Status = [400, "Bad Request"];
const NOT_FOUND: Status = [404, "Not Found"];
const INTERNAL_SERVER_ERROR: Status = [500, "Internal Server Error"];

type PersonTuple = [string, number, string];
const person: PersonTuple = ["Johnny", 25, "johnnyboi@jmail.com"];

/*Union Types:

Create a function that can accept either a number or a string as a parameter.
Create a type alias for the person tuple from the previous exercise. Where the age property can be either a number or a string.
call the function with a number and a string.*/
function numberOrString( input: number | string): number | string{
 if (typeof input === "number") {
   console.log("number");
 } else if (typeof input === "string") {
  console.log("string");
 }
 return input;
}

type PersonAlias = [string, number | string, string];

numberOrString(1);
numberOrString("Hello");
/*Create a generic function that takes an array of any type and returns the first element of the array.
Create a generic function that takes two parameters that extends the type object and returns both object parameters combined. */
function firstElement<T>(arr: T[]): T {
  return arr[0];
}

function combine<T extends object, U extends object>(obj1: T, obj2: U): T & U {
  return {...obj1, ...obj2};
}
/* Create an array of numbers. But instead of using the number type, use the array type.
Create a Multidimensional Array of strings to use for the game Tic Tac Toe. The array should have 3 rows and 3 columns. All string values should be "-".
*/
var numArr: Array<number> = [1, 2, 3, 4, 5];

var ticTacToe: Array<Array<string>> = [
  ["-", "-", "-"],
  ["-", "-", "-"],
  ["-", "-", "-"]
];

/*Where in code below would you need to use the exclamation mark to tell TypeScript that a variable is not null or undefined?

*/
 // Part 1
 // A variable that might be null or undefined
 let nullableValue: string | null | undefined = "Hello";

 // Use the exclamation mark to assert that the value is non-null
 let nonNullableValue: string = nullableValue!;

 console.log(nonNullableValue); // Output: Hello

// Part 2
// A variable that might be null or undefined
let myString: string | undefined = possibleUndefinedStringFunction();
// Use the exclamation mark to assert that the value is non-null
let lemgth: number = myString!.length;

/*Where in code below would you need to use the question mark to tell TypeScript that a variable is optional?
*/
// Part 1
// A function that takes an optional parameter
function printName(name?: string) {
  console.log(name);
}

// Call the function without a parameter
printName(); // Output: undefined
// Call the function with a parameter
printName("John"); // Output: John

// Part 2
// A type alias with an optional age property
type Person2 = {
  name: string;
  age?: number;
};

// Create a person object with an age property
// Create a person object without an age property
let personNoAge: Person2 = { name: "John" };
let personWithAge: Person2 = { name: "John", age: 30 };

/*Unions - Narrowing the Type

Write a function that takes a string or number as a parameter. If the parameter is a string, return the string. If the parameter is a number, return the number multiplied by 2. (use the typeof operator to check the type of the parameter)
*/
type stringOrNumber = string | number;

function stringOrNumber(input: stringOrNumber): string | number {
  if (typeof input === "string") {
    return input;
  } else {
    return input * 2;
  }
}

/*Type Assertion

Use type assertion to convert a variable from type any to type string. Use the as keyword and the angle-bracket syntax.
Call a div element with id="myDiv" and convert it to type HTMLInputElement.
*/
let anyVAR: any = "hello biscuit";
let anyVARasString: string = anyVAR as string;

/*Call a div element with id="myDiv" and convert it to type HTMLInputElement.*/

let myDiv: HTMLInputElement = document.getElementById("myDiv") as HTMLInputElement;

/*Create a function that takes a string called direction as a parameter. Use literal types to narrow the type of the parameter.*/
 function whichWay(direction: "left" | "right" | "up" | "down"){
  switch (direction) {
    case "left":
     return 1;
      break;
    case "right":
      return 2;
      break;
    case "up":
      return 3;
      break;
    case "down":
      return 4;
      break;
  }
 }
 /*create two simple type aliases for a human and an alien. Both alias should have a specific function like eat and fly.*/

 type Human = {
    eat: () => void;
  };
  type Alien = {
    fly: () => void;
  };

 /*create a function that takes in a creator parameter that could be either a person or an alien. Use the in operator to narrow the type of the parameter. When you use the in operator you have to use the function to check if the property exists on the object. If the parameter is a human, return the function belonging to the human otherwise return the function belonging to the alien.*/
function createCreature (being: Human | Alien): void {
  if ("eat" in being) {
    being.eat();
  } else {
    being.fly();
  }
}

/* create two simple objects for a person and a car.*/
class PersonGuy {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class Car {
  model: string;
  constructor(model: string) {
    this.model = model;
  }
}

/*create a function that takes a person or a car as a parameter. Use the instanceof operator to narrow the type of the parameter. If the parameter is a person, return the name property. If the parameter is a car, return the model property.*/

function personOrCar(being: PersonGuy | Car): string {
  if (being instanceof PersonGuy) {
    return being.name;
  } else {
    return being.model;
  }
}

interface Bird {
  fly(): void;
  layEggs(): void;
}

interface Fish {
  swim(): void;
  layEggs(): void;
}

// write a type predicate to narrow the type of the fish parameter
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function howToMove(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet.swim();
  } else {
    pet.fly();
  }
}

/*Create an interface for a person with a name property and an index signature that allows the interface to have additional properties.*/
/*Create an object of type person with a name property and an additional property called age.*/

interface PersonInterface {
  name: string;
  [propName: string]: any;
}

let personWithAnAge: PersonInterface = {
  name: "Johnny",
  age: 25
};

/*Create two interfaces, one for a person and one for a student. The person interface should have a name property and the student interface should have a studentId property.*/
/*Create a function that takes a person and a student as parameters. Use intersection types to combine the two interfaces into one. The function should return an object with the properties from both interfaces.*/

interface PersonInterface2 {
  name: string;
}
interface StudentInterface {
  studentId: number;
}



function createPersonAndStudent(person: PersonInterface2, student: StudentInterface): PersonInterface2 & StudentInterface {
  return {...person, ...student};
}


