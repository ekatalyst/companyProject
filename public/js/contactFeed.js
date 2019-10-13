
console.log('Script Loaded!')

function viewContactAndFeed(id){

    //getting element
    let contact = document.getElementById('contact')
    let feedback = document.getElementById('feedback')
    let contactBt = document.getElementById('viewContactButton')
    let feedBt = document.getElementById('viewFeedButton')

    if (id === 'feed') {
        contact.style.display = 'none'
        feedback.style.display = 'block'
        contactBt.style.background = 'none'
        contactBt.style.color = '#fafafa'
        feedBt.style.background = '#fafafa'
        feedBt.style.color = '#3b3b3b'
    }

    if (id === 'con') {
        feedback.style.display   = 'none'
        contact.style.display = 'block'
        contactBt.style.background = '#fafafa'
        contactBt.style.color = '#3b3b3b'
        feedBt.style.background = 'none'
        feedBt.style.color = '#fafafa'
    }

}
