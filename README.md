1. Проект протестирован на Chrome, Safari, Firefox, IE;
2. Проект с FLEX архитектурой. С Safari был небольшой гиморой;<br />
2.1. flex-basis НЕ РАБОТАЕТ в Safari, решение через - height;
3. Структура разбита по компонентам (папкам);
4. Переопределение стилей для разных размеров экрана (@media) - media.css; **НЕ ДЛЯ МОБИЛЬНЫХ**
5. Переопределение стилей для Safari & Firefox & IE;
6. Взаимосвязанные Top & Left MENU - menuActive.js;
7. Социальные иконки из font-awesome;
8. Меню более чем на 20 языках;
9. Перечень флагов (языков) - index.html;
10. Автоопределение языка пользователя <br />
10.1. Выбранный язык сохраненяется в localStorage - languageStorage.js(кроме Microsoft_a - в будущем реализую);
11. Присвоение флага языку - flagIco.css + myapp.appcache;
12. **Присвоение флага при "изменение" - readyFlags.js;** 
13. **Присвоение Captions & marquee & Content при изменение флага или меню - readyFlags.js;**
14. Тексты для кнопок меню на разных языках - dataFlags.js;
15. Бегущая строка (marquee)- данные в dataTicker.js реализация в readyFlags.js;
16. Задействованы Ramda и jQuery библиотеки;
17. Страницы реализованыпри помощи handlebars шаблонов.
18. Пока закомментировал - Приложение закэшировано - myapp.appcache
19. @font-face 'Nautilus Pompilius';
