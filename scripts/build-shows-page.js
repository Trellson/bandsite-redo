const showsArray =[
{
    dates: "Mon Sept 06 2021", 
    venue: "Ronald Lane", 
    location: "San Francisco, CA"
},
{
    dates: "Tue Sept 21 2021", 
    venue: "Pier 3 East",  
    location: "San Francisco, CA"
},
{
    dates: "Fri Oct 15 2021", 
    venue: "View Lounge",
    location: "San Francisco, CA" 
},
{
    dates: "Sat Nov 06 2021",   
    venue: "Hyatt Agency",
    location: "San Francisco, CA"
    
},
{
    dates: "Fri Nov 26 2021",
    venue: "Moscow Center",
    location: "San Francisco, CA" 
},
{
    dates: "Wed Dec 15 2021", 
    venue: "Press Club",
    location: "San Francisco, CA"
}, 
]

const shows = document.querySelector(".shows__container");

function displayShows(arr) {

    let date = document.createElement('div')

    let dateLabel = document.createElement('label');
    dateLabel.innerTEXT = "Date"
    date.appendChild(dateLabel);

    let date__actual = document.createElement('h4');
    date__actual.innerText = arr.date;
    date.appendChild(date__actual)

    let venue = document.createElement('div')

    let venueLabel = document.createElement('label');
    venueLabel.innerTEXT = "Venue"
    venue.appendChild(venueLabel);

    let venue__actual = document.createElement('h4');
    venue__actual.innerText = arr.venue;
    venue.appendChild(venue__actual);

    let location = document.createElement('div')

    let locationLabel = document.createElement('label');
    locationLabel.innerTEXT = "Location"
    location.appendChild(venueLabel);

    let location__actual = document.createElement('h4');
    location__actual.innerText = arr.location;
    location.appendChild(location__actual);

    let shows__button = document.createElement('button');
    shows__button.classList.add("shows__button")
    shows__button.innerText = "Buy Tickets"

    shows.appendChild(date);
    shows.appendChild(venue);
    shows.appendChild(location);
    shows.appendChild(shows__button)

}

showsArray.forEach((shows) => {
    displayShows(shows);
})

let buyTickets = document.querySelector("shows__button")

buyTickets.addEventListener('submit', (event) => {
    event.preventDefault();
})