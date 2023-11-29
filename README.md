## Movies Explorer: дипломная работа в Яндекс Практикуме

> :globe_with_meridians: [**Ссылка на Movies Explorer - https://movies.naborbukovok.nomoredomainsrocks.ru**](https://movies.naborbukovok.nomoredomainsrocks.ru)

### :mortar_board: О чем проект
**Этот проект** - фронтенд для дипломной работы по курсу ["Веб-разработчик"](https://practicum.yandex.ru/web) от сервиса Яндекс Практикум. В веб-приложении пользователи могут управлять данными своего профиля, искать фильмы из подборки при помощи поисковой строки и фильтра "Короткометражки", сохранять карточки понравившихся фильмов. Доступны регистрация и авторизация. Верстка выполнена в соответствии с [макетом в Figma](https://www.figma.com/file/6FMWkB94wE7KTkcCgUXtnC/%D0%94%D0%B8%D0%BF%D0%BB%D0%BE%D0%BC%D0%BD%D1%8B%D0%B9-%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82?node-id=1%3A1534&mode=dev). Для элементов, поведение которых не задано в макете, анимации продуманы самостоятельно. Данные приложение получает от двух API:<br/>
- запрос к [Beatfilm Movies API](https://api.nomoreparties.co/beatfilm-movies) возвращает все фильмы (далее они фильтруются на клиентской части в соответствии с параметрами, заданными пользователем);<br/>
- запросы к [Movies Explorer API](https://api.movies.naborbukovok.nomoredomainsrocks.ru) используются для работы с регистрацией/авторизацией, аккаунтом, сохраненными фильмами.
  
  > :octocat: ***Movies Explorer API** был реализован в рамках дипломной работы **самостоятельно**, код можно найти в [этом репозитории](https://github.com/naborbukovok/movies-explorer-api).*

### :mortar_board: Запуск проекта
`npm run start` - запускает сервер.<br/>
`npm run build` - создает оптимизированную сборку.

### :mortar_board: Стек технологий
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=white"/> <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=white"/> <img src="https://img.shields.io/badge/HTML-E34F26?style=flat&logo=html5&logoColor=white"/> <img src="https://img.shields.io/badge/CSS-1572B6?style=flat&logo=css3&logoColor=white"/> <img src="https://img.shields.io/badge/Yandex Cloud-5282FF?style=flat&logo=yandexcloud&logoColor=white"/>
