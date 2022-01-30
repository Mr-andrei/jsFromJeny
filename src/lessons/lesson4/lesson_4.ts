import {log} from "util";

console.log('lesson 4');

// http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
// https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/


// Task 01
// Создайте промис, который постоянно находиться в состоянии pending.
// В конструкторе промиса выведите в консоль сообщение "Promise is created".

// let propm = new Promise((resolve, reject) => {
//     console.log("promise pending")
// })
// console.log(propm)
// Task 02
// Создайте промис, который после создания сразу же переходит в состояние resolve
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль

// let prom = new Promise(( res, rej)=> {
//     res( console.log('Promise Data'))
// })
// console.log(prom)

// let prom =  Promise.resolve('Promise Data')
// console.log(prom)

// Task 03
// Создайте промис, который после создания сразу же переходит в состояние rejected
// и возвращает строку 'Promise Error'
// Получите данные промиса и выведите их в консоль

// const fn = (num: number) => {
//     return new Promise((res, rej) => {
//         if(num > 10 ) res (num )
//         else rej(num/2)
//     })
// }
//
// fn(8)
//     .then((num:any) => {
//         let a = num + 1
//         console.log(a)
//         return a
//     })
//     .then(num2 => console.log(num2 +1))
//     .catch(num => console.log(num))


// Task 04
// Создайте промис, который переходит в состояние resolved через 3с.
// (Используйте setTimeout)
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль

// let prom = new Promise(resolve =>
//     setTimeout(() => {
//         resolve('Promise Data')
// }, 3000, ))
//     .then((data) => console.log(data))


// Task 05
// Создайте литерал объекта handlePromise со следующими свойствами:
// promise, resolve, reject, onSuccess, onError
// Проинициализируйте первые три свойства null,
// а последние два функциями, которые принимают один параметр и выводят
// в консоль сообщения: первая - `Promise is resolved with data: ${paramName}`
// вторая - `Promise is rejected with error: ${paramName}`
// Создайте три обработчика события click для кнопок "Create Promise", "Resolve Promise", "Reject Promise".
// Первый обработчик, создает промис, заполняет первые три свойства,
// описаного выше объекта: свойство promise получает новый созданный промис,
// свойства resolve и reject получают ссылки на соответствующие функции
// resolve и reject. Следующие два обработчика запускают методы resolve и reject.


// Task 06
// Создайте промис, который через 1 с возвращает строку "My name is".
// Создайте функцию onSuccess, которая получает один параметр,
// прибавляет к нему Ваше имя и возвращает новую строку из функции
// Создайте функцию print, которая выводит в консоль значение своего параметра
// Добавьте два метода then и передайте созданные функции.


//
// let prom = new Promise((res,rej) => {
//     setTimeout((resolve:string)=> {
//         res(resolve)
//     },1000, "My name is ")
// })
//
//
// function onSuccess (param:any) {
//  return  param.then( (data:any) => {
//      console.log( data + "Andrei" )})
// }
//  onSuccess(prom)
//

// Task 7
// Создайте три промиса. Первый промис возвращает объект { name: "Anna" } через 2с,
// второй промис возвращает объект {age: 16} через 3 с, а третий {city: ''} через 4с.
// Получите результаты работы промисов, объедините свойства объектов
// и выведите в консоль {name, age, city}

let obj: any = {}
// const fn1 =  () => {
//     return new Promise(resolve => {
//     setTimeout((arg)=>{
//         resolve(arg)
//     },1000, { name: "Anna" })
// })}


// const prom2 = new Promise(resolve => {
//     setTimeout((arg)=>{
//         resolve(arg)
//     },2000, {age: 16})
// })
// const prom3 = new Promise(resolve => {
//     setTimeout((arg)=>{
//         resolve(arg)
//     },3000, {city: ''})
// })
//

//
async function func1(num: number) {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve(num), 1000)
    });

    let result = await promise
    return result
}

let a = func1(6)
console.log(a)

// async function f() {
//
//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => resolve("готово!"), 1000)
//     });
//
//     let result = await promise; // будет ждать, пока промис не выполнится (*)
//
//     alert(result); // "готово!"
// }
// f()

// just a plug
export default () => {
};