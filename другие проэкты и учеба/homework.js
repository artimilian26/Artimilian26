//let str = "наворован";
//let count =0;
//for (i=0; i < str.length/2; i++ ) {
//    if (str[i] == str[str.length -1 -i ]) {
//    count = count + 1; }
//}
//if (count>=str.length/2) {
//    console.log("Паллиндром"); }

//Функция, принимает в себя строку каждую первую букву каждого слова преобразует в верхний регистр.
//вася пупкин -> Вася Пупкин
//let str = "вася пупкин";
//function goroh(str) {
 //   let str1 = "";
 //   for (i=0; i < str.length; i++ ){
//        if (str[i] == str.toUpperCase()) {
 //           str1 =str1 + str[i].toLowerCase()
   //     }
  //  }
 //   return str.toUpperCase()
///}console.log (goroh(str))
//or (let i of arrNum )

// let num = [0,1,5,91,9,-57, 62, 3, 11];
// function slojen(num){
//     let nim = 0;
//     let nem = nim;
//     for(i=0; i<num.length ;i++){
//         nim =nim+num[i]
//         nem = nim / (i+1);
//     } 
//     return nem;
// } 
// console.log(slojen(num));

// let perevert = (a) => {
//     let b = a. split(''). reverse(). join('')
//     if ( a. toLowerCase() == b. toLowerCase()) {
//       return true
//     } else {
//       return false
//     }
//   }
//   console.log(perevert(a))

let arr =  [[1, 2, 3], [4, 5], [6]];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
  for (let j = 0; j < arr[i].length; j++) {
    sum += arr[i][j];
    for (let k = 0; k < arr[i][j].length; k++) {
      sum += arr[i][j][k];
    }

  }
}
console.log(sum);
