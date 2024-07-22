//let array = [85, 97, 44, 37, 76, 60];
//let sum = 0;
//
//for (let i = 0; i < array.length; i++) {
//  sum += array[i]; // Add the current element to the sum
//}
// let val = sum/array.length;
//console.log(val);

let array = [250,645,300,900,50];
for(i=0; i<array.length; i++){
    val = array[i]/10;
    array[i] -= val;

}
console.log(array);