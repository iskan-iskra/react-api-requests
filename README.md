# React-сетевые-запросы (REST-api)

## Версии окружения:

- node: 20.11.1
- npm: 10.2.4

## Команды:

### установить зависимости

```
npm install
```

### запустить локально проект

```
npm run dev
```

### собрать билд проекта

```
npm run build
```

## СТЭК проекта:

- vite
- JavaScript
- React v.18
- React Router DOM v.6
- AXIOS
- ky js
- SWR (vercel)
- react-query

## Темы урока:

- Сетевые запросы
- Fetch | AXIOS | ky js
- Сетевые запросы в React
- React-Router-DOM: loader
- SWR (vercel)
- React Query

## Структура проекта

### API (сетевой запрос)

Запрос на получение списка пользователей

```
https://jsonplaceholder.typicode.com/users
```

### API handlers (технологии запросов)

Директория api:

- fetch-api.js - обработка HTTP запросов через fetch API
- axios-api.js - обработка HTTP запросов через библиотеку AXIOS
- ky-api.js - обработка HTTP запросов через библиотеку ky

### React Data Fetching (подход обработки асинхронных данных)

- Через базовый функционал React
- Через пользовательский хук React (директория use)
- Через пользовательский компонент обертку (директория hoc)
- Через пользовательскую библиотеку запросов
- Через реализацию асинхронных страниц ReactRouterDOM: loader
- Через библиотеку SWR (vercel)
- Через библиотеку react-query

### UI компоненты (компоненты для отображения)

- виджет списка пользователей
- виджет шапки сайта с навигацией
- шаблон главной страницы (макет)
- компонент карточки пользователя
- компонент списка
- компонент загрузки

### Архитектура проекта

Разделение частей проекта на смысловые директории:

- components - ui компоненты (глупые, без логики)
- widjets - полноценные логические компоненты
- use - все пользовательские хуки (Hook)
- hoc - все пользовательские компоненты обертки (HOC)
- api - все сетевые запросы
- router - реализация маршрутизации через React-Router-DOM
- pages - все компоненты-страницы
- const - все статичные данные переиспользуемые в проекте
- tools - все вспомогательные функции
- layout - макеты/шаблоны (главный макет)

Использование import/export через Public API
(index.js файл для сборки всех частей директории)

Подключение к html реализовано через файл main.jsx
