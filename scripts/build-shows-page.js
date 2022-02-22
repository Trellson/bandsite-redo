const axioskey = "f8e9facf-bec2-48cf-9f9a-008404c69cbe"


axios.get('https://project-1-api.herokuapp.com/showdates?api_key='+axioskey)
    .then(response => {
        response.data.forEach((shows) => {
            displayShows(shows);
            console.log(response.data)
        })
      
    })


const shows = document.querySelector(".shows__container");

function displayShows(arr) {

    let showcase = document.createElement('div')
    showcase.classList.add("shows__showcase-box")

    let dateLabel = document.createElement('label');
    dateLabel.innerText = "Date"
    showcase.appendChild(dateLabel);

    let date__actual = document.createElement('h4');
    date__actual.classList.add("shows__showcase-box--dates")
    date__actual.innerText = new Date (Number(arr.date)).toDateString("en-US", {weekday: "short" ,month: 'short', day: "2-digit", year: "numeric"});
    showcase.appendChild(date__actual)


    let venueLabel = document.createElement('label');
    venueLabel.innerText = "Venue"
    showcase.appendChild(venueLabel);

  
    let venue__actual = document.createElement('p');
    venue__actual.classList.add("shows__showcase-box--venue")
    venue__actual.innerText = arr.place;
    showcase.appendChild(venue__actual);


    let location__Label = document.createElement('label');
    location__Label.innerText = "Location"
    showcase.appendChild(location__Label);

    let location__actual = document.createElement('p');
    location__actual.classList.add("shows__showcase-box--location")
    location__actual.innerText = arr.location;
    showcase.appendChild(location__actual);

    let shows__button = document.createElement('button');
    shows__button.classList.add("shows__button")
    shows__button.innerText = "Buy Tickets"

    showcase.appendChild(shows__button)

    shows.appendChild(showcase)

}

let buyTickets = document.querySelector("shows__button")

buyTickets.addEventListener('submit', (event) => {
    event.preventDefault();
})