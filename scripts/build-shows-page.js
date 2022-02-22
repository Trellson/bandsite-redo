const axioskey = "f8e9facf-bec2-48cf-9f9a-008404c69cbe"



axios.get('https://project-1-api.herokuapp.com/showdates?api_key='+axioskey)
    .then(response => {
         displayHeader();
        response.data.forEach((shows) => {
            displayShows(shows);
            console.log(response.data)
        })
        
    })


const shows = document.querySelector(".shows__container");

function displayHeader() {
    let showsHeader = document.createElement('div')
    showsHeader.classList.add("shows__header")
    
    let dateHeader = document.createElement('h4')
    dateHeader.classList.add("shows__header--date")
    dateHeader.innerText = "DATE"
    showsHeader.appendChild(dateHeader)

    let venueHeader = document.createElement('h4')
    venueHeader.classList.add("shows__header--venue")
    venueHeader.innerText = "VENUE"
    showsHeader.appendChild(venueHeader)

    let locationHeader = document.createElement('h4')
    locationHeader.classList.add("shows__header--Location")
    locationHeader.innerText = "LOCATION"
    showsHeader.appendChild(locationHeader)

    shows.appendChild(showsHeader)
}



function displayShows(arr) {

    let showcase = document.createElement('div')
    showcase.classList.add("shows__showcase-box")

    let dateLabel = document.createElement('label');
    dateLabel.innerText = "Date"
    showcase.appendChild(dateLabel);

    let dateActual = document.createElement('h4');
    dateActual.classList.add("shows__showcase-box--dates")
    dateActual.innerText = new Date (Number(arr.date)).toDateString("en-US", {weekday: "short" ,month: 'short', day: "2-digit", year: "numeric"});
    showcase.appendChild(dateActual)


    let venueLabel = document.createElement('label');
    venueLabel.innerText = "Venue"
    showcase.appendChild(venueLabel);

  
    let venueActual = document.createElement('p');
    venueActual.classList.add("shows__showcase-box--venue")
    venueActual.innerText = arr.place;
    showcase.appendChild(venueActual);


    let locationLabel = document.createElement('label');
    locationLabel.innerText = "Location"
    showcase.appendChild(locationLabel);

    let locationActual = document.createElement('p');
    locationActual.classList.add("shows__showcase-box--location")
    locationActual.innerText = arr.location;
    showcase.appendChild(locationActual);

    let showsButton = document.createElement('button');
    showsButton.classList.add("shows__button")
    showsButton.innerText = "Buy Tickets"

    showcase.appendChild(showsButton)


    shows.appendChild(showcase)

}

let buyTickets = document.querySelector("shows__button")

buyTickets.addEventListener('submit', (event) => {
    event.preventDefault();
})