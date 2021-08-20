player1 = localStorage.getItem("Player1");
player2 = localStorage.getItem("Player2");

player1_score = 0;
player2_score = 0;

document.getElementById("Player1").innerHTML = player1;
document.getElementById("Player2").innerHTML = player2;

document.getElementById("Player1_score").innerHTML = player1_score;
document.getElementById("Player2_score").innerHTML = player2_score;

document.getElementById("Player_question").innerHTML = "Question Turn -"+player1;
document.getElementById("Player_answer").innerHTML =  "Answer Turn -"+player2;

function send(){
    
}