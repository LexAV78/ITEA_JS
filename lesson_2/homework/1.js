
  function fnImageDisable(){
    var vMas=document.querySelectorAll(".tab");
    vMas.forEach(vItem=>vItem.classList.remove("active"));
    return vMas;
  };
  function fnImageShow(vID){
    fnImageDisable().forEach(vItem=>{if(vItem.getAttribute("data-tab")==vID)vItem.classList.add("active")});
  };
  function fnBtnClick(vItem){
   fnImageShow(vItem.target.getAttribute("data-tab"));
  };
  function fnBindBtnClick(){
    var vMas=document.querySelectorAll(".showButton");
    vMas.forEach(vItem=>vItem.onclick=fnBtnClick);
  };
  fnBindBtnClick();
  /*

    Задание 1.

    Написать скрипт который будет будет переключать вкладки по нажатию
    на кнопки в хедере.

    Главное условие - изменять файл HTML нельзя.

    Алгоритм:
      1. Выбрать каждую кнопку в шапке
         + бонус выбрать одним селектором

      2. Повесить кнопку онклик
          button1.onclick = function(event) {

          }
          + бонус: один обработчик на все три кнопки

      3. Написать функцию которая выбирает соответствующую вкладку
         и добавляет к ней класс active

      4. Написать функцию hideAllTabs которая прячет все вкладки.
         Удаляя класс active со всех вкладок

    Методы для работы:

      getElementById
      querySelector
      classList
      classList.add
      forEach
      onclick

      element.onclick = function(event) {
        // do stuff ...
      }

  */
