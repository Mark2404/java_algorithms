// class Developer {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     coding() {
//         console.log(`${this.name} is coding`);
//     }
// }

// const developer1 = new Developer('Mark', 16);
// developer1.coding();
// console.log(developer1);

///// Animal
// class Animal {
//     constructor(name, type, sound) {
//         this.name = name;
//         this.type = type;
//         this.sound = sound;
//     }
//     get makeSound() {
//         console.log(`${this.name} makes ${this.sound} dude)`);
//     }
// }
// class Dog extends Animal {
//     super(name, type, sound) {
//         this.name = name;
//         this.type = type;
//         this.sound = sound;
//     }
//     get makeSound() {
//         console.log(`${this.name} makes ${this.sound} dude)`);
//     }
//     get bite() {
//         console.log(`${this.name} tiwladi`);
//     }
// }
// class Cat extends Animal {
//     super(name, type, sound) {
//         this.name = name;
//         this.type = type;
//         this.sound = sound;
//     }
//     get makeSound() {
//         console.log(`${this.name} makes ${this.sound} dude)`);
//     }
//     get drink() {
//         console.log(`${this.name} sut icvotti`);
//     }
// }
// const dog = new Dog('bobik', 'it', 'woof');
// console.log(dog);
// const cat = new Cat('baroqvoy', 'mushu', 'meow');
// console.log(cat);





// ////students
// class Student {
//     constructor(name, age, grades,) {
//         this.name = name;
//         this.age = age;
//         this.grades = [];

//     }
//     addGrade(grade) {
//         this.grades.push(grade);
//     }
//     get average() {
//         let sum = 0;
//         for (let i = 0; i < this.grades.length; i++) {
//             sum += this.grades[i];
//         }
//         return sum / this.grades.length;
//     }

// }
// const student1 = new Student('Mark', 16);
// student1.addGrade(5);
// student1.addGrade(4);
// student1.addGrade(3);
// student1.addGrade(2);
// console.log(student1);
// console.log(student1.average + ' ortacha baho');

///// car
// class Car {
//     constructor(brand, model, year, millage) {
//         this.brand = brand;
//         this.model = model;
//         this.year = year;
//         this.millage = millage;

//     }
//     get info() {
//         console.log(`${this.brand} ${this.model} ${this.year} ${this.millage}`);
//     }
//     get age() {
//         const currentYear = new Date().getFullYear();
//         return currentYear - this.year;
//     }
//     drive(drive) {
//         const km = this.millage + drive;
//         this.millage = km;
//     }

// }
// const car1 = new Car('Mersedes', 'Cls', 2023, 10000);
// console.log(car1);
// console.log(car1.age + ' yil');
// car1.drive(1000);
// console.log(car1.millage + ' km');