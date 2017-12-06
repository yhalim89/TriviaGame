
 var number = 60;
 var intervalId;
 var questionsAnswered = 0;
 var correctAnswer = 0;
 var wrongAnswer = 0;
 $("#start").click(function(){
 run();
 });
 function run() {
 intervalId = setInterval(decrement, 1000);
 }
 function decrement() {
 number--;
 console.log(timeConverter(number))
 
 $("#display").html("<h2>" + timeConverter(number) + "</h2>");
 if (number === 0) {
 stop();
 alert("Time Up!");
 }
 }
 function stop() {
 clearInterval(intervalId);
 }
 function timeConverter(t) {
 var minutes = Math.floor(t / 60);
 var seconds = t - (minutes * 60);
 if (seconds < 10) {
 seconds = "0" + seconds;
 }
 if (minutes === 0) {
 minutes = "00";
 }
 else if (minutes < 10) {
 minutes = "0" + minutes;
 }
 return minutes + ":" + seconds;
 }
 
 $(".true").on("click", function(){
 questionsAnswered++;
 if($(this).attr("data-true") === "true"){
 ++correctAnswer;
 alert("Correct!");
 }
 else{
 ++wrongAnswer;
 alert("Incorrect!");
 }
 
 $(this).unbind();
 
 $(this).siblings("#false").unbind();
 final();
 
 });
 $(".false").on("click", function(){
 ++questionsAnswered;
 if($(this).attr("data-true") === "false"){
 correctAnswer++;
 alert("Correct!");
 }
 else{
 ++wrongAnswer;
 alert("Incorrect!");
 }
 final();
 });
function final(){
if(questionsAnswered === 5){
 $(".results").html("Results:<br>Correct: " + correctAnswer + "<br>Incorrect: " + wrongAnswer + "<br>Questions Answered: " + questionsAnswered)
 $("#main").hide();
 }
}
 