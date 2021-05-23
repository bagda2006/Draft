//let one = 1 ;
// let answer =  confirm('Ты тута?');
//console.log(answer);
//
//let answer = +prompt("У вас было др в этом году", "Да");
//console.log(answer);
//console.log(typeof(answer));
//let incr = 10,
//  decr = 10;

//console.log(incr++);
//console.log(decr--);
//console.log(9%4);
//console.log("5" === "5");

// let isChecked = false,
//  isClose = false;

//console.log(isChecked || !isClose);

//let num = 50;

//if (num<49) {
//  console.log("Неверно")
//}else if (num>100) {
//  console.log("Многовато")
//}else  {
//  console.log("Верно")
//}
//
//switch (num) {
//  case num < 49:
//     console.log("Неверно");
//    break;
//  case num > 100:
//    console.log("Многовато");
//    break;
//  case num > 80:
//    console.log("Всё ещё много");
//    break;
//  case 50:
//    console.log("Верно");
//    break;
//  default:
//    console.log("Что-то пошло не так(");
//    break;
//}
//
//(num === 50) ? console.log("Верно") : console.log("Неверно");

//while (num < 55) {
//  console.log(num);
//  num++;
//}
//do {
//  console.log(num);
//  num++;
//}
//while(num < 55)
//for (let i=1; i < 8; i++){
//  if (i === 6) {
//    continue
//  }
//  console.log(i)
//}

//function showFirstMessage(text){
// alert(text);
//}
//
//showFirstMessage("Hello World");
//
//function calc(a,b) {
//  return(a + b);
//}
//
//console.log(calc(' hello ',' world '));
//console.log(calc(6,7));
//
//function returnVar () {
//  let num = 50;
//  return num;
//}
//
//let anotherNum = returnVar();
//console.log(anotherNum);
//
//let str = "test,";
//console.log(str.length);
//console.log(str.toUpperCase());
//console.log(str.toLowerCase());
//
//let twelve = "12.2зч";
//
//console.log(parseInt(twelve));
//console.log(parseFloat(twelve));

//console.log(Math.round(twelve));

//function learnJs(lang, callback){
//  console.log(lang);
//  callback();
//}
//learnJs("Я изучаю Javascript", function(){
//  console.log("И у меня всё получается");
//});
//
//let options = {
//    name: "text",
//    age: 25,
//    width: 150,
//    height: 1900
//}
//options.objects = {
//    color: "red"
//}
//
//delete options.name;
//
//console.log(options.name);
//console.log(options.objects.color);
//console.log(options);
//
//for(let key in options){
//    console.log(' Свойство: ' + key + " Имеет значение " + options[key]);
//}
//
//console.log(Object.keys(options).length);
//
//let arr = ['first', 2, 3, 'four'];
//arr[4] = 99;
//
//for(let i = 0; i<arr.length; i++){
//    console.log(arr[i]);
//}
//
//
//arr.forEach(function(item, i, mass){
//    console.log(i + " : " + item + " массив: " + mass );
//})
//
//console.log(arr);
//
//let mass = [1,2,3]
//
//for(let key of mass){
//    console.log(key);
////}
//
//let ans = prompt("", ""),
//    arr = [];
//
//arr = ans.split(',');
//console.log(arr);
//
//let arr = [1,2,13,4];
//
//function compareNum(a,b){
//    return a-b;
//}
//
//
//let i = arr.sort(compareNum);
//console.log(arr);
//let solder = {
//   heath: 300,
//   arm: 50
//}
//
//let Nichol = {
//    heath: 100
//}
//
//Nichol.__proto__=solder;
//
//console.log(Nichol);
//console.log(Nichol.arm);
//
//function Mufunction() {
//  alert("Hello world");
//}
//
//Mufunction();
//
//function OldFunction() {
//  alert("Goodbye");
//}
//
//OldFunction();
//
//let arr = [1, 3, 56, 7, 9, 89],
//  i = arr.sort(Compare);
//
//function Compare(a, b) {
//  return a - b;
//}
//console.log(arr);

