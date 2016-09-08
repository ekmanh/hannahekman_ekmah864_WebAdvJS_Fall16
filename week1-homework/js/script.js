

var questions = document.getElementsByClassName("question");
console.log(questions);

//giving the button the function
function handleClick()
{
//starting at zero         
var amountCorrect = 0;          
for(var i = 1; i <= 45; i++) {
  //linking the buttons with each question, thus the + i
  var radios = document.getElementsByName('activity'+i);
  
  for(var j = 0; j < radios.length; j++) {
  var radio = radios[j];
  
  //generating 
  if(radio.value == "correct" && radio.checked) {
  amountCorrect++;
    }
  }
 }        
    //getting the alert pop of after clicking the submit button           
    alert("Your predicted success of owning a pug: " + amountCorrect*25 + "%");
  }

