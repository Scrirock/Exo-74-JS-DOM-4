let libButton = document.getElementById('lib-button');
let noun = document.getElementById("noun");
let adjective = document.getElementById("adjective");
let name = document.getElementById("person");



function libIt() {

    let storyDiv = document.getElementById("story");
    storyDiv.innerHTML = name.value + " est " + adjective.value + " et a dans ca main un " + noun.value;
}

libButton.addEventListener('click', libIt);








