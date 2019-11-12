/*

    Задание 3:

    1. Создать ф-ю констурктор которая создаст новую собаку у которой есть имя и порода
    2. Обьект должен иметь пару свойств (Имя, порода, status)
    3. Функцию которая производит манипуляцию со свойствами (Собака бежит), (Собака есть)
    4. Функция которая перебором выводит все свойства


    Dog {
      name: '',
      breed: '',
      status: 'idle',

      changeStatus: function(){...},
      showProps: function(){...}
    }

    // Перебор свойств и методов обьекта
    for (key in obj) {
      console.log( key, obj[key] );
      /* ... делать что-то с obj[key] ...
    // }
*/
window.addEventListener("load", function () {
  function Dog (name,breed) {
    this.name = name;
    this.breed = breed;
    this.status ="idle";
    console.log("Create dog : "+this.breed+", name : "+this.name);
    
    this.changeStatus = function  (status) {
      this.status = status;
      console.log("New status : "+this.status);
    };

    this.showProps = function(){
      console.log("\n\r------ OBJECT");console.log("");
      
      for (key in this) {
        console.log( key, this[key] );
       }
    };
  };

let Dog1 = new Dog ("Nika","Kolly");
Dog1.changeStatus("running");
Dog1.changeStatus("eats");
Dog1.showProps();


});