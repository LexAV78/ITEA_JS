

    /*

        Документация:
        
        https://developer.mozilla.org/ru/docs/HTML/HTML5/Constraint_validation
        
        form.checkValidity() > Проверка всех полей формы на валидость
        form.reportValidity() > Проверяет все поля на валидность и выводит возле каждого из не прошедшего валидацию
            сообщение с ошибкой

        formElement.validity > Объект с параметрами валидности поля 
        formElement.setCustomValidity(message) > Метод который задаст validity.valid = false, и при попытке отправки
            сообщения выведет message в браузерный попал

        Классы для стилизации состояния элемента
        input:valid{}
        input:invalid{}

        
        Задание:
        
        Используя браузерное API для валидации форм реализовать валидацию следующей формы:
        

        - Имя пользователя: type:text -> validation: required; minlength = 2;  
            Если пустое выввести сообщение: "Как тебя зовут дружище?!"
        - Email: type: email -> validation: required; minlength = 3; validEmail;
            Если эмейл не валидный вывести сообщение "Ну и зря, не получишь бандероль с яблоками!"
        - Пароль: type: password -> validation: required; minlength = 8; maxlength=16;
            Если пустой вывести сообщение: "Я никому не скажу наш секрет";
        - Количество сьеденых яблок: type: number -> validation: required; minlength = 1; validNumber;
            Если количество 0 вывести эррор с сообщением "Ну хоть покушай немного... Яблочки вкусные"
        - Напиши спасибо за яблоки: type: text -> validation: required; 
            Если текст !== "спасибо" вывести эррор с сообщением "Фу, неблагодарный(-ая)!" используя setCustomValidity();

        - Согласен на обучение: type: checkbox -> validation: required;
            Если не выбран вывести эррор с сообщение: "Необразованные живут дольше! Хорошо подумай!"

        Внизу две кнопки:

        1) Обычный submit который отправит форму, если она валидна.
        2) Кнопка Validate(Проверить) которая запускает методы:
            - yourForm.checkValidity: и выводит на страницу сообщение с результатом проверки
            - yourForm.reportValidity: вызывает проверку всех правил и вывод сообщения с ошибкой, если такая есть

    */
   
window.addEventListener("load", function () {

   fnValidityElem = (event,vStr) => {
    if( event.target.validity.tooShort  ){
        event.target.setCustomValidity(vStr);
    } else {
        event.target.setCustomValidity('');
    }
   };

   let txtUser = document.getElementById("txtUser");
   txtUser.addEventListener("change",  event => {fnValidityElem(event,"Как тебя зовут дружище?!")});

   let txtMail = document.getElementById("txtMail");
   txtMail.addEventListener("change",  event => {fnValidityElem(event,"Ну и зря, не получишь бандероль с яблоками!")});

   let txtPass = document.getElementById("txtPass");
   txtPass.addEventListener("change",  event => {fnValidityElem(event,"Я никому не скажу наш секрет")});

   let txtCount = document.getElementById("txtCount");
   txtCount.addEventListener("change",  event => {fnValidityElem(event,"Ну хоть покушай немного... Яблочки вкусные")});

   let txtThank = document.getElementById("txtThank");
   txtThank.addEventListener("change",  event => {fnValidityElem(event,"Фу, неблагодарный(-ая)!")});
   
   let btnValid = document.getElementById("btnValid");
   let elForm = document.getElementById("elForm");
   btnValid.addEventListener("click", function(){elForm.checkValidity();elForm.reportValidity(); });
   
});