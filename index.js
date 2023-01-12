// 1. დაწერეთ ფუნქცია, რომელსაც გადაეცემა ობიექტი და სიტყვა, თუ ობიექტში არსებობს მასეთი key წაშლის თუ არადა დაწერს რომ ობიექტში
// არ არის ასეთი property
// let objOne = {
//   title: "The Road Ahead",
//   author: "Bill Gates",
//   libraryID: 1254,
// };
// const func = (obj, word) => {
//   let x = Object.keys(obj);
//   return x.includes(word) ? (delete obj[word], obj) : "no property";
// };
// console.log(
//   func(
//     {
//       title: "The Road Ahead",
//       author: "Bill Gates",
//       libraryID: 1254,
//     },
//     "author"
//   )
// );
// 2. მოცემულია ობიექტი

// let library = [
//   {
//     title: "The Road Ahead",
//     author: "Bill Gates",
//     libraryID: 1254,
//   },
//   {
//     title: "Walter Isaacson",
//     author: "Steve Jobs",
//     libraryID: 4264,
//   },
//   {
//     title: "Mockingjay: The Final Book of The Hunger Games",
//     author: "Suzanne Collins",
//     libraryID: 3245,
//   },
// ];

// //    დაწერეთ ფუნქცია რომელიც მიიღებს ობიექტს და დაალაგებს ობიექტებს მასივში libraryId-ის მიხედვით ზრდადობით
// const func = (arr) => {
//   let x = arr.sort((a, b) => a.libraryID - b.libraryID);
//   return x;
// };
// console.log(func(library));

// 3. დაწერეთ ფუნქცია, რომელიც მიიღებს ობიექტს  და key value წყვილს გარდაქმნის მასივად, შემდეგ ერთ მასივში ჩაყრის და დაპრინტავს
// მაგ:

// ფუნქციის შესრულების მერე უნდა დაილოგოს [['name' , 'Jane'] , ['lastName' , 'Doe']]
// let obj = {
//   name: "Jane",
//   lastName: "Doe",
// };
// const func = (objOne) => {
//   let arr = Object.entries(objOne);
//   return arr;
// };
// console.log(func(obj));
// 4.  დაწერეთ ფუნქცია, რომელიც აიღებს ორ ობიექტს და გააერთიანებს ერთ ობიექტად
// let obj = {
//   name: "anna",
//   lastName: "kobakhidze",
// };
// let obj2 = {
//   age: 26,
//   hobbies: "swimming",
// };
// const func = (objOne, objTwo) => {
//   return { ...objOne, ...objTwo };
// };

// console.log(func(obj, obj2));

// 5. დაწერეთ ფუნქცია, რომელიც შეამოწმებს ობიექტების მასივს, თუ ყველა ობიექტის სიგრძე მეტია 2-ზე მაშინ დაწეროს რო მასივი ვალიდურია
// თუ არადა არ არის ვალიდური
// let library = [
//   {
//     author: "Bill Gates",
//     title: "The Road Ahead",
//     readingStatus: true,
//   },
//   {
//     author: "Steve Jobs",
//     title: "Walter Isaacson",
//     readingStatus: true,
//   },
//   {
//     author: "Suzanne Collins",
//     title: "M",
//     readingStatus: false,
//   },
// ];

// const func = (arr) => {
//   return arr.every((el) => Object.values(el).length > 2)
//     ? "Array is valid"
//     : "Array isn't valid";
// };
// console.log(func(library));
// 6.
// მოცემულია ობიექტი

// let library = [
//   {
//     author: "Bill Gates",
//     title: "The Road Ahead",
//     readingStatus: true,
//   },
//   {
//     author: "Steve Jobs",
//     title: "Walter Isaacson",
//     readingStatus: true,
//   },
//   {
//     author: "Suzanne Collins",
//     title: "Mockingjay: The Final Book of The Hunger Games",
//     readingStatus: false,
//   },
// ];

//    დაყავით მასივი ორ მასივად, ერთშ მხოლოდ  readingStatus: true ობიექტები უნდა იყოს, მეორეში   readingStatus: false
// const statusTrue = library.filter((el) => el.readingStatus == true);
// console.log(statusTrue);

// let statusTrue = library.filter((el) => el.readingStatus == true);
// let statusFalse = library.filter((el) => el.readingStatus == false);

// console.log("True:", statusTrue);
// console.log("False", statusFalse);
// 7.
// მოცემულია ობიექტი

// let library = [
//   {
//     author: "Bill Gates",
//     title: "The Road Ahead",
//     readingStatus: true,
//   },
//   {
//     author: "Steve Jobs",
//     title: "Walter Isaacson",
//     readingStatus: true,
//   },
//   {
//     author: "Suzanne Collins",
//     title: "Mockingjay: The Final Book of The Hunger Games",
//     readingStatus: false,
//   },
// ];

// დაწერეთ ფუნქცია, რომელსაც გადაეცემა ობიექტი და სიტყვა, მასივი უნდა გაიფილტროს სიტყვის-ს მიხედვით და დააბრუნოს
// მხოლოდ ეგ ობიექტები, მაგ: თუ გადაეცა library და  Steve Jobs უნდა დააბრუნოს

// [
//      {
//        author: 'Steve Jobs',
//        title: 'Walter Isaacson',
//        readingStatus: true
//    }
// ]
// const func = (arr, word) => {
//   let x = arr.filter((el) => Object.values(el).includes(word) == true);
//   return x;
// };
// console.log(func(library, "Steve Jobs"));
// 8. მოცემულია ობიექტი
//  {
//        author: 'Steve Jobs',
//        title: 'Walter Isaacson',
//        readingStatus: true
//    }

// შეცვალეთ ყველა string value და გადახეთ upper case
// let obj = {
//   author: "Steve Jobs",
//   title: "Walter Isaacson",
//   readingStatus: true,
// };
// const func = (objectFunc) => {
//   for (let key in objectFunc) {
//     if (typeof objectFunc[key] == "string") {
//       objectFunc[key] = objectFunc[key].toUpperCase();
//     }
//   }
//   return objectFunc;
// };
// console.log(func(obj));
