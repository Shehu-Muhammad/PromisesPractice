async function getCharacter() {
    try {
        let response = await axios.get("https://rickandmortyapi.com/api/character/?page=19");
        let results = response.data.results;
        for(let index = 0; index < results.length; index++) {
            let id = JSON.stringify(results[index].id);
            let name = JSON.stringify(results[index].name);
            let status = JSON.stringify(results[index].status);
            let species = JSON.stringify(results[index].species);
            let type = JSON.stringify(results[index].type);
            let gender = JSON.stringify(results[index].gender);
            
            addCharacter(id, name, status, species, type, gender);
            }
            count++;
        }
    catch (error) {
        console.log(`Error: ${error}`);
    }
}

function addCharacter(id, name, status, species, type, gender) {
    const characterList = document.getElementById("characters");
    const newLi = document.createElement("li");
    const newContent = document.createTextNode(`
                                                id: ${id}
                                                name: ${name} 
                                                status: ${status} 
                                                species: ${species} 
                                                type: ${type} 
                                                gender: ${gender}
                                                `);
    newLi.appendChild(newContent);
    characterList.appendChild(newLi);
}

getCharacter();