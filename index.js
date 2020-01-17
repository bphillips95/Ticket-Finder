const review_url = "http://localhost:3000/reviews"

const review_button = document.querySelector('#review-button')
let close_review_form_btn = document.querySelector('#close_form_btn')
// const review_form_submit = document.querySelector('#review-form')
let review_form = document.querySelector('#review-form')


// Review Event Listener


// Closing the review form 
close_review_form_btn.addEventListener('click', e=> {
       review_form.style ='display:none;'
})

// Brining up the review form 
review_button.addEventListener('click', e=>{

    review_form.style = 'display:block;'
    
    window.scroll(top);
})

// New comment
review_form.addEventListener('submit', e => {
    // debugger
    e.preventDefault()
    let new_comment = e.target.user_review.value
    let new_user = e.target.user_name.value
    let new_rating = e.target.rating_dropdown.value

    console.log('dont refresh')
    // POST fetch for new comment 
    fetch(review_url, {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({
            rating: new_rating,
            content: new_comment,
            user_name : new_user
            // rating: 
        })
        })
        .then(res => res.json())
        .then(obj => {
            console.log(obj)
        })

})







