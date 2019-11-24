/*

  Задание:

    Написать при помощи async-await скрипт, который:

    Получает список компаний:  http://www.json-generator.com/api/json/get/ceRHciXcVu?indent=2
    Перебирает, выводит табличку:

    # | Company  | Balance | Показать дату регистрации | Показать адресс |
    1.| CompName | 2000$   | button                    | button
    2.| CompName | 2000$   | 20/10/2019                | button
    3.| CompName | 2000$   | button                    | button
    4.| CompName | 2000$   | button                    | button

    Данные о дате регистрации и адресс скрывать при выводе и показывать при клике.

*/
window.addEventListener("load",() => {
//
const fnCreateTable = async (url) => {
  const vDiv = document.getElementById("osn");
  let vItem = {};
  let inkr = 1;
  let strHTML = "";
  let elTable  = document.createElement("table");
  elTable.style.width = "100%";
  elTable.setAttribute('border', '1');
  strHTML+=`
  <thead>
    <tr>
      <th>#</th>
      <th>Company</th>
      <th>Balance</th>
      <th>Дата регистрации</th>
      <th>Адресс</th>
    </tr>
  </thead>
  `;
  strHTML+="<TBODY>";
  
  let prom = await fetch(url);
  let newJSON = await prom.json();
  newJSON.forEach( item => {
    let vCompany = item.company;
    let vBalance = item.balance;
    let vDate = item.registered;
    let vAddres = item.address.country+" city:"+item.address.city+" house:"+item.address.house+" street:"+item.address.street+" house:"+item.address.house;
    strHTML+="<tr>";
    strHTML+="<td>"+inkr+"</td>";
    strHTML+="<td>"+vCompany+"</td>";
    strHTML+="<td>"+vBalance+"</td>";
    strHTML+="<td><button>Показать дату</button><span hidden='true'>"+vDate+"</span></td>";
    strHTML+="<td><button>Показать Адресс</button><span hidden='true'>"+vAddres+"</span></td>";
    
    strHTML+="</tr>";
    inkr++;
  });


  strHTML+="</TBODY>";
  elTable.innerHTML=strHTML;
  vDiv.appendChild(elTable);
  vDiv.querySelectorAll("button").forEach(event =>{
    event.addEventListener("click",e => {
      e.target.parentNode.querySelector("span").removeAttribute("hidden");
      e.target.remove();
    });
  });
  console.log(newJSON);
};
//go
fnCreateTable("http://www.json-generator.com/api/json/get/ceRHciXcVu?indent=2");
//end
});