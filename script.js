// select the container
const container = document.getElementById('astros')

// run the fetch request
fetch('http://api.open-notify.org/astros.json')
.then((response) => {
    return response.json()
})
.then((json) => {
    //retriving the number of people in space from json
    container.innerHTML = `<h1>There are ${json.number} people in space right now</h1>`

    //iterate over each of the people in space
    json.people.forEach((person) => {
        container.innerHTML += `<p>${person.name} is on the ${person.craft}</p>`    
    });
})


