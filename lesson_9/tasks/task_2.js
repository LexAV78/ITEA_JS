/*

    Задание 2:
    Написать форму логина (логин пароль), которая после отправки данных записывает их в localStorage.
    Если в localStorage есть записть - На страниче вывести "Привет {username}", если нет - вывести окно
    логина.

    + бонус, сделать кнопку "выйти" которая удаляет запись из localStorage и снова показывает форму логина
    + бонус сделать проверку логина и пароля на конкретную запись. Т.е. залогинит пользователя если
    он введет только admin@example.com и пароль 12345678


*/
window.addEventListener("load",() => {

    
    const vDivForm = document.getElementById("divFormReg");
    const vUser = document.getElementById("userReg");
    const vClear = document.getElementById("idClear");
    //
    const getUserStorage = () => { 
        let vStr = localStorage.getItem('user');
        vUser.innerHTML="";
        if(vStr){
        vUser.innerHTML = `
         Привет: "`+vStr+`" 
        `;
        document.getElementById("formReg").remove();    
        }else{
            console.log(" ok ");
        vStr = `
                <form id = "formReg">
                    <label for="idName">User</label><br>
                    <input type="text" name="name" id="idName"/><br>
                    <label for="idPass">Pass</label><br>
                    <input type="password" name="nmPass"  id="idPass"/>   <br><br>
                    <input type="submit" name="btnOK" id="idOK" value="OK"/>                  
                </form>
            `;
        vDivForm.innerHTML = vStr;
        document.getElementById("formReg").addEventListener("submit",e => {
            e.preventDefault();
            if(e.target.elements.name.value.length==0)alert("Введите имя");
                else
            if(e.target.elements.nmPass.value.length==0)alert("Введите пароль");
                else{
                console.log(" submit ");
                localStorage.setItem('user', e.target.elements.name.value);
                localStorage.setItem('pass', e.target.elements.nmPass.value);
                getUserStorage();
                //vForm.remove();
                };            
        });
        }
        
    };
    //
    vClear.addEventListener("click",() => {
        localStorage.removeItem("user");
        localStorage.removeItem("pass");
        getUserStorage();
    });
    getUserStorage();
    

    console.log("gfhgf");

//end
});