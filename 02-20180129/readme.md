# Второе занятие: настройка сборки (29.01.2018)

##План
- Разбор домашки
- Установка и нстройка webpack
- Процессинг CSS/LESS/SASS 

###По шагам
1. Добавляем `package.json, webpack.config.js (сам конфиг можно взять с моей репы)`
2. `npm i -S webpack extract-text-webpack-plugin` 
3. `npm i -S babel-loader babel-core babel-polyfill babel-preset-es2015 babel-preset-stage-0 babel-preset-react` 
4. `npm i -S react react-dom`
5. Добавляем файлы проекта (index.html, *.js фалы)
6. Добавляем скрипты запуска
7. Проверяем сборку

Теперь добавим стили
1. `npm i -S style-loader css-loader autoprefixer-loader less less-loader`
2. Добавляем *.less файл, импортируем его и проверяем что что-то поменялось 

##Домашнее задание
1. Настроить сборку ReactJS приложения
2. Собрать ДЗ №1 в бандл, рскаидать все компоненты по папкам
3. Украсить LESS стилями
4. Добавить SASS препроцессор

1, 2 - сделать обязательно. 3, 4 - не обязательно, повышенная сложность
