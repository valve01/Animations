- Не забыть конвертацию шрифтов включить обратно в gulp 

для деплоя выполнить команды:

что собрать билд для деплоя
npx gulp docs

задеплоить на GitHub Pages
npx gulp deployGhP


======================================================= Анимации ============================================================
0. Показать/скрыть анимации - файл animations.html
0. Наклон логотипа на hover. CSS - perspective. .logo-wrapper и .logo / Размытие кнопок. CSS - filter blur.
1. Рисование линии. .svg-anim-line. CSS. JS - svg-anim.js - для автоматизации.
2. Пульсирующее солнце. .sun-ray-anim. Только HTML.
3. Глич1. CSS. НЕ разобрался до конца, но суть такая же как в глич 2. Только применяем еще clip-pass, чтобы форму динамически менять.
4. Глич2. CSS. Фишка в эффекте смещения основного изображения. На самом деле оно остается на месте, просто сверху накладывается такое же измененное, и у этого измененного меняется background-position по Y на ту же величину, что и смещение блока глича.
5. 3D куб. CSS. В JS код для вращения куба вручную, с помощью стрелок на NUMPAD и лево право (для вращения вручную нужно отключить анимацию) (animation-iteration-count: 0;)
6. Горизонтальный параллакс. CSS. JS.
6. Вертикальныйальный параллакс по скроллу. CSS. JS. Способ с передачей переменной в CSS по-идее более производительный, и не требует querySelectorAll на каждое изменение положения.