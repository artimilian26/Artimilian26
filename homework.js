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
let str = "вася пупкин";
function goroh(str) {
    let str1 = "";
    for (i=0; i < str.length; i++ ){
        if (str[i] == str.toUpperCase()) {
            str1 =str1 + str[i].toLowerCase()
        }
    }
    return str.toUpperCase()
}console.log (goroh(str))