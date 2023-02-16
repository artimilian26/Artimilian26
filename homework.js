let str = "наворован";
let count =0;
for (i=0; i < str.length/2; i++ ) {
    if (str[i] == str[str.length -1 -i ]) {
    count = count + 1; }
}
if (count>=str.length/2) {
    console.log("Паллиндром"); }
