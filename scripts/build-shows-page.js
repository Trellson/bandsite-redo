const axioskey = "025267d9-c161-4ec6-bdfe-e1496a5bb384"


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
    showcase.classList.add("showcase__box")

    let dateLabel = document.createElement('label');
    dateLabel.innerText = "Date"
    showcase.appendChild(dateLabel);

    let date__actual = document.createElement('h4');
    date__actual.innerText = new Date(arr.timestamp).toLocaleDateString();
    showcase.appendChild(date__actual)

    let venueLabel = document.createElement('label');
    venueLabel.innerText = "Venue"
    showcase.appendChild(venueLabel);

  
    let venue__actual = document.createElement('h4');
    venue__actual.innerText = arr.place;
    showcase.appendChild(venue__actual);


    let location__Label = document.createElement('label');
    location__Label.innerText = "Location"
    showcase.appendChild(location__Label);

    let location__actual = document.createElement('h4');
    location__actual.innerText = arr.location;
    showcase.appendChild(location__actual);

    let shows__button = document.createElement('button');
    shows__button.classList.add("shows__button")
    shows__button.innerText = "Buy Tickets"

    showcase.appendChild(shows__button)

    shows.appendChild(showcase)

}

//response.data.forEach((shows) => {
  //  displayShows(shows);
//})

let buyTickets = document.querySelector("shows__button")

//buyTickets.addEventListener('submit', (event) => {
 //   event.preventDefault();
//})