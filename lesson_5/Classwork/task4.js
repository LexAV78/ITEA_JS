/*

  Задание "Шифр цезаря":

    https://uk.wikipedia.org/wiki/%D0%A8%D0%B8%D1%84%D1%80_%D0%A6%D0%B5%D0%B7%D0%B0%D1%80%D1%8F

    Написать функцию, которая будет принимать в себя слово и количество
    симовлов на которые нужно сделать сдвиг внутри.

    Написать функцию дешефратор которая вернет слово в изначальный вид.

    Сделать статичные функции используя bind и метод частичного
    вызова функции (каррирования), которая будет создавать и дешефровать
    слова с статично забитым шагом от одного до 5.


    const isMobile = document.innerWidth < 768;

    Например:
      encryptCesar( 3, 'Word');
      encryptCesar1(...)
      ...
      encryptCesar5(...)

      decryptCesar1(3, 'Sdwq');
      decryptCesar1(...)
      ...
      decryptCesar5(...)

      "а".charCodeAt(); // 1072
      String.fromCharCode(189, 43, 190, 61) // ½+¾

*/
window.addEventListener("load", function () {
//variable
let vCrypt = "";
let vStr = "Написать функцию, которая будет принимать в себя слово и количество";
//function
fnEncrypt = (vStep,vText) => {
  let vRez = "";
  vText.split('').map(x=>{vRez=vRez+String.fromCharCode(x.charCodeAt()+vStep)});
  return vRez;
};

fnDecrypt = (vStep,vText) => {
  let vRez = "";
  vText.split('').map(x=>{vRez=vRez+String.fromCharCode(x.charCodeAt()-vStep)});
  return vRez;
};

fnEncryptCarrying = fnEncrypt.bind(null, 5);
fnDecryptCarrying = fnDecrypt.bind(null, 5);
//go
console.log("Исходная строка : "+vStr);
console.log("");
vCrypt = fnEncrypt(3,vStr);
console.log("Зашифрованая строка : "+vCrypt);
vCrypt = fnDecrypt(3,vCrypt);
console.log("Расшифрованая строка : "+vStr);
console.log("");
vCrypt = fnEncryptCarrying(vStr);
console.log("Зашифрованая строка (Carrying) : "+vCrypt);
vCrypt = fnDecryptCarrying(vCrypt);
console.log("Расшифрованая строка (Carrying) : "+vStr);





});
