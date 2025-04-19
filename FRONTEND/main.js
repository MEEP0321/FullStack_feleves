let teamGeneratorOBJ = {
    members : [],
    teamNumber: 0
}

function validateForm(){
    let inputs = document.querySelectorAll("#add-person-container input")
    let button = document.querySelector("#add-person-container button")
    let valid = true

    for (let i = 0; i < inputs.length; i++) {
        if(inputs[i].value.trim() == ""){
            valid = false
        }
    }

    if(valid){
        button.disabled = false
    }
    else{
        button.disabled = true
    }
}