//console.log("www" + 6);
//console.log("http://vk.home//catalog//" + 5);
//console.log(typeof(+"6"));
//console.log(typeof(5 + +"5"));
//console.log(typeof(parseInt('15px', 10)));
//console.log(parseInt('15px')+10);
//let ans = +prompt("Введите данные");
//let food = null;
//
//if(food){
//    console.log("working");
//}
//
//food = 1;
//
//if(food){
//    console.log("working");
//}
//let btn = document.getElementById("btn"),
//  all = document.getElementsByTagName("button"),
//  newBtn = document.querySelectorAll(".newBtn"),
//  text = document.querySelectorAll(".txt"),
//  silka = document.querySelector(".silka"),
//  wrapper = document.querySelector(".wrapper");
//
//btn.style.backgroundColor = "blue";
//newBtn[1].style.borderRadius = "100%";
//
//text[0].style.backgroundColor = "purple";
//text[1].style.backgroundColor = "orange";
//text[2].style.backgroundColor = "green";
//
////newBtn.forEach(function (item) {
////  item.style.backgroundColor = "yellow";
////});
//
//let div = document.createElement("div");
//let bublik = document.createTextNode("Тут был Паша");
//
//div.classList.add('black');
//
////document.body.appendChild(div);
////wrapper.appendChild(div);
//
////div.innerHTML = '<h1>Hello world</h1>';
//
//div.textContent = 'Hello world';
////
////document.body.insertBefore(div, btn);
////document.body.removeChild(text[1]);
////wrapper.removeChild(newBtn[0]);
////
////document.body.replaceChild(text[0], silka[1]);
////
////console.log(div);
//let btn = document.querySelectorAll("button"),
//  wrap = document.querySelector(".wrapper"),
//  silka = document.getElementsByClassName("silka")[0];
//
////
////tn[0].onclick = function(){
////   alert('Артём додик');
////
////
////tn[0].onclick = function(){
////   alert('Артём додик2');
////
//
//btn[0].addEventListener("focus", function (event) {
//      console.log(
//        "произошло событие: " + event.type + "на элементе" + event.target
//  );
//});
//
////wrap.addEventListener("click", function (event) {
////  console.log(
////    "произошло событие: " + event.type + "на элементе" + event.target
////  );
////});
//
//silka.addEventListener("click", function (event) {
//  event.preventDefault();
//  console.log(
//    "произошло событие: " + event.type + "на элементе" + event.target
//  );
//});
//
//
//
//btn.forEach(function(item){
//   item.addEventListener('mouseleave', function(){
//       console.log('Мы вышли');
//   })
//})
//
//tn[0].addEventListener('click', function(){
//   alert('Артём додик2');
//)
//
//btn[0].addEventListener('mouseenter', function(){
//    alert('вы навелись на катяха!Осторожно!');
//})

//window.addEventListener("DOMContentLoaded", function () {
//  let box = document.querySelector(".btn");
//
//  //  box.addEventListener("touchstart", function (event) {
//  //    event.preventDefault();
//  //    console.log("Touchstart");
//  //    console.log(event.target);
//  //    console.log(event.touches[0].target);
//  //    console.log(event.changedTouches);
//  //    console.log(event.targetTouches);
//  //  });
//  //
//  box.addEventListener("touchmove", function (event) {
//
//    console.log("Touchmove" + event.touches[0].pageX);
//     event.preventDefault();
//  });
//
//  //
//  //  box.addEventListener("touchend", function (event) {
//  //    event.preventDefault();
//  //    console.log("Touchend");
//  //  });
//
//  // new RegExp('patter', 'flags');
//  // /pattern/
//  //et ans = prompt('Введите имя');
//  ///
//  //et reg = /n/gi;
//  //
//  //onsole.log(reg.test(ans));
//  /// //console.log(ans.search(reg));
//  //console.log(ans.match(reg));
//
//  //et pass = prompt('Введите пароль');
//  //
//  //
//  //
//  //console.log(pass.replace(/./g, "*"));
//  //alert('12-34-56'.replace(/-/g, ':'));
//  // let ans = prompt('Введите число');
//  // let reg = /\d/g;
//  //
//  //console.log(ans.match(reg));
//
//  let str = "my name *isR2D2";
//
//  console.log(str.match(/\*/i));
//});
//

