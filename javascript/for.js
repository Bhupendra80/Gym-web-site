
//for(i = 0; i<=100; i++){
//    if(i%2 == 0){
//        a = i;
//    }
//    console.log(a);
//}


//let i = 1
//while(i<=100){
//    if(i%2 == 0){
//    console1.log(i);
//    }
//    i++
//}


//let gamenum = 25;
//let usernum = prompt("enter the number");
//
//while(gamenum != usernum){
//    usernum = prompt("you enter the wrong value,guess again");
//}
//console.log("congretulation, you guess the right answer");


for (var i = 1; i <= 45; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("FizzBuzz");
    } else if (i % 3 == 0) {
      console.log("Fizz");
    } else if (i % 5 == 0) {
      console.log("Buzz");
    }
  }