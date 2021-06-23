//    1         2          3 
var username = "Thomas";
var password = "password";
var id = 5;
// 1: we declare the variable
// 2: we declare the variable's data type
// 3: we initialize the variable with a value and type of the specified data type
var phoneNumber;
var email;
var ssn;
var isMarried;
// string
var companyName;
companyName = "EFA";
// number
var age = 28;
var currentYear = 2021;
// boolean
var isLoggedIn = true;
// array (two ways to do it, it's just preference)
var studentList = ['Kasey', 'Jason', 'Matt'];
// Generic Type
var allScores = [2, 3000, -10];
// any
var data = '12345';
console.log(data);
console.log(typeof data);
data = 12345;
console.log(data);
console.log(typeof data);
// void
function sayHello() {
    console.log('Hello');
}
// null and undefined
var undefinedThing = undefined;
var nullThing = null;
// tuple
var nameAndId;
nameAndId = ['userOne', 1];
// enum
var WeaponType;
(function (WeaponType) {
    WeaponType[WeaponType["Sword"] = 0] = "Sword";
    WeaponType[WeaponType["Saber"] = 1] = "Saber";
    WeaponType[WeaponType["Spear"] = 2] = "Spear";
})(WeaponType || (WeaponType = {}));
;
var weapon = WeaponType.Sword;
var weaponTwo = WeaponType.Spear;
var CardType;
(function (CardType) {
    CardType[CardType["Ace"] = 1] = "Ace";
    CardType[CardType["Two"] = 2] = "Two";
    CardType[CardType["Three"] = 3] = "Three";
    CardType[CardType["Four"] = 4] = "Four";
})(CardType || (CardType = {}));
;
var newCard = CardType[2];
console.log(newCard);
// union types
var x;
var y;
x = 'string';
x = 12;
//# sourceMappingURL=01-types.js.map