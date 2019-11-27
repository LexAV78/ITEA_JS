/*

    Задание 1:
    Написать скрипт, который по клику на кнопку рандомит цвет и записывает его в localStorage
    После перезагрузки страницы, цвет должен сохранится.

*/
window.addEventListener("load",() => {
    //
    function getRandomColorInt() {
        return Math.floor(Math.random() * Math.floor(255));
    }
    //
    function getRandomColor16() {
        return ('#'+getRandomColorInt().toString(16)+getRandomColorInt().toString(16)+getRandomColorInt().toString(16));
    }
    //
    const setBodyColor = () => {
        document.querySelector("body").style.backgroundColor = localStorage.getItem('bodyColor');
    };
    //
    const divColor = document.getElementById("idColor");
    document.getElementById("idRand").addEventListener("click",()=>{
        divColor.style.backgroundColor = getRandomColor16();
    });
    //
    document.getElementById("idSave").addEventListener("click",()=>{
        localStorage.setItem('bodyColor', divColor.style.backgroundColor);
        setBodyColor();
    });
    //
    setBodyColor();
});