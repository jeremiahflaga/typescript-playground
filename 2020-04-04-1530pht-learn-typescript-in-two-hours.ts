// Learn TypeScript in two hours by Harshal Donge: 
// https://medium.com/@harshal.donge/learn-typescript-in-two-hours-958d43b6c8b2


///////////////////////////////////////////////
// 1. Types
///////////////////////////////////////////////

///////////////////////////////////////////////
// let name:string;
// let id:number;
// let details:any;

// interface IEmployee {}
// class Employee implements IEmployee {}

// let employee1:Employee = new Employee();
// let employee2:Employee = new Employee();


///////////////////////////////////////////////
// let temp:string = "foo";
// console.log(typeof temp);   //string
// //temp = 5;      // compilation error, as can not assign value with number type to string type
// //temp = true;   // compilation error, as can not assign value with boolean type to string type


///////////////////////////////////////////////
// let temp:any = "Hello";
// console.log(typeof temp);
// temp = 9;
// console.log(typeof temp);
// temp = true;
// console.log(typeof temp);



///////////////////////////////////////////////
// 2. Classes
///////////////////////////////////////////////

///////////////////////////////////////////////
// class Employee {
//     name:string;
//     id:number;

//     constructor(name:string, id:number) {
//         this.name = name;
//         this.id = id;
//     }
// }


///////////////////////////////////////////////
// providing access specifiers in constructor parameters 
// which create class properties implicitly
class Employee {
    constructor(private name:string, private id:number) {

    }
}

// // Above both code snippets get compiled into javascript code as below
// //     var Employee = /** @class */ (function () {
// //        function Employee(name, id) {
// //           this.name = name;
// //           this.id = id;
// //        }
// //        return Employee;
// //    }());



///////////////////////////////////////////////
// 3. Interfaces
///////////////////////////////////////////////

interface IOperationContract1 {
    add(): number;
    subtract(): number;
}

interface IOperationContract2 {
    multiply(): number;
    divide(): number;
}

class Operations implements IOperationContract1, IOperationContract2 {
    add(): number {
        throw new Error("Method not implemented.");
    }
    subtract(): number {
        throw new Error("Method not implemented.");
    }
    multiply(): number {
        throw new Error("Method not implemented.");
    }
    divide(): number {
        throw new Error("Method not implemented.");
    }
}

// // Above code snippet gets compiled into javascript code as below
// // var Operations = /** @class */ (function () {
// //     function Operations() {
// //     }
// //     Operations.prototype.add = function () {
// //         return 0;
// //     };
// //     Operations.prototype.substract = function () {
// //         return 0;
// //     };
// //     Operations.prototype.multiply = function () {
// //         return 0;
// //     };
// //     Operations.prototype.divide = function () {
// //         return 0;
// //     };
// //     return Operations;
// //  }());


///////////////////////////////////////////////
// 4. Enums
///////////////////////////////////////////////

enum Days{
    sunday = 0,
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday
}

// // Above code snippet gets compiled into javascript code as below
// // var Days;
// // (function (Days) {
// //     Days[Days["sunday"] = 0] = "sunday";
// //     Days[Days["monday"] = 1] = "monday";
// //     Days[Days["tuesday"] = 2] = "tuesday";
// //     Days[Days["wednesday"] = 3] = "wednesday";
// //     Days[Days["thursday"] = 4] = "thursday";
// //     Days[Days["friday"] = 5] = "friday";
// //     Days[Days["saturday"] = 6] = "saturday";
// // })(Days || (Days = {}));

// TypeScript enums explained: 
// https://medium.com/@katbusch/typescript-enums-explained-e5f9a101afc9
// ... Then when you have Cheese.Brie in TypeScript, it emits Cheese.Brie in 
// JavaScript which evaluates to 0. Cheese[0] emits Cheese[0] and actually 
// evaluates to “Brie”. The reverse lookup options is unique to enums and can 
// be pretty convenient.



///////////////////////////////////////////////
// 5. Modules
///////////////////////////////////////////////

// go to tutorial for exporting and importing modules 
