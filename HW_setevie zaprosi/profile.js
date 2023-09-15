document.addEventListener('DOMContentLoaded', async () => {
   const userCard = document.querySelector('#user-card');
   const userIdSpan = document.querySelector('#userId');
   const nameSpan = document.querySelector('#name');
   const usernameCardSpan = document.querySelector('#usernameCard');
   const emailCardSpan = document.querySelector('#emailCard');
   const phoneSpan = document.querySelector('#phone');
   const websiteSpan = document.querySelector('#website');

   function getQueryParams() {
      const queryParams = new URLSearchParams(window.location.search);
      return Object.fromEntries(queryParams.entries());
   }

   const queryParams = getQueryParams();

   if (queryParams.username && queryParams.email) {
      const username = queryParams.username;
      const email = queryParams.email;

     //zapros na poluchenie dannich
      try {
         const response = await fetch(`https://jsonplaceholder.typicode.com/users?username=${username}&email=${email}`);
         if (!response.ok) {
            throw new Error('Network response was not ok');
         }

         const userData = await response.json();

         if (userData.length === 0) {
            userCard.innerHTML = '<p1>User is not exist.</p1>';
         } else {
            const user = userData[0]; 
            userIdSpan.textContent = user.id;
            nameSpan.textContent = user.name;
            usernameCardSpan.textContent = user.username;
            emailCardSpan.textContent = user.email;
            phoneSpan.textContent = user.phone;
            websiteSpan.textContent = user.website;
// redaktirovanie website
            websiteSpan.addEventListener('blur', async () => {
               const newWebsite = websiteSpan.textContent;

               try {
                  const updateResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${user.id}`, {
                     method: 'PUT', // obnovlenie dannich
                     headers: {
                        'Content-Type': 'application/json',
                     },
                     body: JSON.stringify({ website: newWebsite }),// novoe znachenie na web
                  });

                  if (!updateResponse.ok) {
                     throw new Error('Network response was not ok');
                  }

                  console.log(`Website upgrade: ${newWebsite}`);
               } catch (error) {
                  
                  console.error('There was a problem with the fetch operation:', error);
               }
            });
         }
      } catch (error) {
       // obrabotka oshibok
         console.error('There was a problem with the fetch operation:', error);
      }
   } else {
      //esli nezadani parametri
      userCard.innerHTML = '<p1>Request parameters not specified.</p1>';
   }
});
document.addEventListener('DOMContentLoaded', () => {
   const searchButton = document.querySelector('#searchButton');

   searchButton.addEventListener('click', () => {
     // na stranicu search
      window.location.href = 'block.html'; 
   });
});