//let str ="мама мыла раму"
//for (let i=0; i < 5; i++) {
//console.log (str) 
//}

// вывести числа от 1 до 40
//for (i = 1; i<= 40; i++) {
//    console.log (i);
//}

//for (i =-1; i>=-40; i--) {
//    console.log (i)
//}
//for (i =-1; i>=-40; i--) {
//    if (i%2===0){
//        console.log (i)
//    }
//}

//let str1 = "мама";
//let str2 = "папа";
//let count = 0;
//for (i = 0; i <str1.length; i++) {
//    if(str1[i]!=str2[i]){
//        count ++;
//    }
//}
//if (count==0){
//    console.log("слова равны");
//} else console.log (count)
//let str = "Хламидомонада";
//for (i = 0; i < str.length; i++) {
//    console.log (str[i])
//}

//let str= "875621";
//let sum = 0;
//for(i=0 ; i < str.length;i++){
//if (str[i] % 2!=0 ) {
//    sum = sum + +str[i];
//  }
//}
//console.log (sum)

//let str2 = "2222"
//let str1 = "1111"
//let sum1 = 0;
//let sum2 =0;
//for(i=0 ; i < str1.length;i++){
//    sum1 =sum1 + +str1[i];
//}
//for(i=0 ; i < str2.length;i++){
//    sum2 =sum2 + +str2[i];
//}
//if (sum1>sum2){console.log("сумма 1 больше");
//} else if 

//function sum(num1,num2) {
//    return num1 + num2;
//}
//console.log(sum(1,2));

//let str = "FF11FF";
//let sum = 0;
//let countF = 0;
// for(i=0;i < str.lenght;i++) {
//  if (str[i] == "F") {
//    console.log("Победа");
 // } 

 //let str1 = "Abc"
//let str2 =" poi"
// let str3 =" hhjs"
// str4 = str1[0] + str2[1] +str3[2]
// console.log(str4);

//let str1 = "Капуста";
//let str2 ="Морковь";
//let str3= "Свветана";
//let str4="";
//for(i=0;i < str1.length;i++) {
//    str4 = str1[i] + str2[i] +str3[i];
//    console.log (str4)
//}

//let str = "мама мыла раму";
//let arr = str.split(" ");
//console.log(arr);
///console.log(arr[2]);
////let str1 =arr.join("-");
//console.log(str1);

//let str = "амеба это одноклеточное";
//function krazha(str){
//    let str1 ="";
//    for (i=0 ; i <str.length;i++){
//    if (str[i]==" "){
//        str1=str1+"-"
//    } else str1=str1+str[i];
//}console.log(str1)
//return str1.toUpperCase();
//}
//console.log(krazha(str));

//Функция которая принимает в себя число от одного до семи, а возвращает в себя день недели

//function dayWeek(num) {
//    let dayArr = [
//        "Понедельник",
//        "вторник",
//        "среда",
//        "четверг",
//        "пятница",
//        "суббота",
//        "воскресенье",
//    ];
//    return dayArr = [num -1];
//}console.log(dayWeek(1));

//let arrNum = [1, 7,-3, 15,18, 4, 8, -9]
//function newArr(arrNum) {
//    let arrNum2 =[]
////    for (i = 0; i < arrNum.lenght; i++){
//        if (arrNum[i]> 0 && arrNum[i]< 10){
//        arrNum2.push(arrNum[i]);
 ///       console.log(i);
 //   }
//}return arrNum2;
//}console.log(newArr(arrNum));

// let arr= [1,2,3,4,5,6,7];
// function fire(arr) {
//     let newArr =[];
//     let dom = [];
//     for (i=0 ; i <arr.length;i++){
//         for (j in arr){
//         if (arr[i] + arr[j]== 7 && i!=j )
//         newArr[0] =arr[i]
//         newArr[1] =arr[j]
//         console.log(newArr.join(":"));
//         dom[i] = newArr.join(":")
//         }
//     }
// return dom;
// }console.log(fire(arr));

