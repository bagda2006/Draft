//alert('Hello World');//
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
function one(){
 console.log(1+2);
}


function two(){
 console.log(2+4);
}

function call(callback, golos){
  callback();
  golos();
}

call(two, one);