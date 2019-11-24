window.addEventListener("load",() => {
masMessage = [];
 //
const deleteMessage = (deleteID,mas) => {
  let vI = 0;
  mas.forEach(item => {
    if(deleteID == item.id)mas.splice(vI, 1);
    deleteMessage(deleteID,item.answers);
    vI++;
  });
};
 //
const elMes = document.getElementById("message_list");
  const btnComentAdd = event => {
    const vID =  event.target.parentNode.parentNode.id;
    const vDiv = event.target.parentNode.parentNode.querySelector(".clAddMsg"); 
    vDiv.innerHTML = `
        <form id="idFormMessage">
        <label for="idAuthor">
          <span>Author</span>
          <input type="text" name="nmAuthor" id="idAuthor">
        </label>

        <label for="message" id="lableMessage">
          <span id="spanMessage">Message</span>
          <textarea placeholder="Your Message" id="message" name="nmTxtMsg"></textarea>
        </label>

        <button type="submit">Send Message</button>
        <button id="idBtnExit">Exit</button>
      </form>
            `;
    const vForm = document.getElementById("idFormMessage");
    event.target.parentNode.querySelector("#idBtnExit").addEventListener("click",e => {vForm.remove()});
    vForm.addEventListener("submit",e => {
      e.preventDefault();
      if(vForm.elements.nmAuthor.value.length==0)alert("Введите автора");
        else
      if(vForm.elements.nmTxtMsg.value.length==0)alert("Отсутствует текст");
        else{
          new Answer(vForm.elements.nmAuthor.value,vForm.elements.nmTxtMsg.value,vID);
          console.log(masMessage);
          fnCreateMessageAll();
          vForm.remove();
        };            
    });
  };
  /// fn
  const addMessageHTML = (item,elem) => {
    const vLi = document.createElement("li"); 
    vLi.id = item.id;
    let strHTML  = `
        <div class="message__date" >
            ${item.date}
        </div>
        <div class="message__author">
            <b>${item.author}</b>
        </div>
        <div class="message__text">
            ${item.text}
        </div>
        <div class="message__controls"> 
        <button class="_skipMessage">Skip</button>`;
        if(!item.parentId>0)strHTML+=`<button class="_answerMessage">Answer</button>`;
        strHTML+=`
        <div>
        <div class="clAddMsg"></div>
            <ul class="divAnswer">
                <li>12345</li>
                <li>12345</li>
            </ul>
        </div>
        </div>`;
    vLi.innerHTML = strHTML;
    elem.appendChild(vLi);
    if(!item.parentId>0)  
      vLi.querySelector("._answerMessage").addEventListener("click",event => btnComentAdd(event));
    
    vLi.querySelector("._skipMessage").addEventListener("click",event => {
      deleteMessage(event.target.parentNode.parentNode.id,masMessage);
      fnCreateMessageAll();
    }
    );
  
    const divAnswer = vLi.querySelector(".divAnswer");
    divAnswer.innerHTML = "";
    item.answers.forEach(item => addMessageHTML(item,divAnswer));
};


const fnCreateMessageAll = () => {
    elMes.innerHTML = "";
    masMessage.forEach(item => addMessageHTML(item,elMes));
};


 //
const fnBtnAdd = event => {
  
  const vDiv = event.target.parentNode.querySelector(".clAddMsg"); 
  vDiv.innerHTML = `
        <form id="idFormMessage">
        <label for="idAuthor">
          <span>Author</span>
          <input type="text" name="nmAuthor" id="idAuthor">
        </label>

        <label for="message" id="lableMessage">
          <span id="spanMessage">Message</span>
          <textarea placeholder="Your Message" id="message" name="nmTxtMsg"></textarea>
        </label>

        <button type="submit">Send Message</button>
        <button id="idBtnExit">Exit</button>
      </form>
            `;
  const vForm = document.getElementById("idFormMessage");
  event.target.parentNode.querySelector("#idBtnExit").addEventListener("click",e => {vForm.remove()});
  vForm.addEventListener("submit",e => {
    e.preventDefault();
    if(vForm.elements.nmAuthor.value.length==0)alert("Введите автора");
      else
    if(vForm.elements.nmTxtMsg.value.length==0)alert("Отсутствует текст");
      else
      {
        new Message(vForm.elements.nmAuthor.value,vForm.elements.nmTxtMsg.value);
        fnCreateMessageAll();
        vForm.remove();
      };
      
  });
};
 // 
 const fnFindID = (vMas,vID) => {
  let vRez = {};
  let vRR = {};
  vMas.forEach(element => {
    vRR = fnFindID(element.answers,vID);
    if(vRR.id) vRez = vRR;
    if(element.id==vID) vRez = element;
  });
  return vRez;
 };
 //         Classs Message
 class Message{
  constructor( author, text){
    this.author = author;
    this.text = text;
    //
    this.date = new Date();
    this.id = Date.parse(this.date);
    this.answers = [];
    if(this.constructor == Message)
      masMessage.push(this);
  }
  SkipMessage(){}
  AnswerMessage(){}
  SendAnswer(){}
};
//         Classs Answer
class Answer extends Message{
  constructor( author, text, parentId){
    super( author, text);
    this.parentId = parentId;
    //masMessage.pop();
    masMessage.forEach(element => {
      if(element.id==this.parentId){
        element.answers.push(this);
        return;
      };
    });
  }
  
};
//
document.getElementById("idBtnAdd").addEventListener("click",fnBtnAdd);
//
fnCreateMessageAll();
new Message("max1","text 1");
setTimeout(()=>{new Message("max2","text 2")},1000);
setTimeout(()=>{new Message("max3","text 3")},2000);
setTimeout(()=>{console.log(masMessage);fnCreateMessageAll();},3000);

});