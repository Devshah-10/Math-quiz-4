
function Nav() {

    var player_1 = document.getElementById("Text_1").value;
    var player_2 = document.getElementById("Text_2").value;
    
    localStorage.setItem("player_1", player_1);
    localStorage.setItem("player_2", player_2);

    window.location = "SecondPg.html";
    
    }
