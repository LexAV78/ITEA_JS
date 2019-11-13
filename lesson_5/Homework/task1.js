/*

  Задание:

    1. Написать конструктор объекта комментария который принимает 3 аргумента
    ( имя, текст сообщения, ссылка на аватаку);

    {
      name: '',
      text: '',
      avatarUrl: '...jpg'
      likes: 0
    }
      + Создать прототип, в котором будет содержаться ссылка на картинку по умлочанию
      + В прототипе должен быть метод который увеличивает счетик лайков

    var myComment1 = new Comment(...);

    2. Создать массив из 4х комментариев.
    var CommentsArray = [myComment1, myComment2...]

    3. Созадть функцию конструктор, которая принимает массив коментариев.
      И выводит каждый из них на страничку.

    <div id="CommentsFeed"></div>


*/
window.addEventListener("load", function () {

    function fnView(){
    let vElement,vDiv1,vDiv2;
    //div
    let vDiv = document.createElement("div");
    //div1
    vDiv1 = document.createElement("div");  
    vDiv1.className = "clDiv1";
    //
    vElement = document.createElement("label"); 
    vElement.className = "clName";
    vElement.innerText = this.name;                     //this.name
    vDiv1.appendChild(vElement);
    //
    vElement = document.createElement("img"); 
    vElement.setAttribute("src", this.fnGetAvatar());   //this.fnGetAvatar()
    vDiv1.appendChild(vElement);
    //div2
    vDiv2 = document.createElement("div");    
    //
    vElement = document.createElement("label"); 
    vElement.innerText = this.text;                     //this.text
    vDiv2.appendChild(vElement);
    // add Div1 Div2 -> Div
    vDiv.appendChild(vDiv1);
    vDiv.appendChild(vDiv2);
    // add Div -> id="CommentsFeed"
    document.getElementById("CommentsFeed").appendChild(vDiv);
  };
  // proto
  const CommentProto = {
    fnGetAvatar : function(){
      if(!this.avatarUrl) 
      this.avatarUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Hwq5uUzOr44HULy-SEviEkFYnWwWYxd8QvqzLFDVSgxOVI_4&s";
      return this.avatarUrl;
    },
    fnLikePlus : function(){this.likes++},
    fnSetLike : function(likes){this.likes = likes },
    fnView 
  };
  // Comment
  function Comment (name,text,avatarUrl) {
    this.name = name;
    this.text = text;
    this.avatarUrl = avatarUrl;
    this.likes =0;
  };

  Comment.prototype= CommentProto;

  let myComment1 = new Comment("user1","text1","https://i0.wp.com/itc.ua/wp-content/uploads/2019/11/harley-quinn-dc-universe-harley.jpg");
  let myComment2 = new Comment("user2","text2","https://i0.wp.com/itc.ua/wp-content/uploads/2019/11/the-witcher-2.jpg");
  let myComment3 = new Comment("user3","text3","");
  let myComment4 = new Comment("user4","text4","https://i0.wp.com/itc.ua/wp-content/uploads/2019/11/190305_fiat_concept_centoventi_12-44.jpg");
  let myComment5 = new Comment("user3","text5","");
  
  const CommentsArray = [];

  CommentsArray.push(myComment1);
  CommentsArray.push(myComment2);
  CommentsArray.push(myComment3);
  CommentsArray.push(myComment4);
  CommentsArray.push(myComment5);

  fnViewPost = vMas => vMas.forEach(vItem => vItem.fnView());
  
  fnViewPost(CommentsArray);






});