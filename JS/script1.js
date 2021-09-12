
// 1.Напишите функцию deepEqual чтоб она проверяла что два объекта идентичны. Пример:

function deepEqual (obj1, obj2){
   return JSON.stringify(obj1)===JSON.stringify(obj2);
}
console.log(deepEqual({ name: 'test' }, { name: 'test' }) ); // true
console.log(deepEqual({name: 'test'}, {name: 'test1'}) ); // true
console.log( deepEqual({ name: 'test' }, { name: 'test', age: 10 })); // true

