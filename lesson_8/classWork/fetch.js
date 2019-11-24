/*
  Задача:

  1. При помощи fetch получить данные:
     http://www.json-generator.com/api/json/get/cgwbLkTxnS?indent=2

  2. Полученый ответ преобразовать в json вызвав метод .json с объекта ответа
  3. Выбрать случайного человека и передать в следующий чейн промиса
  4. Сделать дополнительный запрос на получение списка друзей человека
     http://www.json-generator.com/api/json/get/bTBBXQabKG?indent=2
     И дальше передать обьект:
      {
        name: userName,
        ...
        friends: friendsData
      }

     Подсказка нужно вызвать дополнительный fecth из текущего чейна.
     Для того что бы передать результат выполнения доп. запроса
     в наш первый промис используйте констуркцию:

      .then(
        response1 => {
          return fetch(...)
            .then(
              response2 => {
                ...
                формируете обьект в котором будут данные человека с
                первого запроса, например его name response1.name
                и друзья которые пришли из доп. запроса
              }
            )
        }
      )

  5. Вывести результат на страничку

  + Бонус. Для конвертации обьекта response в json использовать одну
    функцию.

*/


  // fetch(url)
  //   .then(testFunc)
  //   .then(test2Func)
  //   .then( res => {
  //      return fetch()
  //       .then( friendsResponse)
  //       .then()
  //   })
  //   .then( func)
window.addEventListener("load",() => {

  const getObj = obg => {
    let strHTML = "";
    for (var key in obg) {
      strHTML+="<p>";
      strHTML+=key + ": " + obg[key];
      strHTML+="</p>";
    }
    return strHTML;
  };

  const fnFetch = async (url1,url2) => {
    const vDiv = document.getElementById("osn");
    let vItem = {};
    let prom = await fetch(url1);
    let newJSON = await prom.json();
    newJSON.forEach( item => vItem = item);
    let obj1 = vItem;
    //
    prom = await fetch(url2);
    newJSON = await prom.json();
    newJSON.forEach( item => vItem = item);
    let obj2 = vItem;
    //
    console.log("obj1",obj1);
    console.log("obj2",obj2);
    let obj3 = Object.assign({}, obj1, obj2);
    console.log("obj1+obj2",obj3);
    vDiv.innerHTML = 
    `
    <h1>obj1</h1>
    `+getObj(obj1)+`
    <h1>obj2</h1>
    `+getObj(obj2)+`
    <h1>obj1+obj2</h1>
    `+getObj(obj3);+`
    `;

  }; 
  fnFetch("http://www.json-generator.com/api/json/get/cgwbLkTxnS?indent=2","http://www.json-generator.com/api/json/get/bTBBXQabKG?indent=2");



});