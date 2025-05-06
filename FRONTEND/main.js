//Ezt az objektumot küédöm API-n
let teamGeneratorOBJ = {
    players : [],
    numberOfTeams: 1
}

let playerInputs = document.querySelectorAll("#add-player-container input")
let addPlayerButton = document.querySelector("#add-player-container button")

let displayer = document.getElementById("players-displayer")

//Validácó
function validateForm(){

    let valid = true

    //Ellenőrzi, hogy az inputok nem üresek-e
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

//Játékost hozzáadása
function addPlayer(){
    //Hozzá adja a játékost az objektumhoz.
    teamGeneratorOBJ.players.push({name: playerInputs[0].value, age: playerInputs[1].value})

    //Törli az input mezők értékét
    for (let i = 0; i < playerInputs.length; i++) {
        playerInputs[i].value = ""
    }

    addPlayerButton.disabled = true
    document.querySelector("#number-of-teams-container button").disabled = false

    displayPlayers()
}

//Játékosok megjelenítése
function displayPlayers(){
    //Törli a játékosokat, hogy a megjelenítést újra kezdje
    displayer.innerHTML = ""

    //Megjeleníti a játékosokat
    for (let i = 0; i < teamGeneratorOBJ.players.length; i++) {
        let p = document.createElement("p")
        p.innerHTML = teamGeneratorOBJ.players[i].name + " " + teamGeneratorOBJ.players[i].age 
        displayer.appendChild(p)
    }
}

//Csapatok generálása
function createTeams(){
    //Megadja a csapatok számát az objektumba
    teamGeneratorOBJ.numberOfTeams = document.querySelector("#number-of-teams-container input").value

    generateCards()
}

//Szétosztott csapatok lekérése API-ból
function generateCards(){
    fetch('http://localhost:5149/api/Teams/', {
        method: 'POST',
        headers: { 'Content-Type' : 'application/json', },
        body: JSON.stringify(teamGeneratorOBJ)
    })
    .then(resp => resp.json())
    .then(data => {
        let cardDisplayer = document.getElementById("cards-container")
        for (let i = 0; i < data.length; i++) {
            cardDisplayer.appendChild(createCard("Team " + (i+1), data[i]))
        }
    });
}

//Csapatkártya generálása
function createCard(teamName, teamMembers){
    let cardDiv = document.createElement("div")
    let cardHeader = document.createElement("div")
    let cardBody = document.createElement("div")

    cardDiv.classList.add("card")
    cardDiv.style.flexBasis = "18rem"
    cardDiv.style.backgroundColor = random_bg_color()


    cardHeader.classList.add("card-header")
    cardHeader.innerHTML = teamName

    cardBody.classList.add("card-body")
    for (let i = 0; i < teamMembers.length; i++) {
        let p = document.createElement("p")
        p.innerHTML = teamMembers[i].name + " " + teamMembers[i].age
        cardBody.appendChild(p)
    }

    cardDiv.appendChild(cardHeader)
    cardDiv.appendChild(cardBody)

    return cardDiv
}

function random_bg_color() {
    // Generate random values for red, green, and blue components between 0 and 255.
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    // Construct the RGB color string.
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    
    return bgColor
}




