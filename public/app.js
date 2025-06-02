     const form = document.getElementById('info');

      function confirmDetailsModal(date, time, people, email, phone, comments){
      const detailsModal = document.getElementById("confirmDetailsModal");

      detailsModal.querySelector("#date").innerText = date;
      detailsModal.querySelector("#time").innerText = time;
      detailsModal.querySelector("#people").innerText = people;
      detailsModal.querySelector("#email").innerText = email;
      detailsModal.querySelector("#phone").innerText = phone;
      detailsModal.querySelector("#comments").innerText = comments;

      detailsModal.classList.remove("hidden");
     }

     form.addEventListener('submit', function(event) {
       event.preventDefault();
       const formData = new FormData(form);

       const date = formData.get('date');
       const time = formData.get('time');
       const people = formData.get('people');
       const email = formData.get('email');
       const phone = formData.get('phone');
       const comments = formData.get('comments');

       console.log('Date:', date);
       console.log('Time:', time);
       console.log('People:', people);
       console.log('Email:', email);
       console.log('Phone:', phone);
       console.log('Comments:', comments);

       confirmDetailsModal(date, time, people, email, phone, comments);
     });

   

    
