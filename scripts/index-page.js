const commmentArray =[
    {
        name: "Connor Walton",
        date: "02/17/2021",
        comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains." 
    },
    {
        name: "Emilie Beach",
        date: "01/09/2021",
        comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."
    },
    {
        name: "Miles Ascota",
        date: "12/20/2020",
        comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."
    },
]



const commentArea = document.querySelector(".comments");


function displayComments(arr) {

        let photoDiv = document.createElement('div');
        photoDiv.innerHTML = "";
        photoDiv.classList.add("comments__photo")

        let photo = document.createElement('img').src ="";
        photoDiv.appendChild(photo)

        let comment = document.createElement('div');
        comment.classList.add("comments__containier")

        let commentHeading = document.createElement('div');
        commentHeading.classList.add("comments__heading--flex")
        comment.appendChild(commentHeading)

        let commentName = document.createElement('h4');
        commentName.innerText = arr.name
        commentName.classList.add("comments__name")
        commentHeading.appendChild(commentName)

        let commentDate = document.createElement('p');
        commentDate.innerText = arr.date
        commentDate.classList.add("comments__date")
        commentHeading.appendChild(commentDate)

        let commentText = document.createElement('p')
        commentText.innerText = arr.comment
        commentText.classList.add("comments__text")
        comment.appendChild(commentText)

        commentArea.appendChild(photoDiv);
        commentArea.appendChild(comment);
    
}    

commmentArray.forEach((comment) => {
    displayComments(comment);
})