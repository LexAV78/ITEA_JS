/*

    Задание 1:

    Написать обьект Train у которого будут свойства:
    -имя,
    -скорость езды
    -количество пассажиров
    Методы:
    Ехать -> Поезд {name} везет { количество пассажиров} со скоростью {speed}
    Стоять -> Поезд {name} остановился. Скорость {speed}
    Подобрать пассажиров -> Увеличивает кол-во пассажиров на Х
*/


const objTrain = {
     vTrainName : "№100",
     vTrainSpeed : 100,
     vUserCount : 0,
     fnGo : function(spd){
        this.vTrainSpeed = spd;
        return "Поезд "+this.vTrainName+" везёт "+this.vUserCount+" со скоростью "+this.vTrainSpeed;
     },
     fhStop : function(){
        this.vTrainSpeed = 0;
        return "Поезд "+this.vTrainName+" остановился. Скорость "+this.vTrainSpeed;
     },
     fnPut : function(user){
        this.vUserCount += user;
     },
     fnDrop : function(user){
        this.vUserCount -= user;
        if(this.vUserCount<0)this.vUserCount=0;
     }
};

console.log(objTrain.fnPut(12));
console.log(objTrain.fnGo(60));
console.log(objTrain.fhStop());
console.log(objTrain.fnPut(5));
console.log(objTrain.fnGo(75));
console.log(objTrain.fhStop());
console.log(objTrain.fnDrop(15));
console.log(objTrain.fnGo(25));
