/*

    Задание 3:


    Написать класс Posts в котором есть данные:

    _id
    isActive,
    title,
    about,
    likes,
    created_at

    У класса должен быть метод addLike и render.

    Нужно сделать так чтобы:
    - После добавления поста, данные о нем записываются в localStorage.
    - После перезагрузки страницы, данные должны сохраниться.
    - Можно было прездагрузить данные в данный модуль: http://www.json-generator.com/api/json/get/cgCRXqNTtu?indent=2

*/
window.addEventListener("load",() => {

    divPost = document.getElementById("divPost");
    divPost.innerHTML = "";
    //class    Posts
    class Posts {
        addLike(event){
            if(this.likes)this.likes++;else this.likes=1;
            event.target.innerHTML = "like: "+this.likes;
        }
        render(){
            let vElem = document.createElement('div');
            vElem.id=this._id;
            vElem.className = "clPost";
            let strHTML = `
            <span class="clTitle">`+this.title+`</span><span class="clDate">(`+this.created_at+`)</span><br>
            <span class="clAbout">`+this.about+`</span><br>
            <span class="clActive">Active :`+this.isActive+`</span><br>
            `;
            vElem.innerHTML = strHTML;
            let vLike = document.createElement('span');
            vLike.className = "clLike";
            vLike.innerHTML = "like: "+this.likes;
            vLike.addEventListener("click",this.addLike);
            divPost.appendChild(vElem);
            divPost.appendChild(vLike);
        }
        constructor(_id,isActive,title,about,created_at){
          this._id = _id;
          this.isActive = isActive;
          this.title = title;
          this.about = about;
          this.likes = 0;
          this.created_at = created_at;  
          this.render();
        }
    }
    //function
    fnSaveStorage = async () => {
        let vJSON;
        let vMas = [];
        let vObj = {};
        let url = "http://www.json-generator.com/api/json/get/cgCRXqNTtu?indent=2";
        let prom = await fetch(url);
        let newJSON = await prom.json();
        newJSON.forEach( item =>{
            vObj = item;
            vMas.push(vObj);
        });
        vJSON = JSON.stringify(vMas);
        localStorage.removeItem("stPost");
        localStorage.setItem("stPost", vJSON);
        alert("Save to LocalStorage");

    };
    //
    fnLoadStorage  = () => {
        let vJSON = localStorage.getItem("stPost");
        if(vJSON){
            let obj = {};
            let vMas = JSON.parse(vJSON);
            vMas.forEach( item => {
                obj = item;
                new Posts(obj._id,obj.isActive,obj.title,obj.about,obj.created_at);
            });
        }else
        alert("LocalStorage is clear");
    };
    // event 
    document.getElementById("idSaveStorage").addEventListener("click",fnSaveStorage);
    document.getElementById("idLoadStorage").addEventListener("click",fnLoadStorage);
    document.getElementById("idCrearStorage").addEventListener("click",() => {
        localStorage.removeItem("stPost");
        alert("Save to LocalStorage");
    });
    //go
    fnLoadStorage();
    //end
});