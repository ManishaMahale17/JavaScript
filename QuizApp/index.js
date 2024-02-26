function calcScore() {
  var q1 = document.querySelector('input[name="ans1"]:checked');
  var q2 = document.querySelector('input[name="ans2"]:checked');
  var q3 = document.querySelector('input[name="ans3"]:checked');
  var q4 = document.querySelector('input[name="ans4"]:checked');
  var q5 = document.querySelector('input[name="ans5"]:checked');
  var q6 = document.querySelector('input[name="ans6"]:checked');
  var q7 = document.querySelector('input[name="ans7"]:checked');
  var q8 = document.querySelector('input[name="ans8"]:checked');
  var q9 = document.querySelector('input[name="ans9"]:checked');
  var q10 = document.querySelector('input[name="ans10"]:checked');
  
  var a1 = "2";
  var a2 = "3";
  var a3 = "2";
  var a4 = "3";
  var a5 = "4"; 
  var a6 = "2"; 
  var a7 = "3"; 
  var a8 = "2"; 
  var a9 = "2"; 
  var a10 = "3"; 

  var score = 0;
  
  if (q1 && q1.value === a1) score++;
  if (q2 && q2.value === a2) score++;
  if (q3 && q3.value === a3) score++;
  if (q4 && q4.value === a4) score++;
  if (q5 && q5.value === a5) score++;
  if (q6 && q6.value === a6) score++;
  if (q7 && q7.value === a7) score++;
  if (q8 && q8.value === a8) score++;
  if (q9 && q9.value === a9) score++;
  if (q10 && q10.value === a10) score++;

  document.getElementById("qzs").innerHTML = score;
}
