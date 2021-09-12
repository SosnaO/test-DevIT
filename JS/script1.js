
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

// 3. Напишите функцию обертку которая на вход принимает асинхронный метод и массив аргументов а отдает нам Promise с результатом. Пример:

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
