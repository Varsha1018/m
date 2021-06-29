function send() {
 Number1=document.getElementById("no-1").value;
 Number2=document.getElementById("no-2").value;  
 Actual_answer=parseInt(Number1)*parseInt(Number2);
 console.log(Actual_answer);
 heading="<h4>"+Number1+"X"+Number2+"</h4>";
 textinput="<br>answer:<input type='number' id='answer'>";
 button="<br><br><button class='btn btn-success' onclick='check()'>CHECK</button>";
 row=heading+textinput+button;
 document.getElementById("output").innerHTML=row;
}

player_1 = localStorage.getItem("Player_1");
player_2 = localStorage.getItem("Player_2");
document.getElementById("player_question").innerHTML = "question turn-" + player_1;
document.getElementById("player_answer").innerHTML = "answer turn-" + player_2;

player_1_score = 0;
player_2_score = 0;
document.getElementById("player1_name").innerHTML = player_1 + ":";
document.getElementById("player2_name").innerHTML = player_2 + ":";
document.getElementById("player1_score").innerHTML = player_1_score;
document.getElementById("player2_score").innerHTML = player_2_score;

question_turn = "player1";
answer_turn = "player2";
function check() {
	get_answer=document.getElementById("answer").value;
    if(get_answer=Actual_answer){
        if(answer_turn=="player1"){
        player_1_score = player_1_score+1;
        document.getElementById("player1_score").innerHTML=player_1_score;
        }
        else{
        player_2_score = player_2_score+1;
        document.getElementById("player2_score").innerHTML=player_2_score;
        }
    } 
    if(question_turn=="player1"){
        question_turn="player2";
        document.getElementById("player_question").innerHTML="Question turn -"+player_2;
    }
    else{
        question_turn="player1";
        document.getElementById("player_question").innerHTML="Question turn -"+player_1;
    }

    if(answer_turn=="player1"){
        answer_turn="player2";
        document.getElementById("player_answer").innerHTML="Answer turn -"+player_2;
    }
    else{
        answer_turn="player1";
        document.getElementById("player_answer").innerHTML="Answer turn -"+player_1;
    }
}

