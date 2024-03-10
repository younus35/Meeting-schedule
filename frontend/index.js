document.addEventListener("DOMContentLoaded", () =>{
    //SLOTS DATABASE axios get
})

const timeSlots = document.querySelector('.slots');
const bookingFormContainer = document.querySelector('.myForm');
const confirmMessageContainer = document.querySelector('.confirmation-message');
const bookedMeetings = document.querySelector('.meetings');

function displayTimeSlots() {
    timeSlots.innerHTML = '';
    //available slots for loop
    timeSlots.appendChild()//child name
}

function showBookignForm(time){
    bookingFormContainer.innerHTML = `
    <form id="bookingForm">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required><br>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required><br>
        <button type="submit">Book</button>
    </form>
`;
 const bookingForm = document.getElementById('bookingForm');
 bookingForm.addEventListener('submit', (event) =>{
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const details = {
        name:name,
        email:email
    }
    //axios post
    bookMeeting(time,name,email);
 })
}

function bookMeeting(time,name,email){
   //const slot  get slot form db and check slot.time === time
   if(slot.slots > 0){
      //decrease the slot 
      displayTimeSlots();
      //displayBookedMeeting(name,time,meetinglink)
   }else {
    alert('there are no available slots');
   }
}

function displayBookedMeeting(name,time,meetinglink) {
    bookedMeetings 
}

function cancelMeeting(time){
    //increment the slot
}