// let srt = "javaScript"
// function mir(str) {
//     let arr= []
//     for (i=0 ; i <str.length;i++){
//         if(i == 0){
//             arr[i] = str[i+1]
//         }else if (i ===str.length){
//         arr[i]=str[i+1] +str[i]
//     } 
    
        
// // }

// let arr =[1,2,3,4,5,6,7];
// function fire(arr) {
//     let sum = 0;
//     let count = 0;
//     for (i=0 ; i <arr.length;i++){
//         if (sum<=10){
//             sum =sum+arr[i]
//         }
//     }
// }

// let a=[1,2,3];
// let b=[4,5,6];
// let c=[7,8,9];
// let getArr =(a,b,c) => {
//     let result = []
//     result = a + "," + b + "," + c;

//     return result.split(",").sort().reverse()
// };
// console.log(getArr(a,b,c));

// let arr = [1,2,3,4,5];
// let cho = (arr) => {
//     let newarr = [];
//     for(i in arr){
//         newarr[i]=arr[arr.length-i-1];
//     }
//     return newarr;
// };
// console.log(cho(arr));

// let esc = (str) => {
//     let arr = [];
//     for (i=0 ; i <repeat;i++){
//         arr[i]= str
//     }
// };
// console.log(esc(str));

// const user = {
//     userName: "Вася Пупкин",
//     age: 30, 
// };
// console.log(user(userName));
// user.isAdmin = true
// console.log(user);

// const user = {
//     userName: "Вася",
//     age: 30, 
//     city: " Лысково",
//     isAdmin: true,
// };
//  let fun = (obj, field) => {
//     delete obj[field];
//     return obj;
//  }
//  console.log(fun(user, "field"));
 
//  const user = {
//     userName: "Вася",
//     age: 30, 
//     city: " Лысково",
//     isAdmin: true,
// };
//  let fun = (obj, ...field) => {
//     for (i= 0; i <field.length; i++)
//     delete obj[field[i]]
//     return obj;
//  }
//  console.log(fun(user, "city", "age", "isAdmin"));


// const user = {
//     userName: "Вася",
//     userSurname: "Пупкин",
//     userMembership: "Алибабаевич",
//     age: 30, 
//     city: " Лысково",
//     isAdmin: true,
// };
// let fun = (obj, field) => {
//     for(key in obj){
//         if(obj[key]===obj[field]){
//             return true
//         }
//         return false
//     }
// }
// console.log(fun(user, "city"));
// console.log(fun(user, "bebe"));


// const objweek = {
//     1: "Понедельник",
//     2: "вторник",
//     3: "среда",
//     4: "четверг",
//     5: "пятница",
//     6: "суббота",
//     7: "воскресенье",
// }
// let i = (num) => {
//     return  objweek[num]
// }
// console.log(i(5));

// const func = function () {
//     return "Hello";
// };
// console.log(func());
// console.log(func);

// const func1 = function (fn) {
//     return fn();
// };
// console.log(func1(func));

// const makeZakaz = function (){
//     console.log("Заказ на обработке");
//     setTimeout(cb, 5000);
// }
// const readBook = function (){
//     console.log("Читаю книгу");
// }
// const Gotov = function (){
//     console.log("заказ приехал");
// }
// makeZakaz(Gotov)
// readBook()

// let arr = [
//     {id: 1, name: "Петя"},
//     {id: 2, name: "Игнат"},
//     {id: 3, name: "Афонасий"},
// ];
// let user = arr.find(item => item.id == 3)
// console.log(user.name);

// let arr = ["ААА", "КККККК", "РРРРРРРР"].map ((el) => el.length)
// console.log(arr);


// let namb = [2,3,5,7,11,13,17,19];
// let gatSumEl = (namb) => {
//     let result=[];
//     namb.reduce((sum,el,i) => {
//         sum = sum+el;
//         result[i] = sum;
//     }, 8);
//     return result;
// };
// console.log(gatSumEl(namb));
