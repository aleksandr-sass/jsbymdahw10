# jsbymdahw10
JS by MDA. Homework to lesson #10

## Задачи
1. Добавить в хранилище firebase новый файл в формате json (как мы добавляли db.json, только users.json). Записать в объект данные пользователей (например, userName, discont).
2. Сделать запрос с помощью метода fetch к хранилищу данных и получить данные пользователей.
3. Сделать проверку на предмет одного пользователя, если, например это Дмитрий, то все цены на товары установить со скидкой из поля discont и отрисовать карточки с новыми ценами (либо указать рядом цену со скидкой).


## Подсказки и ценные указания
1. [tip #1](https://youtu.be/tKJZc8moRUQ)
2. Для firebase необходимо указать в строке URI формат файла json
```
fetch('https://project-d68d1-default-rtdb.firebaseio.com/db.json')
```
Для получение данных локально из файла db.json необходимо включать Live server.
3. Для передачи ошибки в метод .catch необходимо передать сам объект и его свойство status
```
fetch('https://project-d68d1-default-rtdb.firebaseio.com/db.json')
  .then(response => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error(response.status)
    }
  })
  .then(data => {
    localStorage.setItem('cards', JSON.stringify(data))
  })
  .catch(error => {
    console.log(error.message);
  })
```

## Решение
### 1 Step N1:
1. todo
