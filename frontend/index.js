document.addEventListener("DOMContentLoaded", () =>{
    displayTimeSlots();
})

const timeSlots = document.querySelector('.slots');
const bookingFormContainer = document.querySelector('.myForm');
const confirmMessageContainer = document.querySelector('.confirmation-message');
const bookedMeetings = document.querySelector('.meetings');

function displayTimeSlots() {
 axios.get('http://localhost:3000/get-slots')
  .then(res => {
    timeSlots.innerHTML = '';
    res.data.forEach(slot => {
        const li = document.createElement('li');
        li.textContent = `${slot.time} - Available Slots: ${slot.slotsAvailable}`;
        li.addEventListener('click', () => showBookingForm(slot.id));
        timeSlots.appendChild(li);
    });  
  })
  .catch(err => console.log(err));
}

function showBookingForm(slotId){
    bookingFormContainer.innerHTML = `
    <form id="bookingForm">
        <input type="hidden" id="slotId" name="slotId" value="${slotId}">
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
    // const details = {
    //     name:name,
    //     email:email
    // }
    bookMeeting(slotId,name,email);
 })
}

function bookMeeting(slotId,name,email){
 axios.patch(`http://localhost:3000/book-slot/${slotId}`, { name, email })
   .then(res =>{

   })
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