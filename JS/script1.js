
// 1.Напишите функцию deepEqual чтоб она проверяла что два объекта идентичны. Пример:

// function deepEqual (obj1, obj2){
//    return JSON.stringify(obj1)===JSON.stringify(obj2);
// }
// console.log(deepEqual({ name: 'test' }, { name: 'test' }) ); // true
// console.log(deepEqual({name: 'test'}, {name: 'test1'}) ); // true
// console.log( deepEqual({ name: 'test' }, { name: 'test', age: 10 })); // true


// 2.  Напишите функцию chunkArray которая разбивает массив на подмассивы на заданное количество элементов. Пример:
//  var result = chunkArray([1,2,3,4,5,6,7,8], 3);
// function chunkArray(array, i) {
//     let result=[]
//     while(array.length) result.push(array.splice(0,i));
//     console.log(result);
//     return result
// }

// !!!!!!!!3. Напишите функцию обертку которая на вход принимает асинхронный метод и массив аргументов а отдает нам Promise с результатом. Пример:

// function asyncPlus(x, y, cb){
// 	setTimeout(() => cb(x + y), 1000)
// }


// toPromise(asyncPlus, [1, 2])
//     .then(console.log)
    // .finally(() => console.log("Promise settled"));
 // Output: 3


//  4. Напишите метод firstUnique который возвращает первый уникальный элемент в массиве. Пример: 

// const firstUnique = [1, 2, 3, 2, 1, 3, 4, 5, 5].reduce(function(map,el){
//         map[el] = (map[el]||0)+1;
//         return map;
// }, {});
//     const filtered = Object.keys(firstUnique).filter(function(el){
//       return firstUnique[el] == 1;
//     })
//     console.log(filtered);



// 5. Напишите метод arrayToObject который возвращать объект(использовать рекурсию). Пример:

//  var arr = [['name', 'developer'], ['age', 5], ['skills', [['html',4], ['css', 5], ['js',5]]]];
// function arrayToObject(arr) {
//         if (Array.isArray(arr)) {
//             var result = {};
//             } else {
//          return arr;
//         }
//         for (let i = 0; i <= arr.length; i++){
//           let el = arr[i];
//           if (Array.isArray(el)) {
//              result[el[0]]=arrayToObject(el[1])
//         }
//     }
//          return result;
// }
// console.log(arrayToObject(arr)) 

// Outputs: {
// 	name: 'developer',
// 	age: 5,
// 	skills: {
// 		html: 4,
// 		css: 5,
// 		js: 5
// 	}
// }


// !!!!!6. Написать метод getBase64FromUrl который конвертирует картинку в строку base64 (метод должен быть реализован с помощью Promise). Пример:

//  getBase64FromUrl('https://lh3.googleusercontent.com/i7cTyGnCwLIJhT1t2YpLW-zHt8ZKalgQiqfrYnZQl975-ygD_0mOXaYZMzekfKW_ydHRutDbNzeqpWoLkFR4Yx2Z2bgNj2XskKJrfw8')
//  .then(console.log)
//  .catch(console.error)


// // Output
// data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAACeCAIAAADL6SW3AAAAA3NCSVQICAjb4U/gAAAMGElEQVR4nO3dfZBdZX3A8d....



// 7. Написать обратный метод(см. задачу 5) objectToArray который из объекта создаст массив. Пример: 

// let objectToArray=({
// 	name: 'developer',
// 	age: 5,
// 	skills: {
// 		html: 4,
// 		css: 5,
// 		js: 5
// 	}
// })
   
// const abjArr = Object.entries(objectToArray);
// abjArr.forEach(([key, value]) => {
//   console.table(key, value);
// });
// console.log(abjArr)


// Outputs: [['name', 'developer'], ['age', 5], ['skills', [['html',4], ['css', 5], ['js',5]]]]





// !!!!!!!!8. Сделать функцию которая сможет делать срез данных с ассоциативного массива и вернуть средние значение (округленное до 2 цифр после запятой).

// let testData3 = [{"name":"Vasya","email":"vasya@example.com","age":20,"skills":{"php":0,"js":-1,"madness":10,"rage":10}},{"name":"Dima","email":"dima@example.com","age":34,"skills":{"php":5,"js":7,"madness":3,"rage":2}},{"name":"Colya","email":"colya@example.com","age":46,"skills":{"php":8,"js":-2,"madness":1,"rage":4}},{"name":"Misha","email":"misha@example.com","age":16,"skills":{"php":6,"js":6,"madness":5,"rage":2}},{"name":"Ashan","email":"ashan@example.com","age":99,"skills":{"php":0,"js":10,"madness":10,"rage":1}},{"name":"Rafshan","email":"rafshan@example.com","age":11,"skills":{"php":0,"js":0,"madness":0,"rage":10}}]


// let result2 = array_pluck_avg(testData3, 'skills.php') 


// Outputs: 3.1




// 9. Создайте прототип для String toTitleCase каждый первый символ строки переводит в верхний регистр. Пример:

// let x = 'test task'
// function capitalize(x) {
//  return x.replace(/(^|\s)\S/g, function(a) {return a.toUpperCase()})
// }
// console.log(capitalize(x))
// Outputs: Test Task


// 10. Создайте прототип который удаляет дубликаты из строки. Пример:

// let x = "Int32 Int32 Int32 Int32 Int32 Int32 Int32 Int32 Int32 Double Double Double";
// let res = x.split(" ")
// let unique = res.filter((v, i, a) => a.indexOf(v) === i); 
// console.log(unique)