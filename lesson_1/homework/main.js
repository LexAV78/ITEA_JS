/*

  Задание 1.

  Написать функцию которая будет задавать СЛУЧАЙНЫЙ цвет для фона.
  Каждая перезагрузка страницы будет с новым цветом.
  Для написания используйте функцию на получение случайного целого числа,
  между минимальным и максимальным значением (Приложена снизу задания)

  + Бонус, повесить обработчик на кнопку через метод onClick
  + Бонус, использовать 16-ричную систему исчесления и цвет HEX -> #FFCC00
  + Бонус выводить полученый цвет по центру страницы.
  
  Необходимо создать блок через createElement задать ему стили через element.style
  и вывести через appendChild или insertBefore

  Необходимые материалы:
    Math.Random (Доки): https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    __
    Работа с цветом:
    Вариант 1.
      Исользовать element.style.background = 'rgb(r,g,b)';
      где r,g,b случайное число от 0 до 255;

    Вариант 2.
      Исользовать element.style.background = '#RRGGBB';
      где, RR, GG, BB, значние цвета в 16-ричной системе исчесления
      Формирование цвета в вебе: https://ru.wikipedia.org/wiki/%D0%A6%D0%B2%D0%B5%D1%82%D0%B0_HTML
      Перевод в 16-ричную систему исчесления делается при помощи
      метода Number.toString( 16 ) https://www.w3schools.com/jsref/jsref_tostring_number.asp,

      var myNumber = '251'
      myNumber.toString(16) // fb

*/

/// --- function
function getRandomColorInt() {
  return Math.floor(Math.random() * Math.floor(255));
}
function getRandomColor16() {
  return ('#'+getRandomColorInt().toString(16)+getRandomColorInt().toString(16)+getRandomColorInt().toString(16));
}
console.log(getRandomColor16() );
/// --- body
var elBody = document.body;
elBody.style.background='rgb('+getRandomColorInt()+','+getRandomColorInt()+','+getRandomColorInt()+')';
var vWidth = Math.floor(screen.width/2);
var vHeight = Math.floor(screen.height/2);
var elDivColor = document.createElement('div');
  elDivColor.className = "classDivColor";
  elDivColor.innerText = "ЖМИ";
  elDivColor.style.fontSize = "30px";
  elDivColor.style.height = "200px";
  elDivColor.style.width = "200px";
  elDivColor.style.top = vHeight-100+"px";
  elDivColor.style.left = vWidth-100+"px";
  elDivColor.style.position = "absolute";
  elDivColor.style.textAlign = "center";
  elDivColor.style.backgroundColor = getRandomColor16();
  elBody.appendChild(elDivColor);
  elDivColor.onclick = function() {
    var vDiv=elBody.querySelector(".classDivColor");
    var randColor =  getRandomColor16();
    vDiv.style.backgroundColor = randColor;
    console.log(randColor);
  };