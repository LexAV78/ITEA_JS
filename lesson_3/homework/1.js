/*

  Задание написать простой слайдер.

    Есть массив с картинками из которых должен состоять наш слайдер.
    По умолчанию выводим первый элмемнт нашего слайдера в блок с id='slider'
    ( window.onload = func(){...} // window.addEventListener('load', function(){...}) )
    По клику на PrevSlide/NextSlide показываем предыдущий или следующий сладй соответствено.

    Для этого необходимо написать 4 функции которые будут:

    1. Срабатывать на событие load обьекта window и загружать наш слайд по умолчанию.
    2. RenderImage -> Очищать текущий контент блока #slider. Создавать нашу картинку и через метод аппенд чайлд вставлять её в слайдер.
    3. NextSlide -> По клику на NextSilde передавать currentPosition текущего слайда + 1 в функцию рендера
    4. PrevSlide -> Тоже самое что предыдущий вариант, но на кнопку PrevSlide и передавать currentPosition - 1
      + бонус сделать так что бы при достижении последнего и первого слада вас после кидало на первый и последний слайд соответственно.
      + бонсу анимация появления слайдов через навешивание дополнительных стилей

*/
 window.addEventListener('load', function(){
  var OurSliderImages = ['images/cat1.jpg', 'images/cat2.jpg', 'images/cat3.jpg', 'images/cat4.jpg', 'images/cat5.jpg', 'images/cat6.jpg', 'images/cat7.jpg', 'images/cat8.jpg'];
  var currentPosition = 0;
  //
  var elCheckBox=document.createElement("div");
  var elCheck=document.createElement("input");
  elCheck.type="checkbox";
  elCheck.id="idCh";
  elCheck.style.marginTop="20px";
  elCheckBox.appendChild(elCheck);
  var elCheckLabel = document.createElement('label')
  elCheckLabel.htmlFor = "id";
  elCheckLabel.appendChild(document.createTextNode('анимация'));
  elCheckBox.appendChild(elCheckLabel);
  document.getElementById("slider").appendChild(elCheckBox);
  //
  var elImg = document.createElement("img"); 
  elImg.style.transition="1s"; 
  document.getElementById("slider").appendChild(elImg);
  //
  function RenderImage(){
    if(currentPosition<0)currentPosition=OurSliderImages.length-1;
    if(OurSliderImages.length==currentPosition)currentPosition=0;
    elImg.setAttribute("src",OurSliderImages[currentPosition]); 
  }  
  function btnClick(vItem){
    if(vItem.target.id=="NextSilde")currentPosition++;else currentPosition--;
    if(idCh.checked){
      elImg.style.opacity="0";
      setTimeout( function(){
      RenderImage();
      elImg.style.opacity="1";
    }, 1000);}else  RenderImage();
  };
  document.querySelectorAll("button").forEach(vItem=>vItem.addEventListener("click",btnClick));
  //
  RenderImage();
});
