//    1         2          3 
let username: string = "Thomas";
let password: string = "password";
let id: number = 5;

// 1: we declare the variable
// 2: we declare the variable's data type
// 3: we initialize the variable with a value and type of the specified data type

let phoneNumber: number;
let email: string;
let ssn: number;
let isMarried: boolean;

// string
let companyName: string;
companyName = "EFA";

// number
let age: number = 28;
let currentYear: number = 2021;

// boolean
let isLoggedIn: boolean = true;

// array (two ways to do it, it's just preference)
let studentList: string[] = ['Kasey', 'Jason', 'Matt'];
// Generic Type
let allScores: Array<number> = [2, 3000, -10];

// any
let data: any = '12345';
console.log(data);
console.log(typeof data);

data = 12345;
console.log(data);
console.log(typeof data);

// void
function sayHello(): void {
    console.log('Hello');
}

// null and undefined
let undefinedThing: undefined = undefined;
let nullThing: null = null;

// tuple
let nameAndId: [string, number];
nameAndId = ['userOne', 1];

// enum
enum WeaponType {Sword, Saber, Spear};
let weapon: WeaponType = WeaponType.Sword;
let weaponTwo: WeaponType = WeaponType.Spear;

enum CardType {Ace = 1, Two, Three, Four};
let newCard: string = CardType[2];
console.log(newCard);

// union types
let x: number | string; 
let y: number | null;

x = 'string';
x = 12;
