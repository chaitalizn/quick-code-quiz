const username = document.querySelector("#username");
const saveScoreBtn = document.querySelector("#saveScoreBtn");

username.addEventListener("keyup", function() { 
    console.log(username.value);
    saveScoreBtn.disabled = !username.value;
}
)