//let timerId = setInterval(sayHello, 3000);
//clearInterval(timerId);
//
//function sayHello(){
//  console.log('Hello world');
//}
//let timerId = setTimeout(function log(){
//  console.log('Hello');
//  setTimeout(log, 2000);
//})
//let animBtm = document.querySelector(".animBtn"),
//  blueBox = document.querySelector(".blueBox");
//
//function myAnimation() {
//  let pos = 0;
//  let id = setInterval(frame, 10);
//  function frame() {
//    if (pos == 300) {
//      clearInterval(id);
//    } else {
//      pos++;
//      blueBox.style.top = pos + "px";
//      blueBox.style.left = pos + "px";
//    }
//  }
//}

//animBtm.addEventListener("click", myAnimation);
//
//btnBlock.addEventListener('click', function(event){
//    if(event.target && event.target.classList.matches('button.first')){
//        console.log('ok');
//    }
//})
//let box = document.querySelector('.box'),
//     boxWidth = box.clientWidth,
//     boxHeight = box.scrolHeight;
//
//
//let btn = document.querySelector('.btn');
// 
//btn.addEventListener('click', function(){
//    box.style.height = box.scrollHeight + 'px';
//})
//let box = document.querySelector('.box'),
//     boxWidth = box.clientWidth,
//     boxHeight = box.scrolHeight;
//document.documentElement.scrollTop();
//
//console.log(box.getBoundingClientRect().toFixed());
//class User{
//     constructor(name, id){
//     (name, id) 
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     }
//     hello() {
//       console.log("Hello" + this.name)
//     }
//   }
//  exit() {
//        console.log('user + ${this.name} + exit')
//   }
//   let ivan = new User("Ivan", 25);
//   
//   let alex = new User("Alex", 20);
//   
//   console.log(ivan);
//   console.log(alex);
//   //function User(name, id) {
//  this.name = name;
//  this.id = id;
//  this.human = true;
//  this.hello = function () {
//    console.log("Hello" + this.name);
//  };
//}
//User.prototype.exit = function(name){
//     console.log('user' + this.name + 'exit');
//}
//let ivan = new User("Ivan", 25);
//
//let alex = new User("Alex", 20);
//
//console.log(ivan);
//console.log(alex);
//
//ivan.exit();
//'use strict';
//
//function showThis(a,b){
//  console.log(this);
//  function sum(){
//    console.log(this);
//    return a + b;
//  }
//  console.log(sum());
////}
//
//showThis(4,5);
//showThis(5,5);

//
//let obj = {
//  a: 20,
//  b: 30,
//  sum: function () {
//    console.log(this);
//    function shout() {
//      console.log(this);
//    }
//    shout();
//  },
//};
//
//obj.sum();
//
//let user = {
//  name: "bagda",
//};
//
//function sayName(surname){
//  console.log(this);
//  console.log(this.name + surname);
//}
//
//console.log(sayName.call(user, 'Aydinyan'));
//console.log(sayName.apply(user, ['Snow']));
//
//function count(number){
//  return this*number;
//}
//
//let double = count.bind(2);
//console.log(double(3));
//console.log(double(10));
//
//Контекст вызова this
//1) просто вызов функции - window/undefined
//2) метод объекта - this = объект
//3)конструктор(New) - this = новый созданый объект
////4)Указание конкретного контекста - call,apply,bind
//
//let btn = document.querySelector('button');
//
//btn.addEventListener('click', function(){
//  console.log(this);
//})
 let age = document.getElementById('age');

 function showUser(surname, name) {
    alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
    }
    showUser.apply(age, ["Горький", "Максим"]); 