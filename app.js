function bookPakage (packageName){
    const destination = document.getElementById('book-destination');
    if(packageName.toLowerCase().includes('hunza')){
        destination.value = "hunza-valley";
    }
    else if(packageName.toLowerCase().includes('skardu')){
        destination.value = "skardu";
    }
    else if (packageName.toLowerCase().includes("swat")){
        destination.value = "swat"
    }
    document.getElementById("contact").scrollIntoView({
        behavior:"smooth"
    })

}

const bookingForm = document.getElementById("booking-form");
bookingForm.addEventListener("submit" ,function(event){
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
        const destination = document.getElementById('booking-destination').value.trim();
          const message = document.getElementById('message').value.trim();

          if (name ===""){
            alert("please enter your name");
            return;
          }

                    if (email ===""){
            alert("please enter your email");
            return;
          }

                    if (destination ===""){
            alert("please select your destination");
            return;
          }

                    if (message ===""){
            alert("please write your message");
            return;
          }

            alert(
        "Booking Request Submitted Successfully!\n\n" +
        "Name: " + name + "\n" +
        "Email: " + email + "\n" +
        "Destination: " + destination
    );

        bookingForm.reset();
});


const allLinks = document.querySelectorAll('a[href^="#"]');

allLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") {
            return;
        }

        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            event.preventDefault();

            targetSection.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});