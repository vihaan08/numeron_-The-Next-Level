var number1,number2,number3
var score=0
var number1box = document.getElementById("number1")
var number2box = document.getElementById("number2")
var number3box = document.getElementById("number3")

var plus = document.getElementById("plus")
var minus = document.getElementById("minus")
var mul = document.getElementById("mul")
var divide = document.getElementById("divide")
var modulus = document.getElementById("modulus")

function randomise() {
    number1 = Math.round(Math.random()* 100)
    number2 = Math.round(Math.random()* 100)


    if(number1<number2){
    var extra = number1
    number1 = number2
    number2 = extra
}

   var operator = Math.ceil(Math.random()* 5)

   switch(operator) {
       case 1:
           number3 = number1 + number2
           break;
           case 2: 
           number3 = number1 - number2
           break;
           case 3:
           number3 = number1 * number2
           break;
           case 4:
            number3 =Math.floor(number1 / number2)
            number1 = number2 * number3
            break;
            case 5:
             number3 = number1 % number2
             break;
             default: randomise();
        
   }
   number1box.innerHTML=number1
   number2box.innerHTML=number2
   number3box.innerHTML=number3
}

randomise();
plus.onclick = ()=> {
    if ((number1+number2)===number3){
        score++;
        randomise();
    } else {
        location.href="./gameover.html?score=" + score
    }
}
minus.onclick = ()=> {
    if ((number1-number2)===number3){
        score++;
        randomise();
    } else {
        location.href="./gameover.html?score=" + score
    }
}
    mul.onclick = ()=> {
        if ((number1*number2)===number3){
            score++;
            randomise();
        } else {
            location.href="./gameover.html?score=" + score
        }
    }
        divide.onclick = ()=> {
            if ((number1/number2)===number3){
                score++;
                randomise();
            } else {
                location.href="./gameover.html?score=" + score
            }
        }
            modulus.onclick = ()=> {
                    if ((number1%number2)===number3){
                        score++;
                        randomise();
                    } else {
                        location.href="./gameover.html?score=" + score
                    }
                }

                var time = 60;
                var timer = document.getElementById("timer");
                var timerId;
                
                function startTimer() {
                  time = 60;
                  timer.innerHTML = time;
                  timerId = setInterval(() => {
                    time--;
                    if (time == 0) {
                      location.href = "./gameover.html?score=" + score;
                    }
                    timer.innerHTML = time;
                  }, 1000);
                }
                
                function resetTime(intervalId) {
                  clearInterval(intervalId);
                  startTimer();
                }
                
                startTimer();
                      
