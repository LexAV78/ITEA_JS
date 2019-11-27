  /*
    Задание:
    Скопировать текст из файла RegExp.txt на сайт https://regexr.com/
    Написать регулярное выражение которое найдет:
      1. Все слова. 
      2. Все совпадения букв от a до e,
      3. Года, например 2004
      4. Слова обернутые в [квадратныеКавычки]
      5. Все форматы файлов .jpg / .png / .gif
      6. Все email com.ua
      7. Все слова написанные с большой буквы
      8. Найти телефон написаный по паттерну +00 (000) 000-00-00, 
         где вместо 0 может быть любое число
  */
 window.addEventListener("load",()=>{

const btnFind = document.getElementById("btnFind");
const elReg = document.getElementById("idResult");
const elText = document.getElementById("idText");
const elSelFind = document.getElementById("idSelFind");
let vFind = "1";

btnFind.addEventListener('click',()=>{
  let pattern;
  switch(vFind) {
    case "1":  pattern = /\w+/gim;break;
    case "2":  {pattern = /[a-e]/gm;break;}
    case "3":  pattern = /[1-9]\d\d\d/gim;break;
    case "4":  pattern = /\[\w+\]/gim;break;
    case "5":  pattern = /\.jpg|\.png|\.gif/gim;break;
    case "6":  pattern = /(\w+)@(?:[a-z0-9][-a-z0-9]+\.)+[\.com.ua]{1,}/gim;break;
    case "7":  pattern = /[A-Z]\w+/gm;break;
    default:  pattern = /\+\d\d\s.\d\d\d.\s\d\d\d\-\d\d\-\d\d/gim;
  };
   let vRez = elText.value.match(pattern);
   elReg.value = vRez;
   });
   elSelFind.addEventListener("change",event => {
    vFind = event.target.value;
   }); 
 });