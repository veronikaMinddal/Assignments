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

