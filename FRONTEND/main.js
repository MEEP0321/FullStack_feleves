let teamGeneratorOBJ = {
    players : [],
    numberOfTeams: 1
}

let playerInputs = document.querySelectorAll("#add-player-container input")
let addPlayerButton = document.querySelector("#add-player-container button")

let displayer = document.getElementById("players-displayer")

function validateForm(){

    let valid = true

    for (let i = 0; i < playerInputs.length; i++) {
        if(playerInputs[i].value.trim() == ""){
            valid = false
        }
    }

    if(valid){
        addPlayerButton.disabled = false
    }
    else{
        addPlayerButton.disabled = true
    }
}

function addPlayer(){
    teamGeneratorOBJ.players.push({name: playerInputs[0].value, age: playerInputs[1].value})

    for (let i = 0; i < playerInputs.length; i++) {
        playerInputs[i].value = ""
    }

    addPlayerButton.disabled = true
    document.querySelector("#number-of-teams-container button").disabled = false

    displayPlayers()
}

function displayPlayers(){
    displayer.innerHTML = ""

    for (let i = 0; i < teamGeneratorOBJ.players.length; i++) {
        let p = document.createElement("p")
        p.innerHTML = teamGeneratorOBJ.players[i].name + " | " + teamGeneratorOBJ.players[i].age 
        displayer.appendChild(p)
    }
}

function createTeams(){
    teamGeneratorOBJ.numberOfTeams = document.querySelector("#number-of-teams-container input").value

    generateCards()
}

function generateCards(){
    fetch('http://localhost:5149/api/Teams/', {
        method: 'POST',
        headers: { 'Content-Type' : 'application/json', },
        body: JSON.stringify(teamGeneratorOBJ)
    })
    .then(resp => resp.json())
    .then(data => {
        console.log(data)
    });
}


/*
function test2(){
    fetch('http://localhost:5149/api/Teams/', {
        method: 'POST',
        headers: { 'Content-Type' : 'application/json', },
        body: JSON.stringify(teamGeneratorOBJ)
    })
    .then(resp => {
        console.log('Response: ', resp)
    })
    .catch(error => console.log(error))
}

*/




