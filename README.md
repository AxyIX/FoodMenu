# Food menu

Приложение служит для отображения данных, представленных в JSON-формате.
```
[
  {
    "title": <title>,
    "image": <image url>,
    "id": <id>,
    "rating": <rating>,
    "ingredients": [
      <ingridient 1>,
      <ingridient 2>,
      ...
    ],
    "price": 27
  },
  ...
]
```

## Требования

Для работы приложения необходим Node.js (https://nodejs.org/)

## Запуск

Скачайте проект (или склонируйте репозиторий).

В папке с проектом (FoodMenu) откройте командную строку, и выполните команду
```
npm start
```

npm установит все необходимые зависимости, и запустит виртуальный сервер. 
После запуска сервера, приложение будет доступно по адресу http://127.0.0.1:8000