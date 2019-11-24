
/*
  Задание:
  Написать скрипт который:
    1. Собирает данные с формы (3 разных полей), конвертирует их в json и выводит в консоль.
  ->  2. Сделать отдельный инпут который выполняет JSON.parse(); на ту строку что вы туда 
  ввели и выводит результат в консоль.

  Array.from(HTMLNodeColection); -> Arary

  <form>
    <input name="name" />
    <input name="age"/>
    <input name="password"/>
    <button></button>
  </form>

  <form>
    <input />
    <button></button>
  </form>
  -> '{"name" : !"23123", "age": 15, "password": "*****" }'


*/
window.addEventListener("load",() => {
  ///
  vFormParse = document.getElementById("formParse");
  ///
  document.getElementById("btnCreateJSON").addEventListener("click",() => {
    vDiv = document.getElementById("divCreateJSON");
    vDiv.innerHTML = `
      <form id="idForm">
        <input type="text" name="name" />
        <input type="number" name="age"/>
        <input type="password" name="password"/>
        <button type="submit">Create</button>
      </form>
            `;
    vForm = document.getElementById("idForm");
    vForm.addEventListener("submit",e => {
      e.preventDefault();
      if(vForm.elements.name.value.length==0)alert("Введите имя");
        else
      if(vForm.elements.age.value.length==0)alert("Введите возвраст");
        else
      if(vForm.elements.password.value.length==0)alert("Введите пароль");
        else{
          const obg1 = {};
          obg1.name = vForm.elements.name.value;
          obg1.age = vForm.elements.age.value;
          obg1.password = vForm.elements.password.value;
          const vRez=JSON.stringify(obg1);
          console.log(vRez);
          vFormParse.name.value = vRez;
          vForm.remove();
        };            
    });
  });
  ///
  document.getElementById("btnParseJSON").addEventListener("click",e => {
    e.preventDefault();
    if(vFormParse.elements.name.value.length==0)alert("Введите строку");
      else
      console.log(JSON.parse(vFormParse.elements.name.value));
  });
});