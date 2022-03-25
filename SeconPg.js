function show() {

Player_1 = localStorage.getItem("player_1");
Player_2 = localStorage.getItem("player_2");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_N").innerHTML = Player_1 + " : ";
document.getElementById("player2_N").innerHTML = Player_2 + " : ";

document.getElementById("Player1_S").innerHTML = player1_score;
document.getElementById("Player2_S").innerHTML = player2_score;

Question_turn = document.getElementById("player_question").innerHTML = "Question Turn - " + Player_1 ;
Answer_turn = document.getElementById("player_answer").innerHTML = "Answer Turn - " + Player_2 ;

}

function send() {

Number1 = document.getElementById("N1").value;
Number2 = document.getElementById("N2").value;
Answer = parseInt(Number1) * parseInt(Number2);

Question = "<h4>" + Number1 + "X" + Number2 + "</h4>";
input_box = "<br>Answer : <input type = 'text' id='Box_Input'>";
Check_V = "<br><br><button type = 'button' class = 'btn' id = 'Check_btn' onclick = 'Check()' > Check </button>";
row = Question + input_box + Check_V;

document.getElementById("output").innerHTML = row;

document.getElementById("N1").value = "";
document.getElementById("N2").value = "";


}

Question = "Player_1";
R_Answer = "Player_2";

function Check() {

New_Ans = document.getElementById("Box_Input").value;

if(New_Ans == Answer) {

if(R_Answer == "Player_1") {

player1_Score = player1_score + 1;
document.getElementById("Player1_S").innerHTML = player1_Score;

}

else {

player2_Score = player2_score + 1;
document.getElementById("Player2_S").innerHTML = player2_Score;

}

}
if(Question == "Player_1") {

Question = "Player_2";
document.getElementById("player_question").innerHTML = "Question turn - " + Player_2;

}

else {

Question = "Player_1";
document.getElementById("player_question").innerHTML = "Question turn - " + Player_1;


}


if(R_Answer == "Player_1") {

    R_Answer = "Player_2";
    document.getElementById("player_answer").innerHTML = "Answer turn - " + Player_2;
    
    }
    
    else {
    
    R_Answer = "Player_1";
    document.getElementById("player_answer").innerHTML = "Answer turn - " + Player_1;
    
    
    }


}