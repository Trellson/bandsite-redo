const axioskey = "025267d9-c161-4ec6-bdfe-e1496a5bb384"


axios.get('https://project-1-api.herokuapp.com/comments?api_key='+axioskey)
    .then(response => {
        response.data.forEach((comment) => {
            displayComment(comment)
        })
    })

const commentArea = document.querySelector(".comments");



function displayComment(arr) {

        let photoDiv = document.createElement('div');
        photoDiv.classList.add("comments__photo")

        let photo = document.createElement('img');
        photo.src ="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSPooTK6tykHp62uyKMjDgy3QldvMXamui6UYAzwrObXnZ0bPxlbiMVOSo2-Q52qh-jYPdLfavJeuayk_sehK7sVWockSNe-m39-uBIm4Uq&usqp=CAc";
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
        commentDate.innerText = new Date(arr.timestamp).toLocaleDateString();
        commentDate.classList.add("comments__date")
        commentHeading.appendChild(commentDate)

        let commentText = document.createElement('p')
        commentText.innerText = arr.comment
        commentText.classList.add("comments__text")
        comment.appendChild(commentText)

        let commentChild = document.createElement('div');
        commentChild.classList.add("comments__div")
        commentChild.appendChild(photoDiv);
        commentChild.appendChild(comment);

        commentArea.appendChild(commentChild);

}    



let formCta = document.querySelector(".form__body")

formCta.addEventListener('submit', (event) => {
    event.preventDefault();

    let commentName = event.target.Name.value;
    let commentText = event.target.Comment.value;

    let commentDiv= displayComment2({
        name: commentName,
        date: 'xx-xx-xxxx',
        comment: commentText
    })
    commentArea.prepend(commentDiv)

})



function displayComment2(arr) {

    let photoDiv = document.createElement('div');
    photoDiv.classList.add("comments__photo")

    let photo = document.createElement('img');
    photo.src ="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSPooTK6tykHp62uyKMjDgy3QldvMXamui6UYAzwrObXnZ0bPxlbiMVOSo2-Q52qh-jYPdLfavJeuayk_sehK7sVWockSNe-m39-uBIm4Uq&usqp=CAc";
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

    let commentChild = document.createElement('div');
    commentChild.classList.add("comments__div")
    commentChild.appendChild(photoDiv);
    commentChild.appendChild(comment);

    return commentChild

}  