
Mongo
Рабочее окружение
База данных MongoDB содержит коллекции:
posts - Записи - 
{
  "properties": {
    "_id": { "bsonType": "objectId" },
    "title": { "bsonType": "string" },
    "content": { "bsonType": "string" },
    "author": { "bsonType": "string" },
    "like": { "bsonType": "int" },
    "dislike": { "bsonType": "int" }
  }
}

Все команды вы выполняете в mongo shell
Задание
Напишите команды для получения следующих значений:

1)Выведите 10 записей из коллекции posts пропустив первые 5 и сделайте сортировку в алфавитном порядке по полю author db.post.find().limit(10).skip(5).sort('properties.author', 1)

2) Выведите все записи у которых dislike меньше  100
db.post.find({'properties.dislike':{$lt:100}})

3)Увеличить like на +1 во всех posts  у который author  === 'a1' 
db.post.updateMany(
  	{ "properties.author": "a1" },
  	{ $inc: { "properties.like": 1 } }
   );
   
4)Выведите список title и их общее количество dislike
 db.post.aggregate([
  	{ $match: {} },
  	{ $group: {_id: "$properties.title",dislike: { $sum: "$properties.dislike" }}}
   ]);